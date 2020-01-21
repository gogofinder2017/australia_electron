/**
 * Created by ABC on 2019/9/11.
 */  
let location_href_font, location_href_lineH;
let level = {
    lineheight: 1,
    fontsize: 1
};
let fadeIn_dur = 300;
EPUBJS.reader.LayoutController = function () {
    var reader = this;
    var rendition = this.rendition;
    var $layoutSettingPage = $("#layout-settings-modal"),
            $overlay = $(".overlay"),
            $zoom = $("#zoom"),
            //writingMode
            $vertical = $("#vertical"), $horizontal = $("#horizontal"),
            $fontSizeSetting = $("#fontSizeSetting"),
            $fontFamilySetting = $("#fontFamilySetting"),
            $backgroundThemeSetting = $("#backgroundThemeSetting"),
            $lineHeight = $("#lineHeight"),
            $viewer = $("#viewer"),
            $searchBox = $("#searchBox");
    let $moving_Content = $("#moving-Content");
    let dur_hide = 200,
            dur_show = 200;
    let setting_timeout, resetZoom_timeout;
    let lastPage_cfi = reader.book.spine.items[reader.book.spine.length - 1].cfiBase;
    var IsPC = function () {
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    };
    let event_down = (IsPC()) ? 'mousedown' : 'touchstart',
            event_move = (IsPC()) ? 'mousemove' : 'touchmove',
            event_up = (IsPC()) ? 'mouseup' : 'touchend';

    $('#fontSmall').prop('disabled', true);
    $('#lineHeightSmall').prop('disabled', true);

    var isMoving = false;
    var prevPos = {};

    createViewerMoveArea();

    var $view_move_area = $("#view-move-area");
    $view_move_area.css("visibility", "hidden");

    /*
     $("#viewer iframe").on('mousedown', function () {
     console.log('mouse down triggered');
     });
     
     */
    $view_move_area.on(event_down, function (e) {
        isMoving = true;
        prevPos.x = (e.type === 'mousedown') ? e.clientX : e.originalEvent.touches[0].clientX;
        prevPos.y = (e.type === 'mousedown') ? e.clientY : e.originalEvent.touches[0].clientY;
        e.preventDefault();
    });

    $view_move_area.on(event_move, function (e) {
        if (isMoving) {
            let clientX = (e.type === 'mousemove') ? e.clientX : e.originalEvent.touches[0].clientX;
            let clientY = (e.type === 'mousemove') ? e.clientY : e.originalEvent.touches[0].clientY;
            var moveX = clientX - prevPos.x;
            var moveY = clientY - prevPos.y;

            var transformMatrix = $(".epub-container").css("transform").replace(/[^0-9\-.,]/g, '').split(',');
            var scaleX = Number(transformMatrix[0]);
            var scaleY = Number(transformMatrix[3]);
            var translateX = Number(transformMatrix[4]) + Number(moveX);
            var translateY = Number(transformMatrix[5]) + Number(moveY);

            var upperLimitX = $(".epub-container").width() * (scaleX - 1) / 2;
            var lowerLimitX = upperLimitX * (-1);
            var upperLimitY = $(".epub-container").height() * (scaleY - 1) / 2;
            var lowerLimitY = upperLimitY * (-1);

            if (translateX > upperLimitX)
                translateX = upperLimitX;
            if (translateX < lowerLimitX)
                translateX = lowerLimitX;
            if (translateY > upperLimitY)
                translateY = upperLimitY;
            if (translateY < lowerLimitY)
                translateY = lowerLimitY;

            $(".epub-container").css("transform", "translate(" + translateX + "px,"
                    + translateY + "px)"
                    + " scale(" + scaleX + "," + scaleY + ")");


            prevPos.x = clientX;
            prevPos.y = clientY;
        }

    });

    $view_move_area.on(event_up, function (e) {
        isMoving = false;
    });


    // $view_move_area.on("mouseout",function(){
    //     isMoving = false;
    // });


    function createViewerMoveArea() {
        var div = {
            id: "view-move-area",
            style: "top:0;left:0;width:100%;height:100%;position:absolute;z-index:1;"
        };

        var $div = $("<div>", div);
        $("#viewer").append($div);
        return $div;
    }

    var show = function () {
        $layoutSettingPage.addClass("md-show");
    };

    var hide = function () {
        $layoutSettingPage.removeClass("md-show");
    };

    //close layout setting page
    $layoutSettingPage.find(".closer").on("click", function () {
        hide();
    });


    $overlay.on("click", function () {
        hide();
    });
    /*
     //zoom in and zoom out
     $zoom.on("click touchend", function (e) {
     var scale = Number(e.target.value) / Number(e.target.min);
     if (browserType === "IE") {
     $(".epub-container").css("transform", "scale(" + scale + ", " + scale + ")");
     } else {
     reader.rendition.scale(scale);
     }
     
     if (e.target.value == e.target.min) {
     $view_move_area.css("visibility", "hidden");
     } else {
     $view_move_area.css("visibility", "visible");
     }
     
     });
     */
    $zoom.on("change", function (e) {
        var scale = Number(e.target.value) / Number(e.target.min);

        if (browserType === "IE") {
            $(".epub-container").css("transform", "scale(" + scale + ", " + scale + ")");
        } else {
            reader.rendition.scale(scale);
        }
        if (e.target.value == e.target.min) {
            $("#title-controls").removeClass("zoomIn");
            $view_move_area.css("visibility", "hidden");
            $moving_Content.css("display", "none");
        } else {
            $("#title-controls").addClass("zoomIn");
            if ($moving_Content.hasClass('icon-move'))
                $view_move_area.css("visibility", "visible");
            $moving_Content.css("display", "inline-block");
        }

    });
    
    $(window).on('resize', function() {
        reset_zoom();
    });

    $moving_Content.on("click", function () {
        $(this).toggleClass("icon-move icon-pointer");
        $(this).children().text($(this).hasClass("icon-move") ? '移動' : '選取');

        if ($(this).hasClass("icon-move")) {
            $view_move_area.css("visibility", "visible");
        } else {
            $view_move_area.css("visibility", "hidden");
        }
    });



    //set writing mode
    $vertical.on("click", function (e) {
        sessionStorage.setItem('setVertical',true);
        //reader.setVertical(true);
        reader.isChangeWriting(true);
        window.location.reload();
    });

    $horizontal.on("click", function (e) {
        sessionStorage.setItem('setVertical',false);
        //reader.setVertical(false);
        reader.isChangeWriting(true);
        window.location.reload();
    });



    //set font size
    $fontSizeSetting.children("button").each(function () {
        $(this).on("click", function (e) {
//            adjustFontSize(e.target.id);
            if (setting_timeout)
                return;
            setting_timeout = true;
            $("#viewer").animate({
                "opacity": 0
            }, dur_hide, function () {
                adjustFontSize(e.target.id, function () {
                    $("#viewer").animate({
                        "opacity": 1
                    }, dur_show);
                    setting_timeout = null;
                });
            });
        });
    });


    //set font family
    $fontFamilySetting.children("button").each(function () {
        $(this).on("click", function (e) {
//            setFontFamily(e.target.id);
            if (setting_timeout)
                return;
            setting_timeout = true;
            $("#viewer").animate({
                "opacity": 0
            }, dur_hide, function () {
                let family = e.target.id;
                family += (family === 'SimHei') ? ', Sans-Serif'
                        : (family === 'PMingLiU') ? ', Serif'
                        : (family === 'KaiTi') ? ', Cursive' : null;
                setFontFamily(family, function () {
                    $("#viewer").animate({
                        "opacity": 1
                    }, dur_show);
                    setting_timeout = null;
                });
            });
        });
    });


    //set background color
    $backgroundThemeSetting.children("button").each(function () {

        $(this).on("click", function (e) {
            $("body").attr("class", "").addClass($(this)[0].id);
            setBackgroundTheme(e.target.id, e.target.style.color);
        });
    });


    //set line height
    $lineHeight.children("button").each(function () {
        $(this).on("click", function (e) {
//            adjustLineHeight(e.target.id);
            if (setting_timeout)
                return;
            setting_timeout = true;
            $("#viewer").animate({
                "opacity": 0
            }, dur_hide, function () {
                adjustLineHeight(e.target.id, function () {
                    $("#viewer").animate({
                        "opacity": 1
                    }, dur_show);
                    setting_timeout = null;
                });
            });
        });
    });



    var adjustFontSize = function (id, cb) {
        var fontSize, newFontSize;
        var interval = 2;
        var INCREASE = "fontLarge";
        var DECREASE = "fontSmall";
        var unit = "%";
        let origin_ratio = 0.04;

        if (!reader.settings.styles)
            return;

        if (!reader.settings.styles.fontSize) {
            reader.settings.styles.fontSize = 3;//"100%";
        }


        if (id == INCREASE) {
            newFontSize = "108%";
            reader.settings.styles.fontSize += 1;
            if (reader.settings.styles.fontSize >= 15) {
                reader.settings.styles.fontSize = 15;
                $('#fontLarge').prop('disabled', true);

            }
            $('#fontSmall').prop('disabled', false);
        }

        if (id == DECREASE) {
            newFontSize = 92/*(1 / 1.08) * 100*/ + unit;
            reader.settings.styles.fontSize -= 1;
            if (reader.settings.styles.fontSize <= 1) {
                reader.settings.styles.fontSize = 1;
                $('#fontSmall').prop('disabled', true);
            }
            $('#fontLarge').prop('disabled', false);
        }
        level.fontsize = reader.settings.styles.fontSize;
        reader.rendition.themes.fontSize(newFontSize);
        read_location = rendition.currentLocation().start.cfi;
        setTimeout(check_relocated, 200);
        window.reader.SearchController.query(true, cb);
    };

    var setFontFamily = function (fontFamily, cb) {
        reader.settings.styles.font = fontFamily;
        reader.rendition.themes.font(reader.settings.styles.font);
        read_location = rendition.currentLocation().start.cfi;
        window.reader.SearchController.query(true, cb);
    };

    var setBackgroundTheme = function (backgroundColorTheme, textColor) {
        //set background color
        //rendition.themes.register(backgroundColorTheme, "css/themes.css");
        rendition.themes.register(backgroundColorTheme, "css/engineer.css");
        rendition.themes.select(backgroundColorTheme);

        //set text color
        //rendition.themes.override("color", textColor);
        
    };

    var adjustLineHeight = function (id, cb) {
        var lineHeight, newLineHeight;
        var interval = 5;
        var INCREASE = "lineHeightLarge";
        var DECREASE = "lineHeightSmall";
        let origin_ratio = 0.1;

        if (!reader.settings.styles)
            return;

        if (!reader.settings.styles.lineHeight) {
            reader.settings.styles.lineHeight = 1;//"100%";
        }



        if (id == INCREASE) {
//            newLineHeight = "105%";//lineHeight + interval;
            reader.settings.styles.lineHeight += 1;
            if (reader.settings.styles.lineHeight >= 15) {
                reader.settings.styles.lineHeight = 15;
                $('#lineHeightLarge').prop('disabled', true);

            }
            $('#lineHeightSmall').prop('disabled', false);
        }

        if (id == DECREASE) {
//            newLineHeight = (1 / 1.05) * 100 + '%';//"95%";//lineHeight - interval;
            reader.settings.styles.lineHeight -= 1;
            if (reader.settings.styles.lineHeight <= 1) {
                reader.settings.styles.lineHeight = 1;
                $('#lineHeightSmall').prop('disabled', true);

            }
            $('#lineHeightLarge').prop('disabled', false);
        }
        level.lineheight = reader.settings.styles.lineHeight;
        newLineHeight = 1 + (0.2 * (reader.settings.styles.lineHeight - 1));
        reader.rendition.themes.override("line-height", newLineHeight);
        read_location = rendition.currentLocation().start.cfi;
        setTimeout(check_relocated, 200);
        window.reader.SearchController.query(true, cb);
    };
    
    function check_relocated() {
        if(readType === 'pre-paginated')
            return;
        let location = rendition.location.end.cfi;
        if(location.indexOf(lastPage_cfi) < 0)
            return;
        rendition.emit('relocated', rendition.location);
    }
    
    let reset_zoom = function () {
        if($zoom.val() === 50)
            return;
        $(".epub-container").css("transform", "");
        epubContainer_hide();
        clearTimeout(resetZoom_timeout);
        resetZoom_timeout = setTimeout(function() {
            $zoom.trigger("change");
            epubContainer_show();
            resetZoom_timeout = null;
        }, 1500);
    }



    return {
        "show": show,
        "hide": hide,
        "reset_zoom": reset_zoom
    };

};

// font-size & lineHeight 若有增加，
// 會在跨章節(?)時跳回原先的SIZE + 1
// 而且版面調整內的 字體 / 行距，會跳回初始狀態
// 下列二函式進行修正
function lineHeight_status(href, proceed) {
    if (level.lineheight === 15) {
        $('#lineHeightLarge').prop('disabled', true);
        $('#lineHeightSmall').prop('disabled', false);
    } else if (level.lineheight > 1) {
        $('#lineHeightSmall').prop('disabled', false);
    }
    window.reader.settings.styles.lineHeight = level.lineheight;
    if (location_href_lineH !== href || proceed) {
        if (level.lineheight > 1) {
            window.reader.rendition.themes.override("line-height", 1 + (0.2 * (level.lineheight - 1)));
            window.reader.SearchController.query(true);
        } 
        if (!proceed)
            location_href_lineH = href;

    }

}

function fontSize_status(href, proceed, cb) {
    if (level.fontsize === 15) {
        $('#fontLarge').prop('disabled', true);
        $('#fontSmall').prop('disabled', false);
    } else if (level.fontsize > 1) {
        $('#fontSmall').prop('disabled', false);
    }

    window.reader.settings.styles.fontSize = level.fontsize;
    if (location_href_font !== href || proceed) {
        if (level.fontsize > 1) {
            for (let i = 1; i < level.fontsize - 1; i++) {
                window.reader.rendition.themes.fontSize('108%');
            }
            window.reader.SearchController.query(true);
            if (typeof cb === 'function') {
                cb();
            } else {
                viewer_show();
            }
        } else {
            if (typeof cb === 'function') {
                cb();
            } else {
                viewer_show();
            }
        }
        if (!proceed)
            location_href_font = href;

    } else {
        viewer_show();
    }
}

function close_partial_tool(close) {
    $("#writingModeSetting button").prop('disabled', close);
    $("#fontSizeSetting button").prop('disabled', close);
    $("#fontFamilySetting button").prop('disabled', close);
    $("#lineHeight button").prop('disabled', close);

    if (!level.fontsize || level.fontsize === 1)
        $("#fontSizeSetting #fontSmall").prop('disabled', true);
    if (!level.lineheight || level.lineheight === 1)
        $("#lineHeight #lineHeightSmall").prop('disabled', true);

//    $("#backgroundThemeSetting button").prop('disabled', close);
}
