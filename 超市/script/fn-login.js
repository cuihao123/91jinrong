$(function(){
var userCenterCommon = {
	logboxHeight : function(){
		function logHeight(){// login height
			var cHeight = $(window).height(),
				navHeight = $('.use-nav').height();
			if( (cHeight - 640 ) < navHeight ){
				$('.login').css({minHeight: navHeight + 'px' });
			}else{
				$('.login').css({minHeight: (cHeight-640) + 'px' });
			}
		}
		logHeight();
		$(window).resize(function(){logHeight();});
	}
}
userCenterCommon.logboxHeight();
(function(){// 更换银行卡 博时开户
	$('#addBank').click(function(){
		$('#bankBg').fadeIn();
		$('#bankPopup').fadeIn();
	})
	$('#bankClose').click(function(){
		$('#bankBg').fadeOut();
		$('#bankPopup').fadeOut();
	})
	$.each($('#bankList li'),function(){
		$(this).click(function(){
			$('#bankBg').fadeOut();
			$('#bankPopup').fadeOut();
			$('#bankId').val(this.id);
			$('#bankName').addClass('bank-span').html($(this).find('span').html());
			$('#addBank').html('+更换银行卡');
			$('#bankBtnName').val($(this).find('p').html());
		})
	})
})();
imgHeight($('.box-rz-list'),$('.box-rz-list ul'),$('.box-rz-list ul li'),7000);
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
tab($('.box-record-menu'),$('.record-menu li'),$('.box-record-text > div'));
tab($('.box-bank'),$('.payment-menu li'),$('.box-payment > div'));
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
(function(){//  冻结金额
	$('.property-i').hover(function(){
		$(this).next('.property-t').fadeIn();
	})
	$('.property-i').parent().parent().mouseleave(function(){
		$(this).find('.property-t').fadeOut('fast');
	})
})();


});
