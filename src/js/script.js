
/*==============slick=============*/

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});



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

			//console.log(1);
				$('.wind img').css({
					"transform" : "translate(-"+ (st - main1St + 200 ) /230 +"%," + (st - main1St + 200 ) /230 + "%) rotate(-45deg) "
			});
		}else{
			$('.wind img').css({
					"transform" : "translate(-0%,0%) rotate(-45deg) "
			});
		}

		if(st >= main1St){

			//console.log(1);
				$('.logo-im').css({
					"transform" : "translate(0%, -" + (st - main1St)/ 30 + "%"
				});

				$('.logo-t').css({
					"transform" : "translate(0%, -" + (st - main1St) / 60 + "%"
				});
		}else{
				$('.logo-im').css({
					"transform" : "translate(-0%,0%)"
				});

				$('.logo-t').css({
					"transform" : "translate(-0%,0%)"
				});
		}
});

});