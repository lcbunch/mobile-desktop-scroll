var scrolling = false;

jQuery(function($){
    $("#slider1-forw").bind("touchstart mousedown", function(e){
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
