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