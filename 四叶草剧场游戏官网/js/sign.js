//点击切换登录注册
$('.signClick').click(function(){
	$('.signClick').css({color:'orange',background:'rgb(243,214,182)'});
	$('.registerClick').css({color:'#282727',background:'rgba(255,255,255,.5)'});
	$('.signMain>div:eq(1)').css('background','url(Img/character-ttly.png) no-repeat 90px -40px/100%')
	$('.signMain>div>input').val('');
	$('.submitBoll').text('点击登录');
	$('.userwarning').css('display','none');
	$('.passwarning').css('display','none');
})
$('.registerClick').click(function(){
	$('.registerClick').css({color:'orange',background:'rgb(243,214,182)'});
	$('.signClick').css({color:'#282727',background:'rgba(255,255,255,.5)'});
	$('.signMain>div:eq(1)').css('background','url(Img/character-aqie.png) no-repeat 110px -35px/100%')
	$('.signMain>div>input').val('');
	$('.submitBoll').text('点击注册');
	$('.userwarning').css('display','none');
	$('.passwarning').css('display','none');
})
//点击验证表单
var userClick = /^[\u4E00-\u9FA50-9a-zA-Z_]{6,12}$/;
var passClick = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
$('.submitBoll').click(function(){
	var num = 0;
	if(userClick.test($('#user').val())==false){
		$('.userwarning').css('display','block');
		num++;
	}
	if(passClick.test($('#pass').val())==false){
		$('.passwarning').css('display','block');
		num++;
	}
	if(num==0){
		var timer = 0;
		$('.success').css('display','block');
		setInterval(function(){
			$('.indexBoll li').eq(timer).css('display','block');
			timer++;
			if(timer>3){
				timer=0;
				$('.indexBoll li').css('display','none');
			}
		},1000)
		setTimeout(function(){
			$('#index').append('<span></span>')
			$('#index span').click();
		},4000)
	}
})
//聚焦去除警告
$('#user').focus(function(){
	$('.userwarning').css('display','none');
	$('.passwarning').css('display','none');
})
$('#pass').focus(function(){
	$('.userwarning').css('display','none');
	$('.passwarning').css('display','none');
})