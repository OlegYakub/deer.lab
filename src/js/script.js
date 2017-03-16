
/*==============slick=============*/




/*================modal=====================*/

$(document).ready(function(){

$('.rhombus__big').height($('.rhombus__big').width())

$(window).resize(function(){
	$('.rhombus__big').height($('.rhombus__big').width())
})

$(window).scroll(function(){
		var st = $(this).scrollTop();

		console.log(12);
		$('.left-sq').css({
		 		"transform" : "translatex( -" + st /70 + "%) rotate(45deg)"
		});

		$('.right-sq').css({
		 		"transform" : "translatex( " + st /70 + "%) rotate(45deg)"
		});
});

});