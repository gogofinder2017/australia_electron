let remain_node = null;
let display_cfi = null;
//let transdata = null;
//let viewport_scale = null;
let next_section = null;
let all_position = [];
let content_size = {};

$(document).ready(function () {
    $(".tooltiptext").parent().on({
        'touchstart': function () {
            $(this).children('.tooltiptext').removeClass('transparent').addClass('opaque');
        },
        'touchend': function () {
            $(this).children('.tooltiptext').removeClass('opaque').addClass('transparent');
        }
    });
});

function set_allStlye($item, property, value, priority) {
    $item.style.setProperty(property, value, priority ? "important" : "");
    $item.style.setProperty('ms' + property, value, priority ? "important" : "");
    $item.style.setProperty('webkit' + property, value, priority ? "important" : "");
}

function set_css(ctn, property, value, priority) {
    let content = ctn.documentElement.childNodes[2];

    if (value && property != "line-height" && property != 'font-size' && property != 'color'
            && property != "transform" && property != "transform-origin") {
        content.style.setProperty(property, value, priority ? "important" : "");
    }

    //RDD N
    if (property == "transform-origin" || property == "transform") {
        var elements = content.getElementsByTagName("div");
        var items = Array.prototype.slice.call(elements);
        var backgroundExisted = false;
        /* 不知為何雄讚的書因為下列函式又壞了  -->
         items.forEach(function (element) {
         var elementStyle = element.style;
         if (elementStyle.backgroundSize) {
         // 防止重複設置transform(body & body children)造成大小不正確
         content.style.setProperty(property, "");
         content.style.setProperty('ms' + property, "");
         content.style.setProperty('webkit' + property, "");
         if (property == "transform" && viewport_scale === "width" && window.reader.rendition.getContents().length > 1)
         reset_offset(true);
         else {
         elementStyle.setProperty(property, value, priority ? "important" : "");
         elementStyle.setProperty('ms' + property, value, priority ? "important" : "");
         elementStyle.setProperty('webkit' + property, value, priority ? "important" : "");
         }
         //elementStyle[(property == "transform-origin") ? "transformOrigin" : property] = value;
         
         backgroundExisted = true;
         }
         });
         */
        if (!backgroundExisted) {
            /*
            let display_mode = window.reader.ReaderController.displayMode();
            
             if (property == "transform" && viewport_scale === "width" && display_mode === 'Double' &&
             (ctn.sectionIndex > 0 || (ctn.sectionIndex === 0 && !!all_position[0] && all_position[0] !== 'center'))) {
             reset_offset();
             } else {
             set_allStlye(content, property, value, priority);
             }
             */
            set_allStlye(content, property, value, priority);
        }

    }


    //** by RDD
    if (value && (property == "font-size" || property == "line-height" || property == "font-family" || property == "color")) {
        cssEveryNodes(content, property, value);
    }
    //** by RDD

    return ctn.window.getComputedStyle(content)[property];

}

function cssEveryNodes(content, property, value) {
    var i, j;
    var childList = [];
    var children = content.children;
    for (i = 0; i < children.length; i++) {
        childList.push(children[i]);
    }
    var len = childList.length;
    while (len != 0) {
        var nextLevelChildList = [];
        for (i = 0; i < len; i++) {
            var nextLevelChildren = childList[i].children;
            var nextLevelLen = nextLevelChildren.length;
            if (nextLevelLen == 0) {
                setNodeCss(childList[i], property, value);
            } else {
                for (j = 0; j < nextLevelChildren.length; j++) {
                    nextLevelChildList.push(nextLevelChildren[j]);
                }
            }
        }

        childList = nextLevelChildList;
        len = childList.length;
        if (len == 0) {
            remain_node = null;
        }
    }
}

function setNodeCss(node, property, value) {

    if ((node.nodeName === 'BR' || node.nodeName === 'br') && (!remain_node || remain_node !== node.parentNode)) {
        node = node.parentNode;
        remain_node = node;
    } else if ((node.nodeName === 'BR' || node.nodeName === 'br') && remain_node === node.parentNode) {
        return;
    }

    var isPercentage = (typeof value === 'string' && value.lastIndexOf('%') === value.length - 1) ? true : false;
    if (node.style) {
        if (isPercentage) {
            var percentage = Number(value.match(/\d+/g)[0]);
            var originValue = window.getComputedStyle(node).getPropertyValue(property);

            if (property == "line-height" && originValue == "normal") {
                originValue = getLineHeight(node);
            }
            var num = Number(originValue.match(/\d+/g)[0]);
            var unit = originValue.match(/[a-zA-Z]+/g)[0];

            var newValue;
            let percent = Math.round(percentage) / 100;
            if (percentage > 100) {
                newValue = String(Math.round(num * percent)/*+ 2*/) + unit; //amend by jane
            } else {
                newValue = String(Math.round(num / (2 - percent))/*- 2*/) + unit; //amend by jane
            }
            node.style.setProperty(property, newValue, "");

        } else {
            node.style.setProperty(property, value, "");
        }
    }
}

function getLineHeight(element) {
    var temp = document.createElement(element.nodeName);
    temp.style.fontFamily = window.getComputedStyle(element).getPropertyValue("font-family");
    temp.style.fontSize = window.getComputedStyle(element).getPropertyValue("font-size");
    temp.innerHTML = "t";
    temp = element.parentNode.appendChild(temp);
    var ret = temp.offsetHeight;
    temp.parentNode.removeChild(temp);

    var lineHeight, pixelLineHeight;
    if (ret != 0) {
        lineHeight = Number(ret) / Number(temp.style.fontSize.match(/\d+/g)[0]);
        pixelLineHeight = Number(temp.style.fontSize.match(/\d+/g)[0]) * lineHeight;

    } else {
        pixelLineHeight = 0;
    }

    return String(pixelLineHeight) + "px";
}


/*
function set_transdata(width, viewwidth, offsetY, scale) {
    let realmode = window.reader.ReaderController.displayMode();
    if (realmode === 'Single') {
        transdata = null;
        return;
    }

    transdata = {};
    transdata.width = width;
    transdata.viewwidth = viewwidth;
    transdata.offsetY = offsetY;
    transdata.scale = scale;

    width = null;
    viewwidth = null;
    offsetY = null;
    scale = null;
}

function reset_offset(div) {
    if (!transdata || transdata === null)
        return;

    setTimeout(function () {
        let $epub_view = $(".epub-view");
        if ($epub_view.length === 0)
            return;
        let min_offsetX = $epub_view.eq(0).offset().left;
        min_offsetX = ($epub_view.length > 1 && $epub_view.eq(1).offset().left < min_offsetX) ? $epub_view.eq(1).offset().left : min_offsetX;
        $.each($epub_view, function (idx) {
            let $body = $(this).children('iframe').contents().find("body");
            let index = parseInt($(this).attr('ref'));
            let offsetX = ($(this).offset().left == min_offsetX) ?
                    ((transdata.width / ($epub_view.length === 1 && index === 0 && all_position[index] === 'left' ? 2 : 1)) - transdata.viewwidth * transdata.scale) / transdata.scale : 0;
            if ($epub_view.length === 1) {
                offsetX = (all_position[index] === 'right' && $("#divider").css('display') !== 'none') ? 0 :
                        (!all_position[index] && index === 0) ? offsetX / 2 : offsetX;
            }
            let property = "transform";
            let value = "scale(" + transdata.scale + ") translate(" + offsetX + "px, " + transdata.offsetY + "px)";
            let priority = false;

            if (div) {
                var elements = $body[0].getElementsByTagName("div");
                var items = Array.prototype.slice.call(elements);
                items.forEach(function (element) {
                    var elementStyle = element.style;
                    if (elementStyle.backgroundSize) {
                        set_allStlye(elementStyle, property, value, priority);
                    }
                });
            } else {
                if (!$body[0])
                    return;
                set_allStlye($body[0], property, value, priority);
            }
        });
    }, 50);
}
*/

function reflowable_cover(contents, layout) {
    let $body = $(contents.content);
    let property = 'transform', property1 = 'transform-origin';
    let value, value1 = 'left top';
    let setTranform = false;
    let $item;
    if ($body.find('img').length === 1) {
        $item = $body.find('img');
        setTranform = true;
    }

    if ($body.children('div').length === 1 && !setTranform) {
        $item = $body.children('div');
        if ($item[0].style.backgroundImage || $item[0].style.background) {
            setTranform = true;
        }
    }

    if ($body.find('svg').length === 1 && !setTranform) {
        $item = $body.find('svg');
        setTranform = true;
    }

    if (!setTranform)
        return;
    let size = {
        'width': $item.innerWidth(),
        'height': $item.innerHeight()
    };
    let offsetX = (layout.width - size.width) / 2;
    let offsetY = (layout.height - size.height) / 2;

    value = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
    set_allStlye($item[0], property, value);
    set_allStlye($item[0], property1, value1);

    $item.css({
        'position': 'absolute',
        'left': 0,
        'top': 0
    });
}

function check_text() {
    let book = window.reader.book;
    let spineItems = book.spine.spineItems;
    let textChecker = [];
    let sectionText = [];

    console.log('Total Section: ', spineItems.length.toString());

    spineItems.forEach(function (section) {
//        console.log('Section ' + (section.index + 1) + ':', section.cfiBase);
        section.load(book.load.bind(book)).then(function (iframe) {
            let $body = $(iframe).children('body');
            let text = $(iframe).children('body')[0].innerText.trim();
            if ($body.find('video, audio, canvas').length > 0 && text.length > 0) {
                $.each($body.find('video, audio, canvas'), function () {
                    let reminder = $(this).text().trim();
                    let index = text.indexOf(reminder);
                    text = (index > -1) ? text.slice(index + reminder.length) : text;
                });
            }
            sectionText[section.index] = (text.trim().length === 0);
            textChecker.push((text.trim().length === 0));


            if (textChecker.length === spineItems.length) {
                let length = 0;
                textChecker.forEach(function (ans, index) {
                    if (ans)
                        length++;
                });
                close_partial_tool(length === textChecker.length);
                console.log('\n');
                console.log('Book Title:', window.reader.book.package.metadata.title);
                console.log('Book Author:', window.reader.book.package.metadata.creator);
                console.log('Book Type:', readType);
                console.log('Display Type:', window.reader.book.package.metadata.xmlSpread);
                console.log('Set Position:', (all_position.includes('left') || all_position.includes('right') || all_position.includes('center')) ? 'Yes' : 'No');
                console.log('Text Direction:', window.reader.rendition.settings.direction);
                console.log('Read Direction:', window.reader.book.package.metadata.direction);
                console.log('Has Cover:', (window.reader.book.package.metadata.coverPath) ? 'Yes' : 'No');
                console.log('Has Text:', !(length === textChecker.length) ? 'Yes' : 'No');

            }

        });
    });
}


function check_writingMode($html) {
    let verticalMode;
    let $body = $html.children("body");
    let htmlWM, bodyWM;
    if (browserType !== 'IE') {
        htmlWM = ($html.css('writingMode') && $html.css('writingMode').indexOf('vertical') > -1) ? true :
                ($html.css('webkitWritingMode') && $html.css('webkitWritingMode').indexOf('vertical') > -1) ? true : false;
        bodyWM = ($body.css('writingMode') && $body.css('writingMode').indexOf('vertical') > -1) ? true :
                ($body.css('webkitWritingMode') && $body.css('webkitWritingMode').indexOf('vertical') > -1) ? true : false;
    } else {
        htmlWM = ($html.css('writingMode') && ($html.css('writingMode').indexOf('vertical') > -1 || $html.css('writingMode').indexOf('tb-') > -1)) ? true :
                ($html.css('msWritingMode') && ($html.css('msWritingMode').indexOf('vertical') > -1 || $html.css('msWritingMode').indexOf('tb-') > -1)) ? true : false;
        bodyWM = ($body.css('writingMode') && ($body.css('writingMode').indexOf('vertical') > -1 || $body.css('writingMode').indexOf('tb-') > -1)) ? true :
                ($body.css('msWritingMode') && ($body.css('msWritingMode').indexOf('vertical') > -1 || $body.css('msWritingMode').indexOf('tb-') > -1)) ? true : false;
    }
    verticalMode = (htmlWM || bodyWM) ? true : false;
    $html = null;
    console.log('init writingMode:', (verticalMode === true) ? 'vertical' : 'horizontal');
    return verticalMode;
}

function check_position() {
    let sections = window.reader.book.spine.items;
    if (all_position.length === 0) {
        for (let i = 0; i < sections.length; i++) {
            all_position.push(null);
        }
    }
    for (let i = 0; i < sections.length; i++) {
        for (let j = 0; j < sections[i].properties.length; j++) {
            if (sections[i].properties[j].indexOf('page-spread-') > -1) {
                all_position[i] = (sections[i].properties[j].indexOf('page-spread-center') > -1) ? 'center' :
                        (sections[i].properties[j].indexOf('page-spread-right') > -1) ? 'right' : 'left';
            }
        }
    }
}

function check_contentCover() {
    if (all_position[0] === 'center')
        return true;

    let book = window.reader.book;
    let spineItem = book.spine.spineItems[0];
    if (!spineItem.linear)
        return false;
    if (spineItem.idref.toLowerCase().indexOf('cover') > -1) {
        book = null;
        spineItem = null;
        return true;
    }

    let $body = $(spineItem.contents).children("body");
    let cover_path = book.package.coverPath;
    let cover = false;
    book = null;
    spineItem = null;
    if ($body.attr("epub:type") && $body.attr("epub:type").toLowerCase().indexOf('cover') > -1) {
        book = null;
        spineItem = null;
        return true;
    }

    let $img = $body.find("img");
    $.each($img, function () {
        if ($(this).attr('src').indexOf(cover_path) > -1) {
            cover = true;
        }
    });

    let $div = $body.find("div");
    $.each($div, function () {
        if ($(this)[0].style.background.indexOf(cover_path) > -1 ||
                $(this)[0].style.backgroundImage.indexOf(cover_path) > -1) {
            cover = true;
        }
    });

    let $svg = $body.find('svg');
    $.each($svg, function () {
        if ($(this).children("[href$=" + cover_path + "]").length > 0) {
            cover = true;
        }
        if ($(this).children("image").attr("xlink:href").indexOf(cover_path) > -1) {
            cover = true;
        }
    });

    return cover;
}

function turn_double(section) {
    if (!window.reader.ReaderController)
        return;
    let realmode = window.reader.ReaderController.displayMode();

    if (realmode === 'Single' || (section.index === 0 && all_position[0] !== 'left' && all_position[0] !== 'right')) {
        return section;
    }

    let direction = window.reader.book.package.metadata.direction || 'ltr';
    let position = all_position[section.index];

    // 書本內有設定 properties="page-spread-left" / properties="page-spread-right"
    if (position !== null) {
        if ((direction === 'ltr' && position === 'left') || (direction === 'rtl' && position === 'right'))
            return section;
        if ((direction === 'ltr' && section.prev() && all_position[section.prev().index] === 'left') ||
                (direction === 'rtl' && section.prev() && all_position[section.prev().index] === 'right'))
            return section.prev();
    } else {
        if (content_cover) {
            if (section.index % 2 === 0 && section.index > 0)
                return section.prev();
        } else {
            if (section.index % 2 === 1)
                return section.prev();
        }
    }
    return section;
}

function display_nextPage(section, prev) {
    let realmode = window.reader.ReaderController.displayMode();
    if (realmode === 'Single') {
        section = null;
        return false;
    }

    let direction = window.reader.book.package.metadata.direction || 'ltr';
    let position = all_position[section.index];
    if (!position)
        return true;
    if (section.index === 0 && content_cover && position !== 'left' && position !== 'right') {  // position = null || center
        return false;
    }

    if ((direction === 'ltr' && position === (!prev ? 'left' : 'right')) || (direction === 'rtl' && position === (!prev ? 'right' : 'left'))) {
        $(".epub-container").css("flex-flow", "row nowrap");

        if (!prev) {
            return (direction === 'ltr' && all_position[section.next().index] === 'right') ? true :
                    (direction === 'rtl' && all_position[section.next().index] === 'left') ? true : false;
        } else {

            let prevPage = (direction === 'ltr' && all_position[section.prev().index] === 'left') ? true :
                    (direction === 'rtl' && all_position[section.prev().index] === 'right') ? true : false;

            if (!prevPage)
                $(".epub-container").css("flex-flow", "row-reverse nowrap");
            return prevPage;
        }
    } else {
        $(".epub-container").css("flex-flow", "row-reverse nowrap");
        return false;
    }
}

function display_singlePage(section) {
    let realmode = window.reader.ReaderController.displayMode();
    if (realmode === 'Single') {
        section = null;
        return false;
    }

    let direction = window.reader.book.package.metadata.direction || 'ltr';
    let position = all_position[section.index];
    if ((direction === 'ltr' && position === 'right') || (direction === 'rtl' && position === 'left'))
        $(".epub-container").css("flex-flow", "row-reverse nowrap");
    else
        $(".epub-container").css("flex-flow", "row nowrap");
}

function get_contentSize(viewport, scale) {
    content_size = {
        width: viewport.width * scale,
        height: viewport.height * scale
    };

    let $epubView = $(".epub-view");
    for(let i = 0; i < $epubView.length; i++) {
        // 不知為何用其他方式IE11塞不進新設定的樣式
        $epubView[i].style.setProperty('width', content_size.width + 'px', "important");
        $epubView[i].style.setProperty('height', content_size.height + 'px', "important");
        $epubView.eq(i).children('iframe')[0].style.setProperty('width', content_size.width + 'px', "important");
        $epubView.eq(i).children('iframe')[0].style.setProperty('height', content_size.height + 'px', "important");
    }
    viewport = null;
    adjust_container();
}

function adjust_container() {
    let realmode = window.reader.ReaderController.displayMode();
    let $epubContainer = $(".epub-container");

    if (realmode === 'Single') {
        $epubContainer[0].style.justifyContent = 'center';
    } else {
        let $epubView = $(".epub-view");
        if ($epubView.length === 1) {
            let index = parseInt($epubView.attr('ref'));
            if(all_position[index] === 'center' || (index === 0 && content_cover)) {
                $epubContainer[0].style.justifyContent = 'center';
                return;
            }
                
            $epubContainer[0].style.justifyContent = 'flex-start';
            let offset = ($epubContainer.innerWidth() / 2) - $epubView.eq(0).innerWidth();
            switch (all_position[index]) {
                case 'left':
                    $epubView[0].style.left = offset + 'px';
                    break;
                case 'right':
                    $epubView[0].style.right = offset + 'px';
                    break;
                default:
                    let readDir = window.reader.book.package.metadata.direction;
                    if(readDir === 'rtl') {
                        $epubView[0].style.right = offset + 'px';
                    } else {
                        $epubView[0].style.left = offset + 'px';
                    }
            }
        } else {
            $epubContainer[0].style.justifyContent = 'center';
            $epubView.css({
                left: '0px',
                right: '0px'
            });
        }
    }
}
