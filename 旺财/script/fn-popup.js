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




$('.change-tel').click(function(){
	creatBox('popup-tel.html','500px','350px');//  设置弹出框 URL、宽、高， 
	oClose();
});
/*
*	.pop-tip{ width: 500px; height: 240px;}
*	.pop-fn{ width: 500px; height: 350px;}
*	.pop-bank{ width: 600px; height: 450px;}
*	.pop-zq{ width: 500px; height: 660px;}
*	弹出框宽高
*
*/
function creatBox(url,oWidth,oHeight){// 显示弹出框
	$('<div class="popup-iframe"><iframe width=' + oWidth + ' height=' + oHeight + ' frameborder="0" scrolling="no" src="" name="iFrame" id="iFrame"></iframe><i class="close">x</i></div>').appendTo('body'),
	$('<div class="bg-black"></div>').appendTo('body');
	var popupFrame = $('.popup-iframe'),
		bgBlack = $('.bg-black'),
		iFrame = $('#iFrame');
	popupFrame.width(oWidth);
	popupFrame.height(oHeight);
	function popupFrameWidth(){
		popupFrame.css({
			left : ($(window).width() - parseInt(oWidth))/2 + 'px',
			top :  ($(window).height() - parseInt(oHeight))/2 + 'px'
		});
	}
	popupFrameWidth();
	$(window).bind('resize',function(){popupFrameWidth()});
	bgBlack.fadeIn();
	popupFrame.fadeIn();
	iFrame.attr('src',url);
}
function oClose(){// 关闭弹出框 
	$('.close').click(function(){
		$('.popup-iframe').fadeOut(function(){$(this).remove();});
		$('.bg-black').fadeOut(function(){$(this).remove();});
	});
}
oClose();