//点击切换人物
var changePersonImg = ['Img/icon-ttny.png','Img/icon-yml.png','Img/icon-lili.png','Img/icon-b1.png','Img/icon-aqie.png'];
var changePersonclickImg = ['Img/icon-ttny-active.png','Img/icon-yml-active.png','Img/icon-lili-active.png','Img/icon-b-active.png','Img/icon-aqie-active.png'];
var personHideImg1 = ['Img/character-ttly.png','Img/character-myl.png','Img/character-lili.png','Img/character-b.png','Img/character-aqie.png'];
var personHideclickImg1 = ['Img/character-ttly-cut.png','Img/character-myl-cut.png','Img/character-lili-cut.png','Img/character-b-cut.png','Img/character-aqie-cut.png'];
$('.roleChange span').click(function(){
	for(var i=0;i<changePersonImg.length;i++){
		$('.roleChange span').eq(i).children().attr('class','');
		$('.roleChange span').eq(i).children().attr('src',changePersonImg[i]);
		$('.roleBollContent li').eq(i).animate({opacity:0,left:'-550px'},300);
		$('.roleMainBoll li').eq(i).animate({opacity:0},300);
		$('.roleMainSkill li').eq(i).animate({opacity:0},300);
		$('.roleBollCut li').eq(i).animate({opacity:0,right:'-550px'},300);
	}
	$('.roleBollContent li').eq($(this).index()).css('opacity',1).siblings().css('opacity',0);
	$('.roleMainBoll li').eq($(this).index()).css('opacity',1).siblings().css('opacity',0);
	$('.roleMainSkill li').eq($(this).index()).css('display','block').siblings().css('display','none');
	$('.roleBollCut li').eq($(this).index()).css('opacity',1).siblings().css('opacity',0);
	$('.roleBollContent li').eq($(this).index()).animate({opacity:1,left:0},300);
	$('.roleBollCut li').eq($(this).index()).animate({opacity:1,right:0},300);
	$('.roleMainBoll li').eq($(this).index()).animate({opacity:1},300);
	$('.roleMainSkill li').eq($(this).index()).animate({opacity:1},300);
	$('.roleChange span').eq($(this).index()).children().attr('class','changImg');
	$('.roleChange span').eq($(this).index()).children().attr('src',changePersonclickImg[$(this).index()]);
	$('.leftBigImg').attr('src',personHideImg1[$(this).index()]);
	$('.rightBigImg').attr('src',personHideclickImg1[$(this).index()]);
})
//点击切换技能
$('.roleMainSkill>li>span').click(function(){
	for(var i=0;i<3;i++){
		$('.roleMainSkill>li').eq($(this).parent().index()).children('div').eq(i).css('display','none');
	}
	$(this).css('background','#ecb158').siblings().css('background','transparent');
	$('.roleMainSkill>li').eq($(this).parent().index()).children('div').eq($(this).index()).css('display','block');
})
//左侧放大镜
$('.leftBigImg').css({width:$('.roleBollContent').width()*2+'px',height:'auto'});
$('.roleBollContent').mouseover(function(e){
	var ev = e || window.event;
	$('.blackTop').css('display','block');
	$('.leftBig').css('display','block');
	var blackX = ev.clientX-$('.blackTop').width()/2;
	var blackY = ev.clientY-$('.blackTop').height()/2+$(window).scrollTop();
	$('.blackTop').css({left:blackX+'px',top:blackY+'px'});
	$(document).mousemove(function(e){
		var ev = e || window.event;
		blackX = ev.clientX-$('.blackTop').width()/2;
		blackY = ev.clientY-$('.blackTop').height()/2+$(window).scrollTop();
		var x = (ev.clientX-$('.roleBollContent').offset().left)*2-$('.leftBig').width()/2;
		var y = (ev.clientY-$('.roleBollContent').offset().top)*2-$('.leftBig').height()-$(window).scrollTop();
		if(blackX<=0){
			blackX=0;
		}
		if(x<=0){
			x=0;
		}
		if(blackX>=$('.roleBollContent').width()-$('.blackTop').width()-1){
			blackX=$('.roleBollContent').width()-$('.blackTop').width()-1;
		}
		if(x>=$('.leftBigImg').width()-$('.leftBig').width()){
			x=$('.leftBigImg').width()-$('.leftBig').width();
		}
		if(blackY<=40){
			blackY=40;
		}
		if(y<=0){
			y=0;
		}
		if(blackY>=$('.roleBollContent').height()-$('.blackTop').height()/2-5){
			blackY=$('.roleBollContent').height()-$('.blackTop').height()/2-5;
		}
		if(y>=$('.leftBigImg').height()-$('.leftBig').height()){
			y=$('.leftBigImg').height()-$('.leftBig').height();
		}
		$('.blackTop').css({left:blackX+'px',top:blackY+'px'});
		$('.leftBigImg').css({left:-x+'px',top:-y+'px'});
	})
	$('.blackTop').mouseout(function(){
		$('.blackTop').css('display','none');
		$('.leftBig').css('display','none');
	})
})
// 右侧放大镜
$('.rightBigImg').css({width:$('.roleBollCut').width()*2+'px',height:'auto'});
$('.roleBollCut').mouseover(function(e){
	console.log(2)
	var ev = e || window.event;
	$('.blackTop1').css('display','block');
	$('.rightBig').css('display','block');
	var blackrX = ev.clientX-$('.blackTop').width()/2;
	var blackrY = ev.clientY-$('.blackTop').height()/2+$(window).scrollTop();
	$('.blackTop1').css({left:blackrX+'px',top:blackrY+'px'});
	$(document).mousemove(function(e){
		var ev = e || window.event;
		blackrX = ev.clientX-$('.blackTop1').width()/2;
		blackrY = ev.clientY-$('.blackTop1').height()/2+$(window).scrollTop();
		var rx = (ev.clientX-$('.roleBollCut').offset().left)*2-$('.rightBig').width()/2;
		var ry = (ev.clientY-$('.roleBollCut').offset().top)*2-$('.rightBig').height()-$(window).scrollTop();
		if(blackrX<=$('.roleBollContent').width()+$('.roleMain').width()){
			blackrX=$('.roleBollContent').width()+$('.roleMain').width();
		}
		if(rx<=0){
			rx=0;
		}
		if(blackrX>=$('.roleBollContent').width()+$('.roleMain').width()+20+$('.roleBollCut').width()-$('.blackTop1').width()){
			blackrX=$('.roleBollContent').width()+$('.roleMain').width()+20+$('.roleBollCut').width()-$('.blackTop1').width();
		}
		if(rx>=$('.rightBigImg').width()-$('.rightBig').width()){
			rx=$('.rightBigImg').width()-$('.rightBig').width();
		}
		if(blackrY<=40){
			blackrY=40;
		}
		if(ry<=0){
			ry=0;
		}
		if(blackrY>=$('.roleBollCut').height()-$('.blackTop1').height()/2-5){
			blackrY=$('.roleBollCut').height()-$('.blackTop1').height()/2-5;
		}
		if(ry>=$('.rightBigImg').height()-$('.rightBig').height()){
			ry=$('.rightBigImg').height()-$('.rightBig').height();
		}
		$('.blackTop1').css({left:blackrX+'px',top:blackrY+'px'});
		$('.rightBigImg').css({left:-rx+'px',top:-ry+'px'});
	})
	$('.blackTop1').mouseout(function(){
		$('.blackTop1').css('display','none');
		$('.rightBig').css('display','none');
	})
})