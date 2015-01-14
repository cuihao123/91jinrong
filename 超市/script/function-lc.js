function fn(){
	/*轮播*/
	imgAutoHeight(byId('rzBox'),byId('rzList'),67,3000);/*header 融资轮播 */
	imgAuto(byId('lcPicBox'),byId('lcPic'),byId('lcMenu'),1200,5000);
	/*下拉菜单*/
	searchNav(byId('searchBox'),byId('bgSearchBox'),500);
	selectBox(byId('nhBox'),byId('nhList'),byId('selValue'),byId('nhValue'));
	selectBox(byId('tzBox'),byId('tzList'),byId('selValueTz'),byId('tzValue'));
	selectBox(byId('rzBoxSel'),byId('rzListSel'),byId('selValueRz'),byId('rzValue'));
	selectBox(byId('lyBox'),byId('lyList'),byId('selValueLy'),byId('lyValue'));
	/*进度*/
	if( byId('lcMiddle') ){
		function aSpeed(){
			speedNum(byId('lcMiddle'));
		}
		addEvent(window,'scroll',aSpeed);
		aSpeed();
	}
	if( byId('searchList') ){
		function bSpeed(){
			speedNum(byId('searchList'));
		}
		addEvent(window,'scroll',bSpeed);
		bSpeed();
	}
	if( byId('tableList') ){
		function cSpeed(){
			speedList(byId('tableList'));
		}
		addEvent(window,'scroll',cSpeed);
		cSpeed();
	}
	speedTop(byId('lcInfoMiddle'));
	/*num*/
	dataTime();
	/*p2p top*/
	topNhNum(byId('nhNum'));
	speedTop(byId('lcTop'));
	/*nav*/
	dropDown(byId('dropBoxA'),byId('dropDownA'));
	dropDown(byId('dropBoxB'),byId('dropDownB'));
	/*tab*/
	tabBox(byId('ptMenu'),byId('ptBox'),'onmouseover');
	tabBox(byId('menuTj'),byId('boxTj'),'onmouseover');
	tabBox(byId('proListMenu'),byId('proListDiv'),'onclick');
	tabBox(byId('proListMenu2'),byId('proListDiv2'),'onclick');
	/*预约弹出框*/
	if( byId('popup') ){
		popBtn();
	}
	/*list scroll*/
	searchScroll();
	/*page*/
	var oPage = byId('page') || null;
	if( oPage != null ){
		var oPageLi = oPage.getElementsByTagName('li');
		if( oPageLi.length <= 4 ){
			oPage.style.display = 'none';
		}else{
			oPage.style.display = 'block';
		}
	}
	/*changeColor*/
	var proTab = getClass(document,'pro-tab') || null;
	if( proTab.length > 0 ){
		for( var i = 0; i < proTab.length; i++ ){
			proTab[i].index = i;
			var proTr = proTab[i].getElementsByTagName('tr');
			for( var j = 0; j < proTr.length; j++ ){
				proTr[j].index = j;
				if( j%2 == 0 ){
					proTr[j].style.background = '#f9f9f9';
				}else{
					proTr[j].style.background = '#fff';
				}
			}
		}
	}
}
fn();
function twoCode(){/*二维码*/
	var twoCode = document.createElement('div'),
		twoCode2 = document.createElement('div');
		twoCode.className = 't-code';
		twoCode.id = 'tCode';
		twoCode2.className = 't-code2';
		twoCode2.id = 'tCode2';
		twoCode2.innerHTML = '<i id="tCodeI"></i>';
	document.documentElement.appendChild(twoCode);
	document.documentElement.appendChild(twoCode2);
	byId('tCode').onmouseover = function(){
		byId('tCode2').style.display = 'block';
	}
	byId('tCodeI').onclick = function(){
		byId('tCode2').style.display = 'none';
	}
}
twoCode();