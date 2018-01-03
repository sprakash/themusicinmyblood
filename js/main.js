$(document).ready(function(){	


	setTimeout(growRedline(),1000);
	setTimeout(beginCharacters(), 2000);


	//event handlers
	$('.hovertext').mouseenter(function() {
		$(this).animate({'opacity':1}, 1000);
	});
	$('.hovertext').mouseleave(function() {
		$(this).animate({'opacity':0}, 1000);
	});

	var character = $('.character');
	var ajjiDone = false;
	var archanaDone = false;
	var premaDone = false;
	var walterDone = false;
	var vikramDone = false;

	function growRedline() {

      $('.swoosh').animate({width: 'show'}, 2500);
		setTimeout(function() {$('.right-nav').animate({'opacity':1}, 3000)}, 500);
		//setInterval(function(){beginCharacters()}, 25000);
		//setTimeout(function() {beginSlideshow()}, 25000);

		/*setInterval(function() {
		  $('#character-slideshow > .character:first')
		    .fadeOut(5000)
		    .next()
		    .fadeIn(5000)
		    .end()
		    .appendTo('#character-slideshow');
		}, 8000); */
	}

	function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
    }

	function beginSlideshow() {

	/*	$("#character-slideshow > div:gt(0)").hide();

		setInterval(function() {
		  $('#character-slideshow > .character:first')
		    .fadeOut(5000)
		    .next()
		    .fadeIn(5000)
		    .end()
		    .appendTo('#character-slideshow');
		}, 8000); */
	}

	function beginCharacters() {
	    $('.content-area').animate({'opacity': 0}, 20000);
		showAjji(25000); 
		

		setTimeout(function() { 
			showWalter(20000);
			$('.active').delay(15000).fadeTo(2000, 0);
			$('.active').delay(18000).fadeOut(20000);
		}, 50000 );

		setTimeout(function() {
			showArchana(20000);
		}, 100000);

		setTimeout(function() {
			showPrema(20000);
		}, 100000);

		setTimeout(function() {
			showVikram(20000);
		}, 100000);

		setTimeout(function() {
			showArchana(20000);
		}, 100000);
	}

	function showAjji(inTime) {
		var waitTime = parseInt(inTime);
		console.log(waitTime + " ajji");

		$('#ajji-light').fadeIn(waitTime);
		$('#ajji-golden').delay(waitTime+5000).fadeIn(waitTime + 2500);
		$('#ajji-natural').delay(waitTime+5000).fadeTo(waitTime + 5000, 0.8);
	    $('#ajji-natural > .quote').delay(waitTime+5000).animate({'opacity': 1}, 20000);
	    $('#ajji-light').addClass('active');
	    $('#ajji-golden').addClass('active');
	    $('#ajji-natural').addClass('active');

		//start fading out effect and fading in real life;
		/*$('#ajji3').delay(4500).fadeTo(35000, 0.5);
		$('#ajji2').delay(4500).fadeTo(4000, 0.5);
		$('#ajji > .quote').delay(5000).fadeIn(45000);*/
	}

	function showWalter(inTime) {
		var waitTime = parseInt(inTime);
		console.log(waitTime + " walter");

		$('#walter-light').fadeIn(waitTime);
		$('#walter-golden').delay(waitTime+5000).fadeIn(waitTime + 2500);
		$('#walter-natural').delay(waitTime+5000).fadeTo(waitTime + 5000, 0.8);
	    $('#walter-natural > .quote').delay(waitTime+5000).animate({'opacity': 1}, 20000);
	    $('#walter-light').addClass('active');
	    $('#walter-golden').addClass('active');
	    $('#walter-natural').addClass('active');
	}

	function showArchana(inTime) {
		var waitTime = parseInt(inTime);
		console.log(waitTime + " archana");

		$('#archana-light').fadeIn(waitTime);
		$('#archana-golden').delay(waitTime+5000).fadeIn(waitTime + 2500);
		$('#archana-natural').delay(waitTime+5000).fadeTo(waitTime + 5000, 0.8);
	    $('#archana-natural > .quote').delay(waitTime+5000).animate({'opacity': 1}, 20000);
	    $('#archana-light').addClass('active');
	    $('#archana-golden').addClass('active');
	    $('#archana-natural').addClass('active');
	}

	function showPrema(inTime) {
		var waitTime = parseInt(inTime);
		console.log(waitTime + " prema");

		$('#prema-light').fadeIn(waitTime);
		$('#prema-golden').delay(waitTime+5000).fadeIn(waitTime + 2500);
		$('#prema-natural').delay(waitTime+5000).fadeTo(waitTime + 5000, 0.8);
	    $('#prema-natural > .quote').delay(waitTime+5000).animate({'opacity': 1}, 20000);
	    $('#prema-light').addClass('active');
	    $('#prema-golden').addClass('active');
	    $('#prema-natural').addClass('active');
	}

	/*function fadeAjji(inTime) {
		var waitTime = parseInt(inTime);
		$('#ajji-natural > .quote').animate({'opacity':0}, 20000);
		$('#ajji-natural').delay(waitTime+5000).fadeOut(waitTime+5000+5000);
		$('#ajji-golden').delay(waitTime+5000).fadeOut(waitTime+5000+5000);
		$('#ajji-light').fadeOut(waitTime);
	}*/

	function loadPrema2() {
		$('#prema1').fadeOut(10000);
		$('#prema2').fadeIn(10000);
		$('#prema2').css({'z-index': 5});
		$('#prema2 > .quote').animate({'opacity': 1});
		setTimeout(function(){ loadVikram() }, 10000);
	}

	function loadVikram() {
		$('#prema2').fadeOut(10000);
		$('#vikram').fadeIn(10000);
		$('#vikram').css({'z-index': 5});
		$('#vikram > .quote').animate({'opacity': 1});
		setTimeout(function(){ loadWalter() }, 10000);

	}

	/*function loadKamal() {


	}

	function loadLittlePrema() {


	}*/

	function loadWalter() {
		$('#vikram').fadeOut(10000);
		$('#walter').fadeIn(10000);
		$('#walter').css({'z-index': 5});
		$('#walter > .quote').animate({'opacity': 1});
		setTimeout(function(){ loadAjji() }, 10000);
	}

	function pauseAll() {
		$('#ajji').clearQueue().stop();
		$('#archana').clearQueue().stop();
		$('#prema').clearQueue().stop();
		$('#vikram').clearQueue().stop();
		$('#walter').clearQueue().stop();

	}

	
});

