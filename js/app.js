$(function () {

	// On Window Resize....Refresh
	$(window).resize(function(){location.reload();});


	// MEDIA QUERY FOR SKROLLR AND SCROLLING
	var mq = window.matchMedia( "(min-width: 1025px)" );

	if (mq.matches){

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
			window.onwheel = preventDefault;
			window.onmousewheel = document.onmousewheel = preventDefault;
			window.ontouchmove  = preventDefault;
			document.onkeydown  = preventDefaultForScrollKeys;
		}

		disableScroll();

		// BUTTONS TO SCROLL

		$('#enter_here').click(function(){
			$(window).scrollTo('50%', 1300);	
		})
		$('#back_to_landing').click(function(){
			$(window).scrollTo('0%', 1300);	
		})
		$('#to_connections').click(function(){
			$(window).scrollTo('100%', 1300);	
		})
		$('#to_connections').click(function(){
			$(window).scrollTo('100%', 1300);	
		})
		$('#back_to_bio').click(function(){
			$(window).scrollTo('50%', 1300);	
		})


		// SKROLLR initialization

	    var s = skrollr.init({
	        render: function(data) {
	            //Debugging - Log the current scroll position.
	            //console.log(data.curTop);
	        }
	    });		
	}

	// MASTHEAD fade in effects

	$('#mastheadBanner').fadeIn(2000).css("display", "inline-block");
	$('#myName').css('display', 'inline-block').hide().delay(1500).fadeIn(3000);
	$('#myTitle').css('display', 'inline-block').hide().delay(2500).fadeIn(3000);



	// MASTHEAD fade out effects

	$(window).scroll(function(){
		$(".fade-out").css("opacity", 2 - $(window).scrollTop() / 250);
	});



	// LINKS CLICKABLE AREA

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

		portfolioMobile[0].style.display = "none";
		musicMobile[0].style.display = "none";
		contactMe[0].style.display = "none";
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







// ====================== MOBILE =========================

	// MASTHEAD fade in effects

	$('#landingBanner').fadeIn(2000).css("display", "inline-block");
	$('#name').css('display', 'inline-block').hide().delay(1500).fadeIn(3000);
	$('#title').css('display', 'inline-block').hide().delay(2500).fadeIn(3000);



// POPUPS
	
	// PORTFOLIO
	var portfolioMobile = $("#portfolio-boxMobile")
	$("#portfolioClickerMobile").click(function(){
		portfolioMobile[0].style.display = "block";
	})

	// MUSIC
	var musicMobile = $("#music-boxMobile")
	$("#musicClickerMobile").click(function(){
		musicMobile[0].style.display = "block";
	})

	// CONTACT
	var contactMe = $('#contact-boxMobile');
	$("#contactMe").click(function(){
		contactMe[0].style.display = "block";
	})
	$(".sendMeALine").click(function(){
		contact[0].style.display = "block";
		contactMe[0].style.display = "block";
	})


})

