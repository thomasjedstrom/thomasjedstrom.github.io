
$(function () {
	$(document).ready(function(){
	    $(this).scrollTop(0);
	});

	// ANIMATIONS
	// variables
	var $curtainL	= $('#curtain1'),
		$curtainR	= $('#curtain2'),
		$fader1		= $('.fader1'),
		$fader2		= $('.fader2'),
		$bgHanging	= $('.bg-star'),
		$icon 		= $('.iconContainer'),
		$enter		= $('#enter_here'),
		$btl		= $('#back_to_landing'),
		$more		= $('#to_connections'),
		$btb		= $('#back_to_bio');

	var $page1 = $('#firstPage'),
		$page2 = $('#curtainPage1'),
		$page3 = $('#curtainPage2'),
		$page4 = $('#thirdPage');

	// initialize fullPage
	$('#fullpage').fullpage({
		scrollBar: true,
		css3:false,
		onLeave: function(index, nextIndex, direction) {
			// page2 - page3
			if( index == 2 && nextIndex == 3 ) {
				$fader1.fadeOut('slow');
				$fader2.css("visibility", "visible");
				$fader2.fadeIn('slow');

			// page3 - page4
			}else if( index == 3 && nextIndex == 4 ) {
				$curtainL.animate({'left': "-=50vw"}, "slow").addClass('animated');
				$curtainR.animate({'left': "+=50vw"}, "slow").addClass('animated');
				$fader2.fadeOut('slow');
				$bgHanging.animate({'top': "+=50vh"}, "slow").addClass('animated');
				$icon.animate({'top': "+=127vh"}, 1200).addClass('animated');
				$btl.animate({'top': "-=30vh"}, "slow").addClass('animated');
				$more.animate({'bottom': "-=30vh"}, "slow").addClass('animated');

			// Page 4 - Page 3
			}else if( index == 4 && direction == 'up') {
				if($curtainL.hasClass('animated')){
					$curtainL.animate({'left': "+=50vw"}, "slow");
				}
				if($curtainL.hasClass('animated')){
					$curtainR.animate({'left': "-=50vw"}, "slow");
				}
				$fader2.css("visibility", "visible");
				$fader2.hide();
				$fader2.fadeIn('slow');
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
					$more.animate({'bottom': "+=30vh"}, "slow");
				}

			// Page 3 - Page 2
			}else if( index == 3 && direction == 'up') {
				$fader1.css("visibility", "visible");
				$fader1.hide();
				$fader1.fadeIn('slow');
				$fader2.fadeOut('slow');
			}
		},
		afterRender: function(){
			setTimeout(function(){
				if(($page2.hasClass('active')) || ($page1.hasClass('active'))){
					$fader1.css("visibility", "visible");
					$fader2.hide();
				}else if($page3.hasClass('active')){
					$fader1.hide();
					$fader2.css("visibility", "visible");
				}else if($page4.hasClass('active')){
					$curtainL.css('left', "-50vw").addClass('animated');
					$curtainR.css('left', "100vw").addClass('animated');
					$bgHanging.css('top', "+=50vh").addClass('animated');
					$icon.css('top', "+=127vh").addClass('animated');
					$btl.css('top', "-=30vh").addClass('animated');
					$more.css('bottom', "-=30vh").addClass('animated');
				}
			}, 120
			)
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

	// firstPage fade in effects
	$('#firstPageBanner')	.fadeIn(2000).css("display", "inline-block");
	$('#myName')			.css('display', 'inline-block').hide().delay(1000).fadeIn(3000);
	$('#titleHr')			.css('display', 'inline-block').hide().delay(1500).fadeIn(3000);
	$('#myTitle')			.css('display', 'inline-block').hide().delay(2000).fadeIn(3000);
	// firstPage fade out effects
	$(window).scroll(()=>{
		$(".fade-out")		.css("opacity", 2 - $(window).scrollTop() / 250);
	});



	// Side Sign toggle black box effect
	var $stackList = $("#stackList");
	var $designStack = $("#designStack");
	var $active = $designStack;

	$stackList.find('a').click(function(e){
		e.preventDefault();
		if($(this).hasClass('active')){
			return;
		}

		// swap active state for box
		$("." + $active[0].id + "Box" ).hide("slide", { direction: "right" }, 200);
		$("." + $(this)[0].id + "Box").show("slide", { direction: "right" }, 300);

		// swap active state for links
		$active.removeClass('active');
		$(this).addClass('active');
		$active = $(this);

	})






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


	// $("#briefcaseclicker").click(()=>window.location.href = 'Thomas-Edstrom-Resume.pdf');
	// $("#resumewordMobile").click(()=>window.location.href = 'Thomas-Edstrom-Resume.pdf');










	// POPUPS LAYER 1
	const puBG = $('#popupBG')
	$('.popupLink').click(()=>puBG.fadeIn('slow'));
	$(".close").click(function(){
		contact				.fadeOut('slow');
		portfolio			.fadeOut('slow');
		puBG				.fadeOut('slow');
	})

	const contact 			= $('#contact-content');
	$("#burger")			.click(()=>contact.fadeIn('slow'));
	$("#sendMeALine").on('click touchstart', ()=>contact.fadeIn('slow'));
	$("#contactMe")			.click(()=>contact.fadeIn('slow'));

	const portfolio 			= $("#portfolio-content");
	portfolio.css("display", "flex").hide()


	// $("#briefcaseclicker")	.click(()=>portfolio.fadeIn('slow'));
	$("#portfoliowordMobile").click(()=>portfolio.fadeIn('slow'));


// POPUPS LAYER 2
	const poBG = $('#portfolioBG')
	$('.portfolioType').click(()=>poBG.fadeIn('slow'));
	$(".pclose").click(()=>{
		poBG				.fadeOut('slow');
		rb					.fadeOut('slow');
		mb					.fadeOut('slow');
		db					.fadeOut('slow');
	})

	const rb = $("#rails-content")
	$("#railsTag").click(()=>rb.fadeIn('slow'));
	const mb = $("#mean-content")
	$("#meanTag").click(()=>mb.fadeIn('slow'));
	const db = $("#django-content")
	$("#djangoTag").click(()=>db.fadeIn('slow'));


// POPUPS LAYER 3
	const ip = $("#infoBG");
	const ib = $('.infoBox');
	$(".iclose").click(()=>{
		ip 				.fadeOut('slow');
		ib 				.fadeOut('slow');
	});
	$('.infoLink').click(()=>ip.fadeIn('slow'))

	// Rails
	$("#oliClicker").click(()=>$("#onlineLendingContent").fadeIn('slow'));
	$("#twiClicker").click(()=>$("#theWallContent").fadeIn('slow'));
	$("#etiClicker").click(()=>$("#eventTrackingContent").fadeIn('slow'));
	$("#atiClicker").click(()=>$("#abTestingContent").fadeIn('slow'));
	$("#biiClicker").click(()=>$("#brightIdeasContent").fadeIn('slow'));
	$("#ngiClicker").click(()=>$("#ninjaGoldContent").fadeIn('slow'));
	// MEAN
	$("#dbiClicker").click(()=>$("#discussionBoardContent").fadeIn('slow'));
	$("#osiClicker").click(()=>$("#onlineStoreContent").fadeIn('slow'));
	$("#bliClicker").click(()=>$("#bucketListsContent").fadeIn('slow'));
	$("#siClicker").click(()=>$("#surveysContent").fadeIn('slow'));
	// Django
	$("#fiClicker").click(()=>$("#friendsContent").fadeIn('slow'));
})