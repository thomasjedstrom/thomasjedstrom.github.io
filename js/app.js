$(function () {

	// MASTHEAD fade in effects

	$('#mastheadBanner').fadeIn(2000);
	$('#myName').delay(1500).fadeIn(3000);
	$('#myTitle').delay(2500).fadeIn(3000);


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

    $('#newspaper').hover(function(){
		$('#newspapershadow').fadeIn("slow");
	})
    $('#newspaper').mouseout(function(){
		$('#newspapershadow').fadeOut("slow");
	})

	$('#suit').hover(function(){
		$('#suitshadow').fadeIn("slow");
	})	
	$('#suit').mouseout(function(){
		$('#suitshadow').fadeOut("slow");
	})

	$('#briefcase').hover(function(){
		$('#briefcaseshadow').fadeIn("slow");
	})	
	$('#briefcase').mouseout(function(){
		$('#briefcaseshadow').fadeOut("slow");
	})

	$('#octocat').hover(function(){
		$('#octocatshadow').fadeIn("slow");
	})	
	$('#octocat').mouseout(function(){
		$('#octocatshadow').fadeOut("slow");
	})

	$('#piano').hover(function(){
		$('#pianoshadow').fadeIn("slow");
	})	
	$('#piano').mouseout(function(){
		$('#pianoshadow').fadeOut("slow");
	})

})

