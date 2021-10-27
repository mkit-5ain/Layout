$(document).ready(function () {
    imageCache();
    alert
});

function imageCache () {
    $('img').attr('src',function () {
		return $(this).attr('src') + "?a=" + Math.random()
	});
}
