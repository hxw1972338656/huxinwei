//初始化样式
$('.companyNews a').eq(0).css('left','-1518px');
$('.companyNews a').eq(1).css('left','1518px');
$('.companyNews a').eq(2).css('left','-1518px');
$('.companyNews a').eq(3).css('left','1518px');
$('.Moefantasy').css('opacity',0);
//鼠标移动触发特效
$(window).scroll(function(){
	if($(window).scrollTop()>=500){
		$('.companyNews a').animate({left:0},1000);//移动特效
		$('.box>span').css('display','block');
	}
	if($(window).scrollTop()>=1800){
		$('.Moefantasy').animate({opacity:1},1000);//移动特效
	}
})
//点击切换招聘信息
$('.recruitBoll>li').click(function(){
	$(this).css({background:'#1f73a4',color:'white'}).siblings().css({background:'transparent',color:'#215172'});
	$('.recruitBollMain>li').eq($(this).index()).css('display','block').siblings().css('display','none');
	$('.bollMain>li').eq($(this).index()).css('display','block').siblings().css('display','none');
})
//点击返回顶部
$('.box span').click(function(){
	var scrollTopNum = $(window).scrollTop();
	var timer = setInterval(function(){
		if(scrollTopNum>0){
			scrollTopNum = scrollTopNum-50;
			$(window).scrollTop(scrollTopNum);
		}else{
			clearInterval(timer);
		}
	},1)
})