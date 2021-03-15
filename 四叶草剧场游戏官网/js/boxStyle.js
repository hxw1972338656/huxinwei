//网页位置
$(window).scroll(function(){
	if($(window).scrollTop()<=787-200){
		$('.numBox li').eq(0).css('background','url(Img/garden-click.png) no-repeat 0 0/100% 100%').siblings().css('background','url(Img/garden.png) no-repeat 0 0/100% 100%')
	}
	if($(window).scrollTop()>787-200&&$(window).scrollTop()<=787*2-200){
		$('.numBox li').eq(1).css('background','url(Img/garden-click.png) no-repeat 0 0/100% 100%').siblings().css('background','url(Img/garden.png) no-repeat 0 0/100% 100%')
	}
	if($(window).scrollTop()>787*2-200&&$(window).scrollTop()<=787*3-200){
		$('.numBox li').eq(2).css('background','url(Img/garden-click.png) no-repeat 0 0/100% 100%').siblings().css('background','url(Img/garden.png) no-repeat 0 0/100% 100%')
	}
	if($(window).scrollTop()>787*3-200){
		$('.numBox li').eq(3).css('background','url(Img/garden-click.png) no-repeat 0 0/100% 100%').siblings().css('background','url(Img/garden.png) no-repeat 0 0/100% 100%')
	}
})
//点击跳转
for(var i=0;i<$('.clickNav li').length;i++){
	$('.clickNav li').eq(i).attr('value',i);
}
$('.clickNav li').click(function(){
	console.log($(this).attr('value'));
	$(window).scrollTop($(this).attr('value')*787);
})