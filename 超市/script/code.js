/**
	点击获取验证码：
	1、传入发送短信的手机号id即mobile
	2、手机发送前的状态id即 before
	3、短信发送中的状态id即 zhong
	4、短信发送后的状态id即 after
	5、显示倒计时的id即now_time
*/
function getCode(mobileId,before,zhong,after,now_time){
	var mobile = $.trim($("#"+mobileId).val());
		if(checkMobile(mobileId)){
			$("#"+before).hide();
			$("#"+zhong).show();
			$.getScript('http://www.91jinrong.com/send/smsInfo?mobile='+mobile+"&fullTime="+ntime,function(){
			if(obj['resultcode'] ==  1){
				$("#"+before).hide();
						$("#"+zhong).hide();
						$("#"+after).show();
						$("#"+now_time).html(ntime);
						var timestamp=new Date().getTime();
		                setCookie("quick_loan",timestamp);
		                setTimeout(run(before,zhong,after,now_time),1000);
				}else{
					alert(obj['resultcode']);
					$("#"+before).show();
					$("#"+zhong).hide();
					$("#"+after).hide();
				}
		});
		}else{
			$("#"+before).show();
			$("#"+zhong).hide();
			$("#"+after).hide();
		}
   }
 /**
	手机短信验证码分为3种状态：
	1、手机发送前的状态id即before
	2、短信发送中的状态id即zhong
	3、短信发送后的状态id即after
	4、显示倒计时的id即now_time
*/
function run(before,zhong,after,now_time){
 	 var now=new Date().getTime();
 	 if(getCookie("quick_loan")!="" && (now-getCookie("quick_loan"))<(ntime*1000)){
 	 	$("#"+before).hide();
		$("#"+zhong).hide();
		$("#"+after).show();
		$("#"+now_time).html(ntime-parseInt((now-getCookie("quick_loan"))/1000));
		setTimeout(run,1000, before, zhong, after,now_time);
 	 }else{
 	 	$("#"+now_time).html(ntime);
 		$("#"+before).show();
		$("#"+zhong).hide();
		$("#"+after).hide();
 	 }
}
/**
存入cookie
*/
function setCookie(name,value){
    var Days = 1; //此 cookie 将被保存 30 天
    var exp  = new Date();    //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
/**
得到cookie
*/
function getCookie(name){
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
     if(arr != null) return unescape(arr[2]); return null;

}
/**
删除cookie
*/
function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}


/**
验证手机号
*/
function checkMobile(obj){
	if(typeof obj == "string"){
		var mobile = $("#"+obj).val();
	}else{
		var mobile = $("#"+obj.id).val();
	}
	var mobileTest = /^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
	if(mobile.length <= 0){
			$("#mobile").attr("class","s-input input-text-error");
			$("#mobile").qtip({
			     content: {
						text: '请输入手机号'
					},
					position: {
						my: 'bottom center',
						at: 'top center'
				}
		 });
		    return false;
	}else if(!mobileTest.test(mobile)){
		   $("#mobile").attr("class","s-input input-text-error");
		   $("#mobile").qtip({
			     content: {
						text: '手机号码码格式错误'
					},
					position: {
						my: 'bottom center',
					at: 'top center'
				}
		 });
		    return false;
	}else{
	    $("#mobile").attr("class","s-input");;
		$("#mobile").qtip({
			     content: {
						text: ''
					},
					position: {
						my: '',
						at: ''
				}
		});
		 return true;
	}
	
}

/**
验证 验证码
*/
function checkCode(obj){
	if(typeof obj == "string"){
		var code = $("#"+obj).val();
	}else{
		var code = $("#"+obj.id).val();
	}
	if(code.length <= 0){
	   		 $("#code").attr("class","s-input input-text-error");
			$("#code").qtip({
			     content: {
						text: '请输入验证码'
					},
					position: {
						my: 'bottom center',
						at: 'top center'
				}
		 });
		    return false;
	}else{
		 $("#code").attr("class","s-input");
		$("#code").qtip({
			     content: {
						text: ''
					},
					position: {
						my: '',
						at: ''
				}
		 });
		return true;
	}
}
/**
错误展示的方法
*/
function showWrongMsg(element, msg){
	$(element).html(msg);
}