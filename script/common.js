function byId(id){return document.getElementById(id);}
function searchNav(nav,bgNav,Num){/*搜索子导航*/
	if( nav && bgNav ){
		function positionNav(){
			var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
			if( scrollY > Num ){
				nav.style.display = 'block';
				bgNav.style.display = 'block';
				Move(nav,{opacity:100});
				Move(bgNav,{opacity:70})
			}else{
				Move(nav,{opacity:0},function(){
					nav.style.display = 'none';
				})
				Move(bgNav,{opacity:0},function(){
					bgNav.style.display = 'none';
				})
			}
		}
		addEvent(window,'scroll',positionNav);/*绑定scroll*/
		positionNav();
	}
}
function boxSubNav(){/*左侧子导航 + 下拉菜单 */
	var subNav = byId('subNav') || null;
	if( byId('boxSubNav') ){
		var boxSubNav = byId('boxSubNav');
		boxSubNav.style.height = boxSubNav.parentNode.offsetHeight + 'px';
		subNav.style.display = 'block';
		Move(subNav,{opacity:100});
		function scrollSubNav(){
			var scrollY = document.documentElement.scrollTop || document.body.scrollTop,
				sTop = subNav.parentNode.offsetTop + subNav.parentNode.offsetHeight,
				oBoxHeight = boxSubNav.offsetHeight,
				oNavHeight = subNav.offsetHeight;
			if( scrollY > sTop && scrollY < ( oBoxHeight - oNavHeight + sTop ) ){
				subNav.className = 'sub-nav sub-nav-fixed';
				subNav.style.top = 0;
				subNav.style.left = boxSubNav.offsetLeft + 1 + 'px';
			}else if( scrollY > ( oBoxHeight - oNavHeight + sTop ) ){
				subNav.className = 'sub-nav';
				subNav.style.top =  oBoxHeight - oNavHeight + 'px';
				subNav.style.left = 0;
			}else{
				subNav.className = 'sub-nav';
				subNav.style.top =  subNav.parentNode.offsetHeight + 'px';
				subNav.style.left =  0;
			}
		}
		addEvent(window,'scroll',scrollSubNav);
		addEvent(window,'resize',scrollSubNav);
	}else{
		if( byId('boxSubMenu') ){
			byId('boxSubMenu').style.display = 'none';
			if( subNav != null ){
				subNav.style.display = 'none';
			}
			byId('boxSubMenu').onmouseover = function(){
				byId('boxSubMenu').className = 'box-sub-menu box-sub-menu-active';
				subNav.className = 'sub-nav sub-nav-drop';
				subNav.style.display = 'block';
				Move(subNav,{opacity:100});
			}
			byId('boxSubMenu').onmouseout = function(){
				byId('boxSubMenu').className = 'box-sub-menu';
				Move(subNav,{opacity:0},function(){
					subNav.style.display = 'none';
				});
			}
		}
	}
}
function leftNav(nav){/*左侧子导航 : fixed */
	if( nav ){
		function scrollNav(){/*滚动条大于nav父元素的offsetTop时改变className和top值*/
			var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
			var cTop = nav.parentNode.offsetTop;
			var Lnum = nav.parentNode.offsetLeft
			if( scrollY > cTop && scrollY < (nav.parentNode.offsetHeight - nav.offsetHeight + cTop ) ){
				nav.className = 'sub-nav sub-nav-fixed';
				nav.style.top = 0 + 'px';/* top : 父元素的offsetTop */
				nav.style.left = Lnum + 1 + 'px';/* left : 父元素的offsetLeft */
			}else if( scrollY > (nav.parentNode.offsetHeight - nav.offsetHeight + cTop ) ){
				nav.className = 'sub-nav';
				nav.style.top = nav.parentNode.offsetHeight - nav.offsetHeight + 'px';
				nav.style.left = 0;
			}else{
				nav.className = 'sub-nav';
				nav.style.top = 0;
				nav.style.left = 0;
			}
		}
		addEvent(window,'scroll',scrollNav);/*绑定scroll*/
		scrollNav();
	}
}
function selectBox(selBtn,selList,selValue,btnValue){/*模拟下拉菜单*/
	if( selBtn ){
		selBtn.onclick = function(e){
			var e = e || window.event;
			selList.style.display = 'block';
			Move(selList,{opacity:100});
			e.cancelBubble = true;
		}
		var listValue = selList.getElementsByTagName('li'),
			liValue = selList.getElementsByTagName('input');
		for( var i = 0; i < listValue.length; i++ ){
			listValue[i].index = i;
			listValue[i].onclick = function(e){
				var e = e || window.event;
				selValue.innerHTML = this.innerHTML;
				btnValue.value = liValue[this.index].value;
				Move(selList,{opacity:0},function(){
					selList.style.display = 'none';
				});
				e.cancelBubble = true;
			}
		}
		if( selList.parentNode ){
			var sTime = null;
			selList.parentNode.onmouseover = function(){
				clearTimeout(sTime);
			}
			selList.parentNode.onmouseout = function(){
				sTime = setTimeout(function(){
					Move(selList,{opacity:0},function(){
						selList.style.display = 'none';
					});
					clearTimeout(sTime);
				},1000)
			}
		}
	}
}
function speedNum(sBox){
	if( sBox ){
		var numClass = getClass(sBox,'pre-box'),
			numSpeed = getClass(sBox,'pre-num'),
			numBox   = getClass(sBox,'list-pro');
		for( var i = 0; i < numClass.length; i++ ){
			numBox[i].index = i;
			var oTop = numBox[i].offsetTop + sBox.offsetTop,
				sTop = document.documentElement.scrollTop || document.body.scrollTop,
				cHeight = document.documentElement.clientHeight,
				oNum = cHeight - ( oTop - sTop ) + 300,
				numWidth = parseInt(numSpeed[i].innerHTML)*1.8;
			if( oNum > 0 ){
				if( numWidth == 0 ){
					Move(numClass[i],{ width : 0 });
				}else if( numWidth > 0 && numWidth < 18 ){
					Move(numClass[i],{ width:18 })
				}else{
					Move( numClass[i],{ width:numWidth } )
				}
				if( numWidth == 180 ){
					numClass[i].className = 'pre-box pre-box-m';
				}
			}	
		}
	}
}
function speedList(sBox){
	if( sBox ){
		var numClass = getClass(sBox,'pre-box'),
			numSpeed = getClass(sBox,'pre-num') || null;
		for( var i = 0; i < numClass.length; i++ ){
			numClass[i].index = i;
			var oTop = sBox.offsetTop,
				sTop = document.documentElement.scrollTop || document.body.scrollTop,
				cHeight = document.documentElement.clientHeight,
				oNum = cHeight - ( oTop - sTop ),
				numWidth = parseInt(numSpeed[i].innerHTML)*1.8;
			if( oNum > 600 ){
				if( numWidth == 0 || numSpeed == null ){
					Move(numClass[i],{ width : 0 });
				}else if( numWidth > 0 && numWidth < 18 ){
					Move(numClass[i],{ width:18 })
				}else{
					Move( numClass[i],{ width:numWidth } )
				}
				if( numWidth == 100 ){
					numClass[i].className = 'pre-box pre-box-m';
				}
			}	
		}
	}
}
function dataTime(){
	var emClass = getClass(document,'em-num') || null,
		speed = 0;
		dTime = null;
	dTime = setInterval(function(){
		for( var i = 0; i < emClass.length; i++ ){
			emClass[i].index = i;
			if( parseFloat(emClass[i].innerHTML) >= parseFloat(emClass[i].getAttribute('data-num')) ){
				clearInterval(emClass[i].dTime);
				emClass[i].innerHTML = emClass[i].getAttribute('data-num') + '%';
			}else{
				emClass[i].innerHTML = (speed/100).toFixed(2) + '%';
				speed += 15;
			}
			if( emClass == null || emClass[i].getAttribute('data-num') == '' ){
				emClass[i].innerHTML = '---';
			}
		}
	},10)
}
function speedTop(obj){
	if(obj){
		var numClass = getClass(obj,'pre-box'),
			numSpeed = getClass(obj,'pre-num');
		for( var i = 0; i < numClass.length; i++ ){
			numClass[i].index = i;
			var numWidth = parseInt(numSpeed[i].innerHTML);
			if( numWidth == 0 ){
				Move(numClass[i],{ width : 0 });
			}else if( numWidth > 0 && numWidth < 10 ){
				Move(numClass[i],{ width:10 })
			}else{
				Move( numClass[i],{ width:numWidth } )
			}
			if( numWidth == 100 ){
				numClass[i].className = 'pre-box pre-box-m';
			}
		}
	}
}
function topNhNum(nhNum){
	if( nhNum ){
		var numData = nhNum.getAttribute('nh-num') || null,
			nhTime = null,
			speed = 0;
		nhTime = setInterval(function(){
			if( parseFloat(nhNum.innerHTML) > parseFloat(numData) ){
				clearInterval(nhTime);
				nhNum.innerHTML = numData + '%';
			}else{
				nhNum.innerHTML = (speed/100).toFixed(2) + '%';
				speed += 9;
			}
			if( numData == null ){
				nhNum.innerHTML =  '---';
			}
		},1)
	}
}
function searchScroll(){
	var pScroll = getClass(document,'conditions') || null;
	for( var i = 0; i < pScroll.length; i++ ){
		pScroll[i].index = i;
		var pSpan = pScroll[i].getElementsByTagName('span'),
			pTime = null;
		for( var j = 0; j < pSpan.length; j++ ){
			pSpan[j].index = j;
			if( j > 0 ){
				pTime = setTimeout(function(){
					startMove(200);
					clearTimeout(pTime);
				},500)
			}
		}
	}
}
function popBtn(){/*预约弹出框*/
	var oLink = getClass(document,'btn-yy');
	for( var i = 0; i < oLink.length; i++ ){
		oLink[i].index = i;
		oLink[i].onclick = function(){
			byId('popup').style.display = 'block';
			Move(byId('popup'),{opacity:100});
			byId('bgBlack').style.display = 'block';
			Move(byId('bgBlack'),{opacity:100});
			byId('proId').value = next(next(oLink[this.index])).value;
			byId('typeId').value = next(next(next(oLink[this.index]))).value;
			byId('proTitle').innerHTML = next(oLink[this.index]).value;
		}
	}
	hidePopup(byId('pClose'),byId('popup'),byId('bgBlack'));
}
function next(tag){
	return tag.nextElementSibling || tag.nextSibling;
}
function prev(tag){
	return tag.previousElementSibling || tag.previousSibling;
}
function tabBox(tabMenu,boxText,onevent){/*选项卡*/
	if( tabMenu && boxText && onevent ){
		var oLi = tabMenu.getElementsByTagName('li');/* 触发事件tag */
		var textTag = boxText.children;/*获取boxText子元素*/
		for( var i = 0; i < oLi.length; i++ ){/* 循环 */
			oLi[i].index = i;/* 设置索引值 */
			oLi[i][onevent] = function(){/* 触发事件  [onevent] 事件名称: onclick onmouseover */
				for( var i = 0; i < oLi.length; i++ ){/*循环 获取对应元素 其他元素初始化 */
					oLi[i].className = '';
					Move(textTag[i],{opacity:0});
					textTag[i].className = 'hidden';
				}
					oLi[this.index].className = 'active';
					textTag[this.index].className = 'active';
					Move(textTag[this.index],{opacity:100});
			}
		}
	}
}
function toTop(){/* 返回顶部 */
	var toBox = document.createElement('div');/* 创建box */
	toBox.className = 'to-top';/* 添加class */
	toBox.id = 'toTop';/* 添加ID */
	toBox.innerHTML = '<div class="other">回到顶部</div>';/* 添加html */
	document.documentElement.appendChild(toBox);/* box 位置 */
	toBox.onclick = function(){
		startMove(0);
	}	
	window.onscroll = function(){
		var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
		if( scrollY ){
			toBox.style.display = 'block';
		}else{
			toBox.style.display = 'none';
		}
	}
}
toTop();
function dropDown(mBox,menuList){/*下拉菜单*/
	if( mBox && menuList ){
		mBox.onmouseover = function(){/* mBox hover */
			mBox.className = 'active';
			menuList.style.display = 'block';
			Move(menuList,{opacity:100});/*透明度显示*/
		}
		mBox.onmouseout = function(){/* mBox mouseout */
			mBox.className = 'none';
			Move(menuList,{opacity:0},function(){
				menuList.style.display = 'none';
			});
		}
		var menuChild = menuList.children;
		for( var i = 0; i < menuChild.length; i++ ){
			menuChild[i].index = i;
			menuChild[i].onclick = function(e){
				var e = e || window.event;
				Move(menuList,{opacity:0},function(){
					menuList.style.display = 'none';
				});
				e.cancelBubble = true;
			}
		}
	}
}
function showPopup(showBox,boxPopup,bgBox){/*显示弹出框*/
	if( showBox && boxPopup && bgBox ){
		showBox.onclick = function(){/* showBox 事件触发 */
			boxPopup.style.display = 'block';/* 弹出框显示 */
			Move(boxPopup,{opacity:100});/* 弹出框透明度 */
			bgBox.style.display = 'block';/* 灰色背景 */
			Move(bgBox,{opacity:100});/* 灰色背景透明度 */
			boxPopup.style.top = (document.documentElement.clientHeight - boxPopup.offsetHeight)/2 + 'px';/* 弹出框top */
			boxPopup.style.left = ( document.documentElement.clientWidth - boxPopup.offsetWidth )/2 + 'px' ;/* 弹出框left */
		}
	}
}
function hidePopup(oClose,boxPopup,bgBox){/*隐藏弹出框*/
	if( oClose && boxPopup && bgBox ){
		oClose.onclick = function(){/* 关闭 事件触发 */
			Move(boxPopup,{opacity:0},function(){
				boxPopup.style.display = 'none';
			});
			Move(bgBox,{opacity:0},function(){
				bgBox.style.display = 'none';
			});
		}
		window.onkeydown = function(ev){/* 键盘事件 ESC */
			var ev = ev || window.event;
			if( ev.keyCode == 27 ){
				boxPopup.style.display = 'none';
				bgBox.style.display = 'none';
			}
		}
	}
}
function imgHover(imgBox){
	if( imgBox ){
		var oLi = imgBox.getElementsByTagName('li')
		for( var i = 0; i < oLi.length; i++ ){
			oLi[i].index = i;
			oLi[i].onmouseover = function(){
				for( var i = 0; i < oLi.length; i++ ){
					Move(oLi[i],{opacity: 40});
				}
					Move(oLi[this.index],{opacity: 100})
			}
			oLi[i].onmouseout = function(){
				for( var i = 0; i < oLi.length; i++ ){
					Move(oLi[i],{opacity: 100});
				}
			}
		}
	}
}
function imgAuto(imgBox,imgList,tabList,imgWidth,tabTime,prevBtn,nextBtn){/*图片切换*/
	if( imgBox ){
		var oLi = imgList.getElementsByTagName('li'),/* 图片list */
			oList = tabList.getElementsByTagName('li'),/* 切换list */
			Num = 0,/* 初始值 */
			timeImg = null;
		function auto(){/* 自动切换 改变Num */
			timeImg = setInterval(function(){
				Num++;
				if( Num == oList.length ){
					Num = 0;
				}
				tab();
			},tabTime)
		}
		function tab(){/* 切换 */
			for( var i = 0; i < oList.length; i++ ){
				oList[i].className = '';
			}
				oList[Num].className = 'active';
				Move(imgList,{left:[ - Num * imgWidth ]})
		}
		auto();
		for( var i = 0; i < oList.length; i++ ){/* 自动切换 */
			oList[i].index = i;
			oList[i].onmouseover = function(){
				Num = this.index;
				tab();
			}
		}
		imgBox.onmouseover = function(){/* hover 清除定时器 */
			clearInterval(timeImg);
		}
		imgBox.onmouseout = function(){/* mouseout 继续播放 */
			auto();
		}
		if( prevBtn ){
			prevBtn.onclick = function(){/* prev */
				if( Num == 0 ){
					Num = oList.length;
				}
				Num--;
				tab();
			}
		}
		if( nextBtn ){
			nextBtn.onclick = function(){/* next */
				Num++;
				if( Num == oList.length ){
					Num = 0;
				}
				tab();
			}
		}
		
	}
}
function imgAutoHeight(imgBox,imgList,imgHeight,tabTime){/*图片滚动*/
	if( imgBox ){
		var oLi = imgList.getElementsByTagName('li'),/* 图片list */
			Num = 0,/* 初始值 */
			timeImg = null;
		function auto(){/* 自动切换 改变Num */
			timeImg = setInterval(function(){
				Num++;
				if( Num == oLi.length ){
					Num = 0;
				}
				tab();
			},tabTime)
		}
		function tab(){/* 切换 */
			for( var i = 0; i < oLi.length; i++ ){
				oLi[i].className = '';
			}
				oLi[Num].className = 'active';
				Move(imgList,{top:[ - Num * imgHeight ]})
		}
		auto();
		for( var i = 0; i < oLi.length; i++ ){/* 自动切换 */
			oLi[i].index = i;
			oLi[i].onmouseover = function(){
				Num = this.index;
				tab();
			}
		}
		imgBox.onmouseover = function(){/* hover 清除定时器 */
			clearInterval(timeImg);
		}
		imgBox.onmouseout = function(){/* mouseout 继续播放 */
			auto();
		}
		
	}
}
function startMove(iTarget){/* 滚动条 iTarget ：目标点 */
	var timeStartMove = null;
	clearInterval(timeStartMove);
	timeStartMove = setInterval(function(){
		var scrollY = document.documentElement.scrollTop || document.body.scrollTop;/* 获取scrollTop */
		var iSpeed = ( iTarget - scrollY )/10;/* 设置速度值 10 可改 */
		if( iSpeed > 0){
			iSpeed = Math.ceil(iSpeed);/* 正数时，向上取整 */
		}else{
			iSpeed = Math.floor(iSpeed);/* 负数时，向下取整 */
		};
		if(scrollY == iTarget){
			clearInterval(timeStartMove);/*清除定时器*/
		}else{
			document.documentElement.scrollTop = document.body.scrollTop = scrollY + iSpeed;
		}
	},10);
}
function Move(obj,json,fn){/* 缓冲 */
	var timeMove = null;
	clearInterval(obj.timeMove);
	obj.timeMove = setInterval(function(){
		var bBtn = true;
		for( var attr in json){/* 枚举 把style的key和value与json里相对应 */
			var iCur = 0;/* key的value值 */
			if( attr == 'opacity'){/* 透明度处理 */
				iCur = Math.round(parseFloat(getStyle(obj,attr))*100);
			}else{
				iCur = parseInt(getStyle(obj,attr));/* 非透明度 */
			};
			var iSpeed = ( json[attr] - iCur )/4;/* 速度值，10可改  速度值 = (当前key的value - 目标点)/10 /10 : 递减 */
			if( iSpeed > 0){
				iSpeed = Math.ceil(iSpeed);/* 正数时，向上取整 */
			}else{
				iSpeed = Math.floor(iSpeed);/* 负数时，向下取整 */
			};
			if( iCur != json[attr]){
				bBtn = false;
			}
			if( attr == 'opacity'){/* key == opacity 时，需做兼容 */
				obj.style.filter = 'alpha(opacity=' + (iCur + iSpeed) + ')';
				obj.style.opacity = (iCur + iSpeed)/100;
			}else{/* key == 其他时，obj.style的value = 目标点 + 速度值 + 单位px */
				obj.style[attr] = (iCur + iSpeed) + 'px';
			};
		};
		if(bBtn){
			clearInterval(obj.timeMove);
			if(fn){
				fn.call(obj);/* 如果有第三个参数，执行fn */
			}
		}
	},20);
}
function getStyle(obj,attr){/* 获取obj的key  attr == key */
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	};
}
function getClass(obj,className){
	if(obj){
		var oTag = obj.getElementsByTagName('*');
		var oElement = [];
		for( var i = 0; i < oTag.length; i++ ){
			var oClass = oTag[i].className.split(' ');
			for( var j = 0; j < oClass.length; j++ ){
				if( oClass[j] == className ){
					oElement.push(oTag[i]);
					break;
				}
			}
		}
		return oElement;
	}
}
function addEvent(obj,listener,fn){/*绑定事件*/
	if( obj.attachEvent ){
		obj.attachEvent( 'on' + listener, fn );
	}else{
		obj.addEventListener( listener, fn, false );
	}
}
function removeEvent(obj,listener,fn){/*解除绑定*/
	if( obj.attachEvent ){
		obj.detachEvent( 'on' + listener, fn );
	}else{
		obj.removeEventListener( listener, fn, false );
	}
}
/*绑定事件*/
/*
	if(window.addEventListener){
		window.addEventListener('scroll',function(){
			toScroll($('toTop'),0);
			window.removeEventListener('scroll',function(){toScroll($('toTop'),0);},false);
		},false);
	}else{
		window.attachEvent('onscroll',function(){
			toScroll($('toTop'),0);
			window.detachEvent('onscroll',function(){toScroll($('toTop'),0);});
		});
	}
	*/