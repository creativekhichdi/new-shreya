/*--------------------------
    Project Name: Logisti
    Version: 1.2
    Author: 7oorof
    Devloped by: Ahmed Abdallah (a.abdallah999@gmail.com)
    Relase Date: November 2019
    Last Update: April 2020
---------------------------*/

/*---------------------------
      Table of Contents
    --------------------

    01- Pre Loading
    02- Mobile Menu
    03- Sticky Navbar
    04- Popup Search
    05- Scroll Top Button
    06- Equal Height Elements
    07- Set Background-img to section
    08- Add active class to accordions
    09- Load More Items
    10- Add Animation to About Img
    11- Owl Carousel
    12- Popup Video
    13- CounterUp
    14- Projects Filtering and Sorting

 ----------------------------*/

$(function () {

    // Global variables
    var $win = $(window);

    /*==========  Pre Loading   ==========*/
    $win.on('load', function () {
        $(".preloader").fadeOut(4000);
        $(".preloader").remove();
    });

    /*==========   Mobile Menu   ==========*/
    var $navToggler = $('.navbar-toggler');
    $navToggler.on('click', function () {
        $(this).toggleClass('actived');
    })
    $navToggler.on('click', function () {
        $('.navbar-collapse').toggleClass('menu-opened');
    })

    /*==========   Sticky Navbar   ==========*/
    $win.on('scroll', function () {
        if ($win.width() >= 992) {
            var $navbar = $('.navbar');
            if ($win.scrollTop() > 80) {
                $navbar.addClass('fixed-navbar');
            } else {
                $navbar.removeClass('fixed-navbar');
            }
        }
    });

    /*==========  Popup Search   ==========*/
    // Show Module Search
    $('.module__btn-search').on('click', function (e) {
        e.preventDefault();
        $('.module__search-container').toggleClass('active', 'inActive').removeClass('inActive');
    });
    // Close Module Search
    $('.close-search').on('click', function () {
        $('.module__search-container').removeClass('active').addClass('inActive');
    });

    /*==========   Scroll Top Button   ==========*/
    var $scrollTopBtn = $('#scrollTopBtn');
    // Show Scroll Top Button
    $win.on('scroll', function () {
        if ($(this).scrollTop() > 700) {
            $scrollTopBtn.addClass('actived');
        } else {
            $scrollTopBtn.removeClass('actived');
        }
    });
    // Animate Body after Clicking on Scroll Top Button
    $scrollTopBtn.on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    /*==========   Equal Height Elements   ==========*/
    var maxHeight = 0;
    $(".equal-height").each(function () {
        if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
    });
    $(".equal-height").height(maxHeight);


    /*==========   Set Background-img to section   ==========*/
    $('.bg-img').each(function () {
        var imgSrc = $(this).children('img').attr('src');
        $(this).parent().css({
            'background-image': 'url(' + imgSrc + ')',
            'background-size': 'cover',
            'background-position': 'center',
        });
        $(this).parent().addClass('bg-img');
        $(this).remove();
    });

    /*==========   Add active class to accordions   ==========*/
    $('.accordion__item-header').on('click', function () {
        $(this).addClass('opened')
        $(this).parent().siblings().find('.accordion__item-header').removeClass('opened')
    })
    $('.accordion__item-title').on('click', function (e) {
        e.preventDefault()
    });

    /*==========   Load More Items  ==========*/
    function loadMore(loadMoreBtn, loadedItem) {
        $(loadMoreBtn).on('click', function (e) {
            e.preventDefault();
            $(this).fadeOut();
            $(loadedItem).fadeIn();
        })
    }

    loadMore('.loadMoreBlog', '.hidden-blog-item');
    loadMore('.loadMoreServices', '.hidden-service');
    loadMore('.loadMoreProjects', '.project-hidden > .project-item');

    /*==========   Add Animation to About Img ==========*/
    if ($(".about").length > 0) {
        $(window).on('scroll', function () {
            var skillsOffset = $(".about").offset().top - 100,
                skillsHight = $(this).outerHeight(),
                winScrollTop = $(window).scrollTop();
            if (winScrollTop > skillsOffset - 1 && winScrollTop < skillsOffset + skillsHight - 1) {
                $('.about__img').addClass('animate-img');
            }
        });
    }

    /*==========   Add Animation to About Img ==========*/
    if ($(".about").length > 0) {
        $(window).on('scroll', function () {
            var skillsOffset = $(".about").offset().top - 100,
                skillsHight = $(this).outerHeight(),
                winScrollTop = $(window).scrollTop();
            if (winScrollTop > skillsOffset - 1 && winScrollTop < skillsOffset + skillsHight - 1) {
                $('.about__img2').addClass('animate-img2');
            }
        });
    }

    /*==========   Owl Carousel  ==========*/
    $('.carousel').each(function () {
        $(this).owlCarousel({
            nav: $(this).data('nav'),
            dots: $(this).data('dots'),
            loop: $(this).data('loop'),
            margin: $(this).data('space'),
            center: $(this).data('center'),
            dotsSpeed: $(this).data('speed'),
            autoplay: $(this).data('autoplay'),
            transitionStyle: $(this).data('transition'),
            animateOut: $(this).data('animate-out'),
            animateIn: $(this).data('animate-in'),
            autoplayTimeout: 15000,
            responsive: {
                0: {
                    items: 1,
                },
                400: {
                    items: $(this).data('slide-sm'),
                },
                700: {
                    items: $(this).data('slide-md'),
                },
                1000: {
                    items: $(this).data('slide'),
                }
            }
        });
    });
    // Owl Carousel With Thumbnails
    $('.thumbs-carousel').owlCarousel({
        thumbs: true,
        thumbsPrerendered: true,
        loop: true,
        margin: 0,
        autoplay: $(this).data('autoplay'),
        nav: $(this).data('nav'),
        dots: $(this).data('dots'),
        dotsSpeed: $(this).data('speed'),
        transitionStyle: $(this).data('transition'),
        animateOut: $(this).data('animate-out'),
        animateIn: $(this).data('animate-in'),
        autoplayTimeout: 15000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*==========  Popup Video  ==========*/
    $('.popup-video').magnificPopup({
        mainClass: 'mfp-fade',
        removalDelay: 0,
        preloader: false,
        fixedContentPos: false,
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src',
        }
    });

    /*==========   counterUp  ==========*/
    $(".counter").counterUp({
        delay: 10,
        time: 4000
    });

    /*==========   Projects Filtering and Sorting  ==========*/
    $("#filtered-items-wrap").mixItUp();
    $(".projects-filter li a").on("click", function (e) {
        e.preventDefault();
    });

});










// Produces width of .barChart
$(document).ready(function() {
    $('.graph-bar').each(function() {
       var dataWidth = $(this).data('value');
       $(this).css("width", dataWidth + "1px");
    });
  });

  // Positioning of .bubbleChart
  $(document).ready(function() {
    $('.chart-bubble').each(function() {
      // Bubble Size
      var bubbleSize = $(this).data('value');
      $(this).css("width", function() {
        return (bubbleSize * 20) + "px"
      });
      $(this).css("height", function() {
        return (bubbleSize * 20) + "px"
      });

      // Bubble Position
      var posX = $(this).data('x');
      var posY = $(this).data('y');
      $(this).css("left", function() {
        return posX - (bubbleSize * 0.8) + "%"
      });
      $(this).css("bottom", function() {
        return posY - (bubbleSize * 0.2) + "%"
      });
    });
  });



  $(window).on('resize', function() {

    if ($(this).width() < 760) {
       $('tr td:first-child').click(function(){

          $(this).siblings().css({'display': 'inline-block'});

          var $this = $(this);
          setTimeout(function(){
          $this.siblings().css('transform', 'translateY(0)');
         },0);

          $('tr td:first-child').not($(this)).siblings().css({'display': 'none', 'transform': 'translateY(-9999px)'});
      });
    } else if ($(this).width() > 760) {
        //unbind click : name is not clickable when screen is > 700px
        $( "tr td:first-child").unbind( "click" );
        //remove with jquery added styles
        $('tr td:first-child').siblings().css({'display': '', 'transform': ''});
    }

}).resize();