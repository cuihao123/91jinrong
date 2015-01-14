var publicModel = {
	useNav : function(){// useCenter 左侧导航
		var useNavHtml;
			useNavHtml = '<h3 class="active"><em class="mes">个人信息</em><i></i></h3>';
			useNavHtml+= '<p>';
			useNavHtml+= '<a href="http://passport.91jinrong.com/userCenter/index" title="账户信息">账户信息</a>';
			useNavHtml+= '<a href="http://passport.91jinrong.com/userCenter/toEditPwd" title="修改密码">修改密码</a>';
			useNavHtml+= '<a href="http://licai.91jinrong.com/userInfo/toSetMobile" title="修改手机号码">修改手机号码</a>';
			useNavHtml+= '<a href="http://licai.91jinrong.com/userInfo/toSetPayPwd" title="支付密码设置">支付密码设置</a>';
			useNavHtml+= '<a href="http://licai.91jinrong.com/userInfo/toSetRealName" title="实名认证">实名认证</a>';
			useNavHtml+= '</p>';
			useNavHtml+= '<h3><em class="zc">我的资产</em><i></i></h3>';
			useNavHtml+= '<p>';
			useNavHtml+= '<a href="http://licai.91jinrong.com/userInfo/myAssets" title="我的资产">我的资产</a>';
			useNavHtml+= '<a href="http://licai.91jinrong.com/funds/index" title="博时基金开户">博时基金</a>';
			useNavHtml+= '<a href="http://licai.91jinrong.com/borrow/index" title="固定收益">固定收益</a>';
			useNavHtml+= '</p>';
			useNavHtml+= '<h3 class="last"><em class="lc">理财产品</em><i></i></h3>';
			useNavHtml+= '<p>';
			useNavHtml+= '<a href="http://licai.91jinrong.com/views/index/srdz.jsp" target="_blank" title="私人订制">私人订制</a>';
			useNavHtml+= '<a href="http://licai.91jinrong.com/" target="_blank" title="个人理财">个人理财</a>';
			useNavHtml+= '<a href="http://www.91dk.com/" target="_blank" title="我要贷款">我要贷款</a>';
			useNavHtml+= '<a href="http://chexian.91jinrong.com/" target="_blank" title="购买车险">购买车险</a>';
			useNavHtml+= '<a href="http://zzb.91jinrong.com/" target="_blank" title="企业理财">企业理财</a>';
			useNavHtml+= '<a href="http://jrq.91jinrong.com/" target="_blank" title="金融圈">金融圈</a>';
			useNavHtml+= '</p>';
		$('.use-nav').html(useNavHtml);
		var wLocation = window.location.toString(),
			useLink = $('.use-nav p a');
		var hrefArray = ['userCenter/index','userCenter/toEditPwd','toSetMobile','toSetPayPwd','toSetRealName','userInfo/myAssets','funds','borrow'];
		$.each(useLink,function(i){
			var index = useLink.index(this);
			if( wLocation.indexOf(hrefArray[i]) > -1 ){ 
				useLink.eq(index).addClass('on'); 
			}else if( wLocation.indexOf('account') > -1 ){ 
				useLink.eq(5).addClass('on'); 
			}else{ 
				useLink.eq(i).removeClass('on'); 
			};
		})
		$('.use-nav h3').click(function(){
			$(this).addClass('active').siblings('h3').removeClass('active');
			$(this).next('p').slideToggle().siblings('p').slideUp();
		});
		$('.use-nav').find('a.on').parent().slideDown();
	},
	publicFooter : function(){// footer
		var footerHtml,copyHtml;
		footerHtml = '<div class="box-bottom clearfix"><div class="box-bottom clearfix"><div class="text-f-l"><h3>联系我们</h3><p>北京地址（总部）：北京市西城区新街口外大街28号普天德胜园区A座3层，电话：010-52404272</p><p>上海地址：浦东新区福山路388号宏嘉大厦706，电话：021-61550691</p><p>邮箱：<a href="mailto:service@91jinrong.com">service@91jinrong.com</a></p><p>传真：010-82055825</p><p class="tel">免费咨询(24小时)：<em>400-000-9335</em></p><ul><li><img src="http://ui.91jinrong.com/cs/images/img-code01.png"></li><li><a href="http://weibo.com/91jinrong" target="_blank"><img src="http://ui.91jinrong.com/cs/images/img-code02.png"></a></li></ul></div><div class="text-f-r"><div><h3>关于</h3><ul><li><a href="http://about.91jinrong.com" target="_blank" title="关于91金融超市">关于91金融超市</a></li><li><a href="http://about.91jinrong.com/privacy.html" target="_blank" title="服务条款">服务条款</a></li><li><a href="http://www.91jinrong.com/word/prompt.html" target="_blank" title="风险提示">风险提示</a></li></ul></div><div><h3>合作</h3><ul><li><a href="http://about.91jinrong.com/co.html" target="_blank" title="品牌合作">品牌合作</a></li><li><a href="http://bj.91dk.com/tg/" target="_blank" title="广告合作">广告合作</a></li></ul></div><div><h3>友情链接</h3><ul><li><a href="http://www.91wangcai.com/" target="_blank" title="91旺财">91旺财</a></li><li><a href="http://chexian.91jinrong.com" target="_blank" title="车险通">车险通</a></li><li><a href="http://www.91dk.com" target="_blank" title="91贷款网">91贷款网</a></li><li><a href="http://www.dai68.com" target="_blank" title="贷乐发">贷乐发</a></li><li><a href="http://www.chexiancn.com" target="_blank" title="车险">中国车险网</a></li><li><a href="http://www.diandong.com" target="_blank" title="电动邦">电动邦</a></li><li><a href="http://www.newbillion.cn" target="_blank" title="新10亿">中国车险网</a></li></ul></div></div></div>';
		copyHtml = '<div class="copy-text"><div class="box-icp"><a href="http://www.itrust.org.cn/yz/pjwx.asp?wm=1082842294" target="_blank"></a><p>信用等级：AA(优良)</p></div><p>Copyright © 2014 91JinRong.com Inc. All Rights Reserved. 九一金融信息服务（北京）有限公司</p><p>京ICP备12006409号京公网安【110102006082-3】</p></div>';
		$('.box-footer').html(footerHtml);
		$('.box-copy').html(copyHtml);
	},
	publicHeader : function(){// header
		var headerHtml,logoHtml;
		headerHtml = '<h3>91金融超市旗下产品&nbsp;&nbsp;</h3><ul class="products-list"><li><a target="_blank" href="http://zzb.91jinrong.com">增值宝</a></li><li class="wc"><a href="http://www.91wangcai.com" target="_blank"><i></i>91旺财</a></li><li><a target="_blank" href="http://www.91dk.com">91贷款</a></li><li><a target="_blank"  href="http://chexian.91jinrong.com">车险通</a></li><li><a target="_blank" href="http://licai.91jinrong.com/" title="理财街">理财街</a></li></ul>';
		logoHtml = '<h2 class="logo"><a href="http://www.91jinrong.com" title="91金融超市">91金融超市</a></h2><em class="slogan">理财街</em><div class="box-tel"></div><div class="box-rz-list"><ul class="clearfix"><li><a target="_blank" href="http://www.91jinrong.com/rzzt"><img src="http://ui.91jinrong.com/cs/images/g1.png"/></a></li><li><a target="_blank" href="http://www.91jinrong.com/rzzt"><img src="http://ui.91jinrong.com/cs/images/g2.png"/></a></li><li><a target="_blank" href="http://bankofbeijing.91jinrong.com"><img src="http://ui.91jinrong.com/cs/images/g3.png"/></a></li><li><a target="_blank" href="http://www.matrixpartners.com.cn/"><img src="http://ui.91jinrong.com/cs/images/g4.png"/></a></li></ul></div>';
		$('.box-products').html(headerHtml);
		$('.box-bg-logo').find('.box-logo').html(logoHtml);
		if( window.location.toString().indexOf('licai.91jinrong.com/') > -1 ){
			$('.box-bg-logo').find('.box-logo').find('.slogan').show();
		}else{
			$('.box-bg-logo').find('.box-logo').find('.slogan').hide();
		}
	},
	twoCode : function(){
		$('<div class="t-code"></div>').appendTo('body');
		$('<div class="t-code2"><i></i></div>').appendTo('body');
		$('.t-code2 i').click(function(){
			$('.t-code2').hide();
		});
		$('.t-code').mouseover(function(){
			$('.t-code2').show();
		})
	},
	toTop : function(){
		var toBox = $('<div class="to-top"></div>').appendTo('body');
		toBox.click(function(){$('html,body').animate({scrollTop:0},400);});
		function toTopFn(){
			var sTop = $(document).scrollTop();
			if( sTop > 0 ){toBox.show();}else{toBox.hide();}
		}
		toTopFn();
		$(document).bind('scroll',function(){toTopFn()});
	}
}
publicModel.publicHeader();
publicModel.publicFooter();
publicModel.twoCode();
publicModel.toTop();
if( $('.use-nav').length > 0 ){
	publicModel.useNav();
}







