$ = jQuery;
$(document).ready(function(){
 

  

    $('.jqthumb > img').jqthumb({
        classname: 'jqthumb',
        width: "100%",
        height: "100%",
        position:{
            x: 0, 
            y: 0
        }
  
    });


 



    ;(function($,window,undefiend){
        "use strict"
        var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        function bannerHeight(a){
            var winH = $(window).height();
            a.each(function(){
                $(this).css('height',winH);
                $(this).find('.am-slides > li').css('height',winH);
            });
        }
        var addAnimate = function(){
            $('.hp-banner-box').find('.animation').addClass('active-animeta');
            $('.hp-banner-box .am-slides > li').each(function(){
                if(!$(this).hasClass("am-active-slide")){
                    $(this).find('.animation').removeClass('active-animeta');
                }
            });
        }
        var hpBannerSize = function() {
            $('#hpBanner').find('.am-slides').find('li').each(function(){

                var bg = $(this).attr('data-bg');
                var bgArr = bg.split('||');
                var winW = $(window).width();
                var setBg1 = bgArr[0],
                    setBg2 = bgArr[1] || bgArr[0];
                if(winW > 768) {
                    $(this).css('background', 'url(' + setBg1 + ') center center no-repeat');
                } else if (winW < 768) {
                    $(this).css('background', 'url(' + setBg2 + ') center center no-repeat');
                }
            });
        }
        hpBannerSize();
        window.addEventListener(resizeEvt,function(){
            hpBannerSize();
        }, false);
        $('.am-slider').each(function(){
            var id = $(this).attr('id'),
                liNum = $(this).find('.am-slides > li').size();
            if($(this).hasClass('full-slider-banner')){
                bannerHeight($(this));
                window.addEventListener(resizeEvt,function(){
                    bannerHeight($('.am-slider'));
                }, false);
            }
            var sliderLiTouch = function(){
                if(liNum < 2) {
                    return false;
                } else {
                    return true;
                }
            }
            $('#' + id).flexslider({
                reverse: false,
                pauseOnHover: true,
                video: false,
                touch: sliderLiTouch(),
                start: function(){
                    $('.slider-mask').css('display','none');
                    $(".am-slides").find('li').fadeIn(300);
                    hpBannerSize();
                    addAnimate();
                },
                after: function(){
                    addAnimate();
                }
            });
            if(liNum < 2) {
                $(this).find(".am-direction-nav").css('display','none');
            } else {
                $(this).find(".am-direction-nav").css('display','block');
            }
            $(this).find('.am-prev > .iconfont').html($(this).attr('data-parrow'));
            $(this).find('.am-next > .iconfont').html($(this).attr('data-larrow'));
        });
    }(jQuery,window,document));
    ;(function($,window,undefiend){
        "use strict";
        $(".case-list").slick({
            slidesToShow: 4,
            autoplay: false ,
            autoplaySpeed: 3000 ,
            speed: 300 ,
            slidesToScroll: 4,
            draggable: false,
            slidePrev: "&#xe64e;",
            slideNext: "&#xe75b;",
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidePrev: "&#xe64e;",
                    slideNext: "&#xe75b;",
                    slidesToShow: 4
                }
            },
                {
                    breakpoint: 992,
                    settings: {
                        slidePrev: "&#xe64e;",
                        slideNext: "&#xe75b;",
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidePrev: "&#xe64e;",
                        slideNext: "&#xe75b;",
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 568,
                    settings: {
                        slidePrev: "&#xe64e;",
                        slideNext: "&#xe75b;",
                        slidesToShow: 1
                    }
                }]
        });
    }(jQuery,window,document));
    ;(function($,window,undefined){
        "use strict"
        var winH = $(window).height(),
            winW = $(window).width(),
            headH = $("#headerBox").height(),
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            headNav = $(".header-nav"),
            navList = $("#navList"),
            navLi = $("#navList > li"),
            pageBox = $(".page-box"),
            pageMask = $('.page-mask'),
            navBtn = $('#navBtn'),
            lineOne = $('#navBtn .one'),
            lineTwo = $('#navBtn .two'),
            linethree = $('#navBtn .three');
        navBtn.bind("click",function(e){
            if(!$(this).hasClass("open")){
                openMenu();
            } else {
                closeMenu();
            }
        });
        var navResize = function() {
            var winH = $(window).height();
            var winW = $(window).width();
            headH = $("#headerBox").height(),
                headNav.css('max-height',winH - headH + "px");
            if(winW > 992) {
                pageMask.css('display','none');
                if(navList.css('display') === 'none') {
                    navList.css('display','block');
                }
            } else {
                navList.css('display','none');
            }
        }
        navResize();
        window.addEventListener(resizeEvt, function(){
            navResize();
        }, false);
        function openMenu(){
            navList.slideDown(300);
            navBtn.addClass("open");
            navLi.addClass('active');
            pageMask.fadeIn(300);
            lineTwo.fadeOut(100);
            setTimeout(function(){
                lineOne.addClass('rotate30');
                linethree.addClass('rotate150');
                setTimeout(function(){
                    lineOne.addClass('rotate45');
                    linethree.addClass('rotate135');
                },100);
            },10);
        }
        function closeMenu(){
            navList.slideUp(300);
            navLi.removeClass('active');
            navBtn.removeClass("open");
            pageMask.fadeOut(300);
            lineTwo.fadeIn(150);
            lineOne.removeClass('rotate45').addClass('rotate30');
            linethree.removeClass('rotate135').addClass('rotate150');
            setTimeout(function(){
                lineOne.removeClass('rotate30');
                linethree.removeClass('rotate150');
            },50);
        }
    }(jQuery,window,document));

    ;(function($,window,undefined){
        var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        var navdropdown = function(ele){
            var winW = $(window).width();
            if(winW > 992){
                ele.unbind('click');
                ele.bind({
                    mouseover:function(){
                        if(ele.children('.dropdown-menu').css('display') == 'none'){
                            ele.siblings('li').children('.dropdown-menu').slideUp(300);
                            ele.children('.dropdown-menu').slideDown(300);
                        }
                    },
                    mouseleave:function(){
                        ele.children('.dropdown-menu').slideUp(300);
                    }
                });
            } else {
                ele.unbind('mouseover mouseout');
                ele.bind('click',function(){
                    if(ele.children('.dropdown-menu').css('display') == 'none'){
                        ele.siblings('li').children('.dropdown-menu').slideUp();
                        ele.children('.dropdown-menu').slideDown();
                    } else {
                        ele.children('.dropdown-menu').slideUp();
                    }
                });
            }
        }
        $('#navList > li').each(function(){
            var	that = $(this);
            navdropdown(that);
        });
        window.addEventListener(resizeEvt, function(){
            $('#navList > li').each(function(){
                var	that = $(this);
                navdropdown(that);
            });
        }, false);
    }(jQuery,window,document));

    (function($,window,undefiend){
        "use strict"
        $('#common_menu').each(function(){
            var that = $(this),
                productClass = $('.list-sub-menu');
            that.find('.dorp-menu').each(function(){
                $(this).attr('href',"javascript:;");
                $(this).append('<span class="iconfont">&#xe75b;<span>')
            });
            that.children('li').each(function(){
                if($(this).hasClass('curr')){
                    $(this).find('.list-sub-menu').show();
                }
                $(this).on('click',function(){
                    if(event.target !== this){
                        if($(this).hasClass('curr')){
                            $(this).removeClass('curr');
                            $(this).children('.list-sub-menu').slideUp(300);
                        } else {
                            $(this).addClass('curr');
                            $(this).children('.list-sub-menu').slideDown(300);
                            $(this).siblings('li').removeClass('curr');
                            $(this).siblings('li').children('.list-sub-menu').slideUp(300);
                        }
                    }
                });
            });
        });
    }(jQuery,window,document));
    ;(function(){
        "use strict"
        $('.common-alter-box').each(function(){
            var alterBtn = $(this).find('.alter-btn'),
                colseBtn = $(this).find('.close-btn'),
                alterMask = $(this).find('.common-alter-mask'),
                alterVideo = $(this).find('video').get(0);
            alterBtn.click(function(){
                alterMask.fadeIn(200);
                if(alterVideo){
                    alterVideo.play();
                }
            });
            colseBtn.click(function(){
                alterMask.fadeOut(200);
                if(alterVideo){
                    alterVideo.pause();
                }
            });
            alterMask.click(function(){
                if(event.target === this){
                    alterMask.fadeOut(200);
                    if(alterVideo){
                        alterVideo.pause();
                    }
                }
            });
        });
    }());

    ;(function(){
        "use strict"
        $('.common-alter-box').each(function(){
            var alterBtn = $(this).find('.alter-btn');
            var	colseBtn = $('.common-alter-mask .close-btn'),
                alterMask = $(this).find('.common-alter-mask').length === 0 ? $('#altetMask') : $(this).find('.common-alter-mask');
            alterBtn.click(function(){
                alterMask.fadeIn(200);
            });
            colseBtn.click(function(){
                alterMask.fadeOut(200);
            });
            alterMask.click(function(){
                if(event.target === this){
                    alterMask.fadeOut(200);
                }
            });
        });
    }());
    ;(function(){
        "use strict"
        $('#scroll_up').click(function(){
            $('body,html').animate({
                scrollTop : 0
            },500);
        });
    }());
    ;(function($,window,undefiend) {
        "use strict";
        $('.tab-click').each(function(){
            tab($(this),'click');
        });
        $('.tab-hover').each(function(){
            tab($(this),'mouseover');
        });
        function tab(parent,fun) {
            if(parent.length != 0) {
                var tabContent = parent.find('.tab-content');
                var tabMenu = parent.find('.tab-menu').find('li');
                tabMenu.eq(0).addClass('curr');
                tabMenu.on(fun, function() {
                    var that = $(this);
                    var index = that.index();
                    that.siblings('li').removeClass('curr');
                    that.addClass('curr');
                    tabContent.eq(index).show();
                    tabContent.eq(index).siblings('.tab-content').hide();
                });
            }
        }
    }(jQuery,window,document));
    ;
});