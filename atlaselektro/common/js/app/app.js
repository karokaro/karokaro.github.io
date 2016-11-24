/**
 * Name : "AtlasElektro.no"
 * Author: "PD"
 *
 *
 */


var AE = {
	toggleMenu: function() {
		
		var menu_element = $('[data-js="menu-icon"]');
		var menu = $('[data-js="menu"]');
		
		menu_element.on('click',function(){
			menu.slideToggle();
		})
	},
	init: function() {
		this.toggleMenu();
	}
}

$(function(){
	AE.init();
})