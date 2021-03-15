//箭头左右移动
var navShareNum = 0;
function navShare(){
	if(navShareNum>=0){
		$('.share span').css('left','5px');
		navShareNum = -1;
	}else{
		$('.share span').css('left','20px');
		navShareNum = 0;
	}
}
var navShareTimer = setInterval(navShare,999);
$('.share span').hover(
	function(){
		clearInterval(navShareTimer);
	},
	function(){
		navShareTimer = setInterval(navShare,999);
	}
)
//点击箭头切换样式
var navShareNum1 = 0;
$('.share span').on('click',function(){
	if(navShareNum1==0){
		navShareNum1++;
		$('.share').animate({right:'0px'},1000);
		$('.share span').addClass('shareClick');
	}else{
		navShareNum1--;
		$('.share').animate({right:'-250px'},1000);
		$('.share span').removeClass('shareClick');
	}
})
//光圈一直旋转
var i = 0;
setInterval(function(){
	i--;
	$('.gameVideo div:eq(0)').css({'transform':'rotate('+i*30+'deg)'});
},200)
//点击显示视频
$('.gameVideo div:eq(1)').click(function(){
	$('.pv').css('display','block');
})
//点击关闭视频
$('.closeVideo').click(function(){
	$('.pv').css('display','none');
})