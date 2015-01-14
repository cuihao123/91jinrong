$(function(){
	function logHeight(){
		var cHeight = $(window).height(),
			lHeight = $('.content').height();
		if( lHeight <= (cHeight-830) ){
			$('.content').height(cHeight-830);
		}
	}
	logHeight();
	$(window).resize(function(){logHeight();});



	var A,B,C,D,E,F,G,H,I,J,// 收支情况
		cityWage,Income,Expenses,K,mTarget,mYear,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,FC,CAR,SC,OSW,WHFD,OFZ,ZC,FZ,JZC,FZL,// 资产情况
		arrNum,oBtn,num,oNum,oNumber,typeText,typeTextNew,typeValue,// 理财目标、年限
		yjy,yjyl,SWZC,jjbyj,jrzc, // 月结余  月结余率
		aHtml,iHtml,// 数据接收box
		oDataSrdz,// 行动计划数据
		oDataJson = {} ;      // 行动计划数据
	$('.btn-basic').click(function(){// 城市平均工资
		province();
		setpMenu(1);
	});
	$('.btn-pay').click(function(){// 收支情况
		if( !pay() ){
			return false;
		}else{
			setpMenu(2);
		}
	});
	$('.btn-assets').click(function(){// 资产详情
		if( !assets() ){
			return false;
		}else{
			setpMenu(3);
		}
	});
	$('.btn-dz').click(function(){ //理财目标、风险承受能力
		if( !dz() ){
			return false;
		}else if( !radioLc() ){
			return false;
		}else{
			$('.tab-box-sr').slideUp('slow');
			$('.slide-down').slideDown('fast');
			$('.box-jg').slideDown('slow');
			dataCeshi();
		}
	})
	function dz(){// 理财目标   m-target  目标   m-year 年
		mTarget = parseFloat($('[name="m-target"]').val());
		mYear = parseFloat($('[name="m-year"]').val());
		if( mTarget == 0 ){
			$('[name="m-target"]').focus();
			$('[name="m-target"]').addClass('m-error');
			return false;
		}else if( mYear == 0 ){
			$('[name="m-year"]').focus();
			$('[name="m-year"]').addClass('m-error');
			return false;
		}else{
			return true;
		}
	}
	function radioLc(){// 风险承受能力
		var arrNum = new Array,
			oBtn   = false,
				num = 0,
				oNum = 41,
				oNumber = 0,
				typeText = null;
		var	Q1 = parseFloat($('[name="q1"]:radio:checked').val()) || 0,
			Q2 = parseFloat($('[name="q2"]:radio:checked').val()) || 0,
			Q3 = parseFloat($('[name="q3"]:radio:checked').val()) || 0,
			Q4 = parseFloat($('[name="q4"]:radio:checked').val()) || 0,
			Q5 = parseFloat($('[name="q5"]:radio:checked').val()) || 0;
		arrNum.push(Q1,Q2,Q3,Q4,Q5);
		$.each(arrNum,function(i,n){
			num += n;
		})
		$.each(arrNum,function(i){
			if( arrNum[i] === 0){
				alert('请您选择第' + (i + 1) + '题答案');
				oBtn = false;
				return false;
			}else{
				oBtn = true;
			}
		})
		if( oBtn == true ){
			oNumber = num + oNum;
			if( oNumber <= 20 ){
				oNumber = 0;
				typeText = '保守型';
				typeValue = '1';
			}else if( oNumber > 20 && oNumber <= 40 ){
				typeText = '稳健型';
				typeValue = '2';
			}else if( oNumber > 40 && oNumber <= 60 ){
				typeText = '平衡型';
				typeValue = '3';
			}else if( oNumber > 60 && oNumber <= 79 ){
				typeText = '进取型';
				typeValue = '4';
			}else if( oNumber >= 80){
				oNumber = 80;
				typeText = '进取型';
				typeValue = '4';
			}
			aHtml = '题目答案数组：' + arrNum +'<br/>';
			aHtml += '最后得分：' + oNumber +'<br/>';
			aHtml += '投资类型：' + typeText +'<br/>';
			typeTextNew = typeText;
			return true;
		}
	}
	function assets(){// 资产详情
		L = parseFloat($('[name="m-cash"]').val());
		if( L == 0 ){
			$('[name="m-cash"]').focus();
			$('[name="m-cash"]').addClass('m-error');
			return false;
		}else{
			return true;
		}
	}
	function pay(){// 收支情况
		B = parseFloat($('[name="m-income"]').val());             //月收入
		C = parseFloat($('[name="m-income-o"]').val());           //其他月收入
		D = parseFloat($('[name="m-food"]').val());               //饮食
		E = parseFloat($('[name="m-house-rent"]').val());         //房租
		F = parseFloat($('[name="m-house-loan"]').val());         //房贷
		G = parseFloat($('[name="m-unobstructed-fare"]').val());  //交通
		H = parseFloat($('[name="m-tel"]').val());                //通讯
		I = parseFloat($('[name="m-shopping"]').val());           //购物
		J = parseFloat($('[name="m-other"]').val());              //其他
		Income = B + C;                                           //收入
		Expenses = D + E + F + G + H + I + J;                     //支出
		K = Income + Expenses;                                    //收支总和
		if( B == 0 ){
			$('[name="m-income"]').focus();
			$('[name="m-income"]').addClass('m-error');
			return false;
		}else{
			return true;
		}
	}
	function province(){// 城市平均工资
		A = $('[name="province"]').val(); // 城市平均工资
		$('[name="province"]').change(function(e){
			A = $(this).val();
		});
		return A;
	}
	$('.num-text input[type="text"]').focus(function(){/*设置input*/
		if( $(this).val().length > 1 ){
			$(this).val();
		}else{
			$(this).val('');
		}
	})
	$('.num-text input[type="text"]').blur(function(){/*设置input*/
		if( $(this).val().length > 1 || $(this).val() > 0 ){
			$(this).val();
			$(this).removeClass('m-error');
		}else{
			$(this).val(0);
		}
	})
	$('.num-text input[type="text"]').keydown(function(){/*设置input*/
		var e = $(this).event || window.event,
			code = parseInt(e.keyCode);
		if(code >= 96 && code <= 105 || code >= 48 && code <= 57 || code == 8){
			return true;
		}else{
			return false;
		}
	});
	var tabMenu = $('.tab-box-sr').find($('.tab-menu-sr li.bool')),
		tabText = $('.tab-box-sr').find($('.tab-text-sr > div'));
	function setpMenu(num){// 步骤
		$('.tab-menu-sr li').eq(num).addClass('active bool');
		tabMenu = $('.tab-box-sr').find($('.tab-menu-sr li.bool'));
		tabSrdz();
		tabText.eq(num).removeClass('hidden').show().siblings().addClass('hidden');
		$('html,body').animate({ scrollTop : $('.tab-box-sr').parent().offset().top})
	}
	function tabSrdz(){// 切换
		$.each(tabMenu,function(){
			$(this).click(function(){
				var index = tabMenu.index(this);
				$('.tab-menu-sr li.bool:lt(' + index + ')').addClass('active');
				tabText.eq(index).removeClass('hidden').show().siblings().addClass('hidden');
			})
		})
	};
	tabSrdz();

	function dataCeshi(){
		cityWage = A;                                             //城市平均工资
		B = parseFloat($('[name="m-income"]').val());             //月收入
		C = parseFloat($('[name="m-income-o"]').val());           //其他月收入
		D = parseFloat($('[name="m-food"]').val());               //饮食
		E = parseFloat($('[name="m-house-rent"]').val());         //房租
		F = parseFloat($('[name="m-house-loan"]').val());         //房贷
		G = parseFloat($('[name="m-unobstructed-fare"]').val());  //交通
		H = parseFloat($('[name="m-tel"]').val());                //通讯
		I = parseFloat($('[name="m-shopping"]').val());           //购物
		J = parseFloat($('[name="m-other"]').val());              //其他
		Income = B + C;                                           //收入
		Expenses = D + E + F + G + H + I + J;                     //支出
		K = Income + Expenses;                                    //收支总和
		mTarget = parseFloat($('[name="m-target"]').val());       //理财目标
		mYear   = parseFloat($('[name="m-year"]').val());         //目标年限
		L = parseFloat($('[name="m-cash"]').val());               //现金及活期存款                   
		M = parseFloat($('[name="m-qingqi"]').val());             //定期存款                         
		N = parseFloat($('[name="m-huobi-fund"]').val());         //货币基金/余额宝                  
		O = parseFloat($('[name="m-hunhe-fund"]').val());         //混合型基金                       
		P = parseFloat($('[name="m-zhaiquan-fund"]').val());      //债券型基金                       
		Q = parseFloat($('[name="m-gupiao-fund"]').val());        //股票型基金                       
		R = parseFloat($('[name="m-zhishu-fund"]').val());        //指数基金                         
		S = parseFloat($('[name="m-other-fund"]').val());         //其他基金                         
		T = parseFloat($('[name="m-yh-licai"]').val());           //银行理财产品                     
		U = parseFloat($('[name="m-gupiao"]').val());             //股票                             
		V = parseFloat($('[name="m-guozhai"]').val());            //国债                             
		W = parseFloat($('[name="m-p2p"]').val());                //P2P网贷                          
		X = parseFloat($('[name="m-guijinshu"]').val());          //贵金属                           
		Y = parseFloat($('[name="m-cx-bx"]').val());              //储蓄型保险                       
		Z = parseFloat($('[name="m-other-zc"]').val());           //其他金融资产                     
		FC = parseFloat($('[name="m-house"]').val());             //房产                             
		CAR = parseFloat($('[name="m-car"]').val());              //汽车                             
		SC = parseFloat($('[name="m-sc"]').val());                //收藏品                           
		OSW = parseFloat($('[name="m-other-sw"]').val());         //其他实物资产                     
		WHFD = parseFloat($('[name="m-fd"]').val());              //未还房贷                         
		XYK = parseFloat($('[name="m-card-xf"]').val());          //信用卡/消费贷款                  
		OFZ = parseFloat($('[name="m-other-fz"]').val());         //其他负债                         
		ZC = L + M + N + O + P + Q + R + S + T + U + V + W + X + Y + Z + FC + CAR + SC + OSW;//资产   现金-- 其他实物资产 总和
		FZ = WHFD + XYK + OFZ;                                    //负债   未还房贷 + 信用卡/消费贷款 + 其他负债 总和
		JZC = ZC - FZ;                                            //净资产 = 资产 - 负债
		FZL = ((FZ/ZC)*100).toFixed(2);                           //资产负债率 = 负债总计/资产总计 * 100%
		arrNum;                                                   //题目答案数组
		oNumber;                                                  // 最后得分
		typeText,                                                 // 投资类型
		typeTextNew,                                              // 投资类型
		typeValue,                                                // 投资类型ID
		yjy = Income - Expenses,                                  // 月结余
		yjyl = ((yjy/Income)*100).toFixed(2),                     // 月结余率
		SWZC = FC + CAR + OSW,                                    //实物资产
		jjbyj =  Expenses*3,                                      //紧急储备金
		jrzc = L + M + N + O + P + Q + R + S + T + U + V + W + X + Y + Z;//金融资产

		$('.data-array').html(aHtml);
		result();
		$('.s-ZC').html(ZC + '元');
		$('.s-FC').html(FC + '元');
		$('.s-CAR').html(CAR + '元');
		$('.s-OSW').html(OSW + '元');
		$('.s-SWZC').html(SWZC + '元');
		$('.s-L').html(L + '元');
		$('.s-M').html(M + '元');
		$('.s-N').html(N+ '元');
		$('.s-O').html(O+ '元');
		$('.s-P').html(P+ '元');
		$('.s-Q').html(Q+ '元');
		$('.s-R').html(R+ '元');
		$('.s-S').html(S+ '元');
		$('.s-T').html(T+ '元');
		$('.s-U').html(U+ '元');
		$('.s-V').html(V+ '元');
		$('.s-W').html(W+ '元');
		$('.s-X').html(X+ '元');
		$('.s-Y').html(Y+ '元');
		$('.s-Z').html(Z+ '元');
		$('.s-FZ').html(FZ+ '元');
		$('.s-WHFD').html(WHFD+ '元');
		$('.s-XYK').html(XYK+ '元');
		$('.s-OFZ').html(OFZ+ '元');
		$('.s-JZC').html(JZC+ '元');
		if( FZL == 0 ){
			$('.s-FZL').html(FZL +'%');
			$('.s-FZL-type').html('财务风险为零');
			$('.s-FZL-text').html('您的资产负债率为0，没有债务负担。请您继续保持健康的收支状况、稳健投资，不断提升抵御财务风险的能力。');
		}else if( FZL > 0 && FZL <= 30 ){
			$('.s-FZL').html(FZL +'%');
			$('.s-FZL-type').html('财务风险较低');
			$('.s-FZL-text').html('您的资产负债率较低，债务负担较轻。只要您保持健康的收支状况、稳健投资，即可有效控制财务风险。');
		}else if( FZL > 30 && FZL <= 50 ){
			$('.s-FZL').html(FZL +'%');
			$('.s-FZL-type').html('财务风险适中');
			$('.s-FZL-text').html('您的资产负债率适中，债务负担可以承受。只要您保持健康的收支状况、按时还贷，可以有效控制财务风险。');
		}else if( FZL > 50 ){
			$('.s-FZL').html(FZL +'%');
			$('.s-FZL-type').html('财务风险较高');
			$('.s-FZL-text').html('您的资产负债率较高，债务负担较重，及时偿还负债应作为重要理财目标、以高优先级来完成。您需要持续优化收支、提高结余，并稳健投资增加金融资产，将资产负债率降低到50%以下，从而有效控制财务风险。');
		} 
		$('.s-yjy').html(yjy+ '元');
		$('.s-yjyl').html(yjyl+ '%');
		if( yjyl >= 0 && yjyl <= 10 ){
			if( WHFD > 0 ){
				$('.s-yjy-text').html('您当前的月结余率稍低于理想水平。考虑到房租房贷压力，建议您将月结余率由' + yjyl + '%' + '提高到30%，即月结余' + parseInt(Income*0.3) + '元。这将帮助您更快进行财富积累。');
			}else{
				$('.s-yjy-text').html('您当前的月结余率稍低于理想水平。您并没有房租房贷支出，结余率有待进一步提高。根据您的个人情况，建议您争取将月结余率由' + yjyl + '%' + '提高到30%，即月结余' + parseInt(Income*0.3) + '元，这将帮助您更快进行财富积累。');
			}
		}else if(  yjyl > 20 && yjyl <= 30  ){
			if( WHFD > 0 ){
				$('.s-yjy-text').html('您当前的月结余率稍低于理想水平。考虑到房租房贷压力，建议您将月结余率由' + yjyl + '%' + '提高到30%，即月结余' + parseInt(Income*0.3) + '元。这将帮助您更快进行财富积累。');
			}else{
				$('.s-yjy-text').html('您当前的月结余率偏低。您并没有房租房贷支出，结余率有待进一步提高。根据您的个人情况，建议您争取将月结余率由' + yjyl + '%' + '提高到30%，即月结余' + parseInt(Income*0.3) + '元，这将帮助您更快进行财富积累。');
			}
		}else if( yjyl > 30 ){
			$('.s-yjy-text').html('您当前的年结余状况较为健康，请保持。不过，如果继续挖掘开源节流的潜力，会帮助您更快进行财富积累。');
		}
		if( yjyl < 30 ){
			$('.s-yjyl-jh').html('将月结余率提高到30%')
			$('.s-yjy-num').html( parseInt(yjy/0.3) + '元' )
			$('.s-dqjyl').html('30%')
		}else{
			$('.s-yjyl-jh').html('将月结余率维持在' + yjyl +'%');
			$('.s-yjy-num').html( yjy + '元' )
			$('.s-dqjyl').html(yjyl + '%');
		}
		$('.s-Income').html(Income+ '元');
		$('.s-Expenses').html(Expenses+ '元');
		$('.s-cityWage').html(cityWage+ '元');
		if( Income > cityWage ){
			$('.s-cityWage').html('高于当地平均收入' + cityWage + '元');
		}else if( Income < cityWage ){
			$('.s-cityWage').html('低于当地平均收入' + cityWage + '元');
		}else if( Income == cityWage ){
			$('.s-cityWage').html('与当地平均收入' + cityWage + '元相当');
		}
		if( jjbyj <= 500 ){
			$('.s-jjbyj').html('1500元');
		}else{
			$('.s-jjbyj').html(jjbyj+ '元');
		}
		$('.s-jrzc').html(jrzc+ '元');
		$('.s-xj-jy').html(Expenses + '~' + Expenses*2 +'元');
		$('.s-jj-jy').html(Expenses*2 + '~' + Expenses*4 +'元');
		if( Income <= cityWage ){
			$('.s-Income-text').html('在这种情况下，您的理财重点是：保障收入来源稳定持续，维持健康的结余状况，并积极投资增加被动收入。');
		}else{
			$('.s-Income-text').html('在这种情况下，开源潜力很大，同时应重视学习积累理财知识并积极实践投资，为未来的财富积累打基础。');
		}
		if( Expenses <= 500 ){
			$('.s-xjhqck').html('500~1000元');
			$('.s-hbjj').html('1000~2000元');
		}else{
			$('.s-xjhqck').html(Expenses + '~' + Expenses*2 + '元');
			$('.s-hbjj').html(Expenses*2 +'~' + Expenses*4 + '元');
		}
		if( L > Expenses ){
			$('.s-xj-assess').html('过高');
			$('.s-xj-action').html('将活期存款中' + (L-Expenses) + '元用于增持货币基金');
		}else if( L = Expenses ){
			$('.s-xj-assess').html('合理');
			$('.s-xj-action').html('保持现状');
		}else if( L < Expenses ){
			$('.s-xj-assess').html('不足');
			$('.s-xj-action').html('使用未来月结余，补充活期存款' + (Expenses-L) + '元');
		}
		if( Expenses <= 500 && N < 1000 ){
			$('.s-jj-assess').html('不足');
			$('.s-jj-action').html('使用现有活期存款和未来结余，增持货币基金' + (1000 - N) + '元');
		}else if( Expenses <= 500 && N > 1000 ){
			$('.s-jj-assess').html('过高');
			$('.s-jj-action').html('请将' + (N - 1000) + '元用于投资其他理财产品');
		}else if( Expenses <= 500 && N == 1000 ){
			$('.s-jj-assess').html('适当');
			$('.s-jj-action').html('保持现状');
		}else if( Expenses > 500 ){
			if( N > (Expenses*2) ){
				$('.s-jj-assess').html('过高');
				$('.s-jj-action').html('请将' + (N - Expenses*2) + '元用于投资其他理财产品');
			}else if( N = (Expenses*2) ){
				$('.s-jj-assess').html('适当');
				$('.s-jj-action').html('保持现状');
			}else if( N < (Expenses*2) ){
				$('.s-jj-assess').html('不足');
				$('.s-jj-action').html('使用现有活期存款和未来结余，增持货币基金' + ( Expenses*2 - N ) + '元');
			}else if( N == 0 || Expenses == 0 ){
				$('.s-jj-assess').html('不足');
				$('.s-jj-action').html('使用现有活期存款和未来结余，增持货币基金1000元');
			}
		}
		$('.s-tz-typeText').html(typeTextNew);
		if( typeValue == 1 ){
			$('.s-tz-typeBl').html('60%：30%：10%的比例，分别配置低风险、中等风险和高风险资产，实现约6.49%的预期年化收益率。');
			$('.s-tz-typeImg').html('<img src="http://ui.91jinrong.com/cs/images/tz-typeImg01.png">');
			$('.s-fx-textBl').html('<p>低风险投资' + parseInt((jrzc - jjbyj)*0.6) + '元<cite>推荐种类：货币基金、银行理财产品、国债、部分互联网理财产品</cite></p><p>中风险投资' + parseInt((jrzc - jjbyj))*0.3 + '元<cite>推荐种类：二级债券型基金、优选P2P网贷</cite></p><p>高风险投资' + parseInt((jrzc - jjbyj))*0.1 +'元<cite>推荐种类：股票型基金、指数型基金、混合型基金</cite></p>');
		}else if( typeValue == 2 ){
			$('.s-tz-typeBl').html('20%：60%：20%的比例，分别配置低风险、中等风险和高风险资产，实现约7.97%的预期年化收益率。');
			$('.s-tz-typeImg').html('<img src="http://ui.91jinrong.com/cs/images/tz-typeImg02.png">');
			$('.s-fx-textBl').html('<p>低风险投资' + parseInt((jrzc - jjbyj)*0.2) + '元</p><cite>推荐种类：货币基金、银行理财产品、国债、部分互联网理财产品</cite><p>中风险投资' + parseInt((jrzc - jjbyj))*0.6 + '元</p><cite>推荐种类：二级债券型基金、优选P2P网贷</cite><p>高风险投资' + parseInt((jrzc - jjbyj))*0.2 +'元</p><cite>推荐种类：股票型基金、指数型基金、混合型基金</cite>');
		}else if( typeValue == 3 ){
			$('.s-tz-typeBl').html('20%：45%：35%的比例，分别配置低风险、中等风险和高风险资产，实现约9.40%的预期年化收益率。');
			$('.s-tz-typeImg').html('<img src="http://ui.91jinrong.com/cs/images/tz-typeImg03.png">');
			$('.s-fx-textBl').html('<p>低风险投资' + parseInt((jrzc - jjbyj)*0.2) + '元</p><cite>推荐种类：货币基金、银行理财产品、国债、部分互联网理财产品</cite><p>中风险投资' + parseInt((jrzc - jjbyj))*0.45 + '元</p><cite>推荐种类：二级债券型基金、优选P2P网贷</cite><p>高风险投资' + parseInt((jrzc - jjbyj))*0.35 +'元</p><cite>推荐种类：股票型基金、指数型基金、混合型基金</cite>');
		}else if( typeValue == 4 ){
			$('.s-tz-typeBl').html('25%：25%：50%的比例，分别配置低风险、中等风险和高风险资产，实现约10.76%的预期年化收益率。');
			$('.s-tz-typeImg').html('<img src="http://ui.91jinrong.com/cs/images/tz-typeImg04.png">');
			$('.s-fx-textBl').html('<p>低风险投资' + parseInt((jrzc - jjbyj)*0.25) + '元</p><cite>推荐种类：货币基金、银行理财产品、国债、部分互联网理财产品</cite><p>中风险投资' + parseInt((jrzc - jjbyj))*0.25 + '元</p><cite>推荐种类：二级债券型基金、优选P2P网贷</cite><p>高风险投资' + parseInt((jrzc - jjbyj))*0.5 +'元</p><cite>推荐种类：股票型基金、指数型基金、混合型基金</cite>');
		}
		$('.s-ky-jrzc').html(jrzc + '元');
		$('.s-ky-jjbyj').html(jjbyj + '元');
		if( (jrzc - jjbyj) < 0 ){
			$('.box-s-ky-jjbyj').css({display : 'none'});
			$('.s-ky-jjbyj-text').css({display : 'block'});
		}else{
			$('.s-ky-jrzc-jjbyj').html( (jrzc - jjbyj) +'元');
			$('.box-s-ky-jjbyj').css({display : 'block'});
			$('.s-ky-jjbyj-text').css({display : 'none'});
		}
		if( parseInt(yjyl) < 0 ){
			$('.charts-zc').css({height : '0'});
		}else{
			$('.charts-zc').css({height : parseInt(yjyl) + '%'});
		}
		$('.img-bing').highcharts({
	        chart: {
	            plotBackgroundColor: null,
	            plotBorderWidth: 1,//null,
	            plotShadow: false
	        },
	        title: {
	            text: '您的家庭月支出现状'
	        },
	        tooltip: {
	    	    pointFormat: '<b>{point.percentage:.1f}%</b>'
	        },
	        plotOptions: {
	            pie: {
	                allowPointSelect: true,
	                cursor: 'pointer',
	                dataLabels: {
	                    enabled: true,
	                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
	                    style: {
	                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
	                    }
	                }
	            }
	        },
	        series: [{
	            type: 'pie',
	            name: '',
	            data: [
	                ['饮食',D/Expenses],
	                ['房租',E/Expenses],
	                ['房贷',F/Expenses],
	                ['交通',G/Expenses],
	                ['通讯',H/Expenses],
	                ['购物',I/Expenses],
	                ['其他',J/Expenses]
	            ]
	        }]
	    });
		var oDataA = $('.s-FZL-text').html(),
			oDataB = $('.s-yjy-text').html(),
			oDataC = $('.s-xj-action').html(),
			oDataD = $('.s-jj-action').html(),
			oDataE = $('.s-tz-typeText').html(),
			oDataF = $('.s-tz-typeBl').html(),
			oDataG = $('.s-dqjyl').html();
		oDataJson = {
			oDataA : $('.s-FZL-text').html(),
			oDataB : $('.s-yjy-text').html(),
			oDataC : $('.s-xj-action').html(),
			oDataD : $('.s-jj-action').html(),
			oDataE : $('.s-tz-typeText').html(),
			oDataF : $('.s-tz-typeBl').html(),
			oDataG : $('.s-dqjyl').html()
		}
		oDataSrdz = '<dt>1、资产现状</dt><dd>' + oDataA + '</dd><dt>2、收支分析</dt><dd>' + oDataB + '</dd><dt>3、储备紧急备用金</dt><dd>' + oDataC + '</dd><dd>' + oDataD + '</dd><dd><a href="">货币型基金推荐</a>：<a href="">博时货币基金</a></dd><dt>4、投资者类型和投资规划建议</dt><dd>根据您对风险测试的回答以及投资现状分析，您是<span>' + oDataE + '</span>投资者，建议按照<span>' + oDataF + '</span></dd><dd>低风险投资推荐：<a href="">博时货币基金</a></dd><dd>中风险投资推荐：<a href="">91旺财</a></dd><dd>高风险投资推荐：指数型基金、股票型基金</dd><dt>6、实现理财目标</dt><dd>以<span>' + oDataG + '</span>的结余率、<span>10%</span>的年收入增长率（按社会平均水平10%计）、按照<span>' + oDataG + '</span>从而逐渐达成理财目标。</dd>';
		$('.box-xdjh').html(oDataSrdz);
		//ajaxDataSrdz();
	};
	function ajaxDataSrdz(){
		$.ajax({
		     type    : 'post',
		     url     : window.location.href,
		    data     : { oDataSrdz : oDataSrdz , oDataJson : oDataJson },
		    success  : function(oDataSrdz){
		    	alert('发送成功，数据为'+ oDataSrdz);
		    },
		    error    : function(){
		    	alert('发送失败');
		    	console.log(oDataSrdz);
		    	console.log(oDataJson);
		    },
		    dataType : 'json'
		});
	}
	function result(){
		$('.box-jg').find($('.box-sr')).eq(0).slideDown();
		var oBtn = $('.box-jg').find($('.btn-next')),
			pBtn = $('.box-jg').find($('.btn-prev'));
		$.each(oBtn,function(i){
			var index = oBtn.index(this);
			$(this).click(function(){
				$('html,body').animate({ scrollTop : $('.slide-down').offset().top});
				$('.box-jg').find($('.box-sr')).eq(index+1).slideDown().siblings($('.box-sr')).slideUp();
			})
		})
		$.each(pBtn,function(i){
			var index = pBtn.index(this);
			$(this).click(function(){
				$('html,body').animate({ scrollTop : $('.slide-down').offset().top});
				$('.box-jg').find($('.box-sr')).eq(index).slideDown().siblings($('.box-sr')).slideUp();
			})
		})
	};

})

/*
		iHtml  = '城市平均工资：' + cityWage +'<br/>';
		iHtml += '月收入：' + B +'<br/>';
		iHtml += '其他月收入：' + C +'<br/>';
		iHtml += '饮食：' + D +'<br/>';
		iHtml += '房租：' + E +'<br/>';
		iHtml += '房贷：' + F +'<br/>';
		iHtml += '交通：' + G +'<br/>';
		iHtml += '通讯：' + H +'<br/>';
		iHtml += '购物：' + I +'<br/>';
		iHtml += '其他：' + J +'<br/>';
		iHtml += '收入：' + Income +'<br/>';
		iHtml += '支出：' + Expenses +'<br/>';
		iHtml += '收支总和：' + K +'<br/>';
		iHtml += '理财目标：' + mTarget +'<br/>';
		iHtml += '目标年限：' + mYear +'<br/>';
		iHtml += '现金及活期存款：' + L +'<br/>';
		iHtml += '定期存款：' + M +'<br/>';
		iHtml += '货币基金/余额宝：' + N +'<br/>';
		iHtml += '混合型基金：' + O +'<br/>';
		iHtml += '债券型基金：' + P +'<br/>';
		iHtml += '股票型基金：' + Q +'<br/>';
		iHtml += '指数基金：' + R +'<br/>';
		iHtml += '其他基金：' + S +'<br/>';
		iHtml += '银行理财产品：' + T +'<br/>';
		iHtml += '股票：' + U +'<br/>';
		iHtml += '国债：' + V +'<br/>';
		iHtml += 'P2P网贷：' + W +'<br/>';
		iHtml += '贵金属：' + X +'<br/>';
		iHtml += '储蓄型保险：' + Y +'<br/>';
		iHtml += '其他金融资产：' + Z +'<br/>';
		iHtml += '房产：'+ FC +'<br/>';
		iHtml += '汽车：' + CAR +'<br/>';
		iHtml += '收藏品：' + SC +'<br/>';
		iHtml += '其他实物资产：' + OSW +'<br/>';
		iHtml += '未还房贷：' + WHFD +'<br/>';
		iHtml += '信用卡/消费贷款：' + XYK +'<br/>';
		iHtml += '其他负债：' + OFZ +'<br/>';
		iHtml += '资产：' + ZC +'<br/>';
		iHtml += '负债：' + FZ +'<br/>';
		iHtml += '净资产：' + JZC +'<br/>';
		iHtml += '资产负债率：' + FZL +'<br/>';
		iHtml += '实物资产' + SWZC;
*/
