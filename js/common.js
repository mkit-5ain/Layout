$(document).ready(function () {
    imageCache();
    scrollFadeInOut();
    menuActive();
    mouseControl();
    // sectionBg();
    // areaMouseMove();
    mouseTtransition();
    viewLeftRight();
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
        if (scroll > position) {
            $('header').addClass('scroll-active');
        } else {
            $('header').removeClass('scroll-active');
        }
        position = scroll;
    });
}

function menuActive() {
    $('.menu-btn').click(function () {
        $('.menu-view').toggleClass('active');
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
            opacity: "0"
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
function areaMouseMove() {
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var eleHeight = $('.asof').outerHeight();
        var eleArea = ($('.asof').offset().top.toFixed());
        var eleValue =  (Number(eleHeight) + Number(eleArea));
        var eleTotalHeight = eleValue - $(window).height();
        if (scrollTop >= eleArea ) {
            mouseTtransition();
        }
    });
}

function mouseTtransition () {
    $('.asof').on("mousemove", function(e) {
        var window_height = $(this).height();
        var window_width = $(this).width();
        var mouseXpos = e.pageX;
        var mouseYpos = e.pageY;
        var X = (window_width - mouseXpos) * 0.02;
        var Y = (window_height - mouseYpos) * 0.02;
        $(".asof__preview--img img").css(
            "transform", "translateX(" + X + "px) translateY(" + Y + "px)"
        );
    });
}

function viewLeftRight () {
    var viewWidth = $(window).width() / 2;
    var viewHeight = $(window).height() / 2;

    console.log(viewWidth);
    console.log(viewHeight.toFixed());
}
