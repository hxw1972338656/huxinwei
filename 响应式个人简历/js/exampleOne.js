/* 导航栏 吸顶 */
$(window).scroll(function(e){
	var ev = e || window.event;
	if($(window).scrollTop()>=300){
		$('.nav-js').css({display:"block"});
	}else{
		$('.nav-js').css({display:"none"});
	}
})
/* 显示滚动条回到顶部 */
$(window).scroll(function(e){
	var ev = e || window.event;
	if($(window).scrollTop()>=760){
		$('.moveTop').css({display:"block"});
	}else{
		$('.moveTop').css({display:"none"});
	}
})
/* 点击回到顶部 */
$('.moveTop').click(function(e){
	var ev = e || window.event;	
	var moveTop = setInterval(function(){
		window.scrollBy(0,-30);
		if($(window).scrollTop()==0){
			clearInterval(moveTop);
		}
	},1)
})
/* 关于我 tab切换 */
$('.about-main>div').click(function(e){
	var ev = e || window.event;
	$(this).css({background:"#FFC576"}).siblings().css({background:"transparent"});
	$('.about-main-tab>div').eq($(this).index()).css({display:"block"}).siblings().css({display:"none"});
})
/* 滑动特效 */
if($(window).scrollTop()>=0){
	$('.header-main').css({transform: "translateY(0px)",opacity:"1"});
}
$(window).scroll(function(e){
	if($(window).scrollTop()>=200){
		$('.about-main-tab').css({transform: "translateY(0px)",opacity:"1"});
	}
	if($(window).scrollTop()>=1000){
		$('.project-main-infor').css({transform: "translateY(0px)",opacity:"1"});
	}
	if($(window).scrollTop()>=1700){
		$('.evaluate-main-infor').css({transform: "translateY(0px)",opacity:"1"});
	}
})
/* 底部边框 */
$(window).scroll(function(e){
	
})
