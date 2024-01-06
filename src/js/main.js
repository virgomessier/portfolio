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
	  