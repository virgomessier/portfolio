/*jslint devel: true, browser: true, white: true*/
/*jslint maxerr: 10, es6, node, single, for, bitwise, for, multivar*/
/*eslint-env es6, es2017, es2018*/
/*eslint-disable no-console,*/
/*global console*/

const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

document.addEventListener('mousedown', (event) => {
	const target = event.target;
  
	// Проверяем, является ли цель события элементом меню, но не .menu__overlay
	const isClickInsideMenu = menu.contains(target) && !target.classList.contains('menu__overlay');
  
	// Если клик был сделан вне меню, то убираем класс 'active'
	if (!isClickInsideMenu) {
	  menu.classList.remove('active');
	}
  });

const counters = document.querySelectorAll('.skills__grade-item-counter'),
	scale = document.querySelectorAll('.skills__grade-scale span');

	counters.forEach( (item, i) => {
		scale[i].style.width = item.innerHTML;
	});



!function(exports) {
	exports.submitGoogleForm = submitGoogleForm;
	
	function submitGoogleForm(form) {
		try {
		var data = [].slice.call(form).map(function(control) {
			return 'value' in control && control.name ?
			control.name + '=' + (control.value === undefined ? '' : control.value) :
			'';
		}).join('&');
		var xhr = new XMLHttpRequest();
	
		xhr.open('POST', form.action + '/formResponse', true);
		xhr.setRequestHeader('Accept',
			'application/xml, text/xml, */*; q=0.01');
		xhr.setRequestHeader('Content-type',
			'application/x-www-form-urlencoded; charset=UTF-8');
		xhr.send(data);
		} catch(e) {}
	
		form.parentNode.className += ' submitted';
	
		return false;
	}
	}(typeof module === 'undefined' ? window : module.exports);

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	
	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},

	slidesPerView: 1,

	speed: 700,
	spaceBetween: 100,

	autoplay: {
		delay: 3000,
	},

	// effect: 'coverflow',

	// CoverflowEffect: {
	// 	rotate: 20,
	// 	stretch: 50,
	// },

	keyboard: {
		enable: true,
		onlyInViewport: true,
		PageUpDown: false,
	},

});


$(document).ready(function () {

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1200) {
			$('.arrow-top').fadeIn();
		} else {
			$('.arrow-top').fadeOut();
		}
	});

	$("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
	
			// Store hash
			var hash = this.hash;
	
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
			scrollTop: $(hash).offset().top
			}, 800, function(){
		
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
			});
		} // End if
	});


});