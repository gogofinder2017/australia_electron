EPUBJS.reader.plugins.SearchController = function (Book) {
    var reader = this;
    let rendition = this.rendition;
    let highlight_timeout;

    var $searchBox = $("#searchBox"),
            $searchResults = $("#searchResults"),
            $searchView = $("#searchView"),
            $showSearch = $("#show-Search");

    var searchShown = false;

    var highlightCfiArr = [];//array to store highlight search cfi

    var onShow = function () {
        query();
        searchShown = true;
        $searchView.addClass("shown");
    };

    var onHide = function () {
        searchShown = false;
        $searchView.removeClass("shown");
    };


    //click search button
    $showSearch.on("click", function (e) {
        query();
    });


    //find words in whole book
    var doSearch = function (q) {
        return Promise.all(
                Book.spine.spineItems.map(function (item) {
                    return item.load(Book.load.bind(Book)).then(item.find.bind(item, q)).finally(item.unload.bind(item));
                })
                ).then(function (results) {
            return Promise.resolve([].concat.apply([], results))
        });
    };


    //clear book highlights
    var clearAllHighlights = function () {
        while (highlightCfiArr.length != 0) {
            var cfi = highlightCfiArr.pop();
            // console.log("clear:" + cfi);
            reader.rendition.annotations.remove(cfi, "highlight");
        }
    };


    //start search action
    var query = function (reload, cb) {
        var q = $searchBox.val();
        if (q == '') {
            if (typeof cb === 'function')
                cb();
            return;
        }
        if (!reload) {
            //clear previous search result and show "searching..." message
            $searchResults.empty();
            $searchResults.append("<li><p>Searching...</p></li>");
        }

        doSearch(q).then(function (results) {
            $searchResults.empty(); //clear "searching..." message

            //clear previous search highlights
            clearAllHighlights();


            //show message if no search result
            if (results.length == 0) {
                $searchResults.append("<li><p>No Results Found</p></li>");
                if (typeof cb === 'function')
                    cb();
                return;
            }


            let item = "";
            //show all search results in sidebar
            //and highlight search results in whole book
            results.forEach(function (result) {
                item += "<li><a href='" + Book.url.href + "' data-cfi='" + result.cfi + "'><span>" + result.excerpt + "</span></a></li>\n";
                if (browserType !== "IE") {
                    reader.rendition.annotations.highlight(result.cfi);
                }
                highlightCfiArr.push(result.cfi);

            });
            $searchResults.append(item);
            //go to search word location page
            $("[data-cfi]").on("click", function (e) {
                var $this = $(this),
                        cfi = $this.data("cfi");
                e.preventDefault();
                viewer_hide(function () {
                    Book.rendition.display(cfi);
                    display_cfi = cfi;
                    if(readType === 'reflowable' && (level.fontsize !== 1 || level.lineheight !== 1)) {
                        epubContainer_hide();
                        setTimeout(function() {
                            Book.rendition.display(cfi);
                            epubContainer_show();
                        }, (browserType === 'IE') ? 800:500);
                    }
                });
            });

            if (typeof cb === 'function')
                cb();

        });

    };

    //press enter to search    origin event:search
    $searchBox.on(/*search */"keydown", function (e) {
        if (e.keyCode !== 13)
            return;
        var q = $searchBox.val();

        //-- SearchBox is empty or cleared
        if (q == '') {
            $searchResults.empty();
            // if(reader.SidebarController.getActivePanel() == "Search") {
            // 	reader.SidebarController.changePanelTo("Toc");
            // }
            //
            clearAllHighlights();
            return;
        }

        if (reader.SidebarController.getActivePanel() != "Search") {
            reader.SidebarController.changePanelTo("Search");
        } else {
            query();
        }
        e.preventDefault();
    });

    return {
        "show": onShow,
        "hide": onHide,
        "query": query
    };

};
