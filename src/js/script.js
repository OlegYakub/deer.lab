
/*==============slick=============*/




/*================modal=====================*/

$(document).ready(function(){

$('.rhombus__big').height($('.rhombus__big').width())

$(window).resize(function(){
	$('.rhombus__big').height($('.rhombus__big').width())
})

$(window).scroll(function(){
		var st = $(this).scrollTop();
		
		$('.left-sq').css({
		 		"transform" : "translatex( -" + st /70 + "%) rotate(45deg)"
		});

		$('.right-sq').css({
		 		"transform" : "translatex( " + st /70 + "%) rotate(45deg)"
		});

		var main1St = $('.main-1').offset().top;
		
		if(st >= main1St - 200){

			console.log(1);
				$('.wind img').css({
					"transform" : "translate(-"+ (st - main1St + 200 ) /70 +"%," + (st - main1St + 200 ) /70 + "%) rotate(-45deg) "
			});
		}else{
			$('.wind img').css({
					"transform" : "translate(-0%,0%) rotate(-45deg) "
			});
		}
});

});