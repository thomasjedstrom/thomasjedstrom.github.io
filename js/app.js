$(function () {

	// MASTHEAD fade in effects

	$('#mastheadBanner').fadeIn(2000);
	$('#myName').delay(2000).fadeIn(3000);
	$('#myTitle').delay(4000).fadeIn(3000);


	// MASTHEAD fade out effects

	$(window).scroll(function(){
		$(".fade-out").css("opacity", 2 - $(window).scrollTop() / 250);
	});


	// SKROLLR initialization

    var s = skrollr.init({
        render: function(data) {
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });



    // SLIDE IN effects
 
})
