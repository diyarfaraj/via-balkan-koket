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
			console.log('helliooo');
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

let d = new Date();
let n = d.getDay();
let now = d.getHours() + '.' + d.getMinutes();
var weekdays = [
	[ 'Söndag', 11.0, 20.0 ],
	[ 'Måndag', 10.0, 20.0 ],
	[ 'Tisdag', 10.0, 20.0 ],
	[ 'Onsdag', 10.0, 20.0 ],
	[ 'Thursday', 10.0, 20.0 ],
	[ 'Friday', 10.0, 20.0 ],
	[ 'Lördag', 10.0, 14.0 ]
];
var day = weekdays[n];

if ((now > day[1] && now < day[2]) || (now > day[3] && now < day[4])) {
	console.log(day[4]);
	const markUp = `
	<h3>Öppet idag till kl ${day[2]}:00</h3>
	
	`;
	restSign.innerHTML = markUp;
} else {
	const markUp2 = `
	<h3>Stängd just nu. Öppnar imorgon kl ${day[0] === 'Lördag' ? 11 : 10}:00</h3>
	
	`;
	restSign.innerHTML = markUp2;
}
