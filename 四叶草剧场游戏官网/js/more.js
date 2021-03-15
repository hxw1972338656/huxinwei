//点击切换
var moreImg = ['url(Img/activitymore.png) no-repeat 0 0/100% 100%','url(Img/newestmain.png) no-repeat 0 0/100% 100%','url(Img/notice.png) no-repeat 0 0/100% 100%']
var moreClickImg = ['url(Img/activity-click.png) no-repeat 0 0/100% 100%','url(Img/newest-click.png) no-repeat 0 0/100% 100%','url(Img/notice-click.png) no-repeat 0 0/100% 100%']
$('.mainBoll li').click(function(){
	for(var i=0;i<moreImg.length;i++){
		$('.mainBoll li').eq(i).css('background',moreImg[i]);
		$('.mainNews>li').eq(i).css('display','none');
	}
	$(this).css('background',moreClickImg[$(this).index()]);
	$('.mainNews>li').eq($(this).index()).css('display','block');
})
//旋转特效
$('.mainRotate').mousedown(function(e){
	var ev = e || window.event;
	var that = this;
	if(ev.button==0){
		$(document).on('mousemove',function(e){
			var ev = e || window.event;
			var x = ev.clientX;
			var moveLeft = x/$('.box').width();
			$('.mainRotate').css({transform:'rotate('+(180*moveLeft-90)+'deg)'})
			$('.mainRotateB').attr('draggable','false');//防止拖动图片
		})
	}
})
$(document).mouseup(function(){
	$(document).off('mousemove');
	$('.mainRotate').css({transform:'rotate(0deg)'});
})



