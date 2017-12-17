;(function(){
	"use strict";

	$(document).ready(function(){
		$('.ba-item__description').not(':first').hide();
		$('.ba-item__title').click(function(){

			var description = $(this).next('.ba-item__description');
			var accordion = $(this).closest('.ba-accordion');

			if(description.is(':visible')){
				description.slideUp(500);
			} else {
				accordion.find(' .ba-item__description').slideUp(500);
				description.slideDown(400);
			}

		});
	});


})();