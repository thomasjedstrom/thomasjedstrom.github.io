$(function () {

	// PARALLAX
	// $('.parallax-window').parallax({imageSrc: './img/masthead_background.jpg'});

	// MEDIA QUERY FOR SKROLLR AND SCROLLING
	var mq = window.matchMedia( "(min-width: 1025px)" );

	if (mq.matches){

		$(window).resize(function(){
			location.reload();
		});		

		// BUTTONS TO SCROLL

		// $('#enter_here')		.click(()=>{$(window).scrollTo('50%', 1300)});	
		// $('#back_to_landing')	.click(()=>{$(window).scrollTo('0%', 1300)});	
		// $('#to_connections')	.click(()=>{$(window).scrollTo('100%', 1300)});	
		// $('#to_connections')	.click(()=>{$(window).scrollTo('100%', 1300)});
		// $('#back_to_bio')		.click(()=>{$(window).scrollTo('50%', 1300)});			

		// // SKROLLR initialization

		// var s = skrollr.init({
		// 	render: function(data) {
		// 		//Debugging - Log the current scroll position.
		// 		console.log(data.curTop);
		// 	}
		// });	
	}












	// ANIMATIONS




	// variables
	var $isAnimatedSecond = $('.is-animated'),
		$isAnimatedSecondSingle = $('.second .is-animated__single');

	var $curtainL = $('#curtain1'),
		$curtainR = $('#curtain2'),
		$bgHanging = $('#bgHanging'),
		$fader = $('.fader');

	// initialize fullPage
	$('#fullpage').fullpage({

		// navigation: true,
		css3:false,
		onLeave: function(index, nextIndex, direction) {
			// page2 - page3
			if( index == 2 && nextIndex == 3 ) {
				$curtainL.animate({'left': "-=50vw"}, "slow");
				$curtainR.animate({'left': "+=50vw"}, "slow");
				$fader.fadeOut('slow');
				// $bgHanging.addClass('animated slideInDown');

			// Page 3 - Page 2
			}else if( index == 3 && direction == 'up') {
				$curtainL.animate({'left': "+=50vw"}, "slow");
				$curtainR.animate({'left': "-=50vw"}, "slow");
				$fader.fadeIn('slow');
			}

			// second animation
			// else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
			// 	$isAnimatedThird.eq(0).addClass('animated fadeInRightBig').css('animation-delay', '.3s'); 
			// 	$isAnimatedThird.eq(1).addClass('animated fadeInLeftBig').css('animation-delay', '.6s');
			// 	$isAnimatedThirdSingle.addClass('animated bounceInDown').css('animation-delay', '1.2s');
			// }

			// third animation
			// else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
			// 	$isAnimatedFourth.addClass('animated zoomIn').css('animation-delay', '.6s');
			// 	$isAnimatedFourthSingle.addClass('animated lightSpeedIn').css('animation-delay', '1.2s');
			// 	$isAnimatedFourthSingle.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			// 		$(this).removeClass('lightSpeedIn').addClass('zoomOutDown');
				// $isAnimatedSecond.addClass('animated fadeInUpBig'); 
				// $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
				// $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
				// $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
				// $isAnimatedSecondSingle.addClass('animated rollIn').css('animation-delay', '1.7s');

			// 	});
			// }
		}

	});














	// LOADING PAGE
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 1000);

	// firstPage fade in effects

	$('#firstPageBanner')	.fadeIn(2000).css("display", "inline-block");
	$('#myName')			.css('display', 'inline-block').hide().delay(1500).fadeIn(3000);
	$('#myTitle')			.css('display', 'inline-block').hide().delay(2500).fadeIn(3000);

	// firstPage fade out effects

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

