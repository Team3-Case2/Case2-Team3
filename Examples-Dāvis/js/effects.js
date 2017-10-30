$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({left: '450px'},10000);
    });
		$("#stop").click(function(){
        $("div").stop();
    });
	if ($("div").css({background: '#98bf21'})){
				$("div").hover(function(){
        	$(this).css({background: 'black'});
    });
	}
	if ($("div").css({background: 'black'})){
			    $("div").hover(function(){
        	$(this).css({background: '#98bf21'});
    });
	} 
});