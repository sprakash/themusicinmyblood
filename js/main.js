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

	$('.prev').click(function() {

		if($('.active').hasClass('walter-active')) {
			$(this).removeClass('active');			
			showAjji(18000);
			console.log('stop walter, go back to ajji');
			return;
		}
		if($('.active').hasClass('archana-active')) {
			$(this).removeClass('active');						
			showWalter(18000);
			console.log('stop archie, go back to Walter');
			return;
		}
		if($('.active').hasClass('prema-active')) {		
			$(this).removeClass('active');			
			showArchana(18000);
			console.log('stop prema, go back to archana');
			return;
		}
		if($('.active').hasClass('vikram-active')) {
			$(this).removeClass('active');			
			showPrema(18000);
			console.log('stop vik, go back to prema');
			return;
		}
		if($('.active').hasClass('kamal-active')) {
			$(this).removeClass('active');					
			showPrema(18000);
			console.log('stop kamal, go back to vik');
			return;
		}
		if($('.active').hasClass('ajji-active')) {
			$(this).removeClass('active');						
			showPrema(18000);
			console.log('stop ajji, go back to kamal');
			return;
		}
	});

	$('.next').click(function() {

		if($('.active').hasClass('ajji-active')) {
			$(this).removeClass('active');
			showWalter(18000);
			console.log('stop ajji, go to walter');
			return;
		}
		if($('.active').hasClass('walter-active')) {
			$(this).removeClass('active');
			showArchana(18000);
			console.log('stop walter, go to archie');
			return;
		}
		if($('.active').hasClass('archana-active')) {
			$(this).removeClass('active');			
			showPrema(18000);
			console.log('stop archie, go to prema');
			return;
		}
		if($('.active').hasClass('prema-active')) {
			$(this).removeClass('active');			
			showVikram(18000);
			console.log('stop prema, go to vikram');
			return;
		}
		if($('.active').hasClass('vikram-active')) {
			$(this).removeClass('active');			
			showKamal(18000);
			console.log('stop vik, go to kamal');
			return;
		}
		if($('.active').hasClass('kamal-active')) {
			$(this).removeClass('active');			
			showKamal(18000);
			console.log('stop kamal, go to ajji');
			return;
		}
	});

	var character = $('.character');
	var ajjiDone = false;
	var archanaDone = false;
	var premaDone = false;
	var walterDone = false;
	var vikramDone = false;

	function growRedline() {

      $('.swoosh').animate({width: 'show'}, 2500);
		setTimeout(function() {$('.right-side-nav').animate({'opacity':.7}, 8000)});
		setTimeout(function() {$('.right-side-nav').animate({'right':'-100px'}, 5000)});
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
	    $('.content-area').animate({'opacity': 0}, 30000);
	    $('.prev-next').animate({'opacity': 1}, 20000);
		showAjji(8000); 
		

		setTimeout(function() { 
			showWalter(8000);
		}, 20000);

		setTimeout(function() {
			showArchana(8000);
		}, 30000);

		setTimeout(function() {
			showVikram(8000);
		}, 60000);


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

		$('#ajji-light').addClass('active');
	    $('#ajji-golden').addClass('active');
	    $('#ajji-natural').addClass('active');

		$('#ajji-light').fadeIn(waitTime);
		$('#ajji-golden').delay(waitTime+1000).fadeIn(waitTime + 1500);
		$('#ajji-natural').delay(waitTime+1000).fadeTo(waitTime + 1000, 0.7);
	    $('#ajji-natural > .quote').delay(waitTime+1000).animate({'opacity': 1}, 10000);
	}

	function fadeCharacter(character, inTime) {
		var waitTime = parseInt(inTime);
		$(character).animate({'opacity':0}, waitTime);
		$(character).animate({'opacity':0}, waitTime);
		$(character).animate({'opacity':0}, waitTime);
	}

	function showWalter(inTime) {
		var waitTime = parseInt(inTime);
		console.log(waitTime + " walter");

		$('.active').removeClass('active');
		
		fadeCharacter($("#ajji-light"),waitTime);
		fadeCharacter($("#ajji-golden"),waitTime);
		fadeCharacter($("#ajji-natural"),waitTime);

		$('#walter-light').addClass('active');
	    $('#walter-golden').addClass('active');
	    $('#walter-natural').addClass('active');

		$('#walter-light').fadeIn(waitTime);
		$('#walter-golden').delay(waitTime+1000).fadeIn(waitTime + 1500);
		$('#walter-natural').delay(waitTime+1000).fadeTo(waitTime + 1000, 0.9);
	    $('#walter-natural > .quote').delay(waitTime+1000).animate({'opacity': 1}, 10000);
	}

	function showArchana(inTime) {
		var waitTime = parseInt(inTime);
		console.log(waitTime + " archana");

		$('.active').removeClass('active');

		fadeCharacter($("#walter-light"),waitTime);
		fadeCharacter($("#walter-golden"),waitTime);
		fadeCharacter($("#walter-natural"),waitTime);


	    $('#archana-light').addClass('active');
	    $('#archana-golden').addClass('active');
	    $('#archana-natural').addClass('active');

		$('#archana-light').fadeIn(waitTime);
		$('#archana-golden').delay(waitTime+1000).fadeIn(waitTime + 1500);
		$('#archana-natural').delay(waitTime+1000).fadeTo(waitTime + 1000, 0.7);
	    $('#archana-natural > .quote').delay(waitTime+1000).animate({'opacity': 1}, 10000);
	}

	function showPrema(inTime) {
		var waitTime = parseInt(inTime);
		console.log(waitTime + " prema");
		
		$('.active').removeClass('active');

		fadeCharacter($("#archana-light"),waitTime);
		fadeCharacter($("#archana-golden"),waitTime);
		fadeCharacter($("#archana-natural"),waitTime);

		$('#prema-light').addClass('active');
	    $('#prema-golden').addClass('active');
	    $('#prema-natural').addClass('active');
		
		$('#prema-light').fadeIn(waitTime);
		$('#prema-golden').delay(waitTime+1000).fadeIn(waitTime + 1500);
		$('#prema-natural').delay(waitTime+1000).fadeTo(waitTime + 1000, 0.7);
	    $('#prema-natural > .quote').delay(waitTime+1000).animate({'opacity': 1}, 10000);
	}

	function showVikram(inTime) {
		var waitTime = parseInt(inTime);
		console.log(waitTime + " vikram");

		$('.active').removeClass('active');

		fadeCharacter($("#prema-light"),waitTime);
		fadeCharacter($("#prema-golden"),waitTime);
		fadeCharacter($("#prema-natural"),waitTime);

		$('#vikram-light').addClass('active');
	    $('#vikram-golden').addClass('active');
	    $('#vikram-natural').addClass('active');
		
		$('#vikram-light').fadeIn(waitTime);
		$('#vikram-golden').delay(waitTime+1000).fadeIn(waitTime + 1500);
		$('#vikram-natural').delay(waitTime+1000).fadeTo(waitTime + 1000, 0.7);
	    $('#vikram-natural > .quote').delay(waitTime+1000).animate({'opacity': 1}, 10000);
	}

	function resetAllCharacters() {
		$('.character').animate({'opacity': 0}, 1000);
	}


	
});

