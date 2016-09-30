$(function () {

	// PARALLAX
	// $('.parallax-window').parallax({imageSrc: './img/masthead_background.jpg'});

	// MEDIA QUERY FOR SKROLLR AND SCROLLING
	var mq = window.matchMedia( "(min-width: 1025px)" );

	if (mq.matches){
		$(window).resize(function(){
			location.reload();
		});	

		// ANIMATIONS
		// variables
		var $curtainL	= $('#curtain1'),
			$curtainR	= $('#curtain2'),
			$fader 		= $('.fader'),
			$bgHanging	= $('.bg-star'),
			$icon 		= $('.iconContainer'),
			$enter		= $('#enter_here'),
			$btl		= $('#back_to_landing'),
			$more		= $('#to_connections'),
			$btb		= $('#back_to_bio');

		// initialize fullPage
		$('#fullpage').fullpage({

			// navigation: true,
			// anchors: ['firstPage, secondPage, thirdPage'],
			scrollBar: true,
			css3:false,
			onLeave: function(index, nextIndex, direction) {
				// page2 - page3
				if( index == 2 && nextIndex == 3 ) {
					$curtainL.animate({'left': "-=50vw"}, "slow").addClass('animated');
					$curtainR.animate({'left': "+=50vw"}, "slow").addClass('animated');
					$fader.fadeOut('slow');
					$bgHanging.animate({'top': "+=50vh"}, "slow").addClass('animated');
					$icon.animate({'top': "+=127vh"}, 1200).addClass('animated');
					$btl.animate({'top': "-=30vh"}, "slow").addClass('animated');
					$more.animate({'top': "+=30vh"}, "slow").addClass('animated');
					$btb.animate({'top': "+=30vh"}, "slow").addClass('animated');


				// Page 3 - Page 2
				}else if( index == 3 && direction == 'up') {
					if($curtainL.hasClass('animated')){
						$curtainL.animate({'left': "+=50vw"}, "slow");	
					}
					if($curtainL.hasClass('animated')){
						$curtainR.animate({'left': "-=50vw"}, "slow");
					}
					$fader.fadeIn('slow');
					if($bgHanging.hasClass('animated')){
						$bgHanging.animate({'top': "-=50vh"}, "slow");
					}
					if($icon.hasClass('animated')){
						$icon.animate({'top': "-=127vh"}, 800);
					}
					if($btl.hasClass('animated')){
						$btl.animate({'top': "+=30vh"}, "slow");
					}
					if($more.hasClass('animated')){
						$more.animate({'top': "-=30vh"}, "slow");
					}
					if($btb.hasClass('animated')){
						$btb.animate({'top': "-=30vh"}, "slow");
					}
				}
			}
		});

		$enter.click(function(e){
			e.preventDefault();
			$.fn.fullpage.moveSectionDown();
		});
		$btl.click(function(e){
			e.preventDefault();
			$.fn.fullpage.moveSectionUp();
		});
		$more.click(function(e){
			e.preventDefault();
			$.fn.fullpage.moveSectionDown();
		});
		$btb.click(function(e){
			e.preventDefault();
			$.fn.fullpage.moveSectionUp();
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



			
	}




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

		portfolioMobile[0]	.style.display = "none";
		contactMe[0]		.style.display = "none";
	})

	// CONTACT
	var contact 			= $('#contact-box');
	$("#burger")			.click(()=>{contact[0].style.display = "block"});
	$("#contactword")		.click(()=>{contact[0].style.display = "block"});
	
	// PORTFOLIO
	var portfolio 			= $("#portfolio-box");
	$("#briefcaseclicker")	.click(()=>{portfolio[0].style.display = "block"});

	var rails 				= $("#rails-box");
	$("#railsTag")			.click(()=>{rails.fadeIn('slow')});

	var mean 				= $("#mean-box");
	$("#meanTag")			.click(()=>{mean.fadeIn('slow')});

	var django 				= $("#django-box");
	$("#djangoTag")			.click(()=>{django.fadeIn('slow')});

// PORTFOLIO POPUS
	$(".pclose").click(function(){
		rails			.fadeOut('slow');
		mean			.fadeOut('slow');
		django			.fadeOut('slow');
	})





// ====================== MOBILE =========================

	// MASTHEAD fade in effects

	$('#landingBanner')		.fadeIn(2000).css("display", "inline-block");
	$('#name')				.css('display', 'inline-block').hide().delay(1500).fadeIn(3000);
	$('#title')				.css('display', 'inline-block').hide().delay(2500).fadeIn(3000);



// POPUPS
	
	// PORTFOLIO
	var portfolioMobile = $("#portfolio-boxMobile")
	$("#portfolioClickerMobile")	.click(()=>{portfolioMobile[0].style.display = "block"})

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

