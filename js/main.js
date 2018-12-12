$('document').ready(function(){






//navigation links

$(function to_Position(){
	$('.summerPlanLink').click(function(){
		$('html,body').animate({
		scrollTop:($('#summerPlanPage').offset().top)+1
		}, 'slow')
	})
});

$(function to_Position(){
	$('.moreWorkLink').click(function(){
		$('html,body').animate({
		scrollTop:($('#moreWorkPage').offset().top)
		}, 'slow')
	})
});

$(function to_Position(){
	$('.musicLink').click(function(){
		$('html,body').animate({
		scrollTop:$('#musicPage').offset().top
		}, 'slow')
	})
});

$(function to_Position(){
	$('.contactLink').click(function(){
		$('html,body').animate({
		scrollTop:$('#contactPage').offset().top
		}, 'slow')
	})
});

$(function to_Position(){
	$('.homeNav').click(function(){
		$('html,body').animate({
		scrollTop: 0
		}, 'slow')
	})
	
});




// ---------------------- Change States  - Upcoming Project Preview -------------
// $(function(){
// $(".googleSoundBG").click(function(){
// 	console.log('black Text')
// 	$(".googleTitle").addClass("blackText");
// 	$(".googleProjectDuration").addClass("blackText");
// 	$(".googleSoundBG").addClass("fadeOut");

// 	$(".googlePreview").addClass("show");
// 	$('html,body').animate({
// 		scrollTop:(($(".googlePreview").offset().top) - 100)
// 		}, 'slow')
// 	});

// $(".closeButton").click(function(){
// 	console.log('white Text')
// 	$(".googleTitle").removeClass("blackText");
// 	$(".googleProjectDuration").removeClass("blackText");
// 	$(".googleSoundBG").removeClass("fadeOut");
// 	$(".googlePreview").removeClass("show");
// 	$('html,body').animate({
// 		scrollTop:(($(".googleSoundBG").offset().top))
// 		}, 'slow')
// 	});

// //click on kto project
// $(".ktoSoundBG").click(function(){
// 	console.log('black Text')
// 	$(".ktoTitle").addClass("blackText");
// 	$(".ktoProjectDuration").addClass("blackText");
// 	$(".ktoSoundBG").addClass("fadeOut");

// 	$(".ktoPreview").addClass("show");
// 	$('html,body').animate({
// 		scrollTop:(($(".ktoPreview").offset().top) - 100)
// 		}, 'slow')
// 	});

// $(".closeButton").click(function(){
// 	console.log('white Text')
// 	$(".ktoTitle").removeClass("blackText");
// 	$(".ktoProjectDuration").removeClass("blackText");
// 	$(".ktoSoundBG").removeClass("fadeOut");
// 	$(".ktoPreview").removeClass("show");
// 	$('html,body').animate({
// 		scrollTop:(($(".ktoSoundBG").offset().top))
// 		}, 'slow')
// 	});

// $(".googlePreview").click(function(){
// 	$(".googleTitle").addClass("hide");
// 	$(".googleSoundBG").addClass("fadeOut");
// 	$(".googleProjectDuration").addClass("blackText");
// 	$(".googlePreview").addClass("show");
// 	$(".googleCloseButton").addClass("show");
// 	$(".googleSoundBG").removeClass("thumbnailShadow");
// 	$(".googleProjectDuration").addClass("hide");
// 	});

// $(".googleCloseButton").click(function(){
		
// 		$(".googleTitle").removeClass("hide");
// 		$(".googlePreview").removeClass("show");
// 		$(".googleSoundBG").removeClass("fadeOut");
// 		$(".googleProjectDuration").removeClass("blackText");
// 		$(".googleCloseButton").removeClass("show");
// 		$(".googleSoundBG").addClass("thumbnailShadow");
// 		$(".googleProjectDuration").removeClass("hide");
// 	});

// $(".ktoSoundBG").click(function(){
// 	$(".ktoTitle").addClass("hideIt");
// 	$(".ktoSoundBG").addClass("fadeOut");
// 	$(".ktoProjectDuration").addClass("blackText");
// 	$(".ktoPreview").addClass("show");
// 	$(".ktoCloseButton").addClass("show");
// 	$(".ktoSoundBG").removeClass("thumbnailShadow");
// 	$(".ktoProjectDuration").addClass("hideIt");
// 	$(".ktoPreview").addClass("moveUp");

// 	});

// $(".ktoCloseButton").click(function(){
// 		console.log('close');
// 		$(".ktoTitle").removeClass("hideIt");
// 		$(".ktoPreview").removeClass("show");
// 		$(".ktoSoundBG").removeClass("fadeOut");
// 		$(".ktoProjectDuration").removeClass("blackText");
// 		$(".ktoCloseButton").removeClass("show");
// 		$(".ktoSoundBG").addClass("thumbnailShadow");
// 		$(".ktoProjectDuration").removeClass("hideIt");
// 		$(".ktoPreview").removeClass("moveUp");
	
// 	});

// });

// ---------------------- Animations on Hover -------------

$(function(){
$(".project1BG").hover(function(){
	// console.log('slide');
		$(".phone").addClass("pulse");
		$(".project1BG").addClass("scaleUp");
		$(".project1BG").removeClass("scaleDown");
	});

$(".project1BG").mouseleave(function(){
	// console.log('slideOff');
		$(".phone").removeClass("pulse");
		$(".project1BG").removeClass("scaleUp");
		$(".project1BG").addClass("scaleDown");
	});

$(".project2BG").hover(function(){
	// console.log('slide');
		$(".desktop").addClass("pulse");
		$(".project2BG").addClass("scaleUp");
		$(".project2BG").removeClass("scaleDown");
	});

$(".project2BG").mouseleave(function(){
	// console.log('slideOff');
		$(".desktop").removeClass("pulse");
		$(".project2BG").removeClass("scaleUp");
		$(".project2BG").addClass("scaleDown");
	});

$(".googleSoundBG").hover(function(){
	// console.log('slide');
		
		$(".googleSoundBG").addClass("scaleUp");
		$(".googleSoundBG").removeClass("scaleDown");
	});

$(".googleSoundBG").mouseleave(function(){
	// console.log('slideOff');
		$(".googleSoundBG").removeClass("scaleUp");
		$(".googleSoundBG").addClass("scaleDown");
	});

$(".ktoSoundBG").hover(function(){
	
		$(".ktoSoundBG").addClass("scaleUp");
		$(".ktoSoundBG").removeClass("scaleDown");
	});

$(".ktoSoundBG").mouseleave(function(){
	
		$(".ktoSoundBG").removeClass("scaleUp");
		$(".ktoSoundBG").addClass("scaleDown");
		
	});

// ------------------ thumbnail hover ---------------------------- //

///// thumbnail (x)
$(".thumbnail1").hover(function(){
	
		$(".thumbnail1").addClass("scaleUp");
		$(".thumbnail1").removeClass("scaleDown");
	});


$(".thumbnail1").mouseleave(function(){
	
		$(".thumbnail1").removeClass("scaleUp");
		$(".thumbnail1").addClass("scaleDown");
		
	});

///// thumbnail (x)
$(".thumbnail2").hover(function(){
	
		$(".thumbnail2").addClass("scaleUp");
		$(".thumbnail2").removeClass("scaleDown");
	});


$(".thumbnail2").mouseleave(function(){
	
		$(".thumbnail2").removeClass("scaleUp");
		$(".thumbnail2").addClass("scaleDown");
		
	});
///// thumbnail (x)
$(".thumbnail3").hover(function(){
	
		$(".thumbnail3").addClass("scaleUp");
		$(".thumbnail3").removeClass("scaleDown");
	});


$(".thumbnail3").mouseleave(function(){
	
		$(".thumbnail3").removeClass("scaleUp");
		$(".thumbnail3").addClass("scaleDown");
		
	});
///// thumbnail (x)
$(".thumbnail4").hover(function(){
	
		$(".thumbnail4").addClass("scaleUp");
		$(".thumbnail4").removeClass("scaleDown");
	});


$(".thumbnail4").mouseleave(function(){
	
		$(".thumbnail4").removeClass("scaleUp");
		$(".thumbnail4").addClass("scaleDown");
		
	});
///// thumbnail (x)
$(".thumbnail5").hover(function(){
	
		$(".thumbnail5").addClass("scaleUp");
		$(".thumbnail5").removeClass("scaleDown");
	});


$(".thumbnail5").mouseleave(function(){
	
		$(".thumbnail5").removeClass("scaleUp");
		$(".thumbnail5").addClass("scaleDown");
		
	});
///// thumbnail (x)
$(".thumbnail6").hover(function(){
	
		$(".thumbnail6").addClass("scaleUp");
		$(".thumbnail6").removeClass("scaleDown");
	});


$(".thumbnail6").mouseleave(function(){
	
		$(".thumbnail6").removeClass("scaleUp");
		$(".thumbnail6").addClass("scaleDown");
		
	});
///// thumbnail (x)
$(".thumbnail7").hover(function(){
	
		$(".thumbnail7").addClass("scaleUp");
		$(".thumbnail7").removeClass("scaleDown");
	});


$(".thumbnail7").mouseleave(function(){
	
		$(".thumbnail7").removeClass("scaleUp");
		$(".thumbnail7").addClass("scaleDown");
		
	});
///// thumbnail (x)
$(".thumbnail8").hover(function(){
	
		$(".thumbnail8").addClass("scaleUp");
		$(".thumbnail8").removeClass("scaleDown");
	});


$(".thumbnail8").mouseleave(function(){
	
		$(".thumbnail8").removeClass("scaleUp");
		$(".thumbnail8").addClass("scaleDown");
		
	});
///// thumbnail (x)
$(".thumbnail9").hover(function(){
	
		$(".thumbnail9").addClass("scaleUp");
		$(".thumbnail9").removeClass("scaleDown");
	});


$(".thumbnail9").mouseleave(function(){
	
		$(".thumbnail9").removeClass("scaleUp");
		$(".thumbnail9").addClass("scaleDown");
		
	});


///// Day Off
$(".dayOffIG").hover(function(){
	
		$(".dayOffIG").addClass("scaleUp");
		$(".dayOffIG").removeClass("scaleDown");
	});


$(".dayOffIG").mouseleave(function(){
	
		$(".dayOffIG").removeClass("scaleUp");
		$(".dayOffIG").addClass("scaleDown");
		
	});


});




// ------------------- display none to block -----------------------
$(function(){

$(".ktoSoundBG").click(function(){
    $(".ktoPreviewBox").css("display", "block").show(2500);
    $(".ktoSound").css("display","none").hide(2500);
	});



$(".ktoCloseButton").click(function(){

    $(".ktoSound").css("display", "block").show();
    $(".ktoPreviewBox").css("display","none").hide();
	});

$(".googleSoundBG").click(function(){
    $(".googlePreviewBox").css("display", "block").show(2500);
    $(".googleSound").css("display","none").hide(2500);
	});

$(".googleCloseButton").click(function(){

    $(".googleSound").css("display", "block").show();
    $(".googlePreviewBox").css("display","none").hide();
	});
});



 });