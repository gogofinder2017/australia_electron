let resize_timer, read_location;
let readType, fade_dur = 200;
let content_cover = false;
EPUBJS.reader.ReaderController = function (book) {
    var $main = $("#main"),
            $divider = $("#divider"),
            $loader = $("#loader"),
            $next = $("#next"),
            $prev = $("#prev"),
            $toolbar_next = $("#toolbar-next"),
            $toolbar_prev = $("#toolbar-prev"),
            $firstPage = $("#firstPage"),
            $lastPage = $("#lastPage"),
            $auto_page_turning = $("#auto-page-turning"),
            $auto_page_turning_tip = $("#auto-page-turning-tip"),
            $single_page = $("#single-page"),
            $double_page = $("#double-page"),
            $viewer = $("#viewer");
    let $cover = $("#cover");
    let $cover_Block = $("#coverBlock");
    let $toolbar = $("#toolbar");
    let $question = $(".icon-info-circled");


    //自動翻頁部分
    var currentPage = document.getElementById("current-page");
    //var totalPage = document.getElementById("total-page");
    var delay_time = document.getElementById("delay-time");
    var videoEndTime = new Array();//自動撥放video的結束時間
    var audioEndTime = new Array();//自動撥放audio的結束時間
    var timer;
    var IsautoTurningPage = false;
    var timeoutID;
    var bSetLastPage = false;
    let firstPage_cfi, lastPage_cfi;
    let myduration;
    let rendered_timeout;
    let current_mode = null;
    let xmlSpread, generator;

    var rendition = this.rendition;
    var reader = this;
    var book = this.book;



    var mouseDown = false;
    var displayed = rendition.display();

    var render = this.render;

    //封面參數//目前不設定封面，一律false
    var IsInCover = false;
    var cover_existed = false;

    //確認是否PC裝置或行動裝置
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

    //單雙頁模式參數
    var Targetmode = "Double";
    var Realmode = "Double";
    var set_Targetmode_value = function (_Targetmode, event) {
        Targetmode = _Targetmode;
        if (event) {
            event();
        }
    };

    var setDoubleMode = function () {
        if (Realmode === 'Double' || rendition.settings.isVerticalWriting)
            return;
        window.reader.LayoutController.reset_zoom();
        rendition.spread(true, 10);
        rendition.resize(0, 0);
        rendition.resize("100%", "100%");
        showDivider();
        Realmode = "Double";
        current_mode = 'double';
    };

    var setSingleleMode = function () {
        if (Realmode === 'Single')
            return;
        window.reader.LayoutController.reset_zoom();
        var w = document.body.clientWidth;
        rendition.spread("none");
        rendition.resize(0, 0);
        rendition.resize("100%", "100%");

        hideDivider();
        Realmode = "Single";
        current_mode = 'single';
    };

    //設定封面//目前不使用封面
    var CoverShow = function () {

        IsInCover = true;

        $cover_Block.addClass("show");

    };
    var CoverHide = function () {

        IsInCover = false;
        $cover_Block.removeClass("show");

    };




    var slideIn = function () {
        var currentPosition = rendition.currentLocation().start.cfi;
        if (reader.settings.sidebarReflow) {
            $main.removeClass('single');
            $main.one("transitionend", function () {
                rendition.resize();
            });
        } else {
            $main.removeClass("closed");

        }
        $toolbar.removeClass("hidden");

    };

    var slideOut = function () {
        var location = rendition.currentLocation();
        if (!location) {
            return;
        }
        var currentPosition = location.start.cfi;
        if (reader.settings.sidebarReflow) {
            $main.addClass('single');
            $main.one("transitionend", function () {
                rendition.resize();
            });
        } else {
            $main.addClass("closed");
        }
        $toolbar.addClass("hidden");
    };

    var showLoader = function () {
        $loader.show();
        hideDivider();
    };

    var hideLoader = function () {
        $loader.hide();

        //-- If the book is using spreads, show the divider
        // if(book.settings.spreads) {
        // 	showDivider();
        // }
    };

    var showDivider = function () {
        $divider.addClass("show");
    };

    var hideDivider = function () {
        $divider.removeClass("show");
    };

    var currentMode = function () {
        return Realmode;
    }

    var contentCover = function () {
        return content_cover;
    }

    var keylock = false;

    var arrowKeys = function (e) {
        if (e.keyCode == 37) { // ←
            turn_page('prev', $prev);
            e.preventDefault();
        }
        if (e.keyCode == 38) { // ↑
            turn_page('first');
            e.preventDefault();
        }
        if (e.keyCode == 39) { // →
            turn_page('next', $next);
            e.preventDefault();
        }
        if (e.keyCode == 40) { // ↓
            turn_page('last');
            e.preventDefault();
        }
    };

    document.addEventListener('keyup', arrowKeys, false);

    //下一頁(箭頭)
    $next.on("click", function (e) {
        turn_page('next', $(this));
        e.preventDefault();
    });

    //下一頁(下方工具列)
    $toolbar_next.on("click", function (e) {
        turn_page('next', $(this));
        e.preventDefault();
    });

    $cover.on("click", function (e) {
        CoverHide();
        e.preventDefault();
        return;
    });

    //上一頁(箭頭)
    $prev.on("click", function (e) {
        turn_page('prev', $(this));
        e.preventDefault();
    });

    //上一頁(下方工具列)
    $toolbar_prev.on("click", function (e) {
        turn_page('prev', $(this));
        e.preventDefault();
    });

    //跟location產生頁面相關，每x字符產生一個cfi連結
    book.locations.generate(1024);
    //點選第一頁
    $firstPage.on("click", function (e) {
        if (reverseDir()/* rtl */)
            turn_page('last');
        else
            turn_page('first');
        e.preventDefault();
    });

    //最末頁
    $lastPage.on("click", function (e) {
        if (reverseDir()/* rtl */)
            turn_page('first');
        else
            turn_page('last');
        e.preventDefault();
    });




    //自動翻頁功能
    $auto_page_turning.on("click", function (e) {

        IsautoTurningPage = !IsautoTurningPage;
        if (IsautoTurningPage)
        {
            var delay = (delay_time.value < 1) ? 1000 : delay_time.value * 1000;
            if (delay_time.value < 1)
                $("#delay-time").val(1);

            timer = $.timer(function () {
                autoTurnPage();
            }, delay, true);

            $auto_page_turning.addClass('icon-toolbar-pause-circled');
            $auto_page_turning_tip.text("停止自動翻頁");
        } else
        {
            timer.stop();
            timer = null;
            $auto_page_turning_tip.text("自動翻頁");
            $auto_page_turning.removeClass('icon-toolbar-pause-circled');
        }

    });

    $(window).resize(function () {
        if(window.innerWidth < window.innerHeight) {    //直的
            if(window.innerWidth < 1040) {
                set_Targetmode_value("Single", setSingleleMode);
            } else {
                if(xmlSpread === 'both' || xmlSpread === 'portrait') {
                    set_Targetmode_value("Double", setDoubleMode);
                } else {
                    set_Targetmode_value("Single", setSingleleMode);
                }
            }
        } else {
            if(xmlSpread === 'none' || xmlSpread === 'portrait') {
                set_Targetmode_value("Single", setSingleleMode);
            } else {
                set_Targetmode_value("Double", setDoubleMode);
            }
        }
        /*
        if (window.innerWidth < 1040) {
            set_Targetmode_value("Single", setSingleleMode);
        } else if(xmlSpread !== 'none'){
            set_Targetmode_value("Double", setDoubleMode);
        }
                */
    });
    

    //設定單雙頁模式
    $single_page.on("click", function (e) {
        transdata = null;
        if (readType === 'pre-paginated' && xmlSpread === 'both') {
            advice_single();
        } else {
            set_Targetmode_value("Single", setSingleleMode);
        }

    });

    $double_page.on("click", function (e) {

        if (window.innerWidth < 1040 || rendition.settings.isVerticalWriting) {
            Swal.fire({
                icon: 'error',
                title: '抱歉...',
                text: (rendition.settings.isVerticalWriting) ? '直書模式不支援雙頁閱讀' : '目前視窗大小僅支援單頁閱讀'
            });
            return;
        }

        if (readType === 'pre-paginated' && xmlSpread === 'none') {
            advice_double();
        } else {
            set_Targetmode_value("Double", setDoubleMode);
        }

    });

    delay_time.onchange = function (e) {

        IsautoTurningPage = false;
        //console.log(timer)
        if (timer)
            timer.stop();
        timer = null;
        $auto_page_turning_tip.text("自動翻頁");
        $auto_page_turning.removeClass('icon-toolbar-pause-circled');

    };

    //自動翻頁中若有頁面有多媒體撥放，先獲取多媒體的撥放時間，再進行delay
    function autoTurnPage() {

        var mediaEndTime = videoEndTime.concat(audioEndTime);
        var maxMediaEndTime = Math.max.apply(null, mediaEndTime);
        //var maxMediaEndTime = Math.max(...mediaEndTime);
        var delay = maxMediaEndTime * 1000;
        videoEndTime.length = 0;
        audioEndTime.length = 0;

        if (IsInCover) {
            rendition.display(3);
            rendition.display(0);
            CoverHide();

        } else {
            timer.pause();
            sleep(delay).then(function () {
                if (timer != null)
                {
                    $("#viewer").animate({'opacity': 0}, 200, function () {
                        rendition.next();
                    });
                    //rendition.next();
                    videoEndTime.length = 0;
                    audioEndTime.length = 0;
                    timer.play();
                }
            })
        }
    }

    function sleep(time) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    }


    rendition.on("layout", function (props) {

        if (props.spread === true) {
            showDivider();
        } else {
            hideDivider();
        }

    });



    book.ready.then(function () {
        // Load in stored locations from json or local storage
        var key = book.key() + '-locations';
        var stored = localStorage.getItem(key);
        browser_info();
        $question.on('click', advice_info);
        if (reverseDir()) {
            $toolbar_next.children('.tooltiptext').text('上一頁');
            $toolbar_prev.children('.tooltiptext').text('下一頁');
            $firstPage.children('.tooltiptext').text('最末頁');
            $lastPage.children('.tooltiptext').text('第一頁');
        } else {
            $toolbar_next.children('.tooltiptext').text('下一頁');
            $toolbar_prev.children('.tooltiptext').text('上一頁');
            $firstPage.children('.tooltiptext').text('第一頁');
            $lastPage.children('.tooltiptext').text('最末頁');
        }


        if (stored) {

            return book.locations.load(stored);
        } else {
            // Or generate the locations on the fly
            // Can pass an option number of chars to break sections by
            // default is 150 chars

            return book.locations.generate(1024);

        }
    })
            .then(function () {

                // Wait for book to be rendered to get current page
                displayed.then(function (section) {
                    epubContainer_hide();
                    readType = (!rendition._layout.name.toLowerCase()) ? 'reflowable' : rendition._layout.name.toLowerCase();
                    content_cover = check_contentCover();
                    firstPage_cfi = book.spine.items[0].cfiBase;
                    lastPage_cfi = book.spine.items[book.spine.length - 1].cfiBase;
                    currentPage.value = 0;
                    check_text();
                    //Check reading mode;if deivice is PC, Set Double mode. If device is mobile,Set Single mode.
                    xmlSpread = book.package.metadata.xmlSpread;
                    generator = book.package.metadata.generator.toLowerCase();
                    
                    if (/*IsPC() && window.innerWidth >= 1040*/window.innerWidth > window.innerHeight && !rendition.settings.isVerticalWriting && (xmlSpread !== 'none' && xmlSpread !== 'portrait')) {
                        //console.log("check pc state");
                        //set_Targetmode_value("Double", setDoubleMode);
                        Targetmode = "Double";
                        if (content_cover && section.index === 0) {
                            if ((all_position[0] === 'left' && all_position[1] === 'right') ||
                                    (all_position[0] === 'right' && all_position[1] === 'left')) {
                                rendition.spread(true, 10);
                                showDivider();
                            } else {
                                rendition.spread('none');
                                hideDivider();
                            }
                        } else {
                            rendition.spread(true, 10);
                            showDivider();
                        }
                        Realmode = "Double";
                        current_mode = "double";

                    } else {
                        //set_Targetmode_value("Single", setSingleleMode);
                        Targetmode = "Single";
                        rendition.spread("none");
                        hideDivider();
                        Realmode = "Single";
                        current_mode = "single";
                    }
                    if (book.settings.isVerticalWriting)
                        $("#viewer").addClass("vertical");

                    rendition.resize(0, 0);
                    rendition.resize("100%", "100%");
                    
                    console.log('content_cover:', content_cover);

                    if (book.settings.isVerticalWriting) {
                        $single_page.hide();
                        $double_page.hide();
                    }

                    book.coverUrl().then(function (coverPath) {

                        //RDD 2019/10/02把封面關掉
                        //cover_existed = true;
                        cover_existed = false;
                        if (cover_existed)
                        {
                            $cover.attr("src", coverPath);
                            CoverShow();
                        }
                    });
                    epubContainer_show();

                });
                

                rendition.on('rendered', function (section, iframeView) {
                    //check Adobe inDesign 
                    if(!generator || (generator.indexOf('adobe') < 0 && generator.indexOf('indesign') < 0))
                        return;
                    
                    if (iframeView.window.goToDestination) {
                        iframeView.window.goToDestination = function (href) {
                            viewer_hide(function() {
                                rendition.display(href);
                                
                            });
                        };
                    }
                });

                // Listen for location changed event, get percentage from CFI
                rendition.on('resized', function () {
                    $loader.show();

                    if ($("#viewer").css("opacity") == 1)
                        $("#viewer").css("opacity", 0);
                    clearTimeout(resize_timer);
                    resize_timer = setTimeout(function () {
                        fontSize_status(location_href_font, true, function () {
                            rendition.display(read_location);
                            $loader.hide();
                            $("#viewer").animate({"opacity": 1}, 1000);
                        });
                        resize_timer = null;
                    }, 300);
                });


                rendition.on('relocated', function (locations) {
                    //cover_display(locations.start.cfi);
                    if (!resize_timer) {
                        read_location = rendition.currentLocation().start.cfi;
                    }
                    //The cover must be in single mode.
                    //先將按鈕移除disabled參數，再視頁面位置決定disabled
                    $prev.removeClass("disabled");
                    $toolbar_prev.removeClass("disabled");
                    $next.removeClass("disabled");
                    $toolbar_next.removeClass("disabled");
                    $firstPage.removeClass("disabled");
                    $lastPage.removeClass("disabled");

                    lineHeight_status(locations.end.href);
                    fontSize_status(locations.end.href);

                    if (check_firstPage(locations)/*rendition.location.atStart*/) {
                        if (reverseDir()) {
                            $next.addClass("disabled");
                            $toolbar_next.addClass("disabled");
                            $lastPage.addClass("disabled");
                        } else {
                            $prev.addClass("disabled");
                            $toolbar_prev.addClass("disabled");
                            $firstPage.addClass("disabled");
                        }
                        cover_display(locations.start.cfi);
                    } else {
                        CoverHide();
                        if (Targetmode == "Double" && Targetmode != Realmode)
                        {
                            set_Targetmode_value("Double", setDoubleMode);
                        }
                        cover_display(locations.start.cfi);
                    }
                    // 翻至底頁停止
                    if (check_lastPage(locations)) {
                        if (IsautoTurningPage)
                        {
                            IsautoTurningPage = false;
                            timer.stop();
                            timer = null;
                        }

                        $auto_page_turning_tip.text("自動翻頁");
                        $auto_page_turning.removeClass('icon-toolbar-pause-circled');
                        if (reverseDir()) {
                            $prev.addClass("disabled");
                            $toolbar_prev.addClass("disabled");
                            $firstPage.addClass("disabled");
                        } else {
                            $next.addClass("disabled");
                            $toolbar_next.addClass("disabled");
                            $lastPage.addClass("disabled");
                        }
                    }
                    //console.log(locations)

                    //如果點選跳至最末頁，但location參數的atEnd不為true時(不在最末頁)的處理方法
                    // if(bSetLastPage)
                    // {
                    // 	if(!locations.atEnd){
                    // 		rendition.display(book.spine.last().index);
                    // 		bSetLastPage = false;
                    // 	}
                    // }
                    /*
                     const cfi = book.locations.cfiFromPercentage(1);//percentage為0~1
                     if(cfi.indexOf(book.spine.last().cfiBase) > -1) {
                     rendition.display(cfi);//display可填cfi或location
                     } else {
                     let display = ($divider.hasClass('show')) ? 'double':'single';
                     if(display === 'double' && book.spine.length % 2 === 0) {
                     rendition.display(book.spine.length - 2);
                     } else {
                     rendition.display(book.spine.length - 1);
                     }
                     }
                     */
                    // 取得目前書本的進度
                    let percent, percentage;
                    // 不知為何有些書使用CFI會發生錯誤(套件讀取的位置不正確)
                    if (readType !== 'reflowable') {
                        percent = locations.end.index / (book.spine.length - 1);
                        percentage = Math.floor(percent * 100);
                    } else {
                        percent = book.locations.percentageFromCfi(locations.start.cfi);
                        percentage = Math.floor(percent * 100);
                    }
                    currentPage.value = percentage;
                });
                // Save out the generated locations to JSON
                localStorage.setItem(book.key() + '-locations', book.locations.save());


            });



    //以下兩個hook為在載入章節前，先取得內部html的多媒體撥放時間
    this.rendition.hooks.content.register(function (contents) {

        var elements = contents.document.querySelectorAll('video'),
                items = Array.prototype.slice.call(elements);

        var EndTimeArray = new Array();

        if (elements.length == 0)
        {
            EndTimeArray.push(0);
        }
        items.forEach(function (element) {
            var start = element.seekable.start(0);
            var end = element.seekable.end(0);
            if (IsautoTurningPage)
            {
                element.removeAttribute('loop');
            }

            if (IsInCover)
            {
                element.pause();
            } else {
                if (element.autoplay == true) {
                    element.play();

                }
            }

            if (element.autoplay == true)
            {

                EndTimeArray.push(end);
            } else
            {
                EndTimeArray.push(0);
            }


        });

        videoEndTime.push(Math.max.apply(null, EndTimeArray));

    });

    this.rendition.hooks.content.register(function (contents) {


        var elements = contents.document.querySelectorAll('audio'),
                items = Array.prototype.slice.call(elements);

        var EndTimeArray = new Array();

        if (elements.length == 0) {
            EndTimeArray.push(0);
        }
        items.forEach(function (element) {
            var start = element.seekable.start(0);
            var end = element.seekable.end(0);
            if (IsautoTurningPage) {
                element.removeAttribute('loop');
            }

            if (IsInCover) {
                element.pause();
            } else {
                if (element.autoplay == true) {
                    element.play();

                }
            }

            if (element.autoplay == true) {

                EndTimeArray.push(end);
            } else {
                EndTimeArray.push(0);
            }


        });

        audioEndTime.push(Math.max.apply(null, EndTimeArray));


    });

    function browser_info() {
        let broswer = getBroswer();
        let version = parseInt(broswer.version);
        if (broswer.broswer === 'Edge')
            return;
        if (broswer.broswer === 'Chrome' && version >= 76)
            return;
        if (broswer.broswer === 'Firefox' && version >= 69)
            return;
        if (broswer.broswer === 'Safari' && version >= 12)
            return;

        Swal.fire({
            icon: 'info',
            title: '<span style="font-size: 24px;">目前您使用' + broswer.broswer + ' ' + broswer.version + '<br/></span>',
            html: '<span style="line-height: 1.7; font-weight: bold;">建議使用下列瀏覽器版本或以上<br/>以保有良好的使用體驗<br/>Google Chrome版本76以上 (macOS / Windows)<br/>IE版本 Edge (Windows)<br/>Safari 版本12以上 (macOS)<br/>Firefox版本69以上 (macOS / Windows)</span>'
        });
    }

    function advice_info() {
        Swal.fire({
            icon: 'info',
            title: '<span style="font-size: 24px;">關於樣式修改</span>',
            html: '為使用者方便，閱讀器提供樣式修改功能，但部分功能可能會與作者預設的表現形式有所不同，還請諒解。'
        });
    }

    function advice_double() {
        Swal.fire({
            icon: 'info',
            title: '<span style="font-size: 24px;">本書設定為單頁瀏覽</span>',
            html: '<span style="font-size: 16px;">切換為雙頁瀏覽可能與作者預設的表現形式有所不同<br>請問是否要切換？</span>',
            showCancelButton: true,
            focusCancel: true,
            confirmButtonText: '雙頁瀏覽',
            cancelButtonText: '保時原樣',
            cancelButtonColor: '#EA0000'
        }).then(function (result) {
            if (result.value) {
                set_Targetmode_value("Double", setDoubleMode);
            }
        });
    }

    function advice_single() {
        Swal.fire({
            icon: 'info',
            title: '<span style="font-size: 24px;">本書設定為雙頁瀏覽</span>',
            html: '<span style="font-size: 16px;">切換為單頁瀏覽可能與作者預設的表現形式有所不同<br>請問是否要切換？</span>',
            showCancelButton: true,
            focusCancel: true,
            confirmButtonText: '單頁瀏覽',
            cancelButtonText: '保時原樣',
            cancelButtonColor: '#EA0000'
        }).then(function (result) {
            if (result.value) {
                set_Targetmode_value("Single", setSingleleMode);
            }
        });
    }

    function check_firstPage(locations) {
        if (locations.start.cfi.indexOf(firstPage_cfi) < 0)
            return false;
        if (readType === 'pre-paginated') {
            return true;
        } else {
            if (book.settings.isVerticalWriting) {
                if ($(".epub-container")[0].scrollTop == 0)
                    return true;
            } else {
                if (rendition.settings.direction === 'ltr') {
                    if ($(".epub-container")[0].scrollLeft === 0)
                        return true;
                } else {
                    let broswer = getBroswer();

                    let position = (broswer.broswer === 'Chrome') ? $(".epub-container")[0].scrollWidth - $(".epub-container").innerWidth() : 0;
                    if ($(".epub-container")[0].scrollLeft == position)
                        return true;
                }
            }
        }
        return false;
    }

    function check_lastPage(locations) {
        if (locations.end.cfi.indexOf(lastPage_cfi) < 0)
            return false;
        if (readType === 'pre-paginated') {
            return true;
        } else {
            if (book.settings.isVerticalWriting) {
                if ($(".epub-container")[0].scrollTop == ($(".epub-container")[0].scrollHeight - $(".epub-container").innerHeight()))
                    return true;
            } else {
                if (rendition.settings.direction === 'ltr') {
                    if ($(".epub-container")[0].scrollLeft === ($(".epub-container")[0].scrollWidth - $(".epub-container").innerWidth()))
                        return true;
                } else {
                    let broswer = getBroswer();
                    let position = (broswer.broswer === 'Chrome') ? 0 :
                            (broswer.broswer === 'IE') ? $(".epub-container")[0].scrollWidth - $(".epub-container").innerWidth() :
                            -$(".epub-container")[0].scrollWidth + $(".epub-container").innerWidth();
                    if ($(".epub-container")[0].scrollLeft == position)
                        return true;
                }
            }
        }
        return false;
    }

    function reverseDir() {
        return book.package.metadata.direction === "rtl";
    }

    function change_fadeDur() {
        if (book.settings.isVerticalWriting) {
            if ($(".epub-container")[0].scrollTop !== 0)
                return;
        } else {
            if (rendition.settings.direction === 'ltr') {
                if ($(".epub-container")[0].scrollLeft !== 0)
                    return;
            } else {

                let broswer = getBroswer();
                let position = (broswer.broswer === 'Chrome') ? $(".epub-container")[0].scrollWidth - $(".epub-container").innerWidth() : 0;
                if ($(".epub-container")[0].scrollLeft !== position)
                    return;
            }
        }
        if (level.fontsize === 1)
            return;
        $("#loader").show();
        fade_dur = 200 + (level.fontsize * 20);
    }




    function turn_page(target, $btn) {
        switch (target) {
            case 'next':
                turn_next($btn);
                break;
            case 'prev':
                turn_prev($btn);
                break;
            case 'first':
                turn_first();
                break;
            case 'last':
                turn_last();
                break;
        }
    }

    function turn_next($btn) {
        if ($btn.hasClass('disabled') || myduration)
            return;
        myduration = true;

        viewer_hide(function () {
            if (IsInCover) {
                rendition.display(3);
                rendition.display(0);
                CoverHide();
                return;
            }
            if (reverseDir()) { // rtl
                change_fadeDur();
                rendition.prev();
            } else {
                rendition.next();
            }

            myduration = null;
            $btn = null;
        });
    }

    function turn_prev($btn) {
        if ($btn.hasClass('disabled') || myduration)
            return;
        myduration = true;

        viewer_hide(function () {
            if (rendition.location.atStart) {
                if (cover_existed) {
                    rendition.display(3);
                    rendition.display(0);
                    CoverShow();
                }
            }
//            if(book.settings.isVerticalWriting && $(".epub-container")[0].scrollTop === 0)

            if (reverseDir()) { //rtl
                rendition.next();
            } else {
                change_fadeDur();
                rendition.prev();
            }

            myduration = null;
            $btn = null;
        });
    }

    function turn_first() {
        // rtl
        if ((reverseDir()) ? $lastPage.hasClass('disabled') : $firstPage.hasClass('disabled') || myduration)
            return;
        book.ready.then(function () {
            myduration = true;
            viewer_hide(function () {
                rendition.display(book.spine.first().index);

                if (cover_existed) {
                    CoverShow();
                }
                myduration = null;
            });
        });
    }

    function turn_last() {
        // rtl
        if ((reverseDir() ? $firstPage.hasClass('disabled') : $lastPage.hasClass('disabled')) || myduration)
            return;

        book.ready.then(function () {
            //其他方法參考
            //const cfi = book.locations.cfiFromLocation(book.locations.length()-1);	
            //rendition.display(book.spine.last().index);
            myduration = true;
            viewer_hide(function () {
                if (readType == 'reflowable') {
                    $("#loader").show();
                    $(".epub-container").css("opacity", 0);
                    let href = book.spine.last().href;
                    rendition.display(book.spine.last().index);//display可填cfi或location
                    let turn_end = setInterval(function () {
                        if (href == location_href_font && href == location_href_lineH) {
                            setTimeout(function () {
                                if (book.settings.isVerticalWriting) {
                                    $(".epub-container")[0].scrollTop = $(".epub-container")[0].scrollHeight;
                                } else {
                                    if (rendition.settings.direction === 'ltr') {
                                        $(".epub-container")[0].scrollLeft = $(".epub-container")[0].scrollWidth;
                                    } else {
                                        let broswer = getBroswer();
                                        $(".epub-container")[0].scrollLeft =
                                                (broswer.broswer === 'Chrome') ? 0 :
                                                (broswer.broswer === 'IE') ? $(".epub-container")[0].scrollWidth : -$(".epub-container")[0].scrollWidth;
                                    }
                                }
                                // 執行relocated event，有時scrollLeft/Top偵測不到
                                rendition.emit('relocated', rendition.location);
                                $("#loader").hide();
                                $(".epub-container").animate({"opacity": 1}, 500);
                                myduration = null;
                            }, 300);
                            clearInterval(turn_end);
                        }
                    }, 100);
                } else {
                    rendition.display(book.spine.length - 1);
                    myduration = null;
                }
                bSetLastPage = true;
            });
        });
    }



    function cover_display(cfi) {
        if (!content_cover || Realmode === 'Single')
            return;

        if (cfi.indexOf(firstPage_cfi) < 0 && current_mode === 'single') {
            current_mode = 'double';
            rendition.spread(true, 10);
            rendition.resize(0, 0);
            rendition.resize("100%", "100%");
            return;
        } else if (cfi.indexOf(firstPage_cfi) > -1 && current_mode === 'double') {
            // 若書本內有設定封面 & 下一頁位置分別在左右兩側，以書內設定為主，封面將不單頁顯示
            if (((all_position[0] === 'left' && all_position[1] === 'right') ||
                    (all_position[0] === 'right' && all_position[1] === 'left')))
                return;
            current_mode = 'single';
            rendition.spread('none');
            rendition.resize(0, 0);
            rendition.resize("100%", "100%");
            return;
        }

    }


    return {
        "slideOut": slideOut,
        "slideIn": slideIn,
        "showLoader": showLoader,
        "hideLoader": hideLoader,
        "showDivider": showDivider,
        "hideDivider": hideDivider,
        "arrowKeys": arrowKeys,
        "contentCover": contentCover,
        "displayMode": currentMode
    };
}
;

function getBroswer() {
    var sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/edge\/([\d.]+)/)) ? sys.edge = s[1] :
            (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1] :
            (s = ua.match(/msie ([\d.]+)/)) ? sys.ie = s[1] :
            (s = ua.match(/firefox\/([\d.]+)/)) ? sys.firefox = s[1] :
            (s = ua.match(/chrome\/([\d.]+)/)) ? sys.chrome = s[1] :
            (s = ua.match(/opera.([\d.]+)/)) ? sys.opera = s[1] :
            (s = ua.match(/version\/([\d.]+).*safari/)) ? sys.safari = s[1] : 0;

    if (sys.edge)
        return {broswer: "Edge", version: sys.edge};
    if (sys.ie)
        return {broswer: "IE", version: sys.ie};
    if (sys.firefox)
        return {broswer: "Firefox", version: sys.firefox};
    if (sys.chrome)
        return {broswer: "Chrome", version: sys.chrome};
    if (sys.opera)
        return {broswer: "Opera", version: sys.opera};
    if (sys.safari)
        return {broswer: "Safari", version: sys.safari};

    return {broswer: "", version: "0"};
}

function viewer_hide(callback, duration) {
    $("#viewer").animate({'opacity': 0}, (duration || fade_dur), callback);
}

function viewer_show(callback, duration) {
    setTimeout(function () {
        $("#loader").hide();
        fade_dur = (readType !== 'pre-paginated') ? fade_dur : 400;
        $("#viewer").animate({'opacity': 1}, (duration || fade_dur), callback);
        fade_dur = 200;
    }, 150);
}

function epubContainer_hide() {
    $("#loader").show();
    $(".epub-container").css('opacity', 0);
}

function epubContainer_show(callback, duration) {
    $("#loader").hide();
    $(".epub-container").animate({'opacity': 1}, (duration || fade_dur), callback);
}

