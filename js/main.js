$(document).ready(function(){	
	var showwalter, showarchana, showvikram, showajji;

	var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
	        sParameterName = sURLVariables[i].split('=');

	        if (sParameterName[0] === sParam) {
	            return sParameterName[1] === undefined ? true : sParameterName[1];
	        }
	    }
	};

	/*http://dummy.com/?technology=jquery&blog=jquerybyexample.

		var tech = getUrlParameter('technology');
		var blog = getUrlParameter('blog');
	*/

	var whichpage = getUrlParameter('page');

	if(whichpage === 'storyline') {
			$('.title-area').hide();
			showStoryline();
			setTimeout(function() {$('.right-side-nav').animate({'opacity':.7}, 8000)});
			setTimeout(function() {$('.right-side-nav').animate({'right':'-100px'}, 5000)});
	} else {
		setTimeout(growRedline(),1000);
		setTimeout(function(){ beginCharacters() }, 7000);
	}


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
		
			$('#walter-light').clearQueue();
			$('#walter-golden').clearQueue();
			$('#walter-natural').clearQueue();
			$('#walter-light').stop();
			$('#walter-golden').stop();
			$('#walter-natural').stop();
			$('.walter-active .quote').stop();
			$('#ajji-light').clearQueue();
			$('#ajji-golden').clearQueue();
			$('#ajji-natural').clearQueue();
			$('#ajji-light').stop();
			$('#ajji-golden').stop();
			$('#ajji-natural').stop();
			$('.ajji-active .quote').stop();
			$('.walter-active').removeClass('active');		
			$('.walter-active,.walter-active .quote').animate({opacity:0}, 8000);
			
			$('.ajji-active').css({'opacity':'','display':''});			
			clearTimeout(showarchana);	
			clearTimeout(showvikram);
			setTimeout(
				function(){
					showAjji(8000);
				},2000);
			console.log('stop walter, go back to ajji');
			return;
		}
		
		if($('.active').hasClass('archana-active')) {			
			
			$('#archana-light').clearQueue();
			$('#archana-golden').clearQueue();
			$('#archana-natural').clearQueue();
			$('#archana-light').stop();
			$('#archana-golden').stop();
			$('#archana-natural').stop();
			$('.archana-active .quote').stop();
			$('#walter-light').clearQueue();
			$('#walter-golden').clearQueue();
			$('#walter-natural').clearQueue();
			$('#walter-light').stop();
			$('#walter-golden').stop();
			$('#walter-natural').stop();
			$('.walter-active .quote').stop();
			$('.archana-active').removeClass('active');		
			$('.archana-active,.archana-active .quote').animate({opacity:0}, 8000);
			
			$('.walter-active').css({'opacity':'','display':''});		
			clearTimeout(showvikram);
			setTimeout(
				function(){
					showWalter(8000);
				},2000);
			console.log('stop archie, go back to Walter');
			return;
		}
		
		if($('.active').hasClass('prema-active')) {		
			$(this).removeClass('active');			
			showArchana(8000);
			console.log('stop prema, go back to archana');
			return;
		}
		if($('.active').hasClass('vikram-active')) {
			$('#vikram-light').clearQueue();
			$('#vikram-golden').clearQueue();
			$('#vikram-natural').clearQueue();
			$('#vikram-light').stop();
			$('#vikram-golden').stop();
			$('#vikram-natural').stop();
			$('.vikram-active .quote').stop();
			$('#archana-light').clearQueue();
			$('#archana-golden').clearQueue();
			$('#archana-natural').clearQueue();
			$('#archana-light').stop();
			$('#archana-golden').stop();
			$('#archana-natural').stop();
			$('.archana-active .quote').stop();
			$('.vikram-active').removeClass('active');		
			$('.vikram-active,.vikram-active .quote').animate({opacity:0}, 8000);
			
			$('.archana-active').css({'opacity':'','display':''});	
			
			setTimeout(
				function(){
					showArchana(8000);
				},2000);
			console.log('stop vik, go back to archana');
			return;
		}
		if($('.active').hasClass('kamal-active')) {
			$(this).removeClass('active');					
			showPrema(8000);
			console.log('stop kamal, go back to vik');
			return;
		}
		if($('.active').hasClass('ajji-active')) {							
			
			$('#ajji-light').clearQueue();
			$('#ajji-golden').clearQueue();
			$('#ajji-natural').clearQueue();
			$('#ajji-light').stop();
			$('#ajji-golden').stop();
			$('#ajji-natural').stop();
			$('.ajji-active .quote').stop();
			$('#vikram-light').clearQueue();
			$('#vikram-golden').clearQueue();
			$('#vikram-natural').clearQueue();
			$('#vikram-light').stop();
			$('#vikram-golden').stop();
			$('#vikram-natural').stop();
			$('.vikram-active .quote').stop();
			$('.ajji-active').removeClass('active');		
			$('.ajji-active,.ajji-active .quote').animate({opacity:0}, 8000);
			
			$('.vikram-active').css({'opacity':'','display':''});	
			clearTimeout(showwalter);
			clearTimeout(showarchana);
			clearTimeout(showvikram);
			setTimeout(
				function(){
					showVikram(8000);
				},2000);
			console.log('stop ajji, go back to vikram');
			return;
		}
	});

	$('.next').click(function() {

		if($('.active').hasClass('ajji-active')) {
			//$(this).removeClass('active');
			//showWalter(18000);
			//console.log('stop ajji, go to walter');
			//return;
			
			$('#ajji-light').clearQueue();
			$('#ajji-golden').clearQueue();
			$('#ajji-natural').clearQueue();
			$('#ajji-light').stop();
			$('#ajji-golden').stop();
			$('#ajji-natural').stop();
			$('.ajji-active .quote').stop();
			
			//$('.ajji-active').removeClass('active');		
			//$('.ajji-active,.ajji-active .quote').animate({opacity:0}, 8000);
			
			$('.walter-active,.walter-active .quote').css({'opacity':'','display':''});
			
			clearTimeout(showwalter);
			clearTimeout(showarchana);
			clearTimeout(showvikram);		
			
			setTimeout(
				function(){
					showWalter(1000);
				},2000);
			
				
			console.log('stop ajji, go to walter');
			return;
			
		}
		if($('.active').hasClass('walter-active')) {
			//$(this).removeClass('active');
			//showArchana(18000);
			//console.log('stop walter, go to archie');
			//return;
			clearTimeout(showarchana);
			clearTimeout(showvikram);
			
			$('#walter-light').clearQueue();
			$('#walter-golden').clearQueue();
			$('#walter-natural').clearQueue();
			$('#walter-light').stop();
			$('#walter-golden').stop();
			$('#walter-natural').stop();
			$('.walter-active .quote').stop();
			
			$('.archana-active,.archana-active .quote').css({'opacity':'','display':''});
			
			//clearTimeout(showwalter);	
				
			setTimeout(
				function(){
					showArchana(1000);
				},2000);			
			
			console.log('stop walter, go to archie');
			return;
		}
		if($('.active').hasClass('archana-active')) {
			/*$(this).removeClass('active');			
			showVikram(18000);
			console.log('stop archie, go to prema');
			return;*/
			
			$('#archana-light').clearQueue();
			$('#archana-golden').clearQueue();
			$('#archana-natural').clearQueue();
			$('#archana-light').stop();
			$('#archana-golden').stop();
			$('#archana-natural').stop();
			$('.archana-active .quote').stop();
			
			$('.vikram-active,.vikram-active .quote').css({'opacity':'','display':''});			
			
			clearTimeout(showvikram);			
			
			setTimeout(
				function(){
					showVikram(1000);
				},2000);
			console.log('stop archie, go to vikram');
			return;
		}
		if($('.active').hasClass('prema-active')) {
			$(this).removeClass('active');			
			showVikram(18000);
			console.log('stop prema, go to vikram');
			return;
		}
		if($('.active').hasClass('vikram-active')) {
			/*$(this).removeClass('active');			
			showAjji(18000);
			console.log('stop vik, go to kamal');
			return;*/
			
			$('#vikram-light').clearQueue();
			$('#vikram-golden').clearQueue();
			$('#vikram-natural').clearQueue();
			$('#vikram-light').stop();
			$('#vikram-golden').stop();
			$('#vikram-natural').stop();
			$('.vikram-active .quote').stop();
			
			$('.ajji-active,.ajji-active .quote').css({'opacity':'','display':''});			
			
			//clearTimeout(showvikram);			
			
			setTimeout(
				function(){
					showAjji(1000);
				},2000);
			console.log('stop vikram, go to ajji');
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

	function clearBackground () {
		$('body').css({'background':'none'});
	}

	function growRedline() {

      $('.swoosh').animate({width: 'show'}, 6000);
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
		console.log('in');
	    $('.content-area').animate({'opacity': 0}, 10000);
	    $('.prev-next').animate({'opacity': 1}, 20000);		
		
		 
		showajji = setTimeout(function() { 
			showAjji(8000);
		}, 5000);

		showwalter = setTimeout(function() { 
			showWalter(8000);
		}, 25000);

		showarchana = setTimeout(function() {
			showArchana(8000);
		}, 45000);		

		showvikram = setTimeout(function() {
			showVikram(8000);
		}, 65000);


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
		
		$('.active').removeClass('active');
		
		fadeCharacter($("#vikram-light"),waitTime);
		fadeCharacter($("#vikram-golden"),waitTime);
		fadeCharacter($("#vikram-natural"),waitTime);

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
		console.log('in fade char');
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

		fadeCharacter($("#archana-light"),waitTime);
		fadeCharacter($("#archana-golden"),waitTime);
		fadeCharacter($("#archana-natural"),waitTime);

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
	
	$('#menu-button').click(function(){		
		$(this).parent('#menu-div').siblings('ul').toggleClass('hidden');
		
	});
	
	$('#storyline-click,#s-storyline').click(function(){		
		showStoryline();
	});
	
	$('#cast-click,#s-cast').click(function(){		
		showCastCrew();
	});
	$('#characters-click,#s-characters').click(function(){		
		$('#menu-button').parent('#menu-div').siblings('ul').toggleClass('hidden');
		$('#cast-crew,#storyline,#upcoming-shows,#buy-tickets,#past-productions').animate({'opacity': 0}, 6000);
		beginCharacters();
		$('#character-slideshow').animate({'opacity': 1}, 6000);		
	});
	
	$('#upcomingshows-click,#s-upcomingshows').click(function(){		
		$('#menu-button').parent('#menu-div').siblings('ul').toggleClass('hidden');
		$('#cast-crew,#storyline,#character-slideshow,#buy-tickets,#past-productions').animate({'opacity': 0}, 6000);
		$('#upcoming-shows').animate({'opacity': 1}, 6000);
	});
	
	$('#buytickets-click,#s-buytickets').click(function(){	
		$('#menu-button').parent('#menu-div').siblings('ul').toggleClass('hidden');	
		$('#cast-crew,#storyline,#character-slideshow,#upcoming-shows,#past-productions').animate({'opacity': 0}, 6000);
		$('#buy-tickets').animate({'opacity': 1}, 6000);
	});
	$('#pastproductions-click,#s-pastproductions').click(function(){	
		$('#menu-button').parent('#menu-div').siblings('ul').toggleClass('hidden');	
		$('#cast-crew,#storyline,#character-slideshow,#upcoming-shows,#buy-tickets').animate({'opacity': 0}, 6000);
		$('#past-productions').animate({'opacity': 1}, 6000);
	});

	function showStoryline() {
		$('#menu-button').parent('#menu-div').siblings('ul').toggleClass('hidden');
		$('#character-slideshow,#cast-crew,#upcoming-shows,#buy-tickets,#past-productions').animate({'opacity': 0}, 6000);
		$('#storyline').animate({'opacity': 1}, 6000);
	}

	function showCastCrew() {
		$('#menu-button').parent('#menu-div').siblings('ul').toggleClass('hidden');
		$('#character-slideshow,#storyline,#upcoming-shows,#buy-tickets,#past-productions').animate({'opacity': 0}, 6000);
		$('#cast-crew').animate({'opacity': 1}, 6000);
	}


	
});

