const nav = document.querySelector('nav');
const topOfNav = nav.offsetTop;
nav.classList.remove('whole-nav');
function fixNav() {
	if (window.scrollY >= 615) {
		nav.classList.add('whole-nav');
	} else {
		nav.classList.remove('whole-nav');
	}
}

window.addEventListener('scroll', fixNav);

$(document).ready(function() {
	// animate on scroll Section features
	$('.js--wp-1').waypoint(
		function(direction) {
			$('.js--wp-1').addClass('animated fadeInUp');
		},
		{
			offset: '50%'
		}
	);

	// animate on scroll app section
	$('.js--wp-2').waypoint(
		function(direction) {
			$('.js--wp-2').addClass('animated fadeInUp');
		},
		{
			offset: '50%'
		}
	);

	// animate on scroll
	$('.js--wp-3').waypoint(
		function(direction) {
			console.log('helliooo');
			$('.js--wp-3').addClass('animated fadeInUp');
		},
		{
			offset: '50%'
		}
	);
	// animate on scroll
	$('.js--wp-4').waypoint(
		function(direction) {
			$('.js--wp-4').addClass('animated pulse');
		},
		{
			offset: '50%'
		}
	);

	/* MObile navigation */

	$('.js--nav-icon').click(function() {
		var nav = $('.js--main-nav');
		var icon = $('#ham-icon');
		nav.slideToggle();
		//add   <ion-icon name="close"></ion-icon>

		if (icon.attr('name') === 'menu') {
			//if the attribute name of icon is == to menu
			icon.removeAttr('name'); //remove the name attribute
			icon.attr('name', 'close'); // add the name attribute again and set it === to close
		} else {
			icon.removeAttr('name', 'close'); //remove attribute name === close
			icon.attr('name', 'menu'); //add attribute name === menu.
		}
	});
});

// Opening hours
const restSign = document.querySelector('#openHours');
const copyRight = document.querySelector('.copyright');

let d = new Date();
let n = d.getDay();
let now = d.getHours() + '.' + d.getMinutes();
var weekdays = [
	[ 'Söndag', 9.0, 18.0 ],
	[ 'Måndag', 8.0, 20.0 ],
	[ 'Tisdag', 8.0, 20.0 ],
	[ 'Onsdag', 8.0, 20.0 ],
	[ 'Torsdag', 8.0, 20.0 ],
	[ 'Fredag', 8.0, 20.0 ],
	[ 'Lördag', 8.0, 20.0 ]
];
var day = weekdays[n];

if ((now > day[1] && now < day[2]) || (now > day[3] && now < day[4])) {
	const markUp = `
	<h3>Öppet idag till kl ${day[2]}:00</h3>
	<h5>Lunchöppet mån-fre 69kr, kl 11:00 - 15:00</h5>
	
	`;
	if (day[0]) restSign.innerHTML = markUp;
} else {
	const markUp2 = `
	<h3>Stängd just nu. Öppnar ${now < day[1] ? 'idag' : 'imorgon'}  kl ${now > day[2] && day[0] === 'Lördag'
		? 11
		: now < day[1] && day[0] === 'Söndag' ? 9 : 8}:00</h3>
		<h5>Lunchöppet mån-fre 69kr, kl 11:00 - 15:00</h5>
		

	
	`;
	restSign.innerHTML = markUp2;
}

// Copyright current year
const nowYear = new Date();
const currYear = nowYear.getFullYear();

const markUp3 = `
	<p>&copy; ${currYear} Via Balkan Köket. By GOT Interactive Solutions. </p>
	`;

copyRight.innerHTML = markUp3;
