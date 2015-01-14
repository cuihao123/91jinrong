$(document).ready(function(){
	run();
});

var usefulTime=60;
// 发送短信验证码
function getCode(){
	var mobile = $("#smobile").val();
	var flag=false;
	var mobileShowId="mobile_error";
	var phone = mobile.trim();
		//验证是否存在数据中
		if(checkMobile(phone,mobileShowId)){
			$("#before").hide();
			$("#zhong").show();
			$.getScript('http://www.91jinrong.com/send/smsInfo?mobile='+phone+"&usefulTime="+usefulTime,function(){
					if("1"==obj['resultcode']){
								$("#zhong").hide();
								$("#show_time").show();
						 		var timestamp=new Date().getTime();
				                setCookie("checkcodePwd",timestamp);
				                setTimeout(run(),1000);
					} 
				});
		}else{
			$("#before").show();
			$("#zhong").hide();
			$("#show_time").hide();
		}
   }
function run(){
 	 var now=new Date().getTime();
 	 if(getCookie("checkcodePwd")!="" && (now-getCookie("checkcodePwd"))<(usefulTime*1000)){
 	 	$("#before").hide();
 	 	$("#zhong").hide();
		$("#show_time").show();
		var resutle =usefulTime-parseInt((now-getCookie("checkcodePwd"))/1000);
		$("#now_time").html(resutle);
		setTimeout(run,1000);
 	 }else{
 	 	$("#before").show();
 	 	$("#show_time").hide();
 	 }
	

}

function setCookie(name,value){
    var Days = 1; //此 cookie 将被保存 30 天
    var exp  = new Date();    //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getCookie(name){
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
     if(arr != null) return unescape(arr[2]); return null;

}
function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
//验证手机
function checkMobile(phone,id){
	var mobile = phone;
	var mobileTest = /^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
	if(mobile.length <= 0){
		    showWrongMsg($("#"+id),"请输入手机号码");
		    return false;
	}else if(!mobileTest.test(mobile)){
		    showWrongMsg($("#"+id),"输入手机号码格式错误");
		    return false;
	}else{
		showWrongMsg($("#"+id),"");
		return true;
	}
}
//验证码
function checkCode(code,id){
	var c = code;
	if(c.length <= 0){
		    showWrongMsg($("#"+id),"请输入验证码");
		    return false;
	}else{
		showWrongMsg($("#"+id),"");
		return true;
	}
}


function showWrongMsg(element, msg){
	$(element).html(msg);
}
