/******************

On Load

******************/

$(window).on("load", function(){

    makeFloatingNav();

    var $bars = $("#big-banner .bar");

    randomiseBars( $bars );
    animateBars( $bars );
	
	var $newsList = $("#horizontal-scroller");
	var $scrollArrow = $("#next-btn");
	
	makeScroll($newsList, $scrollArrow);
	
});

/******************

Floating nav

******************/

var makeFloatingNav = function(){
    var $floatingNav = $("#floating-nav");
    $floatingNav.topOffset = $floatingNav.offset().top;

    $(window).on("scroll", function(){
        if( $(window).scrollTop() >= $floatingNav.topOffset )
        {
            $floatingNav.addClass("float");
        } else {
            $floatingNav.removeClass("float");
        }
    });
}

/******************

Banner bars

******************/

var randomiseBars = function($bars){
    $bars.each(function(index) {
        var $offset = $(this).find(".bar-padding");
        var random = Math.floor((Math.random() * 40) + 0);
        $offset.height( random );

        var $content = $(this).find(".bar-content");
        random = Math.floor((Math.random() * 20) + 0);
        $content.height( $content.height()-random );

        random = Math.floor((Math.random() * 200) + 0);
        var rgb = "rgb("+ (random) + "," + (random+20) + "," + (random+40) +")";
        $content.css({"background-color":rgb});
		
		$(this).find(".bar-content-container").width($(this).find(".bar-content-container").innerWidth());
		$(this).find(".bar-content-container").height($(this).find(".bar-content-container").innerHeight());
    });
}

var animateBars = function($bars){

    var slide = function(){
        $bars.each(function(){
            $(this).removeClass("active");
        });
        var random = Math.floor((Math.random() * $bars.length) + 0);

        $( $bars[random] ).addClass("active");
    };

    var int = setInterval(slide, 5000);

    $bars.on("click",function(){
        clearInterval(int);
        int = setInterval(slide, 5000);

        $bars.each(function(){
            $(this).removeClass("active");
        });

        $(this).addClass("active");
    });
}


/******************

Scroller

******************/

var makeScroll = function($newsList, $scrollArrow){
	
	var slide = function(){
      	var first = $newsList.find("li")[0];
		$(first).detach().appendTo($newsList);
    };

    var int = setInterval(slide, 5000);

	$scrollArrow.on("click", slide);
    
}