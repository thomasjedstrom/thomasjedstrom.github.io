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

    $('#newspaperclicker').hover(function(){
		$('#newspapershadow').fadeIn("slow");
	})
    $('#newspaperclicker').mouseout(function(){
		$('#newspapershadow').fadeOut("slow");
	})

	$('#suitclicker').hover(function(){
		$('#suitshadow').fadeIn("slow");
	})	
	$('#suitclicker').mouseout(function(){
		$('#suitshadow').fadeOut("slow");
	})

	$('#briefcaseclicker').hover(function(){
		$('#briefcaseshadow').fadeIn("slow");
	})	
	$('#briefcaseclicker').mouseout(function(){
		$('#briefcaseshadow').fadeOut("slow");
	})

	$('#octocatclicker').hover(function(){
		$('#octocatshadow').fadeIn("slow");
	})	
	$('#octocatclicker').mouseout(function(){
		$('#octocatshadow').fadeOut("slow");
	})

	$('#pianoclicker').hover(function(){
		$('#pianoshadow').fadeIn("slow");
	})	
	$('#pianoclicker').mouseout(function(){
		$('#pianoshadow').fadeOut("slow");
	})




// POPUPS
	$(".close").click(function(){
		contact[0].style.display = "none";
		portfolio[0].style.display = "none";
		music[0].style.display = "none";
	})

	// CONTACT
	var contact = $('#contact-box');
	$("#donut").click(function(){
		contact[0].style.display = "block";
	})
	$("#contactword").click(function(){
		contact[0].style.display = "block";
	})
	
	// PORTFOLIO
	var portfolio = $("#portfolio-box")
	$("#briefcaseclicker").click(function(){
		portfolio[0].style.display = "block";
	})

	// MUSIC
	var music = $("#music-box")
	$("#pianoclicker").click(function(){
		music[0].style.display = "block";
	})	


})

