EPUBJS.reader.TocController = function(toc) {
	var $firstPage = $("#firstPage"),
			$lastPage = $("#lastPage");
	
	var book = this.book;
	var rendition = this.rendition;

	var $list = $("#tocView");/*,
			docfrag = document.createDocumentFragment();*/

	var currentChapter = false;
        let number = {
            toc:0,
            pagelists:0,
            landmarks:0
        };
                
	var generateTocItems = function(toc, level) {
		var container = document.createElement("ul");
		if(!level) level = 1;
		toc.forEach(function(chapter) {
			var listitem = document.createElement("li"),
					link = document.createElement("a"),
					toggle = document.createElement("a");

			var subitems;
			listitem.id = "toc-"+ (chapter.id || number.toc);
                        number.toc++;
			listitem.classList.add('list_item');

			link.textContent = chapter.label;
			link.href = chapter.href;

			link.classList.add('toc_link');

			listitem.appendChild(link);
                        
			if(chapter.subitems && chapter.subitems.length > 0) {
				level++;
				subitems = generateTocItems(chapter.subitems, level);
				toggle.classList.add('toc_toggle');
                                listitem.classList.add('toc_nest');
                                
				listitem.insertBefore(toggle, link);
				listitem.appendChild(subitems);
			}
                        
			container.appendChild(listitem);
                        
		});
		return container;
	};
        
        var generateOtherItems = function(toc, cate) {
                if(toc[cate].length === 0)
                    return;
		var container = document.createElement("ul");
                
		toc[cate].forEach(function(chapter) {
			var listitem = document.createElement("li"),
					link = document.createElement("a");

			listitem.id = (cate === 'pagelists' ? "pl-" : "lm-") + (chapter.id || number[cate]);
                        number[cate]++;
			listitem.classList.add('list_item');

			link.textContent = chapter.label;
			link.href = chapter.href;

			link.classList.add('toc_link', cate === 'pagelists' ? "pl_link" : "lm_link");

			listitem.appendChild(link);
			
                       
			container.appendChild(listitem);
                        
		});
		return container;
	};

	var onShow = function() {
		$list.show();
	};

	var onHide = function() {
		$list.hide();
	};

	var chapterChange = function(e) {
		var id = e.id,
				$item = $list.find("#toc-"+id),
				$current = $list.find(".currentChapter"),
				$open = $list.find('.openChapter');
                
		if($item.length){

			if($item != $current && $item.has(currentChapter).length > 0) {
				$current.removeClass("currentChapter");
			}

			$item.addClass("currentChapter");

			// $open.removeClass("openChapter");
			$item.parents('li').addClass("openChapter");
		}
	};

	rendition.on('renderered', chapterChange);

	var tocitems = (toc.toc.length > 0) ? generateTocItems(toc) : undefined;
        let plitems = generateOtherItems(toc, 'pagelists');
        let lmitems = generateOtherItems(toc, 'landmarks');
        
        if(tocitems && (number.pagelists > 0 || number.landmarks > 0)) {
            tocitems = rebuild_link('toc', true);
        }
        if(plitems) {
            plitems = rebuild_link('pagelists', (number.toc === 0));
        }
        if(lmitems) {
            lmitems = rebuild_link('landmarks', (number.toc === 0 && number.pagelists === 0));
        }
//	docfrag.appendChild(tocitems);
	$list.append(tocitems, plitems, lmitems/*docfrag*/);
        
        
	$list.find(".toc_link").on("click", function(event){
            var url = this.getAttribute('href');
            if(url.indexOf('../') > -1) {
                url = url.slice(url.indexOf('/') + 1);
            }
            let currentHref = rendition.location.start.href;
            event.preventDefault();
            viewer_hide(function() {
			//-- Provide the Book with the url to show
			//   The Url must be found in the books manifest
			rendition.display(url);
                        if(readType === 'reflowable' && (level.fontsize !== 1 || level.lineheight !== 1) && url.indexOf(currentHref) < 0) {
                            epubContainer_hide();
                            setTimeout(function() {
                                rendition.display(url);
                                epubContainer_show();
                            }, (browserType === 'IE') ? 800:500);
                        }
			$list.find(".currentChapter")
					.addClass("openChapter")
					.removeClass("currentChapter");

			$(this).parent('li').addClass("currentChapter");
            });
            /*
			var url = this.getAttribute('href');
			event.preventDefault();

			//-- Provide the Book with the url to show
			//   The Url must be found in the books manifest
			rendition.display(url);

			$list.find(".currentChapter")
					.addClass("openChapter")
					.removeClass("currentChapter");

			$(this).parent('li').addClass("currentChapter");
*/
	});
        
	$list.find(".toc_toggle, .link_title").on("click", function(event){
			var $el = $(this).parent('li'),
					open = $el.hasClass("openChapter"),
                                        title = $(this).hasClass("toc_toggle_title") || $(this).hasClass("link_title");

			event.preventDefault();
                        if(title) {
                            $("#tocView").children().children(".list_item").removeClass("openChapter");
                        }
			if(open){
				$el.removeClass("openChapter");
			} else {
				$el.addClass("openChapter");
			}
	});
        
        function rebuild_link(cate, open) {
            let link_contnet = (cate === 'toc' ? tocitems : cate === 'pagelists' ? plitems : lmitems).outerHTML;
            let link_name = (cate === 'toc') ? '目錄' : (cate === 'pagelists') ? '頁面清單' : '結構目錄';
            let $new_ul = $("<ul></ul>");
            let $target_link = $("<li></li>").html("<a class='toc_toggle toc_toggle_title'></a><a id='my_" + cate + "' class='link_title' href='#'>" + link_name + "</a>");
            
            $target_link.addClass('list_item ' + (open? 'openChapter':''));
            $target_link.append(link_contnet)
            $new_ul.append($target_link);
            
            return $new_ul[0];
        }

	return {
		"show" : onShow,
		"hide" : onHide
	};
};
