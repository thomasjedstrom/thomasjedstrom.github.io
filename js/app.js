$(function () {


	// MEDIA QUERY FOR SKROLLR AND SCROLLING
	var mq = window.matchMedia( "(min-width: 1025px)" );

	if (mq.matches){

		$(window).resize(function(){
			location.reload();
		});		

		// PREVENT SCROLLING
		var keys = {37: 1, 38: 1, 39: 1, 40: 1};

		function preventDefault(e) {
			e = e || window.event;
			if (e.preventDefault){
				e.preventDefault();
				e.returnValue = false;
			}  
		}
		function preventDefaultForScrollKeys(e) {
			if (keys[e.keyCode]) {
				preventDefault(e);
				return false;
			}
		}
		function disableScroll() {
			if (window.addEventListener){
				window.addEventListener('DOMMouseScroll', preventDefault, false);
			}
			window.onwheel 		= preventDefault;
			window.onmousewheel = document.onmousewheel = preventDefault;
			window.ontouchmove  = preventDefault;
			document.onkeydown  = preventDefaultForScrollKeys;
		}

		// disableScroll();

		// BUTTONS TO SCROLL

		$('#enter_here')		.click(()=>{$(window).scrollTo('50%', 1300)});	
		$('#back_to_landing')	.click(()=>{$(window).scrollTo('0%', 1300)});	
		$('#to_connections')	.click(()=>{$(window).scrollTo('100%', 1300)});	
		$('#to_connections')	.click(()=>{$(window).scrollTo('100%', 1300)});
		$('#back_to_bio')		.click(()=>{$(window).scrollTo('50%', 1300)});			

		// SKROLLR initialization

	    var s = skrollr.init({
	        render: function(data) {
	            //Debugging - Log the current scroll position.
	            //console.log(data.curTop);
	        }
	    });		
	}

	// MASTHEAD fade in effects

	$('#mastheadBanner')	.fadeIn(2000).css("display", "inline-block");
	$('#myName')			.css('display', 'inline-block').hide().delay(1500).fadeIn(3000);
	$('#myTitle')			.css('display', 'inline-block').hide().delay(2500).fadeIn(3000);



	// MASTHEAD fade out effects

	$(window).scroll(function(){
		$(".fade-out")		.css("opacity", 2 - $(window).scrollTop() / 250);
	});



	// LINKS CLICKABLE AREA

    $('#newspaperclicker')	.hover(()=>{$('#newspapershadow').fadeIn("slow")})
    $('#newspaperclicker')	.mouseout(()=>{$('#newspapershadow').fadeOut("slow")})

	$('#suitclicker')		.hover(()=>{$('#suitshadow').fadeIn("slow")})	
	$('#suitclicker')		.mouseout(()=>{$('#suitshadow').fadeOut("slow")})

	$('#briefcaseclicker')	.hover(()=>{$('#briefcaseshadow').fadeIn("slow")})	
	$('#briefcaseclicker')	.mouseout(()=>{$('#briefcaseshadow').fadeOut("slow")})

	$('#octocatclicker')	.hover(()=>{$('#octocatshadow').fadeIn("slow")})	
	$('#octocatclicker')	.mouseout(()=>{$('#octocatshadow').fadeOut("slow")})

	$('#pianoclicker')		.hover(()=>{$('#pianoshadow').fadeIn("slow")})	
	$('#pianoclicker')		.mouseout(()=>{$('#pianoshadow').fadeOut("slow")})




// POPUPS
	$(".close").click(function(){
		contact[0]			.style.display = "none";
		portfolio[0]		.style.display = "none";
		music[0]			.style.display = "none";

		portfolioMobile[0]	.style.display = "none";
		musicMobile[0]		.style.display = "none";
		contactMe[0]		.style.display = "none";
	})

	// CONTACT
	var contact = $('#contact-box');
	$("#donut")				.click(()=>{contact[0].style.display = "block"})
	$("#contactword")		.click(()=>{contact[0].style.display = "block"})
	
	// PORTFOLIO
	var portfolio = $("#portfolio-box")
	$("#briefcaseclicker")	.click(()=>{portfolio[0].style.display = "block"})

	// MUSIC
	var music = $("#music-box")
	$("#pianoclicker")		.click(()=>{music[0].style.display = "block"})	







// ====================== MOBILE =========================

	// MASTHEAD fade in effects

	$('#landingBanner')		.fadeIn(2000).css("display", "inline-block");
	$('#name')				.css('display', 'inline-block').hide().delay(1500).fadeIn(3000);
	$('#title')				.css('display', 'inline-block').hide().delay(2500).fadeIn(3000);



// POPUPS
	
	// PORTFOLIO
	var portfolioMobile = $("#portfolio-boxMobile")
	$("#portfolioClickerMobile")	.click(()=>{portfolioMobile[0].style.display = "block"})

	// MUSIC
	var musicMobile = $("#music-boxMobile")
	$("#musicClickerMobile")		.click(()=>{musicMobile[0].style.display = "block"})

	// CONTACT
	var contactMe = $('#contact-boxMobile');
	$("#contactMe")					.click(()=>{contactMe[0].style.display = "block"})
	$(".sendMeALine")				.click(
		()=>{
			contact[0].style.display = "block";
			contactMe[0].style.display = "block";
		}
	)


})

