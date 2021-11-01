$(document).ready(function () {
    imageCache();
    scrollFadeInOut();
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
    `, "color:black")
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
