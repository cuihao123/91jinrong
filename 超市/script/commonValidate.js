//邮箱验证
 function emailValidate(evt){
        var email  = $.trim($(evt).val());
	 	var tips="#"+  $(evt).attr("id")+"Tips";
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if(email.length <=  0){
 		showWrongMsg($(tips),"请输入您的常用邮箱");
 		return false;
	   }else if(!myreg.test(email))
       	{
          	showWrongMsg($(tips),"邮箱的格式不正确!");
             return  false;
        }else{
		 	showRightMsg($(tips));
			return true;
		}
}
//验证手机号码
function mobileValidate(evt){
     var mobile =  $.trim($(evt).val());
	 var tips="#"+  $(evt).attr("id")+"Tips";
	 var mobileTest = /^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
	if(mobile.length <= 0){
		    showWrongMsg($(tips),"请输入手机号码");
		    return false;
	}else if(!mobileTest.test(mobile)){
		    showWrongMsg($(tips),"手机号码格式错误");
		    return false;
	}else {
		return checkMobile(evt);
	}
	
	 
}

 
//  验证手机号码是否存在
 function checkMobile(evt){
	 var mobile= $.trim($(evt).val());
 	 var tips="#"+  $(evt).attr("id")+"Tips";
 	 var state=false;
		$.ajax({
   			  async:false,
   			  type:"POST",  
			  url: '/checkMobile?mobile='+mobile,
			  dataType : "json",
			  success: function(data){
			   		var  jsonData=eval(data);
			    	if(jsonData.result == "success"){
			    		showWrongMsg($(tips),"未注册，请先注册");
					}else if(jsonData.result == "mobileError"){
						showWrongMsg($(tips),"手机号码的格式不正确");
					}else if(jsonData.result == "mobileExist"){
						showRightMsg($(tips),"请使用手机号码作为91金融的登录账号");
						state=true;
					}
			  }
			});
			return state;
}
//验证QQ
function qqValidate(evt){         
	 var qq= $.trim($(evt).val());
 	 var tips="#"+  $(evt).attr("id")+"Tips";
	var qqTest =/^\d{7,14}$/;
	if(qq.length <= 0 ){
		showWrongMsg($(tips),"请输入QQ号码");
		return false;
	}else if(!qqTest.test(qq)){   
		showWrongMsg($(tips),"QQ号码的格式不正确");
		return false;
	} else{
			showRightMsg($(tips));
			return true;
	}
} 


//密码
function passwordValidate(evt){
	var password =  $.trim($(evt).val());
	 var tips="#"+ $(evt).attr("id")+"Tips";
	 var pattern=/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~\(\)\{\}\[\]\,\?\<\>\/\\]{6,32}$/;
	if(pattern.test(password)){
		 showRightMsg($(tips),"<a href='/findPwd/showFindpwd/'>忘记密码？</a>");
		return true;
	}else{
		showWrongMsg($(tips),"密码为以英文字母或数字开头的6-15个字母或数字");
		return false;
	}
	
}
 

//用户名校验
function userNameValidate(evt){
	var userName =  $.trim($(evt).val());
 	 var tips="#"+ $(evt).attr("id")+"Tips";
	if(userName.length <= 0 ){
		showWrongMsg($(tips),"用户名不能为空");
		return false;
	}else if(userName.length < 4){
		showWrongMsg($(tips),"用户名应该为4-20位之间");
		return false;
	}else{
		showRightMsg($(tips));
		return true;
	}
}

//判断数字
function numValidate(evt){
     var num= $.trim($(evt).val());
 	 var tips="#"+ $(evt).attr("id")+"Tips";
	 var numTest =/^[0-9]*$/
	if(num.length <= 0 ){
		showWrongMsg($(tips),"请输入数字");
		return false;
	}else if(!numTest.test(num)){   
		showWrongMsg($(tips),"输入数字格式错误");
		return false;
	} else{
			showRightMsg($(tips));
			return true;
	}
}

//判断是否为null或者空字串 ,    
function strValidate(evt){
	var arg =$.trim($(evt).val());
	 var tips="#"+ $(evt).attr("id")+"Tips";
	if ( arg.length <= 0   ) {
		showWrongMsg($(tips),"不能为空");
		return false;
	}else {
		showRightMsg($(tips));
		return true;
	}
}
//ip校验,  通过返回true,  否则返回false
function ipAddressValidate(evt){
	var ip= $.trim($(evt).val());
 	 var tips="#"+$(evt).attr("id")+"Tips";
	var    ipTest=/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
	if(ipTest.test(ip)){
		 showRightMsg($(tips));
		 return true;
	}else{
		showWrongMsg($(tips),"ip地址格式错误");
		return  false;
	}
}
//字母校验,  通过返回true,  否则返回false
function abcValidate(evt){
	var abc= $.trim($(evt).val());
 	var tips="#"+$(evt).attr("id")+"Tips";
	var abcTest=/^[A-Za-z]+$/
	if(abcTest.test(ip)){
		 showRightMsg($(tips));
		 return true;
	}else{
		showWrongMsg($(tips),"请输入字母");
		return  false;
	}
}





//校验通过,错误提示消失
function showRightMsg(element,msg){
	if(msg == "undefined"){
		$(element).html('').attr("class",'');
	}else{
		$(element).html(msg).attr("style",'');
	}
	
 
}
//显示错误信息
function showWrongMsg(element, msg){
	$(element).attr("style","color:red;");
	$(element).html(msg);
}

//  类型不够 ,数据库可以先模拟一个固定的.
//身份证使用的不是很多,提供一个单独的js.需要引用直接调用方法即可
 

