window.onload = function(){
	imgAuto(byId('boxPic'),byId('listPic'),byId('menuPic'),720,5000);
	//imgAuto(byId('xykBox'),byId('xykList'),byId('xykMenu'),420,500000);
	imgAutoHeight(byId('rzBox'),byId('rzList'),67,5000);
	/*二维码*/
	byId('tCode').onmouseover = function(){
		byId('tCode2').style.display = 'block';
	}
	byId('tCodeI').onclick = function(){
		byId('tCode2').style.display = 'none';
	}
	byId('sService').onmouseover = function(){
		byId('sServiceBox').style.display = 'block';
	}
	byId('sService').onmouseout = function(){
		byId('sServiceBox').style.display = 'none';
	}
	byId('sQq').onmouseover = function(){
		byId('sQqBox').style.display = 'block';
	}
	byId('sQq').onmouseout = function(){
		byId('sQqBox').style.display = 'none';
	}
	/*imgHover*/
	imgHover(byId('dkImgList'));
	imgHover(byId('lcImgList'));
	imgHover(byId('license'));
	/*nav*/
	boxSubNav();
}