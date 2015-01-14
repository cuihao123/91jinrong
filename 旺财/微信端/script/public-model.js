/*
                   _ooOoo_
                  o8888888o
                  88" . "88
                  (| -_- |)
                  O\  =  /O
               ____/`---'\____
             .'  \\|     |//  `.
            /  \\|||  :  |||//  \
           /  _||||| -:- |||||-  \
           |   | \\\  -  /// |   |
           | \_|  ''\---/''  |   |
           \  .-\__  `-`  ___/-. /
         ___`. .'  /--.--\  `. . __
      ."" '<  `.___\_<|>_/___.'  >'"".
     | | :  `- \`.;`\ _ /`;.`/ - ` : | |
     \  \ `-.   \_ __\ /__ _/   .-` /  /
======`-.____`-.___\_____/___.-`____.-'======
                   `=---='
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
         佛祖保佑       永无BUG
*/
var publicModel = {
	dropDown : function(){
		/*$('.drop-down').click(function(){
			$(this).find('.drop-down-box').fadeToggle();
		});*/
		$('.drop-down').on('touchstart',function(){
			$(this).find('.drop-down-box').fadeToggle();
		})

		// touchstart
	},
	tab : function(){
		$.each($('.tab'),function(){
			$(this).find($('.tab-menu li')).eq(0).addClass('active');
			$(this).find($('.tab-box > div')).eq(0).show().siblings().hide();
			$('.tab-menu li').click(function(){
				var index = $('.tab-menu li').index(this);
				$(this).addClass('active').siblings().removeClass('active');
				$('.tab-box > div').eq(index).removeClass('hidden').show().siblings().addClass('hidden');
			});
		});
	},
	preNum : function(){
		var	proList = $('.list-pro-info'),
			stepNum = proList.find('.pre-num'),
			stepBox = proList.find('.pre-box');
		function startStep(){
			$.each(stepNum, function(i) {
				var index = stepNum.index(this);
					if( parseInt($(this).html()) > 0 && parseInt($(this).html()) <= 10 ){
						stepBox.eq(index).animate({'width':'10%'},500);
					}else{
						stepBox.eq(index).animate({'width':parseInt($(this).html())+'%'},500);
					}
					if( parseInt($(this).html()) == 100 ){
						stepBox.eq(index).addClass('pre-box-m');
					}
			});
		};
		startStep();
		$(document).bind('scroll',function(){startStep()});
	}
}

if( $('.drop-down-menu').length > 0 ){
	publicModel.dropDown();
}
if( $('.tab').length > 0 ){
	publicModel.tab();
}
if( $('.pre-num').length > 0 ){
	publicModel.preNum();
}

if( $('.user-asset').length > 0 ){
	$('.user-asset p').eq(0).click(function(){
		$(this).toggleClass('active');
		$('.asset').slideToggle();
	})
}
if( $('.mes-list').length > 0 ){
	var mesList = $('.mes-list li');
	$.each(mesList,function(i){
		var index = mesList.index(this);
		$(this).click(function(){
			$(this).addClass('read');
			$(this).find('.mes-more').slideToggle();
			$(this).siblings().find('.mes-more').slideUp();
		})
	})
}
if( $('.box-down').length > 0 ){
	$('.box-down').find('i').click(function(){
		$('.box-down').hide();
	})
}