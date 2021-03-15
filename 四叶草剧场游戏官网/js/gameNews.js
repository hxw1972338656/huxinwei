/* 轮播图 */
var index = 0;
var hideImgArr = ['url(Img/f1.jpg) no-repeat 0 0/100% 100%','url(Img/f2.png) no-repeat 0 0/100% 100%','url(Img/f3.jpg) no-repeat 0 0/100% 100%'];
$('.hideBoll li').click(function(){
	$(this).attr('class','hideClick').siblings().attr('class','hideUnClick');
	index = $(this).index();
	$('.hideClickImg a').css('background',hideImgArr[index]);
})
/* 循环播放 */
var hideImgTimer = setInterval(function(){
	if(index<2){
		index++;
	}else{
		index = 0;
	}
	$('.hideBoll li').eq(index).attr('class','hideClick').siblings().attr('class','hideUnClick');
	$('.hideClickImg a').css('background',hideImgArr[index]);
},3000)
//点击事件
var num = 0;
var newsUnClickImgArr = ['url(Img/newest.png) no-repeat 0 0/100% 100%','url(Img/bulletin.png) no-repeat 0 0/100% 100%','url(Img/activity.png) no-repeat 0 0/100% 100%']
var newsClickImgArr = ['url(Img/newest-onClick.png) no-repeat 0 0/100% 100%','url(Img/bulletin-onClick.png) no-repeat 0 0/100% 100%','url(Img/activity-onClick.png) no-repeat 0 0/100% 100%']
$('.newsClick li').click(function(){
	$('.newsClick li:eq(0)').css('background',newsUnClickImgArr[0]);
	$('.newsClick li:eq(1)').css('background',newsUnClickImgArr[1]);
	$('.newsClick li:eq(2)').css('background',newsUnClickImgArr[2]);
	$(this).css('background',newsClickImgArr[$(this).index()]);
	$('.specific ul').eq($(this).index()).css('display','block').siblings().css('display','none');
})