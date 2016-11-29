$(document).ready(function() {

//Shows and hides menu items on click
$("#menu-title").click(function(){
	if($(".menu-item").hasClass("hidden")){
		$(".menu-item.not-title").removeClass("hidden");
	}
	else{
		$(".menu-item.not-title").addClass("hidden");
	}
})

//Hides menu when click anywhere not on menu
$(".page-content").click(function(){
	$(".menu-item.not-title").addClass("hidden");
})

$("#header-container").click(function(){
	$(".menu-item.not-title").addClass("hidden");
})

//Brings user to home upon clicking the page title
$("#title").click(function(){
	$(window).scrollTo("#Home", 750);
})

//Brings user to bottom of the screen on click (where Contact info is placed)
$(".menu-item.5").click(function(){
	if($(".menu-item").hasClass("hidden")){
	}
	else{
		$("html, body").animate({ scrollTop: $(document).height() }, 1000);	
	}
})

//Page moves to About section on menu item click
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

//Page moves to Services section on menu item click
$(".menu-item.3").click(function(){
	if($(".menu-item").hasClass("hidden")){
	}
	else{
		$(window).scrollTo("#Services",750);
	}
})

//Page moves to Home section on menu item click
$(".menu-item.1").click(function(){
	if($(".menu-item").hasClass("hidden")){
	}
	else{
		// console.log("notice click");
		$(window).scrollTo("#Home",750);
	}
})

//Page moves to Gallery section on menu item click and replaces all overlays on images
$(".menu-item.4").click(function(){
	if($(".menu-item").hasClass("hidden")){
	}
	else{
		$(window).scrollTo("#Gallery",750);
		$(".overlay").show();
	}
})


//Automatic carousel on home page
$(".carousel").unslider({
	// animation: "fade";
	autoplay: true,
	// delay: 2000
	keys: true
});

//Removes overlay on hovered image
$(".overlay").hover(function(){
	$(this).fadeOut(1500);
});

//Replaces all overlays upon clicking the Gallery page title
$("#Gallery .page-header").click(function(){
	$(".overlay").fadeIn(1500);
});

});