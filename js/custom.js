$(document).ready(function(){
	
	$('.jr2').owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		smartSpeed:1000,
		animateOut:'fadeOut',
		animateIn:'fadeIn',
	});
	
	$('.staff-slide').owlCarousel({
		items:4,
		margin:30,
		dots:false,
		loop:true,
		autoplay:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});
	
	$('.visitor').owlCarousel({
			autoplay:true,
			center: true,
			loop:true,
			items:1,
			margin: 30,
			stagePadding: 0,
			autoplayTimeout:4000,
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 1
				},
				1000:{
					items: 2
				}
			}
		});
		
		$('.popup').magnificPopup({
			type:'image',
			gallery:{
				enabled:true
			}
		});
	
	$(window).scroll(function(){
		var x=$(window).scrollTop();
		
		if(x>800){
			$('#scrollTop').fadeIn();
		}
		else{
			$('#scrollTop').fadeOut();
		}
	});
	$('#scrollTop').click(function(){
		$('html').animate({scrollTop:0},2000);
	});
	
	$('.counter-number').counterUp({
    delay: 10,
    time: 1000
});
});
