var gameMapImg = ['url(Img/f1.png) no-repeat 0 0/100% 100%','url(Img/f2.jpg) no-repeat 0 0/100% 100%','url(Img/f3.png) no-repeat 0 0/100% 100%','url(Img/f4.png) no-repeat 0 0/100% 100%','url(Img/f5.png) no-repeat 0 0/100% 100%'];
//初始化背景图片
var num = 0;
for(var i=0;i<5;i++){
	$('.gameMap>div').eq(i).css('background',gameMapImg[i]);
}
//小圆点点击
$('.gameMapBoll li').click(function(){
	if($(this).index()>num){
		for(var i=0;i<$(this).index()-num;i++){
			mapRightClick();
		}
	}
	if($(this).index()<num){
		for(var i=0;i<num-$(this).index();i++){
			mapLeftClick();
		}
	}
	$(this).css({background:'url(Img/garden-click.png) no-repeat 0 0/100% 100%'}).siblings().css({background:'url(Img/garden.png) no-repeat 0 0/100% 100%'})
	num = $(this).index();
})
//箭头滑动
$('.mapRight').click(function(){
	mapRightClick();
})
function mapRightClick(){
	$('.gameMap>div').eq(0).remove();
	$('.gameMap').append('<div></div>');
	$('.gameMap>div').eq(4).css('background',gameMapImg[num]);
	if(num<4){
		num++;
	}else{
		num=0;
	}
	$('.gameMap>div').eq(4).append('<div></div>');
	for(var i=0;i<gameMapImg.length;i++){
		$('.gameMap>div').eq(i).children().attr('class','upImg');
	}
	$('.gameMap>div').eq(2).children().attr('class','downImg');
	$('.gameMapBoll li').eq(num).css({background:'url(Img/garden-click.png) no-repeat 0 0/100% 100%'}).siblings().css({background:'url(Img/garden.png) no-repeat 0 0/100% 100%'})
}
$('.mapLeft').click(function(){
	mapLeftClick();
})
function mapLeftClick(){
	$('.gameMap>div').eq(4).remove();
	$('.gameMap').prepend('<div></div>');
	$('.gameMap>div').eq(0).css('background',gameMapImg[4-num]);
	if(num>0){
		num--;
	}else{
		num=4;
	}
	$('.gameMap>div').eq(0).append('<div></div>');
	for(var i=0;i<gameMapImg.length;i++){
		$('.gameMap>div').eq(i).children().attr('class','upImg');
	}
	$('.gameMap>div').eq(2).children().attr('class','downImg');
	$('.gameMapBoll li').eq(num).css({background:'url(Img/garden-click.png) no-repeat 0 0/100% 100%'}).siblings().css({background:'url(Img/garden.png) no-repeat 0 0/100% 100%'})
}