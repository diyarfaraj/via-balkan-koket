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
