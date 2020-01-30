/**
 * Created by ABC on 2019/9/11.
 */
let location_href_font, location_href_lineH;
let level = {
    lineheight: 1,
    fontsize: 1
};
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
            $viewer = $("#viewer");
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

    //zoom in and zoom out
    $zoom.on("click touchend", function (e) {
        var scale = Number(e.target.value) / Number(e.target.min);
        //此版本0.3.73無法使用此做法
        //reader.rendition.scale(scale);

        //直接調整iframe內body
        //reader.rendition.getContents()[0].scaler(scale, 0, 0);
        $(".epub-container").css("transform", "scale(" + scale + ", " + scale + ")");
        if (e.target.value == e.target.min) {
            $view_move_area.css("visibility", "hidden");
        } else {
            $view_move_area.css("visibility", "visible");
        }

    });



    //set writing mode
    $vertical.on("click", function (e) {
        reader.setVertical(true);
        //reader.isChangeWriting(true);
        rendition.manager.getContents()[0].writingMode('vertical-lr');
        //reader.rendition.themes.override("writing-mode", "vertical-lr");
        //window.location.reload();
    });

    $horizontal.on("click", function (e) {
        reader.setVertical(false);
        //reader.isChangeWriting(true);
        rendition.manager.getContents()[0].writingMode('horizontal-tb');
        //window.location.reload();
    });



    //set font size
    $fontSizeSetting.children("button").each(function () {
        $(this).on("click", function (e) {
            adjustFontSize(e.target.id);

        });
    });


    //set font family
    $fontFamilySetting.children("button").each(function () {
        $(this).on("click", function (e) {
            setFontFamily(e.target.id);
        });
    });


    //set background color
    $backgroundThemeSetting.children("button").each(function () {
        $(this).on("click", function (e) {
            setBackgroundTheme(e.target.id, e.target.style.color);
        });
    });


    //set line height
    $lineHeight.children("button").each(function () {
        $(this).on("click", function (e) {
            adjustLineHeight(e.target.id);
        });
    });


    // 因epub.legacy.min.js，此處修改公式
    var adjustFontSize = function (id) {
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


        // fontSize = parseInt(reader.settings.styles.fontSize.slice(0, -1));

        if (id == INCREASE) {
            //newFontSize = "102%";//fontSize + interval;
            if (newFontSize == NaN || newFontSize > 150) {
                return;
            }
            reader.settings.styles.fontSize += 1;
            if (reader.settings.styles.fontSize >= 15) {
                reader.settings.styles.fontSize = 15;
                $('#fontLarge').prop('disabled', true);

            }
            $('#fontSmall').prop('disabled', false);
        }

        if (id == DECREASE) {
            //newFontSize = (1 / 1.02) * 100 + '%';//"98%";//fontSize - interval;
            if (newFontSize == NaN || newFontSize < 50) {
                return;
            }
            reader.settings.styles.fontSize -= 1;
            if (reader.settings.styles.fontSize <= 1) {
                reader.settings.styles.fontSize = 1;
                $('#fontSmall').prop('disabled', true);

            }
            $('#fontLarge').prop('disabled', false);
        }

        newFontSize = (1 + (origin_ratio * (reader.settings.styles.fontSize - 1))) * 100 + "%";
        level.fontsize = reader.settings.styles.fontSize;
        // reader.settings.styles.fontSize = newFontSize + unit;
        reader.rendition.themes.fontSize(newFontSize);

    };

    var setFontFamily = function (fontFamily) {
        reader.settings.styles.font = fontFamily;
        reader.rendition.themes.font(reader.settings.styles.font);
    };

    var setBackgroundTheme = function (backgroundColorTheme, textColor) {
        //set background color
        rendition.themes.register(backgroundColorTheme, "css/themes.css");
        rendition.themes.select(backgroundColorTheme);

        //set text color
        rendition.themes.override("color", textColor);
    };

    // 因epub.legacy.min.js，此處修改公式
    var adjustLineHeight = function (id) {
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


        // lineHeight = parseInt(reader.settings.styles.lineHeight.slice(0, -1));


        if (id == INCREASE) {
            //newLineHeight = "105%";//lineHeight + interval;
            reader.settings.styles.lineHeight += 1;
            if (reader.settings.styles.lineHeight >= 15) {
                reader.settings.styles.lineHeight = 15;
                $('#lineHeightLarge').prop('disabled', true);

            }
            $('#lineHeightSmall').prop('disabled', false);
            // if (newLineHeight == NaN  || newLineHeight > 150) {
            //     return;
            // }
        }

        if (id == DECREASE) {
            //newLineHeight = (1 / 1.05) * 100 + '%';//"95%";//lineHeight - interval;
            reader.settings.styles.lineHeight -= 1;
            if (reader.settings.styles.lineHeight <= 1) {
                reader.settings.styles.lineHeight = 1;
                $('#lineHeightSmall').prop('disabled', true);

            }
            $('#lineHeightLarge').prop('disabled', false);
            // if (newLineHeight == NaN  || newLineHeight < 50 ) {
            //     return;
            // }
        }
        newLineHeight = 1 + (origin_ratio * (reader.settings.styles.lineHeight - 1));
        level.lineheight = reader.settings.styles.lineHeight;
        // reader.settings.styles.lineHeight = newLineHeight + "%";
        reader.rendition.themes.override("line-height", newLineHeight);
    };



    return {
        "show": show,
        "hide": hide
    };

};

// font-size & lineHeight 若有增加，
// 會在跨章節(?)時跳回原先的SIZE + 1
// 而且版面調整內的 字體 / 行距，會跳回初始狀態
// 下列二函式進行修正
function lineHeight_status(href) {
    if (level.lineheight === 15) {
        $('#lineHeightLarge').prop('disabled', true);
        $('#lineHeightSmall').prop('disabled', false);
    } else if (level.lineheight > 1) {
        $('#lineHeightSmall').prop('disabled', false);
    }
    reader.settings.styles.lineHeight = level.lineheight;
    if (location_href_lineH !== href) {
        reader.rendition.themes.override("line-height", 1 + ((level.lineheight - 1) * 0.05));
        console.log(1 + ((level.lineheight - 1) * 0.05));
        location_href_lineH = href;
    }
}

function fontSize_status(href) {
    if (level.lineheight === 15) {
        $('#fontLarge').prop('disabled', true);
        $('#fontSmall').prop('disabled', false);
    } else if (level.lineheight > 1) {
        $('#fontSmall').prop('disabled', false);
    }
    reader.settings.styles.fontSize = level.fontsize;
    if (location_href_font !== href) {
        reader.rendition.themes.fontSize((1 + ((level.fontsize - 1) * 0.04)) * 100 + '%');
        location_href_font = href;
    }
}

function close_partial_tool(close) {
    $("#writingModeSetting button").prop('disabled', close);
    $("#fontSizeSetting button").prop('disabled', close);
    $("#fontFamilySetting button").prop('disabled', close);
    $("#lineHeight button").prop('disabled', close);
    $("#backgroundThemeSetting button").prop('disabled', close);
}