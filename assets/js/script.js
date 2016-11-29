$(document).ready(function() {


$("#menu-title").click(function(){
	if($(".menu-item").hasClass("hidden")){
		$(".menu-item.not-title").removeClass("hidden");
	}
	else{
		$(".menu-item.not-title").addClass("hidden");
	}
})

$(".page-content").click(function(){
	$(".menu-item.not-title").addClass("hidden");
})

$("#header-container").click(function(){
	$(".menu-item.not-title").addClass("hidden");
})

$(".menu-item.5").click(function(){
	if($(".menu-item").hasClass("hidden")){
	}
	else{
		$("html, body").animate({ scrollTop: $(document).height() }, 1000);	
	}
})

$(".menu-item.2").click(function(){
	if($(".menu-item").hasClass("hidden")){
	}
	else{
		// var vh = $(window).height();
		// $("html, body").animate({ scrollTop: $(document).height() }, 1000);	
		$(window).scrollTo("#About",750);
		// $("#header-container").css("position", "fixed");
		// $("#menu-container").css("position", "fixed");
		// $(".page-content").css("padding-top", "50px");
	}
})

$(".menu-item.3").click(function(){
	if($(".menu-item").hasClass("hidden")){
	}
	else{
		$(window).scrollTo("#Services",750);
	}
})

$(".menu-item.1").click(function(){
	if($(".menu-item").hasClass("hidden")){
	}
	else{
		// console.log("notice click");
		$(window).scrollTo("#Home",750);
	}
})

$(".menu-item.4").click(function(){
	if($(".menu-item").hasClass("hidden")){
	}
	else{
		$(window).scrollTo("#Gallery",750);
		$(".overlay").show();
	}
})

$(".carousel").unslider({
	// animation: "fade";
	autoplay: true,
	// delay: 2000
	keys: true
});

$(".overlay").hover(function(){
	$(this).fadeOut(1500);
});

$("#Gallery .page-header").click(function(){
	$(".overlay").fadeIn(1500);
});

});