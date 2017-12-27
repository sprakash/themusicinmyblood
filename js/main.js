$(document).ready(function(){	
	
	//$('html').animate({'background-size' : '150%'}, 15000);
	/*$('.play-title').fadeIn(10000);
	$('.play-subtitle').fadeIn(10000);
	$('.enter-site').delay(10000).fadeIn();

	$('.enter-site').mouseover(function() {
		$('.overlay').css({'opacity': .2});
		$(this).css({'opacity':1});
	});
	
	$('.enter-site').mouseleave(function() {
		$('.overlay').css({'opacity': 0.1},{'z-index':6});
		$(this).css({'opacity':.4});
	});

	$('.enter-site').click(function() {
		$('.above-overlay').fadeOut(1000);
		loadAjji();
	});
*/

	//loadAjji();

	setTimeout(growRedline(),2000);

	function growRedline() {
		$('.divider').css({'visibility':'visible'})
		$('.divider').animate({'width':'50%'}, 5000);
	}

	function loadAjji() {
		//$('#ajji').fadeIn(10000);
		$('#ajji > .quote').animate({'opacity':1});
    	$("#ajji2").fadeTo(10000,0.2);

//		setTimeout(function(){ loadAjji2() }, 25000);

		pauseAll();
		
	}

	function loadAjji2() {		
		//$('#ajji2').stop(true).fadeTo(10000)
		$('#ajji2 > .quote').animate({'opacity':1});
		//setTimeout(function(){ loadArchana() }, 25000);

		//pauseAll();
		
	}

	function loadArchana() {
		$('html').css({'background':'none'});
		$('#ajji').fadeOut(10000);
		$('#archana').css({'z-index': 5});
		$('#archana').fadeIn(10000);
		$('#archana > .quote').animate({'opacity': 1});
		setTimeout(function(){ loadPrema1() }, 10000);
	}

	function loadPrema1() {
		$('#archana').fadeOut(10000);
		$('#prema1').fadeIn(10000);
		$('#prema1').css({'z-index': 5});
		$('#prema1 > .quote').animate({'opacity': 1});
		setTimeout(function(){ loadPrema2() }, 10000);
	}

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

