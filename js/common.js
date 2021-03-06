$(document).ready(function () {
    imageCache();
    scrollFadeInOut();
    menuActive();
    mouseControl();
    scrollTransition();
    contentsFade('.prologue, .appeal, .video, .slowglow, .image__wrap .image, .image__wrap video');
    textAreaActive('.typo span');
    scrollSection();
});

$(window).on('load',function () {
    bannerTextClass();
    $('body').show();
});

$.getJSON('../data/data.json', function(data) {
    for(key in data){
        $('.work').append(`
            <div class="work__list">
                <a class="work__list--link link" href="${data[key].href}">${data[key].title}</a>
                <img class="work__list--img" src="${data[key].url}" alt="${data[key].title}"/>
                <div class="work__list--marquee">
                    <div class="marquee--text">
                        <div class="text">${data[key].title}</div>
                        <div class="text">${data[key].title}</div>
                        <div class="text">${data[key].title}</div>
                        <div class="text">${data[key].title}</div>
                    </div>
                </div>
            </div>
            `
        );
    }
});

function imageCache () {
    $('img').attr('src',function () {
		return $(this).attr('src') + "?a=" + Math.random()
	});
}

function scrollFadeInOut() {
    var position = $(window).scrollTop();
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        // if (scroll > position) {
        //     $('header').addClass('scroll-active');
        // } else {
        //     $('header').removeClass('scroll-active');
        // }
        position = scroll;

        if ( scroll == 0 ) {
            $('header').addClass('top');
        } else {
            $('header').removeClass('top');
        }

    });
}

function menuActive() {
    $('.menu--btn').click(function () {
        $('.menu--view').toggleClass('active');
    });
}

function mouseControl () {
    var cursor = $(".cursor");
    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2,
            opacity: 1
        });
    });

    $(window).mouseleave(function() {
        cursor.css({
            opacity: "1"
        });
    }).mouseenter(function() {
        cursor.css({
            opacity: "1"
        });
    });

    $(".link").mouseenter(function() {
        cursor.css({
            transform: "scale(3.2)"
        });
    }).mouseleave(function() {
        cursor.css({
            transform: "scale(1)"
        });
    });

    $(window).mousedown(function() {
        cursor.css({
            transform: "scale(.2)"
        });
    }).mouseup(function() {
        cursor.css({
            transform: "scale(1)"
        });
    });
}

function sectionBg() {
    $(window).scroll(function () {
        var el = $('.work').offset().top - 500;
        var scrollHeight = $(this).scrollTop();
        if (scrollHeight > el ) {
            $('body').addClass('bg1');
        } else {
            $('body').removeClass('bg1');
        }
    });
}

function mouseTtransition () {
    $('.asof').on("mousemove", function(e) {
        var window_width = $(this).width();
        var window_height = $(this).height();
        var mouseXpos = e.pageX;
        var mouseYpos = e.pageY;
        var X = (window_width - mouseXpos) * 0.02;
        var Y = (window_height - mouseYpos) * 0.02;
        $(".asof__preview--img img").css(
            "transform", "translate3d(" + -X + "px," + -Y + "px, 0)"
        );
    });
}

function scrollTest() {
    var sdegree = 0;

    $(window).scroll(function() {
        sdegree ++ ;
        sdegree = sdegree + 2 ;
        var srotate = "rotate(" + sdegree + "deg)";
        $("img").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
    });
}

function scrollTransition() {
    function topBanner(element) {
        $(window).scroll(function () {
            $(element).each(function () {
                var scroll = $(window).scrollTop();
                var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 300;
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                var pinkScroll = scroll / 50;

                if ( bottom_of_window > bottom_of_object && scroll < bottom_of_object ) {
                    $(this).css({'transform' : 'translate3d(0,'+ pinkScroll +'px,0)'})
                }
            });
        });
    }
    $(window).scroll(function(){
       topBanner();
    });
}

function contentsFade (name) {
    $(window).scroll(function () {
        $(name).each(function () {
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 420;
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var scroll = $(window).scrollTop();

            if ( bottom_of_window > bottom_of_object ) {
                $(this).addClass('active');
            }
        });
    });
}

function textAreaActive (name) {
    $(window).scroll(function () {
        $(name).each(function () {
            var bottom_of_window = $(window).scrollTop() + $(window).height() -200;
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var scroll = $(window).scrollTop();

            if ( bottom_of_window > bottom_of_object ) {
                $(this).addClass('active');
            }
        });
    });
}

function bannerTextClass() {
    $('.banner--text').addClass('active');
}

function scrollSection () {
    gsap.to(".asof__preview--top_text", {
        yPercent: 60,
        ease: "none",
        scrollTrigger: {
            trigger: ".asof__preview",
            scrub: 2
        },
    });

    gsap.to(".asof__preview--bottom_text", {
        yPercent: -60,
        ease: "none",
        scrollTrigger: {
            trigger: ".asof__preview",
            scrub: 2
        },
    });

    gsap.to(".left--direction", {
        xPercent: 20,
        ease: "none",
        scrollTrigger: {
            trigger: ".appeal",
            scrub: 2,
            start: "top center"
        },
    });

    gsap.to(".right--direction", {
        xPercent: -20,
        ease: "none",
        scrollTrigger: {
            trigger: ".appeal",
            scrub: 2,
            start: "top center"
        },
    });

    gsap.to(".card--image", {
        xPercent: -7,
        ease: "none",
        scrollTrigger: {
            trigger: ".card",
            scrub: 1,
            start: "top center"
        },
        rotation: -2
    });

    gsap.to(".card__info--text", {
        xPercent: 7,
        ease: "none",
        scrollTrigger: {
            trigger: ".card",
            scrub: 1,
            start: "top center"
        },
        rotation: 2
    });
}

// $(function () {
//     $("#layout__wrap").fadeIn(500, function () {
//         $(this).animate({
//             "top": "150px"
//         },1000);
//     });
//
//     $("a").click(function () {
//         var url = $(this).attr("href");
//         $("#layout__wrap").animate({
//             "opacity": "0",
//             "top": "10px"
//         }, 500, function () {
//             document.location.href = url;
//         });
//
//         return false;
//     });
// });
