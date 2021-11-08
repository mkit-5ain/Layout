$(document).ready(function () {
    console.log(`%c
    __        ______  __       __           _____  __    __  __    __  ________         ______   __    __
    /  |      /      |/  \     /  |         /     |/  |  /  |/  \  /  |/        |       /      \ /  |  /  |
    $$ |      $$$$$$/ $$  \   /$$ |         $$$$$ |$$ |  $$ |$$  \ $$ |$$$$$$$$/       /$$$$$$  |$$ |  $$ |
    $$ |        $$ |  $$$  \ /$$$ |            $$ |$$ |  $$ |$$$  \$$ |$$ |__          $$ \__$$/ $$ |  $$ |
    $$ |        $$ |  $$$$  /$$$$ |       __   $$ |$$ |  $$ |$$$$  $$ |$$    |         $$      \ $$ |  $$ |
    $$ |        $$ |  $$ $$ $$/$$ |      /  |  $$ |$$ |  $$ |$$ $$ $$ |$$$$$/           $$$$$$  |$$ |  $$ |
    $$ |_____  _$$ |_ $$ |$$$/ $$ |      $$ \__$$ |$$ \__$$ |$$ |$$$$ |$$ |_____       /  \__$$ |$$ \__$$ |
    $$       |/ $$   |$$ | $/  $$ |      $$    $$/ $$    $$/ $$ | $$$ |$$       |      $$    $$/ $$    $$/
    $$$$$$$$/ $$$$$$/ $$/      $$/        $$$$$$/   $$$$$$/  $$/   $$/ $$$$$$$$/        $$$$$$/   $$$$$$/
    `, "color:#028a58")
    imageCache();
    scrollFadeInOut();
    menuActive();
    mouseControl();
    // sectionBg();
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
$(window).scroll(function() {
    var el = $('.asof').offset().top;
    var scrollHeight = $(this).scrollTop();
    if (scrollHeight > el ) {
        mouseTtransition();
    } else {

    }
    // if ($(this).scrollTop() >= Math.ceil($('.asof').offset().top)) {
    //
    // } else {
    //
    // }
});
function mouseTtransition () {
    $(document).on("mousemove", function(e) {
        var window_height = $(this).height();
        var window_width = $(this).width();
        var mouseXpos = e.pageX;
        var mouseYpos = e.pageY;
        var X = (window_width / 2 - mouseXpos) * 0.05;
        var Y = (window_height / 2 - mouseYpos) * 0.05;
        $(".transform-section img").css(
            "transform", "translateX(" + X + "px) translateY(" + Y + "px)"
        );
    });
}
