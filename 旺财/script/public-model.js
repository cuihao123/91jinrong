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
	useNav : function(){// user 左侧导航
		var useNavHtml;
		useNavHtml = '<h3><a href="/user/account/get" class="title-link"><i class="u-icon u-icon-user"></i>账户概况<i class="u-icon u-icon-on"></i></a></h3>';
		useNavHtml+= '<h3 class="u-nav-down"><a href="javascript:void(0)"><i class="u-icon u-icon-money"></i>充值提现<i class="u-icon u-icon-in"></i></a></h3>';
		useNavHtml+= '<p><a href="/user/recharge/to">充值<i class="u-icon u-icon-on"></i></a><a href="/user/cash/new">提现<i class="u-icon u-icon-on"></i></a></p>';
		useNavHtml+= '<h3 class="u-nav-down"><a href="javascript:void(0)"><i class="u-icon u-icon-chart"></i>理财管理<i class="u-icon u-icon-in"></i></a></h3>';
		useNavHtml+= '<p><a href="/user/financial/chart">理财记录<i class="u-icon u-icon-on"></i></a><a href="/user/financial/detail">资金明细<i class="u-icon u-icon-on"></i></a><a href="/user/financial/autotender">自动理财<i class="u-icon u-icon-on"></i></a></p>';
		useNavHtml+= '<h3 class="u-nav-down"><a href="javascript:void(0)"><i class="u-icon u-icon-coupon"></i>红包奖励<i class="u-icon u-icon-in"></i></a></h3>';
		useNavHtml+= '<p><a href="/user/redbonus">红包<i class="u-icon u-icon-on"></i></a><a href="/user/giftcard">理财卡<i class="u-icon u-icon-on"></i></a></p>';
		useNavHtml+= '<h3><a href="/user/vip" class="title-link"><i class="u-icon u-icon-vip"></i>VIP<i class="u-icon u-icon-on"></i></a></h3>';
		useNavHtml+= '<h3><a href="/user/message" class="title-link"><i class="u-icon u-icon-message"></i>消息中心<i class="u-icon u-icon-on"></i></a></h3>';
		useNavHtml+= '<h3><a href="/user/setup" class="title-link"><i class="u-icon u-icon-setup"></i>账户设置<i class="u-icon u-icon-on"></i></a></h3>';
		$('.nav-user').html(useNavHtml);
		var wLocation = window.location.toString(),
			useLinkTitle = $('.nav-user h3 a.title-link'),
			useLink = $('.nav-user p a');
		var hrefArrayTitle = ['/user/account/get','/user/vip','/user/message','/user/setup'],
			hrefArrayLink = ['/user/recharge/to','/user/cash/new','/user/financial/chart','/user/financial/detail','/user/financial/autotender','/user/redbonus','/user/giftcard'];
		$.each(useLinkTitle,function(i){
			var index = useLinkTitle.index(this);
			if( wLocation.indexOf(hrefArrayTitle[i]) > -1 ){
				useLinkTitle.eq(index).addClass('active-link');
			}
		});
		$.each(useLink,function(i){
			var index = useLink.index(this);
			if( wLocation.indexOf(hrefArrayLink[i]) > -1 ){
				useLink.eq(index).addClass('on');
			}
		})
		$('.nav-user h3.u-nav-down').click(function(){
			$(this).toggleClass('menu-on');
			$(this).addClass('active').siblings('h3').removeClass('active').removeClass('menu-on');
			$(this).next('p').slideToggle().siblings('p').slideUp();
		});
		$('.nav-user').find('a.on').parent().slideDown().prev().addClass('active-link');
	},
	publicFooter : function(){// footer
		$('<div class="box-footer"></div>').appendTo('body');
		$('<div class="box-copy"></div>').appendTo('body');
		var footerHtml,copyHtml;
		footerHtml = '<div class="box clearfix"><div class="footer-left"><h4>公司地址</h4><p>总部地址：北京市西城区新街口外大街28号普天德胜园区A座3层</p><p>上海地址：上海市浦东新区福山路388号宏嘉大厦706</p><p>延庆线下店地址：北京市延庆县东外大街100号</p><p>知春路线下店地址：北京市海淀区知春路甲63号卫星大厦5层海通证券营业部</p></div><div class="footer-mid"><h4>联系我们</h4><p class="footer-tel">400-991-9591<em>（7×24小时为您服务）</em></p><p class="footer-email">邮箱：<a href="mailto:service@91wangcai.com">service@91wangcai.com</a></p></div><div class="footer-right"><h4>关注我们</h4><div class="drop-down"><i class="icon icon-f-weixin drop-down-menu"></i><em>微信公众账号</em><span class="drop-down-box"><img src="http://www.91wangcai.com/images/icons/ico12.png"></span></div><div><i class="icon icon-f-sina"><a href="http://weibo.com/91wangcai" target="_blank"></a></i><em>新浪微博</em></div></div><p class="link-partner">友情链接：<a href="http://www.91jinrong.com" target="_blank">91金融超市</a><a href="http://zzb.91jinrong.com" target="_blank">增值宝</a><a href="http://www.touzhijia.com/" target="_blank">投之家</a><a href="http://www.hexun.com/" target="_blank">和讯网</a><a href="http://www.zongls.cn/" target="_blank">棕榈树</a><a href="http://www.wangdaiwuyou.com/" target="_blank">网贷无忧</a><a href="http://finance.china.com.cn/money/efinance/index.shtml" target="_blank">中国互联网金融</a><a href="http://www.wangdaiqianyan.com" target="_blank">网贷前沿</a><a href="https://www.wangrongbao.com" target="_blank">网融宝</a></p></div>';
		copyHtml = '<div class="box"><p><a href="http://www.itrust.org.cn/yz/pjwx.asp?wm=1082842294" target="_blank"><img src="http://www.91wangcai.com/images/icons/ico19.png"></a></p><p><a href="/about/index">关于我们</a><a href="/about/management">管理团队</a><a href="/about/qualification">证照资质</a><a href="/about/regulation">法律法规</a><a href="/about/contact">联系我们</a><a href="/about/job">招聘信息</a><a href="/about/website_reports">最新动态</a><a href="/about/media_reports">媒体报道</a></p><p>Copyright © 2014 91wangcai.com Inc. All Rights Reserved.</p><p>九一金融信息服务（北京）有限公司 京ICP备14008765号-1</p></div>';
		$('.box-footer').html(footerHtml);
		$('.box-copy').html(copyHtml);
	},
	toTop : function(){
		var toBox = $('<li class="totop drop-down"></li>').appendTo('.mod-top');
		toBox.html('<a href="javascript:;" class="drop-down-menu"></a><div class="mod-totop-text drop-down-box"></div>');
		toBox.click(function(){$('html,body').animate({scrollTop:0},400);});
		function toTopFn(){
			var sTop = $(document).scrollTop();
			if( sTop > 0 ){toBox.fadeIn();}else{toBox.fadeOut();}
		}
		toTopFn();
		$(document).bind('scroll',function(){toTopFn()});
	},
	dropDown : function(){
		$('.drop-down-menu').mouseover(function(){
			$(this).addClass('active');
			$(this).parent().find('.drop-down-box').fadeIn();
		});
		$('.drop-down').mouseleave(function(){
			$(this).find('.drop-down-menu').removeClass('active');
			$(this).find('.drop-down-box').fadeOut();
		});
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
		var	proList = $('.pro-list'),
			stepNum = proList.find('.pre-num'),
			stepBox = proList.find('.pre-box');
		$.each(stepNum,function(i){
			var index = stepNum.index(this);
			if( parseInt($(this).html()) == 100 ){
				proList.eq(index).addClass('pro-list-m');
				proList.eq(index).find('.btn').html('已售完').hover(function(){
					$(this).html('查看详情');
				},function(){
					$(this).html('已售完');
				});
				proList.eq(index).find('.hot').hide();
				$('<i class="over"></i>').appendTo(proList.eq(index));
			}
		});
		function startStep(){
			$.each(stepNum, function(i) {
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
					if( parseInt($(this).html()) == 100 ){
						stepBox.eq(index).addClass('pre-box-m');
					}
				}
			});
		};
		startStep();
		$(document).bind('scroll',function(){startStep()});
	},
	proVip : function(){
		$('.pro-list-vip-over').find('.btn').html('已售完').hover(function(){
			$(this).html('查看详情');
		},function(){
			$(this).html('已售完');
		});
	},
	emNum : function(){
		var eNum = $('.em-num');
		$.each(eNum,function(){
			var speed = 0,
				oTime = null;
			if( parseFloat($(this).html()) != parseFloat($(this).attr('data-num')) ){
				oTime = setInterval(function(){
					$.each(eNum,function(){
						var targetNum = $(this).attr('data-num');
						if( targetNum == null || targetNum == 0 || targetNum == '--' ){
							$(this).html('--');
						}else{
							if( speed >= parseFloat(targetNum) ){
								clearInterval($(this).oTime);
								$(this).html(targetNum);
							}else{
								speed += 0.08;
								$(this).html(speed.toFixed(1))
							}
						}
					});
				},10);
			}
		})
	},
	focusInput : function(){
		$('.focus-input').focus(function(){
			$(this).parent().css({borderColor : '#e70'});
		});
		$('.focus-input').blur(function(){
			$(this).parent().css({borderColor : '#ccc'});
		})
	}
}
publicModel.publicFooter();
publicModel.toTop();
if( $('.drop-down-menu').length > 0 ){
	publicModel.dropDown();
}
if( $('.tab').length > 0 ){
	publicModel.tab();
}
if( $('.pre-num').length > 0 ){
	publicModel.preNum();
}
if( $('.em-num').length > 0 ){
	publicModel.emNum();
}
if( $('.nav-user').length > 0 ){
	publicModel.useNav();
}
if( $('.pro-list-vip').length > 0 ){
	publicModel.proVip();
}
if( $('.focus-input').length > 0 ){
	publicModel.focusInput();
}