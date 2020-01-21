EPUBJS.reader.ControlsController = function (book) {
    var reader = this;
    var rendition = this.rendition;

    var $store = $("#store"),
            $fullscreen = $("#fullscreen"),
            $fullscreenicon = $("#fullscreenicon"),
            $cancelfullscreenicon = $("#cancelfullscreenicon"),
            $slider = $("#slider"),
            $main = $("#main"),
            $sidebar = $("#sidebar"),
            $settings = $("#setting"),
            $bookmark = $("#bookmark"),
            $zoom = $("#show-Zoom"),
            $layoutSettings = $("#show-Layout");
    var elem = document.documentElement;


    $slider.on("click", function () {
        if (reader.sidebarOpen) {
            reader.SidebarController.hide();
            $slider.addClass("icon-menu");
            $slider.removeClass("icon-right");
        } else {
            reader.SidebarController.show();
            $slider.addClass("icon-right");
            $slider.removeClass("icon-menu");
        }
    });

    $fullscreen.on("click", function () {
        if (!document.fullscreenElement && !document.msFullscreenElement)
            openFullscreen();
        else 
            closeFullscreen();
    });

    $(document).on("fullscreenchange mozfullscreenchange webkitfullscreenchange msfullscreenchange MSFullscreenChange", function () {
        $fullscreen.toggleClass("icon-resize-full icon-resize-small");
        setTimeout(function() {
            $("#main").focus();
        }, 500);
    });


    $(document).keydown(function (e) {
        //e.preventDefault();
        switch (e.keyCode) {
            //esc
            case 27:
                if (document.fullscreenElement || document.msFullscreenElement) {
                    $fullscreen.trigger('click');
                }
                break;
                //F11
            case 122:
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
                if(browserType !== "IE")
                    $fullscreen.trigger('click');
                
                break;
        }
    });
    /* Function to open fullscreen mode */
    function openFullscreen() {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem = window.top.document.body; //To break out of frame in IE
            elem.msRequestFullscreen();
        }
    }

    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            window.top.document.msExitFullscreen();
        }
    }
    /*
     
     
     if(typeof screenfull !== 'undefined') {
     
     $fullscreen.on("click", function() {
     screenfull.toggle($('#container')[0]);
     });
     
     if(screenfull.raw) {
     document.addEventListener(screenfull.raw.fullscreenchange, function() {
     fullscreen = screenfull.isFullscreen;
     if(fullscreen) {
     $fullscreen
     .addClass("icon-resize-small")
     .removeClass("icon-resize-full");
     } else {
     $fullscreen
     .addClass("icon-resize-full")
     .removeClass("icon-resize-small");
     }
     });
     }
     
     }
     */






    //show layout setting page
    $layoutSettings.on("click", function () {
        reader.LayoutController.show();
    });

    $settings.on("click", function () {
        reader.SettingsController.show();
    });



    rendition.on('relocated', function (location) {
        var cfi = location.start.cfi;
        var cfiFragment = "#" + cfi;


        reader.currentLocationCfi = cfi;

        // Update the History Location
        if (reader.settings.history &&
                window.location.hash != cfiFragment) {
            // Add CFI fragment to the history
            history.pushState({}, '', cfiFragment);
        }
    });

    return {

    };
};
