
var aboutNum = { // 进度条、收益率
	stepNumber : function(){// step
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
	},
	speedNumber : function(){ // em-num
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
		$(document).bind('scroll',function(){startNum();});
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
						}else{
							speed += 88888.01;
						}
						$('.property').html(speed.toFixed(2))
					}
				}
			},2);
		}
	}
}
aboutNum.stepNumber();
aboutNum.speedNumber();
aboutNum.propertyNum();

var dataNum;
var gdList = { //产品列表切换
	btnSlideDown : function(){
		$.each($('.btn-slide-down'),function(i){
			$(this).click(function(){
				var index = $('.btn-slide-down').index(this);
				$('.btn-slide-down').not(index).show();
				$('.btn-slide-down').next().hide();
				$(this).parent().parent().siblings().find('.pro-text').slideUp();
				$(this).hide().parent().siblings('.pro-text').slideDown();
				$(this).next().show();
			});
		})
	},
	btnSlideUp   : function(){
		$.each($('.btn-slide-up'),function(i){
			$(this).click(function(){
				var index = $('.btn-slide-up').index(this);
				$(this).hide().parent().siblings('.pro-text').slideUp();
				$(this).prev().show();
			})
		})
	},
	btnBuyShow : function(){
		$.each($('.btn-pro'),function(i){
			$(this).click(function(){
				var index = $('.btn-pro').index(this);
				$(this).hide().parent().addClass('pro-list-buy').siblings('.pro-list').slideUp();
				$('.pro-form').slideDown();
				$('.confirm').slideDown();
				$('#borrow_nid').val($(this).attr('id'));
				dataNum = $(this).parent().find('.em-num').attr('data-num');// 当前选中项目年化收益
			})
		})
		$.each($('.btn-default'),function(){
			$(this).html('已售罄');
			$(this).click(function(){
				return false;
			})
		})
	},
	btnReturn : function(){
		$('.btn-return').click(function(){
			$('.pro-list').slideDown().removeClass('pro-list-buy');
			$('.pro-form').slideUp();
			$('.confirm').slideUp();
			$('.btn-pro').show();
			$('#tbMoney').val('');
			$('.interest').html('');
			$('#borrow_nid').val('');
		})
	}
}
gdList.btnSlideDown();
gdList.btnSlideUp();
gdList.btnBuyShow();
gdList.btnReturn();
var recharge = {// 充值、提现  选择银行卡
	selectBankCard : function(){// 选择提现银行卡
		if( $('.card-mes li').length > 0 ){
			$('.box-card-mes').removeClass('box-card-mes-none');
			$('.box-card-mes p').html($('.card-mes li').eq(0).html());
			$('#cardType').val($('.card-mes li').eq(0).attr('id'));
			$('.card-sel').click(function(){
				$('.card-mes').slideDown('fast');
			});
			$('.box-card-mes p').click(function(){
				$('.card-mes').slideDown('fast');
			});
		}else{
			$('.box-card-mes').addClass('box-card-mes-none');
			$('.box-card-mes p').hide();
			$('#cardType').val('');
		}
		$('.card-mes li').click(function(event){
			event.stopPropagation();
			$('.box-card-mes p').html($(this).html());
			$('.card-mes').slideUp('fast');
			$('#cardType').val($(this).attr('id'));
		});
		$('.box-card-mes').mouseleave(function(){
			$('.card-mes').slideUp('fast');
		})
	},
	selectBankCyber : function(){
		$('.cyber-bank li:lt(7)').show();
		$('.bank-slide-down').show();
		$('.bank-slide-down').click(function(){
			$('.cyber-bank li:gt(7)').show();
			$(this).hide();
			$('.bank-slide-up').show();
		})
		$('.bank-slide-up').click(function(){
			$(this).hide();
			$('.cyber-bank li:gt(7)').hide();
			$('.bank-slide-down').show();

		})
		$('.cyber-bank li').click(function(){
			$(this).not('.bank-more').addClass('active').siblings().removeClass('active');
			$('#cyberBankId').val($(this).attr('id'));
		})
	},
	selectBankKj : function(){
		$('.btn-change-bank').click(function(){
			$('.change-bank').slideToggle();
		});
		
		$('.change-bank li').click(function(){
			var oHtml = $(this).html(),
				oCite = $(this).attr('title'),
				oId   = $(this).attr('id');
			$('.select-bank').find('span').html(oHtml);
			$('.select-bank').find('cite').html(oCite);
			$('#bankIdFast').val(oId);
			$('.change-bank').slideUp();
		})
	}
}
recharge.selectBankCard();
recharge.selectBankCyber();
recharge.selectBankKj();

/*
$('form[name="proForm"]').submit(function(e){ //固定收益页 支付 表单提交
	e.stopPropagation();
	if(!tbMoneyNum()){
		return false;
	}else{
		btnPayment();
		return true;
	}	
})
$('.btn-payment').click(function(){ //固定收益页 支付 表单提交
	if(!tbMoneyNum()){
		return false;
	}else{
		btnPayment();
		// form.submit();
		return true;
	}
})
*/
function btnPayment(){ // 支付成功 弹出框
	$('.user-black').fadeIn();
	$('.pop-cash').fadeIn();
}

/**
* 对投标金额的校捡
*/
function tbMoneyNum(){
	var tbNum = $('#tbMoney'),
		yeNum = parseFloat($('.kyye').html());
	if( parseFloat(tbNum.val()) > yeNum ){
		tbNum.addClass('input-error');
		tbNum.next('.interest').show().html('可用余额不足，请充值');
		return false;
	}else if( tbNum.val().length == 0 || parseFloat(tbNum.val()) == 0 ){
		tbNum.addClass('input-error');
		tbNum.next('.interest').show().html('请输入投标金额');
		return false;
	}else{
		tbNum.removeClass('input-error');
		$('.tbze').html(tbNum.val());
		$('.zhzf').html(tbNum.val());
		tbNum.next('.interest').hide();
	}
	return true;
}
/*快捷支付*/
$('.btn-recharge-fast').click(function(){//快捷支付按钮验证
	if( !fastPayment() ){// rechargeAmount
		return false;
	}else{
		popRechargeFast();
		// form.submit();
		return true;
	}
})
function popRechargeFast(){// 快捷支付弹出框
	$('.user-black').fadeIn();
	$('.pop-cash').fadeIn();
}
/*网银支付*/
$('.btn-recharge-pop').click(function(){
	if( !reAmountBlurFn() ){
		return false;
	}else if( !cyberBank() ){
		return false;
	}else{
		popCyberBank();
		// form.submit();
		return true;
	}
})
function popCyberBank(){// 网银支付弹出框
	$('.user-black').fadeIn();
	$('.pop-recharge').fadeIn();
}
function cyberBank(){//网银支付  选择银行
	var bankIdVal = $('#cyberBankId').val();
	if( bankIdVal == '' ){
		alert('请选择银行')
		return false;
	}else{
		alert('您选择的银行ID为' + bankIdVal);
		// form.submit();
		return true;
	}
}
/*提现*/
$('.btn-cash-pop').click(function(){
	if( !cashFn() ){
		return false;
	}else{
		popCashWithdraw();
		// form.submit();
		return true;
	}
})
function popCashWithdraw(){// 提现弹出框
	$('.user-black').fadeIn();
	$('.pop-cash-withdraw').fadeIn();
}
function cashFn(){// 提现校验 txMoney
	var cardType = $('#cardType');
	if( cardType.val() == '' || $('.card-mes li').length == 0 ){
		showErrorMes(cardType,'请绑定银行卡');
		return false;
	}else if( !txMoneyVal() ){
		return false;
	}else{
		return true;
	}
}
function txMoneyVal(){// 提现金额校验
	var txMon = $('#txMoney');
	if( txMon.val().length > 1 && parseFloat(txMon.val()) >= 100 ){
		$('.to-account').html( parseFloat(txMon.val()) );
	}else{
		$('.to-account').html('0');
	}
	if( parseFloat(txMon.val()) < 1000 && parseFloat(txMon.val()) >= 100 ){
		$('.poundageMoney').html('2');
	}else{
		$('.poundageMoney').html('0');
	}
	if( !inputValidate(txMon,'请输入提现金额') ){
		return false;
	}else if( parseFloat( txMon.val() ) > parseFloat( $('.user-rema').html() ) ){
		txMon.addClass('input-error');
		showErrorMes(txMon,'提现金额超出余额');
		return false;
	}else if( parseFloat(txMon.val()) < 100 ){
		txMon.addClass('input-error');
		showErrorMes(txMon,'提现金额最小100元');
		return false;
	}else{
		txMon.removeClass('input-error');
		hideErrorMes(txMon,'');
		return true;
	}
}



var tbMoneyInput = {//  设置input 只能输入数字  input的blur状态
	tbKeyDown : function(inputName){
		inputName.keydown(function(){
			var e = $(this).event || window.event,
				code = parseInt(e.keyCode);
			if(code >= 96 && code <= 105 || code >= 48 && code <= 57 || code == 8){
				return true;
			}else{
				return false;
			}
		});
	},
	reAmountBlur : function(){
		$('#rechargeAmount').blur(function(){
			reAmountBlurFn();
		})
	},
	bankCardNumBlur : function(){
		$('#bankCardNum').blur(function(){
			bankCardNumFast();
		})
	},
	userTrueNameBlur : function(){
		$('#userTrueName').blur(function(){
			userTrueName();
		})
	},
	idCardBlur : function(){
		$('#idCard').blur(function(){
			idCard();
		})
	},
	telNumberBlur : function(){
		$('#telNumber').blur(function(){
			telNumberFn();
		})
	},
	identifyingCodeBlur : function(){
		$('#identifying').blur(function(){
			identifyingCode();
		})
	},
	txMoneyBlur : function(){
		$('#txMoney').blur(function(){
			txMoneyVal();
		})
	}
}
tbMoneyInput.tbKeyDown($('#tbMoney'));
tbMoneyInput.tbKeyDown($('#rechargeAmount'));
tbMoneyInput.tbKeyDown($('#txMoney'));
tbMoneyInput.reAmountBlur();
tbMoneyInput.bankCardNumBlur();
tbMoneyInput.userTrueNameBlur();
tbMoneyInput.idCardBlur();
tbMoneyInput.telNumberBlur();
tbMoneyInput.identifyingCodeBlur();
tbMoneyInput.txMoneyBlur();
/*快捷支付验证*/
function fastPayment(){
	if( !reAmountBlurFn() ){
		return false;
	}else if( !bankCardNumFast() ){
		return false;
	}else if( !userTrueName() ){
		return false;
	}else if( !idCard() ){
		return false;
	}else if( !telNumberFn() ){
		return false;
	}else if( !identifyingCode() ){
		return false;
	}else if( !agreementFn() ){
		return false;
	}else{
		return true;
	}
}
function reAmountBlurFn(){//校验充值金额
	if( !inputValidate($('#rechargeAmount'),'请输入充值金额') ){
		return false;
	}else{
		return true;
	}
}
function bankCardNumFast(){//校验银行卡号
	var bankCardNum = $('#bankCardNum');
	if( bankCardNum.val().length < 12 || bankCardNum.val().length > 19 ){
		bankCardNum.addClass('input-error');
		showErrorMes(bankCardNum,'银行卡号在12~19位之间');
		return false;
	}else{
		bankCardNum.removeClass('input-error');
		hideErrorMes(bankCardNum,'');
		return true;
	}
}
function userTrueName(){//校验姓名
	var nameVal = $('#userTrueName'),
		nameTest = /^[\u4e00-\u9fa5]+$/;
	if( nameVal.val().length < 1 ){
		nameVal.addClass('input-error');
		showErrorMes(nameVal,'请输入您的姓名');
		return false;
	}else if( !nameTest.test(nameVal.val()) ){
		nameVal.addClass('input-error');
		showErrorMes(nameVal,'姓名必须为中文');
		return false;
	}else{
		nameVal.removeClass('input-error');
		hideErrorMes(nameVal,'');
		return true;
	}
}
function idCard(){//校验身份证
	if( !inputValidate($('#idCard'),'请输入您的身份证号码')){
		return false;
	}else{
		return true;
	}
}
function telNumberFn(){//校验手机号码
	var telNum = $('#telNumber'),
		telTest = /^13[0-9]{9}$|15[0-9]{9}$|18[0-9]{9}$/;
	if( telNum.val().length < 1 ){
		telNum.addClass('input-error');
		showErrorMes(telNum,'请填写手机号码');
		return false;
	}else if( !telTest.test(telNum.val()) ){
		telNum.addClass('input-error');
		showErrorMes(telNum,'请填写正确的手机号码');
		return false;
	}else{
		telNum.removeClass('input-error');
		hideErrorMes(telNum,'');
		return true;
	}
}
function identifyingCode(){// 校验验证码
	var identiCode = $('#identifying');
	if( !inputValidate(identiCode,'请输入验证码') ){
		return false;
	}else{
		return true;
	}
}
function agreementFn(){// 校验服务条款
	var agreeMent = $('#agreement');
	if( agreeMent.is(':checked') ){
		hideErrorMes(agreeMent);
		return true;
	}else{
		showErrorMes(agreeMent,'您没有同意条款');
		return false;
	}
}
function inputValidate(obj,html){// input 校验
	if( obj.val().length < 1 ){
		obj.addClass('input-error');
		showErrorMes(obj,html);
		return false;
	}else{
		obj.removeClass('input-error');
		hideErrorMes(obj,'');
		return true;
	}
}
function showErrorMes(obj,html){// 错误信息
	obj.parent().find('.form-error').show().html(html);
}
function hideErrorMes(obj){// 取消错误信息
	obj.parent().find('.form-error').hide().html('');
}

(function(){//关闭弹出框
	$('.user-close').click(function(){
		$('.user-black').fadeOut();
		$(this).parent().fadeOut();
	})
})();










