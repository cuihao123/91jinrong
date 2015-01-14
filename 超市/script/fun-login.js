window.onload = function(){
	function byId(id){return document.getElementById(id);}
	function addEvent(obj,listener,fn){/*绑定事件*/
		if( obj.attachEvent ){
			obj.attachEvent( 'on' + listener, fn );
		}else{
			obj.addEventListener( listener, fn, false );
		}
	}
	function loginHeight(){
		if( byId('oLogin') ){
			var cHeight = document.documentElement.clientHeight,
				oHeight = byId('oLogin').offsetHeight;
			byId('oLogin').style.height = cHeight - 280 + 'px';
			if( oHeight <= 600 ){
				oHeight = 600;
			}else if( oHeight > 600 && oHeight < (cHeight-280) ){
				oHeight = cHeight - 280 + 'px';
			}else{
				byId('oLogin').style.height = oHeight + 'px';
			}
		}
	}
	loginHeight();
	addEvent(window,'resize',loginHeight);
	function twoCode(){
		var twoCode = document.createElement('div'),
			twoCode2 = document.createElement('div');
		twoCode.className = 't-code';
		twoCode.id = 'tCode';
		twoCode2.className = 't-code2';
		twoCode2.id = 'tCode2';
		twoCode2.innerHTML = '<i id="tCodeI"></i>';
		document.body.appendChild(twoCode);
		document.body.appendChild(twoCode2);
		byId('tCode').onmouseover = function(){
			byId('tCode2').style.display = 'block';
		}
		byId('tCodeI').onclick = function(){
			byId('tCode2').style.display = 'none';
		}
	}
	twoCode();

	/*bank*/
	var bankMes = [
		{ 'name' : '中国人民银行',         'id' : '001' },
		{ 'name' : '中国工商银行',         'id' : '002' },
		{ 'name' : '中国农业银行',         'id' : '003' },
		{ 'name' : '中国银行',             'id' : '004' },
		{ 'name' : '中国建设银行',         'id' : '005' },
		{ 'name' : '交通银行',             'id' : '006' },
		{ 'name' : '招商银行',             'id' : '007' },
		{ 'name' : '中信实业银行',         'id' : '008' },
		{ 'name' : '中国民生银行',         'id' : '009' },
		{ 'name' : '上海浦东发展银行',     'id' : '010' },
		{ 'name' : '深圳发展银行',         'id' : '011' },
		{ 'name' : '华夏银行',             'id' : '012' },
		{ 'name' : '中国光大银行',         'id' : '013' },
		{ 'name' : '广东发展银行',         'id' : '014' },
		{ 'name' : '北京银行',             'id' : '015' },
		{ 'name' : '兴业银行',             'id' : '016' },
		{ 'name' : '深圳市商业银行',       'id' : '017' },
		{ 'name' : '上海银行',             'id' : '018' },
		{ 'name' : '武汉市商业银行',       'id' : '019' },
		{ 'name' : '福州市商业银行',       'id' : '020' },
		{ 'name' : '成都市商业银行',       'id' : '021' },
		{ 'name' : '渣打银行上海分行',     'id' : '022' },
		{ 'name' : '南京市商业银行',       'id' : '023' },
		{ 'name' : '花旗银行',             'id' : '024' },
		{ 'name' : '济南市商业银行',       'id' : '025' },
		{ 'name' : '浙江省绍兴市商业银行', 'id' : '026' },
		{ 'name' : '上海市农村信用社',     'id' : '027' },
		{ 'name' : '南昌市商业银行',       'id' : '028' },
		{ 'name' : '昆山农村商业银行',     'id' : '029' },
		{ 'name' : '杭州商业银行',         'id' : '030' }
	];
	if( byId('bankList') ){
		showPopup(byId('addBank'),byId('bankPopup'),byId('bankBg'));
		hidePopup(byId('bankClose'),byId('bankPopup'),byId('bankBg'));
		var bankLi = byId('bankList').getElementsByTagName('li'),
			bankP  = byId('bankList').getElementsByTagName('p'),
			bankSpan  = byId('bankList').getElementsByTagName('span');
		for( var i = 0; i < bankLi.length; i++ ){
			bankLi[i].index = i;
			bankLi[i].onclick = function(){
				Move(byId('bankPopup'),{opacity:0},function(){byId('bankPopup').style.display = 'none';});
				Move(byId('bankBg'),{opacity:0},function(){byId('bankBg').style.display = 'none';});
				byId('bankName').innerHTML = bankSpan[this.index].innerHTML;
				byId('bankName').className = 'bank-span';
				byId('addBank').innerHTML = '+更换银行卡';
				byId('bankId').value = this.id;
				byId('bankBtnName').value = bankP[this.index].innerHTML;
			}
		}
	}
}