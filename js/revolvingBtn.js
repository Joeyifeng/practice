﻿$(function(){
	$('.link .button').hover(function(){
		var title = $(this).attr('data');
		$('.tip em').text(title);
		var pos =$(this).position().left+10;
		var dis =($('.tip').outerWidth()-$(this).outerWidth())/2;
		var l = pos-dis;
		$('.tip').css({'left':l+'px'}).animate({'top':140,'opacity':1 },100);
	},function(){
		if(!$('.tip').is(':animated')){	//判断动画是否还存在
			$('.tip').animate({'top':100,'opacity':0},100);
		}
	})
})