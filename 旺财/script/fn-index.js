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
var indexMod = {
	imgChange : function(){
		imgChange($('.pic-media'),$('.list-pic-media'),$('.pic-media .prev'),$('.pic-media .next'));
	},
	imgAuto : function(){
		imgAuto($('.index-pic-box'),$('.pic'),$('.pic li'),$('.pic-menu li'),7000);
	},
	newUser : function(){
		$("#gold01").animate({left:'-300px',bottom:'150px',opacity:1},{duration:500});
		$("#gold02").animate({right:'0',bottom:'100px',opacity:1},{duration:500});
		$("#gold").animate({bottom:'80px',opacity:1},{duration:500});
		$("#gou").animate({right:'0',opacity:1},{duration:500});
		$("#zi01").animate({left:'0',opacity:1},{duration:500});
		$("#zi02").animate({right:'0',opacity:1},{duration:500});
	}
}
if( $('.pic-media').length > 0 ){
	indexMod.imgChange();
};
if( $('.index-pic-box').length > 0 ){
	indexMod.imgAuto();
}
if( $("#gold01").length > 0 ){// 新手专区
	indexMod.newUser();
}
var userMod = {// 个人中心
	userTextHover : function(){
		$(".property-i").hover(function(){
			$(this).next(".property-t").fadeIn();
		});
		$(".property-i").parent().parent().mouseleave(function(){
			$(this).find(".property-t").fadeOut("fast");
		});
	},
	propertyNum : function(){// 资产总数
		//$('.property-num') property 资产总数       remainder-num 账户余额   freeze-num 冻结金额   replace-num  代收金额
		var oNum = parseFloat($('.remainder-num').html()) + parseFloat($('.freeze-num').html()) + parseFloat($('.replace-num').html()),
			speed = 0,
			oTime = null;
		$('.property').attr('data-num',oNum);
		if( parseFloat($('.property').html()) != oNum ){
			oTime = setInterval(function(){
				if( oNum == null || oNum == 0 || oNum == '--' ){
					$('.property').html('0.00');
				}else{
					if( parseFloat($('.property').html()) >= oNum ){
						clearInterval(oTime);
						$('.property').html(oNum.toFixed(2));
					}else{
						if( oNum <= 1000 && oNum > 0 ){
							speed += 8.01;
						}else if( oNum <= 10000 && oNum > 1000 ){
							speed += 88.01;
						}else if( oNum <= 100000 && oNum > 10000 ){
							speed += 888.01;
						}else if( oNum <= 1000000 && oNum > 100000 ){
							speed += 8888.01;
						}else if( oNum <= 10000000 && oNum > 1000000 ){
							speed += 88888.01;
						}else{
							speed += 888888.01;
						}
						$('.property').html(speed.toFixed(2))
					}
				}
			},2);
		}
	},
	tableData : function(obj){
		var dsNum = 0,
			dsDataNum = obj.find('.tab-data-num').toArray();
		$.each(dsDataNum,function(i,n){
			dsNum += parseFloat(dsDataNum[i].innerHTML);
		})
		obj.find('.total-num').html(dsNum.toFixed(2));
	},
	redbonusRule : function(){
		$('.redbonus-rule-list li').hover(function(){
			$(this).find('.redbonus-rule').slideDown('fast');
		},function(){
			$(this).find('.redbonus-rule').slideUp('fast');
		})
	},
	boxMesSlide : function(){
		$.each($('.box-mes h4'),function(){
			var index = $('.box-mes h4').index(this);
			$(this).click(function(){
				$('.box-mes p').eq(index).slideToggle().siblings('p').slideUp();
			})
		})
	}
}
if( $(".property-i").length > 0 ){
	userMod.userTextHover();
}
if( $('.remainder-num').length > 0 && $('.freeze-num').length > 0 && $('.replace-num').length > 0 ){
	userMod.propertyNum();
}
if( $('.table-ds').length > 0 ){
	userMod.tableData($('.table-ds'));
}
if( $('.table-jy').length > 0 ){
	userMod.tableData($('.table-jy'));
}
if( $('.redbonus-rule-list').length > 0 ){
	userMod.redbonusRule();
}
if( $('.box-mes h4').length > 0 ){
	userMod.boxMesSlide();
}
/*imgChange*/
function imgChange(box,list,prev,next){
	var oPicWidth = list.find('li').width(),
		n = 1;
	next.click(function(){
		if( n >= $('.list-pic-media li').length ){
			list.animate({ left : 0 + 'px' },100);
			n = 1;
			return n;
		}else{
			list.animate({ left : -oPicWidth*n + 'px' },300);
			n++;
			return n;
		};
	});
	prev.click(function(){
		if( n == 1){
			n = $('.list-pic-media li').length;
			list.animate({ left : -oPicWidth*(n-1) + 'px' },100);
			return n;
		}else{
			n--;
			list.animate({ left : -oPicWidth*(n-1) + 'px' },300);
			return n;
		};
	});
}
/*imgAuto*/
function imgAuto(imgBox,imgList,oList,oMenu,time){/*imgAuto*/
	var oTime = pTime = null,
		n = p = 0;
	function tab(n){
		oList.eq(p).fadeOut('slow');
		oList.eq(n).fadeIn('slow');
		oMenu.eq(n).addClass('active').siblings().removeClass('active');
		p = n;
	}
	function auto(){
		tab(n);
		n = p + 1;
		if( n >= oList.length ){
			n = 0;
		}
		oTime = setTimeout(auto,time);
	}
	oMenu.mouseover(function(){
		clearTimeout(oTime);
		n = oMenu.index($(this));
		tab(n);
		if( n == oList.length - 1 ){
			n = 0;
		}else{
			n++;
		}
	});
	imgBox.mouseover(function(){
		clearTimeout(oTime);
	});
	imgBox.mouseleave(function(){
		pTime = setTimeout(function(){
			clearTimeout(pTime);
			auto();
		},3000);
	});
	auto();
};