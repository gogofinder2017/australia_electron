var EPUBJS = EPUBJS || {};
EPUBJS.reader = {};
EPUBJS.reader.plugins = {}; //-- Attach extra Controllers as plugins (like search?)

(function(root, $) {
        
	var previousReader = root.ePubReader || {};

	var ePubReader = root.ePubReader = function(path, options) {
		return new EPUBJS.Reader(path, options);
	};
        
	//exports to multiple environments
	if (typeof define === 'function' && define.amd) {
		//AMD
		define(function(){ return Reader; });
	} else if (typeof module != "undefined" && module.exports) {
		//Node
		module.exports = ePubReader;
	}

})(window, jQuery);



EPUBJS.Reader = function(bookPath, _options) {
	var reader = this;
	var book;
	var plugin;
	var $viewer = $("#viewer");
	var search = window.location.search;
	var parameters;
        
        
        
	this.settings = EPUBJS.core.defaults(_options || {}, {
		bookPath : bookPath,
		restore : false,
		reload : false,
		bookmarks : undefined,
		annotations : undefined,
		contained : undefined,
		bookKey : undefined,
		styles : undefined,
		sidebarReflow: false,
		generatePagination: false,
		history: true
	});
        
        if(sessionStorage.setVertical === "true") {
            reader.setVertical(true);
        } else if(sessionStorage.setVertical === "false"){
            reader.setVertical(false);
        } else {
            reader.setVertical('none');
        }
        sessionStorage.clear();
	// Overide options with search parameters
	if(search) {
		parameters = search.slice(1).split("&");
		parameters.forEach(function(p){
			var split = p.split("=");
			var name = split[0];
			var value = split[1] || '';
			reader.settings[name] = decodeURIComponent(value);
		});
	}

	this.setBookKey(this.settings.bookPath); //-- This could be username + path or any unique string

	if(this.settings.restore && this.isSaved()) {
		this.applySavedSettings();
	}

	//** by RDD
	// show writing mode turning text
	if(this.settings.isChangeWriting == true){
		$("#changeText").show();
	}else{
		$("#changeText").hide();
	}
	this.settings.isChangeWriting = false;
	//** by RDD

	this.settings.styles = this.settings.styles || {
		fontSize : 1,//"100%",
		lineHeight : 1//"100%"
	};

	//reset fontSize and lineHeight
	this.settings.styles.fontSize = 1;//"100%";
	this.settings.styles.lineHeight = 1;//"100%";
	//console.log(this.settings.bookPath)
        //this.book = new ePub(this.settings.bookPath, this.settings);
        //book = this.book;
        
	this.book = book = new ePub(this.settings.bookPath, this.settings);

	this.offline = false;
	this.sidebarOpen = false;
	if(!this.settings.bookmarks) {
		this.settings.bookmarks = [];
	}

	if(!this.settings.annotations) {
		this.settings.annotations = [];
	}

	if(this.settings.generatePagination) {
		book.generatePagination($viewer.width(), $viewer.height());
	}

            
	this.rendition = book.renderTo("viewer", {
		//minSpreadWidth: 1600,
		ignoreClass: "annotator-hl",
		width: "100%",
		height: "100%",
                flow: "paginated",
		//** by RDD
		//set writing mode (vertical or horizontal)
		isVerticalWriting: (this.settings.isVerticalWriting)?this.settings.isVerticalWriting:false
	});
        
	if(this.settings.previousLocationCfi) {
		this.displayed = this.rendition.display(this.settings.previousLocationCfi);
	} else {
		this.displayed = this.rendition.display();
	}

	// this.displayed.then(function () {
	// 	console.log("Displayed");
	// }, function (reason) {
	// 	console.log("Fail: " + reason);
	// });

        
	book.ready.then(function () {
		check_position();
		reader.ReaderController = EPUBJS.reader.ReaderController.call(reader, book);
		reader.ControlsController = EPUBJS.reader.ControlsController.call(reader, book);
		reader.SidebarController = EPUBJS.reader.SidebarController.call(reader, book);
		reader.LayoutController = EPUBJS.reader.LayoutController.call(reader, book);
		
		window.addEventListener("hashchange", this.hashChanged.bind(this), false);

		this.rendition.on("keydown", reader.ReaderController.arrowKeys.bind(this));
		this.rendition.on("selected", this.selectedRange.bind(this));
		
	}.bind(this)).then(function() {
		//reader.ReaderController.hideLoader();
	}.bind(this));

	// Call Plugins
	for(plugin in EPUBJS.reader.plugins) {
		if(EPUBJS.reader.plugins.hasOwnProperty(plugin)) {
			reader[plugin] = EPUBJS.reader.plugins[plugin].call(reader, book);
		}
	}
	

	book.loaded.metadata.then(function(meta) {
            
		reader.MetaController = EPUBJS.reader.MetaController.call(reader, meta);
	});

	book.loaded.navigation.then(function(navigation) {
		reader.TocController = EPUBJS.reader.TocController.call(reader, navigation);
	});

	book.on('openFailed', function (error) {	
                console.log(error)
		alert("無法開啟書本，請檢查檔案是否受損。"/*error*/);	
	});
	
	window.addEventListener("beforeunload", this.unload.bind(this), false);

	
	return this;
};

EPUBJS.Reader.prototype.setVertical = function (isVertical) {
	this.settings.isVerticalWriting = isVertical;
};

EPUBJS.Reader.prototype.isChangeWriting = function (isChangeWriting) {
	this.settings.isChangeWriting = isChangeWriting;
};



//-- Settings
EPUBJS.Reader.prototype.setBookKey = function(identifier){
	if(!this.settings.bookKey) {
		this.settings.bookKey = "epubjsreader:" + EPUBJS.VERSION + ":" + window.location.host + ":" + identifier;
	}
	return this.settings.bookKey;
};

//-- Checks if the book setting can be retrieved from localStorage
EPUBJS.Reader.prototype.isSaved = function(bookPath) {
	var storedSettings;

	if(!localStorage) {
		return false;
	}

	storedSettings = localStorage.getItem(this.settings.bookKey);

	if(storedSettings === null) {
		return false;
	} else {
		return true;
	}
};

EPUBJS.Reader.prototype.removeSavedSettings = function() {
	if(!localStorage) {
		return false;
	}

	localStorage.removeItem(this.settings.bookKey);
};

EPUBJS.Reader.prototype.applySavedSettings = function() {
		var stored;

		if(!localStorage) {
			return false;
		}

	try {
		stored = JSON.parse(localStorage.getItem(this.settings.bookKey));
	} catch (e) { // parsing error of localStorage
		return false;
	}

		if(stored) {
			// Merge styles
			if(stored.styles) {
				this.settings.styles = EPUBJS.core.defaults(this.settings.styles || {}, stored.styles);
			}
			// Merge the rest
			this.settings = EPUBJS.core.defaults(this.settings, stored);
			return true;
		} else {
			return false;
		}
};

EPUBJS.Reader.prototype.saveSettings = function(){
	if(this.book) {
		this.settings.previousLocationCfi = this.rendition.currentLocation().start.cfi;
	}

	if(!localStorage) {
		return false;
	}

	localStorage.setItem(this.settings.bookKey, JSON.stringify(this.settings));
};

EPUBJS.Reader.prototype.unload = function(){

	//this.book.destroy();
	if(this.settings.restore && localStorage) {
		this.saveSettings();
	}
};


EPUBJS.Reader.prototype.hashChanged = function(){
	var hash = window.location.hash.slice(1);

	this.rendition.display(hash);

};

EPUBJS.Reader.prototype.selectedRange = function(cfiRange){
	var cfiFragment = "#"+cfiRange;

	// Update the History Location
	if(this.settings.history &&
			window.location.hash != cfiFragment) {
		// Add CFI fragment to the history
		history.pushState({}, '', cfiFragment);
		this.currentLocationCfi = cfiRange;
	}
};

	
//-- Enable binding events to reader
RSVP.EventTarget.mixin(EPUBJS.Reader.prototype);
