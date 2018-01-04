$(document).ready(function(){	


	setTimeout(growRedline(),1000);
	setTimeout(beginCharacters(), 5000);


	//event handlers
	$('.right-side-nav').mouseenter(function() {
		$(this).animate({'opacity': 1});
		$('.hovertext').animate({'opacity':1});
	});
	$('.right-side-nav').mouseleave(function() {
		$(this).animate({'opacity':0.7});
		$('.hovertext').animate({'opacity':0});
	});

	var character = $('.character');
	var ajjiDone = false;
	var archanaDone = false;
	var premaDone = false;
	var walterDone = false;
	var vikramDone = false;

	function growRedline() {

      $('.swoosh').animate({width: 'show'}, 2500);
		setTimeout(function() {$('.right-side-nav').animate({'opacity':.7}, 3000)}, 800);
		setTimeout(function() {$('.right-side-nav').animate({'right':'-133px'}, 3000)}, 1000);
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
			showWalter(18000);
			$('.active').delay(10000).fadeTo(2000, 0);
			$('.active').delay(10000).fadeOut(20000);
		}, 70000);

		setTimeout(function() {
			showArchana(25000);
		}, 110000);

		setTimeout(function() {
			showVikram(20000);
		}, 150000);


	/*
		setTimeout(function() {
			showPrema(20000);
		}, 120000);


	
		
		setTimeout(function() {
			showKamal(20000);
		}, 200000);

		setTimeout(function() {
			showStoryLine(20000);
		}, 250000);

		setTimeout(function() {
			showCastandCrew(20000);
		}, 300000);
		
		setTimeout(function() {
			showPast(20000);
		}, 350000);

		setTimeout(function() {
			showPress(20000);
		}, 400000);

		setTimeout(function() {
			showUpcoming(20000);
		}, 450000);

		setTimeout(function() {
			showTickets(20000);
		}, 450000);

		*/
	}

	function showAjji(inTime) {
		var waitTime = parseInt(inTime);
		console.log(waitTime + " ajji");

		$('#ajji-light').fadeIn(waitTime);
		$('#ajji-golden').delay(waitTime+5000).fadeIn(waitTime + 2500);
		$('#ajji-natural').delay(waitTime+5000).fadeTo(waitTime + 5000, 0.7);
	    $('#ajji-natural > .quote').delay(waitTime+5000).animate({'opacity': 1}, 20000);
	    $('#ajji-light').addClass('active');
	    $('#ajji-golden').addClass('active');
	    $('#ajji-natural').addClass('active');

	}

	function fadeAjji(character, inTime) {
		var waitTime = parseInt(inTime);
		$(character).animate({'opacity':0}, waitTime);
		$(character).animate({'opacity':0}, waitTime);
		$(character).animate({'opacity':0}, waitTime);
	}

	function showWalter(inTime) {
		var waitTime = parseInt(inTime);
		console.log(waitTime + " walter");

		$('.active').removeClass('active');
		
		fadeAjji($("#ajji-light"),waitTime);
		fadeAjji($("#ajji-golden"),waitTime);
		fadeAjji($("#ajji-natural"),waitTime);

		$('#walter-light').fadeIn(waitTime);
		$('#walter-golden').delay(waitTime+5000).fadeIn(waitTime + 2500);
		$('#walter-natural').delay(waitTime+2000).fadeTo(waitTime + 5000, 0.9);
	    $('#walter-natural > .quote').delay(waitTime+5000).animate({'opacity': 1}, 20000);
	    $('#walter-light').addClass('active');
	    $('#walter-golden').addClass('active');
	    $('#walter-natural').addClass('active');
	}

	function showArchana(inTime) {
		var waitTime = parseInt(inTime);
		console.log(waitTime + " archana");

		$('.active').removeClass('active');

		fadeAjji($("#walter-light"),waitTime+1000);
		fadeAjji($("#walter-golden"),waitTime+1000);
		fadeAjji($("#walter-natural"),waitTime+2000);

		$('#archana-light').fadeIn(waitTime);
		$('#archana-golden').delay(waitTime+5000).fadeIn(waitTime + 2500);
		$('#archana-natural').delay(waitTime+5000).fadeTo(waitTime + 5000, 0.7);
	    $('#archana-natural > .quote').delay(waitTime+5000).animate({'opacity': 1}, 20000);
	    $('#archana-light').addClass('active');
	    $('#archana-golden').addClass('active');
	    $('#archana-natural').addClass('active');
	}

	function showPrema(inTime) {
		var waitTime = parseInt(inTime);
		console.log(waitTime + " prema");
		
		$('.active').removeClass('active');
		$('#prema-light').fadeIn(waitTime);
		$('#prema-golden').delay(waitTime+5000).fadeIn(waitTime + 2500);
		$('#prema-natural').delay(waitTime+5000).fadeTo(waitTime + 5000, 0.7);
	    $('#prema-natural > .quote').delay(waitTime+5000).animate({'opacity': 1}, 20000);
	    $('#prema-light').addClass('active');
	    $('#prema-golden').addClass('active');
	    $('#prema-natural').addClass('active');
	}

	function showVikram(inTime) {
		var waitTime = parseInt(inTime);
		console.log(waitTime + " vikram");

		$('.active').removeClass('active');
		$('#vikram-light').fadeIn(waitTime);
		$('#vikram-golden').delay(waitTime+5000).fadeIn(waitTime + 2500);
		$('#vikram-natural').delay(waitTime+5000).fadeTo(waitTime + 5000, 0.6);
	    $('#vikram-natural > .quote').delay(waitTime+5000).animate({'opacity': 1}, 20000);
	    $('#vikram-light').addClass('active');
	    $('#vikram-golden').addClass('active');
	    $('#vikram-natural').addClass('active');
	}


	
});

