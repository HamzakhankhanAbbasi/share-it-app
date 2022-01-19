// NAVIGATION
initializeStellarNav(1, '#main-nav');
function initializeStellarNav(index, element) {
	$(element).stellarNav({
		breakpoint: 1023,
		position: 'left'
	});
}

// MOUSE OVER BG
var lFollowX = 0,
lFollowY = 0,
x = 0,
y = 0,
friction = 1 / 30;
function moveBackground() {
	x += (lFollowX - x) * friction;
	y += (lFollowY - y) * friction;
	translate = 'translate(' + x + 'px, ' + y + 'px) scale(1)';
	$('.sec-1-abs-images, .sec-2-abs-images, .sec-3-abs-images, .sec-4-abs-images, .sec-4-abs-images, .sec-5-abs-images, .sec-6-abs-images').css({
		'-webit-transform': translate,
		'-moz-transform': translate,
		'transform': translate
	});
	window.requestAnimationFrame(moveBackground);
}
$('.index-sec-1, .index-sec-2, .index-sec-3, .index-sec-4, .index-sec-5, .index-sec-6').on('mousemove click', function(e) {
	var lMouseX = Math.max(-200, Math.min(200, $(window).width() / 2 - e.clientX));
	var lMouseY = Math.max(-250, Math.min(250, $(window).height() / 2 - e.clientY));
	lFollowX = (20 * lMouseX) / 70; 
	lFollowY = (10 * lMouseY) / 70;
});
moveBackground();



//APP SCREEN SLIDER
var swiper = new Swiper(".app-screen-slider", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 4,
	spaceBetween: 10,
	loop:true,
	coverflowEffect: {
		rotate: 4,
		stretch: 0,
		depth: 50,
		modifier: 5,
		slideShadows: false,
	},
	navigation: {
		nextEl: ".screen-slider-wrap .right-arrow",
		prevEl: ".screen-slider-wrap .left-arrow",
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	breakpoints: {
		250: {
			slidesPerView: 1,
		},
		520: {
			slidesPerView: 2,
			spaceBetween: 0,
		},
		575: {
			slidesPerView: 3,
		},
		768	: {
			slidesPerView: 3,
		},
		991: {
			slidesPerView: 4,
		},
	},
});

//APP TESTIMONIAL SLIDER
var swiper = new Swiper(".testimonial-slider", {
	loop:true,
	navigation: {
		nextEl: ".testimonial-prev",
		prevEl: ".testimonial-next",
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
});