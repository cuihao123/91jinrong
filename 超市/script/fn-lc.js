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
$(function(){
	/*nav dropDown*/
	dropDown($(document),$('.menu'),$('.down'));
	/*tab*/
	tab($('.lc-floor'),$('.tab-menu a'),$('.tab-box > div'))
	/*imgAuto*/
	imgAuto($('.lc-pic-box'),$('.lc-pic'),$('.lc-pic li'),$('.lc-menu li'),7000);
	imgHeight($('.box-rz-list'),$('.box-rz-list ul'),$('.box-rz-list ul li'),7000);
	/*glDropdown*/
	//glDropdown($('.box-gl-list .more'),$('.gl-list'));

function imgHeight(imgBox,imgList,oList,time){/*imgHeight*/
	var oTime = null,
		pTime = null,
		n = 0,
		p = 0,
		oHeight = imgBox.width();
	auto();
	function tab(n){
		imgList.animate({ top : -n * oHeight + 'px'},200);
		oList.height(oHeight);
		p = n;
	}
	function auto(){
		tab(n);
		n = p + 1;
		if( n >= oList.length ){
			n = 0;
		}
		oTime = setTimeout(function(){
			auto();
		},time);
	}
	imgBox.mouseover(function(){
		clearTimeout(oTime);
	});
	imgBox.mouseleave(function(){
		pTime = setTimeout(function(){
			clearTimeout(pTime);
			auto();
		},3000);
	});
}
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
}
function dropDown(down,menu,box){
	$.each(down,function(i){
		down.find(menu).hover(function(){
			var index = menu.index(this);
			$(this).toggleClass('active');
			down.find(box).eq(index).fadeToggle();
		})
	})
}
function tab(tab,tabMenu,tabBox){
	$.each(tab,function(){
		$(this).find(tabMenu).eq(0).addClass('active');
		$(this).find(tabBox).eq(0).show().siblings().hide();
		tabMenu.click(function(){
			var index = tabMenu.index(this);
			$(this).addClass('active').siblings().removeClass('active');
			tabBox.eq(index).removeClass('hidden').show().siblings().addClass('hidden');
		})
	});
}
function glDropdown(){
	$.each($('.gl-list'),function(i){
		$(this).find('li:gt(2)').hide();
	})
	$('.more').click(function(){
		$(this).parent().next('.gl-list').find('li:gt(2)').slideToggle().parent().siblings('.gl-list').find('li:gt(2)').slideUp();
	})
}
glDropdown();
(function(){
	$('.licai-search').animate({top:'55px'},300,function(){$(this).animate({top:'35px'},200,function(){$(this).animate({top:'50px'},200,function(){$(this).animate({top:'40px'},200,function(){$(this).animate({top:'45px'},200)})})})});
})();
(function(){
	$('input.search-input').focus(function(){
		$(this).val('');
	})
	$('input.search-input').blur(function(){
		if( $(this).val() == '' ){
			$(this).val('不限');
		}
	})
})();
(function(){/*收益计算器*/
	$('.jsq-jg').slideUp();
	var js= $("a[name='js']");
	$('.info-jsq input[type="text"]').keydown(function(){
		var e = $(this).event || window.event,
			code = parseInt(e.keyCode);
		if(code >= 96 && code <= 105 || code >= 48 && code <= 57 || code == 8){
			return true;
		}else{
			return false;
		}
	});
	js.click(function(){
		var m = $("input[name='m']").val(),//金额
			t = $("input[name='t']").val(),//期限
			p = $("input[name='p']").val(),//收益率
			jg= $("input[name='jg']"),
			z = $("input[name='ze']");
		if( m == '' ){
			$("input[name='m']").focus();
		}else if( t == '' ){
			$("input[name='t']").focus();
		}else if( p == '' ){
			$("input[name='p']").focus();
		}else{
			$('.jsq-jg').slideDown();
			jg.val( parseFloat(((t/365)*(p/100))*m).toFixed(2));
			z.val((parseFloat(m) + parseFloat( ((t/365) * (p/100)) * m )).toFixed(2));
		}
	})
})();
(function(){/*search*/
	function searchBox(){
		var sTop = $(document).scrollTop();
		if( sTop > 500 ){
			$('.search-box').slideDown('fast');
			$('.bg-search-box').slideDown('fast');
		}else{
			$('.search-box').slideUp('fast');
			$('.bg-search-box').slideUp('fast');
		}
	}
	searchBox();
	$(document).bind('scroll',function(){searchBox();});
})();
(function(){/*search dropDown*/
	var sI = $('.select-box').find('i'),
		sUl= $('.select-box').find('ul');
	$.each(sI,function(i){
		$(this).click(function(e){
			var index = sI.index(this);
			sUl.eq(index).slideDown('fast');
			e.stopPropagation();
		});
	})
	$.each(sUl,function(i){
		var index = sUl.index(this);
		$(this).find('li').click(function(e){
			$(this).parent().parent().find('em').html($(this).html());
			$(this).parent().slideUp();
			sUl.parent().parent().find('input:hidden').eq(index).val($(this).val());
			e.stopPropagation();
		});
		$(this).mouseleave(function(){
			$(this).slideUp();
		});
	})
	$('.select-box').mouseleave(function(){
		$(this).find('ul').slideUp();
	})
})();
(function(){/*step*/
	var	stepNum = $('.pre-num'),
		stepBox = $('.pre-box');
	function startStep(){
		$.each(stepNum, function() {
			var sTop = $(document).scrollTop(),
				sHeight = $(window).height(),
				oTop = $(this).offset().top,
				oNum = sHeight - ( oTop - sTop ),
				index = stepNum.index(this);
			if( oNum > 100 ){
				if( parseInt($(this).html()) > 0 && parseInt($(this).html()) <= 10 ){
					stepBox.eq(index).animate({'width':'10%'},500);
				}else{
					stepBox.eq(index).animate({'width':parseInt($(this).html())+'%'},500);
				}
				if(  parseInt($(this).html()) == 100 ){
					stepBox.eq(index).addClass('pre-box-m')
				}
			}
		});
	};
	startStep();
	$(document).bind('scroll',function(){startStep()});
})();
(function(){/*speedNum*/
	var eNum = $('.em-num');
	function startNum(){
		$.each(eNum,function(){
			var speed = 0,
				oTime = null;
			if( parseFloat($(this).html()) != parseFloat($(this).attr('data-num')) ){
				oTime = setInterval(function(){
					$.each(eNum,function(){
						var targetNum = $(this).attr('data-num');
						if( targetNum == null || targetNum == 0 || targetNum == '--' ){
							$(this).html('--%');
						}else{
							if( speed >= parseFloat(targetNum) ){
								clearInterval($(this).oTime);
								$(this).html(targetNum + '%');
							}else{
								speed += 0.08;
								$(this).html(speed.toFixed(2) + '%')
							}
						}
					});
				},10);
			}
		})
	}
	startNum();
	//$(document).bind('scroll',function(){startNum();});
})();
(function(){
	$.each($('.pro-tab'), function(){
		 $(this).find('tr:even').css({'background-color' : '#f9f9f9'});
	});
})();
(function(){
	$('<div class="t-code"></div>').appendTo('body');
	$('<div class="t-code2"><i></i></div>').appendTo('body');
	$('.t-code2 i').click(function(){
		$('.t-code2').hide();
	});
	$('.t-code').mouseover(function(){
		$('.t-code2').show();
	})
})();
(function(){
	var toBox = $('<div class="to-top"></div>').appendTo('body');
	toBox.click(function(){$('html,body').animate({scrollTop:0},400);});
	function toTopFn(){
		var sTop = $(document).scrollTop();
		if( sTop > 0 ){toBox.show();}else{toBox.hide();}
	}
	toTopFn();
	$(document).bind('scroll',function(){toTopFn()});
})();

});