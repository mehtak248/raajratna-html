/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function() {

    "use strict";

    /* Preloader
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    setTimeout(function() {
        $('.loader_bg').fadeToggle();
    }, 1500);

    /* JQuery Menu
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $(document).ready(function() {
        $('header nav').meanmenu();
    });

    /* Tooltip
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    /* sticky
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $(document).ready(function() {
        $(".sticky-wrapper-header").sticky({ topSpacing: 0 });
    });

    /* Mouseover
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $(document).ready(function() {
        $(".main-menu ul li.megamenu").mouseover(function() {
            if (!$(this).parent().hasClass("#wrapper")) {
                $("#wrapper").addClass('overlay');
            }
        });
        $(".main-menu ul li.megamenu").mouseleave(function() {
            $("#wrapper").removeClass('overlay');
        });
    });

    /* NiceScroll
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $(".brand-box").niceScroll({
        cursorcolor: "#9b9b9c",
    });

    /* NiceSelect
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $(document).ready(function() {
        $('select').niceSelect();
    });

    /* OwlCarousel - Blog Post slider
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $(document).ready(function() {
        var owl = $('.carousel-slider-post');
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        });
    });



    /* OwlCarousel - Banner Rotator Slider
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $(document).ready(function() {
        var owl = $('.banner-rotator-slider');
        owl.owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true
        });
    });

    /* OwlCarousel - Product Slider
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $(document).ready(function() {
        var owl = $('#product-in-slider');
        owl.owlCarousel({
            loop: true,
            nav: true,
            margin: 10,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                960: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
        owl.on('mousewheel', '.owl-stage', function(e) {
            if (e.deltaY > 0) {
                owl.trigger('next.owl');
            } else {
                owl.trigger('prev.owl');
            }
            e.preventDefault();
        });
    });

    /* Scroll to Top
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $(window).on('scroll', function() {
        scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("#back-to-top").addClass('b-show_scrollBut')
        } else {
            $("#back-to-top").removeClass('b-show_scrollBut')
        }
    });
    $("#back-to-top").on("click", function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });

    /* Contact-form
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    $.validator.setDefaults({
        submitHandler: function() {
            alert("submitted!");
        }
    });

    $(document).ready(function() {
        $("#contact-form").validate({
            rules: {
                firstname: "required",
                email: {
                    required: true,
                    email: true
                },
                lastname: "required",
                message: "required",
                agree: "required"
            },
            messages: {
                firstname: "Please enter your firstname",
                email: "Please enter a valid email address",
                lastname: "Please enter your lastname",
                username: {
                    required: "Please enter a username",
                    minlength: "Your username must consist of at least 2 characters"
                },
                message: "Please enter your Message",
                agree: "Please accept our policy"
            },
            errorElement: "div",
            errorPlacement: function(error, element) {
                // Add the `help-block` class to the error element
                error.addClass("help-block");

                if (element.prop("type") === "checkbox") {
                    error.insertAfter(element.parent("input"));
                } else {
                    error.insertAfter(element);
                }
            },
            highlight: function(element, errorClass, validClass) {
                $(element).parents(".col-md-4, .col-md-12").addClass("has-error").removeClass("has-success");
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).parents(".col-md-4, .col-md-12").addClass("has-success").removeClass("has-error");
            }
        });
    });

    /* heroslider
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    var swiper = new Swiper('.heroslider', {
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: 'auto',
        paginationClickable: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
    });


    /* Product Filters
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    var swiper = new Swiper('.swiper-product-filters', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
                slidesPerColumn: 1,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerColumn: 1,
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10,
                slidesPerColumn: 1,
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        }
    });

    /* Countdown
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            var $this = $(this).html(event.strftime('' +
                '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> ' +
                '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> ' +
                '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> ' +
                '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> ' +
                '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
        });
    });

    /* Deal Slider
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $('.deal-slider').slick({
        dots: false,
        infinite: false,
        prevArrow: '.previous-deal',
        nextArrow: '.next-deal',
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    /* News Slider
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $('#news-slider').slick({
        dots: false,
        infinite: false,
        prevArrow: '.previous',
        nextArrow: '.next',
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    /* Fancybox
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $(".fancybox").fancybox({
        maxWidth: 1200,
        maxHeight: 600,
        width: '70%',
        height: '70%',
    });

    /* Toggle sidebar
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

    $(document).ready(function() {
        $('#sidebarCollapse').on('click', function() {
            $('#sidebar').toggleClass('active');
            $(this).toggleClass('active');
        });
    });

    /* Product slider 
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
    // optional
    $('#blogCarousel').carousel({
        interval: 5000
    });

    $('.navbar-toggler').on('click', function() {
        $('.menu-area').slideToggle();
    });

    $('.main-menu ul>li.dropdown').on('click', function(e) {
        $(this).find('ul').slideToggle();
    });
});

$(window).scroll(function() {
    if ($(window).scrollTop() >= 50) {
        $('header').addClass('fixed-header');
        $('#header').addClass('fixed-header');
    } else {
        $('header').removeClass('fixed-header');
        $('#header').removeClass('fixed-header');
    }
});


var memories = document.querySelectorAll(".memory-container"); // All the memories that appear as we scroll down the timeline
var circles = document.querySelectorAll(".memory"); // The greater memory element, but visually, simply the circle attached to the timeline.

function elementInView(el) {
    // The vertical distance between the top of the page and the top of the element.
    var elementOffset = $(el).offset().top;
    // The height of the element, including padding and borders.
    var elementOuterHeight = $(el).outerHeight();
    // Height of the window without margins, padding, borders.
    var windowHeight = $(window).height();
    // The vertical distance between the top of the page and the top of the viewport.
    var scrollOffset = $(this).scrollTop();

    if (elementOuterHeight < windowHeight) {
        // Element is smaller than viewport.
        if (scrollOffset > (elementOffset + elementOuterHeight - windowHeight)) {
            // Element is completely inside viewport, reveal the element!
            return true;
        }
    } else {
        // Element is larger than the viewport, handle visibility differently.
        // Consider it visible as soon as it's top half has filled the viewport.
        if (scrollOffset > elementOffset) {
            // The top of the viewport has touched the top of the element, reveal the element!
            return true;
        }
    }
    return false;
}

function handler() {
    for (var i = 0; i < circles.length; i++) {
        if (elementInView(circles[i])) {
            memories[i].classList.add("in-view");
            circles[i].classList.add("in-view");
        }
    }
}

$(window).on('DOMContentLoaded load resize scroll', handler);

(function() {
    // VARIABLES
    const timeline = document.querySelector(".timeline ol"),
        elH = document.querySelectorAll(".timeline li > div"),
        arrows = document.querySelectorAll(".timeline .arrows .arrow"),
        arrowPrev = document.querySelector(".timeline .arrows .arrow__prev"),
        arrowNext = document.querySelector(".timeline .arrows .arrow__next"),
        firstItem = document.querySelector(".timeline li:first-child"),
        lastItem = document.querySelector(".timeline li:last-child"),
        xScrolling = 280,
        disabledClass = "disabled";

    // START
    window.addEventListener("load", init);

    function init() {
        setEqualHeights(elH);
        animateTl(xScrolling, arrows, timeline);
    }

    // SET EQUAL HEIGHTS
    function setEqualHeights(el) {
        let counter = 0;
        for (let i = 0; i < el.length; i++) {
            const singleHeight = el[i].offsetHeight;

            if (counter < singleHeight) {
                counter = singleHeight;
            }
        }

        for (let i = 0; i < el.length; i++) {
            el[i].style.height = `${counter}px`;
        }
    }

    // CHECK IF AN ELEMENT IS IN VIEWPORT
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // SET STATE OF PREV/NEXT ARROWS
    function setBtnState(el, flag = true) {
        if (flag) {
            el.classList.add(disabledClass);
        } else {
            if (el.classList.contains(disabledClass)) {
                el.classList.remove(disabledClass);
            }
            el.disabled = false;
        }
    }

    // ANIMATE TIMELINE
    function animateTl(scrolling, el, tl) {
        let counter = 0;
        for (let i = 0; i < el.length; i++) {
            el[i].addEventListener("click", function() {
                if (!arrowPrev.disabled) {
                    arrowPrev.disabled = true;
                }
                if (!arrowNext.disabled) {
                    arrowNext.disabled = true;
                }
                const sign = this.classList.contains("arrow__prev") ? "" : "-";
                if (counter === 0) {
                    tl.style.transform = `translateX(-${scrolling}px)`;
                } else {
                    const tlStyle = getComputedStyle(tl);
                    // add more browser prefixes if needed here
                    const tlTransform =
                        tlStyle.getPropertyValue("-webkit-transform") ||
                        tlStyle.getPropertyValue("transform");
                    const values =
                        parseInt(tlTransform.split(",")[4]) +
                        parseInt(`${sign}${scrolling}`);
                    tl.style.transform = `translateX(${values}px)`;
                }

                setTimeout(() => {
                    isElementInViewport(firstItem) ?
                        setBtnState(arrowPrev) :
                        setBtnState(arrowPrev, false);
                    isElementInViewport(lastItem) ?
                        setBtnState(arrowNext) :
                        setBtnState(arrowNext, false);
                }, 1100);

                counter++;
            });
        }
    }

})();