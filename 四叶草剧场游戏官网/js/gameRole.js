//点击切换头像
var changePersonImg = ['Img/icon-ttny.png','Img/icon-yml.png','Img/icon-lili.png','Img/icon-b1.png','Img/icon-aqie.png'];
var changePersonclickImg = ['Img/icon-ttny-active.png','Img/icon-yml-active.png','Img/icon-lili-active.png','Img/icon-b-active.png','Img/icon-aqie-active.png'];
var personHideImg1 = ['Img/character-ttly.png','Img/character-myl.png','Img/character-lili.png','Img/character-b.png','Img/character-aqie.png'];
var personHideclickImg1 = ['Img/character-ttly-cut.png','Img/character-myl-cut.png','Img/character-lili-cut.png','Img/character-b-cut.png','Img/character-aqie-cut.png'];
var personHideImg4 = ['Img/character-ttly-min.png','Img/character-myl-min.png','Img/character-lili-min.png','Img/character-b-min.png','Img/character-aqie-min.png'];
var personHideclickImg4 = ['Img/character-ttly-min-cut.png','Img/character-myl-min-cut.png','Img/character-lili-min-cut.png','Img/character-b-min-cut.png','Img/character-aqie-min-cut.png'];
var num = 0;
for(var i=0;i<changePersonImg.length;i++){
	$('.personHide li').eq(i).attr('value',0);
}
$('.changePerson span').click(function(){
	for(var i=0;i<changePersonImg.length;i++){
		$('.changePerson span').eq(i).children().removeClass('changeImg');
		$('.changePerson span').eq(i).children().attr('src',changePersonImg[i]);
		$('.personHide li').eq(i).children().eq(1).animate({left:'1092px'},200);
		$('.personHide li').eq(i).children().eq(3).animate({left:'-150px'},200);
		$('.personHide li').eq(i).children().eq(4).animate({left:'-50px'},200);
		$('.personHide li').eq(i).children().eq(5).animate({left:'95px'},200);
		$('.personHide li').eq(i).children().eq(6).animate({left:'230px'},200);
		$('.personHide li').eq(i).animate({opacity:0},200);
	}
	$('.personHide li').eq($(this).index()).animate({opacity:1},200);
	$('.personHide li').eq($(this).index()).children().eq(1).animate({left:'892px'},200);
	$('.personHide li').eq($(this).index()).children().eq(3).animate({left:'50px'},200);
	$('.personHide li').eq($(this).index()).children().eq(4).animate({left:'150px'},200);
	$('.personHide li').eq($(this).index()).children().eq(5).animate({left:'295px'},200);
	$('.personHide li').eq($(this).index()).children().eq(6).animate({left:'430px'},200);
	$('.changePerson span').eq($(this).index()).children().addClass('changeImg');
	$('.changePerson span').eq($(this).index()).children().attr('src',changePersonclickImg[$(this).index()]);
	num = $('.changePerson span').eq($(this).index()).index();
})
//点击切换普通和特训
$('.change214').click(function(){
	if($(this).parent().attr('value')==0){
		$(this).parent().children('img:eq(2)').attr('src','Img/content-special.png');
		$(this).parent().children('img:eq(1)').attr('src',personHideclickImg1[$(this).parent().index()]);
		$(this).parent().children('img:eq(4)').attr('src',personHideclickImg4[$(this).parent().index()]);
		$(this).parent().attr('value',1);
	}else{
		$(this).parent().children('img:eq(2)').attr('src','Img/content-general.png');
		$(this).parent().children('img:eq(1)').attr('src',personHideImg1[$(this).parent().index()]);
		$(this).parent().children('img:eq(4)').attr('src',personHideImg4[$(this).parent().index()]);
		$(this).parent().attr('value',0);
	}
})
//箭头切换
$('#clickRight').click(function(){
	if(num<4){
		num++;
	}else{
		num=0;
	}
	for(var i=0;i<changePersonImg.length;i++){
		$('.changePerson span').eq(i).children().removeClass('changeImg');
		$('.changePerson span').eq(i).children().attr('src',changePersonImg[i]);
		$('.personHide li').eq(i).children().eq(1).animate({left:'1092px'},200);
		$('.personHide li').eq(i).children().eq(3).animate({left:'-150px'},200);
		$('.personHide li').eq(i).children().eq(4).animate({left:'-50px'},200);
		$('.personHide li').eq(i).children().eq(5).animate({left:'95px'},200);
		$('.personHide li').eq(i).children().eq(6).animate({left:'230px'},200);
		$('.personHide li').eq(i).animate({opacity:0},200);
	}
	$('.personHide li').eq(num).animate({opacity:1},200);
	$('.personHide li').eq(num).children().eq(1).animate({left:'892px'},200);
	$('.personHide li').eq(num).children().eq(3).animate({left:'50px'},200);
	$('.personHide li').eq(num).children().eq(4).animate({left:'150px'},200);
	$('.personHide li').eq(num).children().eq(5).animate({left:'295px'},200);
	$('.personHide li').eq(num).children().eq(6).animate({left:'430px'},200);
	$('.changePerson span').eq(num).children().addClass('changeImg');
	$('.changePerson span').eq(num).children().attr('src',changePersonclickImg[num]);
})
$('#clickLeft').click(function(){
	console.log(num);
	if(num>0){
		num--;
	}else{
		num=4;
	}
	for(var i=0;i<changePersonImg.length;i++){
		$('.changePerson span').eq(i).children().removeClass('changeImg');
		$('.changePerson span').eq(i).children().attr('src',changePersonImg[i]);
		$('.personHide li').eq(i).children().eq(1).animate({left:'1092px'},200);
		$('.personHide li').eq(i).children().eq(3).animate({left:'-150px'},200);
		$('.personHide li').eq(i).children().eq(4).animate({left:'-50px'},200);
		$('.personHide li').eq(i).children().eq(5).animate({left:'95px'},200);
		$('.personHide li').eq(i).children().eq(6).animate({left:'230px'},200);
		$('.personHide li').eq(i).animate({opacity:0},200);
	}
	$('.personHide li').eq(num).animate({opacity:1},200);
	$('.personHide li').eq(num).children().eq(1).animate({left:'892px'},200);
	$('.personHide li').eq(num).children().eq(3).animate({left:'50px'},200);
	$('.personHide li').eq(num).children().eq(4).animate({left:'150px'},200);
	$('.personHide li').eq(num).children().eq(5).animate({left:'295px'},200);
	$('.personHide li').eq(num).children().eq(6).animate({left:'430px'},200);
	$('.changePerson span').eq(num).children().addClass('changeImg');
	$('.changePerson span').eq(num).children().attr('src',changePersonclickImg[num]);
})
