$(document).ready(function(){
	$("#beforeShow").show();
	run();
});

var usefulTime=60;
function getCode(){
	var mobile = $("#applicantMobile").val();
	var flag=false;
	var mobileShowId="phoneError";
	var phone = mobile.trim();
		if(checkPhone()){
		 
			$("#beforeShow").hide();
			$("#afterShow").show();
			$.getScript('http://www.91jinrong.com/send/smsInfo?mobile='+phone+"&usefulTime="+usefulTime,function(){
					if("1"==obj['resultcode']){
								$("#afterShow").hide();
								$("#beforeShow").show();
						 		var timestamp=new Date().getTime();
				                setCookie("quick_loan",timestamp);
				                setTimeout(run(),1000);
					} 
				});
		}else{
			$("#beforeShow").show();
			$("#afterShow").hide();
		}
   }
function run(){
 	 var now=new Date().getTime();
 	 if(getCookie("quick_loan")!=="" && (now-getCookie("quick_loan"))<(usefulTime*1000)){
 	 	$("#beforeShow").hide();
		$("#afterShow").show();
		var resutle =usefulTime-parseInt((now-getCookie("quick_loan"))/1000);
		$("#time").html(resutle);
		setTimeout(run,1000);
 	 }else{
 	 	$("#beforeShow").show();
 	 	$("#afterShow").hide();
 	 	$("#checkNumError").hide();
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
     if(arr !== null) 
	     return unescape(arr[2]); 
	     return null;

}
function delCookie(name){
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}
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
