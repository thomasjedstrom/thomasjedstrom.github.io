$(function () {
	$('#mastheadBanner').fadeIn(2000);
	$('#myName').delay(2000).fadeIn(3000);
	$('#myTitle').delay(4000).fadeIn(3000);


	$(window).scroll(function(){
		$(".fade-out").css("opacity", 1 - $(window).scrollTop() / 250);
	});
})
