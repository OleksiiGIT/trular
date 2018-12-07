$(function() {

	$('#menuOpen').click(()=>{
		$('.mainMenuOverlay').show()
		$('.mainMenuTop').css('top', '0')
		$('.mainMenuTop').css('opacity', '1')
		$('.mainMenuTopNav ul li').addClass('animated fadeInLeft')
	})

	$('#menuClose').click(()=>{
		$('.mainMenuOverlay').hide()
		$('.mainMenuTop').css('top', '-1000px')
		$('.mainMenuTop').css('opacity', '0')
		$('.mainMenuTopNav ul li').removeClass('animated fadeInLeft')
	})

})