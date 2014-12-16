//This code will make a click and hold scroll button that works on mobile and desktop devices

var scrolling = false;

jQuery(function($){
    $("#slider-forward").bind("touchstart mousedown", function(e){
    	e.stopPropagation(); e.preventDefault();
    	scrolling = true;
    	startScrolling($("#scroll"), "-=150px");
    }).bind("touchend mouseup", function(e){
    	e.stopPropagation(); e.preventDefault();
    	scrolling = false;
		    });
		});

		function startScrolling(obj, param)
		{
		    obj.animate({"left": param}, "fast", function(){
		    	if (scrolling)
		    	{
		    		startScrolling(obj, param);
		    	}
		    });
		}

//This is for going backward
var scrolling = false;

jQuery(function($){
    $("#slider-back").bind("touchstart mousedown", function(e){
    	e.stopPropagation(); e.preventDefault();
    	scrolling = true;
    	if ($('#scroll').position().left < "0") {
    	startScrolling($("#scroll"), "+=150px");
    	};
    }).bind("touchend mouseup", function(e){
    	e.stopPropagation(); e.preventDefault();
    	scrolling = false;
		    });
	});
		function startScrolling(obj, param)
		{
		    obj.animate({"left": param}, "fast", function(){
		    	if (scrolling)
		    	{
		    		startScrolling(obj, param);
		    	}
		    });
		}
