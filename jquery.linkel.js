/*
* name: 	Linkel
* author: 	Ali Mortazavi
* version: 	0.1.0
* icense: 	MIT
*/
(function($){
	$.fn.linkel = function(options){
		// Default Settings
		var settings = $.extend({
			href 	: null,
			text 	: null,
			target	: '_self'
		}, options);
		
		// Validation
		if(settings.href == null){
			console.log("You need an href option for Linkel to work");
			return false;
		}
		
		return this.each(function(){
			var object = $(this);
			
			if(settings.text == null){
				settings.text = object.text();
			}
			
			object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
		});
	}
}(jQuery));