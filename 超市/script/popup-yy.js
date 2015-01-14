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
$(function(){
	var yBtn = $('.btn-yy'),yHtml;
	yHtml = '<form action="/doApplicant" id="applicant" method="post" >'; 
	yHtml += '<h3 class="lc-h3">您预约的产品为：<strong id="proTitle">产品名称</strong></h3>';
	yHtml+= '<input type="hidden" value="" id="proType"><input type="hidden" value="" id="proId">';
	yHtml+= '<div style="display: block" id="one">';
	yHtml+= '<p>*请留下您的联系方式，方便我们的理财顾问第一时间联系您！</p>';
	yHtml+= '<p><span>您的姓名：</span><input type="text" value="" name="name" id="name" onblur="checkName()" class="s-input"/>';
	yHtml+= '<i id="nameError"></i></p>';
	yHtml+= '<p><span>联系方式：</span><input type="text" value="" name="mobile" id="mobile" onblur="checkMobile()" class="s-input"/>';
	yHtml+= '<i id="phoneError"></i></p>';
	yHtml+= '<p class="btn-v"><input type="submit" value="马上预约"  class="m-btn"/></p>';
	yHtml+= '</div>';
	yHtml+= '<div class="yy-box-ok" style="display: none" id="two" >';
	yHtml+= '<p class="yy-ok"><strong>恭喜您预约成功！</strong>请您保持电话畅通，<br/>我们的理财顾问会在第一时间联系您！</p>';
	yHtml+= '<p><a href="http://licai.91jinrong.com/p2p/list/" title="再去看看其他理财产品" target="_blank" class="lc-btn btn-other">再去看看其他理财产品</a></p>';
	yHtml+= '</div>';
	yHtml+= '<i class="p-close" id="pClose">x</i>';
	yHtml+= '</form>';

	yBtn.click(function(e){
		var pBox = $('<div class="popup yy-box"></div>').appendTo('body'),
			pBg  = $('<div class="bg-black"></div>').appendTo('body');
		pBox.html(yHtml);
		pBox.fadeIn('fast');
		pBg.fadeIn('fast');
		var pTitle = $(this).parent().find('h4').find('a').html(),
			proId  = $(this).parent().find('h4').find('a').attr('id'),
			proType=$(this).parent().find('input:hidden').val();
		pBox.find('#proTitle').html(pTitle);
		pBox.find('#proId').val(proId);
		pBox.find('#proType').val(proType);

		$('i.p-close').click(function(){
			pBox.fadeOut('fast',function(){$(this).remove()});
			pBg.fadeOut('fast',function(){$(this).remove()});
		});
		formSub();
	});
})



function formSub(){
	$('#applicant').ajaxForm({
     		beforeSubmit:  checkForm,  // pre-submit callback
     		success:       completeForm,  // post-submit callback
     		dataType: 'json'
	});
}	
function checkForm(){
	if(!checkName()){
		return false;
	}
	if(!checkMobile()){
		return false;
	}
	return true;
}

function completeForm(data){
	if(data.result = "ok"){
		$("#one").hide();
		$("#two").show();
	}else if(data.result = "nameError"){
		showWrongMsg($("#nameError"),"error","请您填写您的中文名字！");
	}else if(data.result = "moileError"){
		showWrongMsg($("#phoneError"),"error","手机号格式错误，应为13、15、18开头！");
	}else if(data.result = "proError"){
		showWrongMsg($("#phoneError"),"error","请您重新选择该产品！");
	}
}

function checkName(){
	var name = $("#name").val();
	var regrealName = /^[\u4e00-\u9fa5]+$/gi;
	if(name.length < 1){
		showWrongMsg($("#nameError"),"error","请您填写姓名！");
		return false;
	}else if(!regrealName.test(name)){
		showWrongMsg($("#nameError"),"error","请输入您的中文汉字名称");
		return false;
    }else{
    	showWrongMsg($("#nameError"),"right"," ");
    	return true;
    }
}

function checkMobile(){
	var mobile = $("#mobile").val();
	var mobileTest = /^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
	if(mobile.length <= 0){
		    showWrongMsg($("#phoneError"),"error","请输入手机号码");
		    return false;
	}else if(!mobileTest.test(mobile)){
		    showWrongMsg($("#phoneError"),"error","请输入手机号码格式错误");
		    return false;
	}else{
		showWrongMsg($("#phoneError"),"right","");
		    return true;
	}
}

function showWrongMsg(element,c_str,content){
	$(element).html(content).attr("class",c_str);
 
}