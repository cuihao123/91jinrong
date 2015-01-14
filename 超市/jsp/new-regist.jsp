<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>91金融超市官网  中国最大的互联网金融服务平台</title>
<meta name="keywords" content="91金融超市官网  中国最大的互联网金融服务平台">
<meta name="description" content="91金融超市，为您提供网上贷款，网上理财，网上办理信用卡，网上保险等金融产品及服务，是中国最大的互联网金融服务提供商。">
<link rel="shortcut icon" href="http://ui.91jinrong.com/cs/images/favicon.ico" type="image/vnd.microsoft.icon">
<link href="http://ui.91jinrong.com/cs/style/reset.css" rel="stylesheet"/>
<link href="http://ui.91jinrong.com/cs/style/layout.css" rel="stylesheet"/>
<link href="http://ui.91jinrong.com/cs/style/common.css" rel="stylesheet"/>
<link href="http://ui.91jinrong.com/cs/style/moudel-login.css" rel="stylesheet"/>
</head>
<body>
<%@ include file="/include/new-top.jsp"%>
<!-- top over -->

<div class="content login" id="oLogin">
	<h4 class="login-t"><em>用户注册</em>如果您已有91金融账号，<a href="/oauth2/authorize?response_type=${param.response_type}&redirect_uri=${param.redirect_uri }&client_id=${param.client_id}" title="请直接登录">请直接登录</a></h4>
	<div class="login-form clearfix">
		<form action="/regist/doCheckForm" id="registForm" name="registForm" method="post">
			<input type="hidden" name="response_type" id="response_type" value="${response_type}" />
            <input type="hidden" name="redirect_uri" id="redirect_uri" value="${redirect_uri}" />
            <input type="hidden" name="client_id" id="client_id" value="${client_id}" />
	        <p>
	        	<span class="name-form">手机号码：</span>
	        	<input class="s-input" type="text" id="applicantMobile" name="applicantMobile" value="">
	            <em id="phoneError" class="tips tips-no">请使用手机号码作为91金融的登录账号</em>
	        </p>
	        <p>
	        	<span class="name-form">短信校验码：</span>
	        	<input class="s-input" type="text" id="checkNum" name="checkNum" value="">
			    <input id="beforeShow" class="s-btn" type="button" onclick="getCode();" value="点击获取校验码">
			    <span id="afterShow" class="pass-button-hover">
			    	<em id="time"></em>秒后点击重新发送
			    </span>
			    <em id="checkNumError"> 请输入校验码</em>
	        </p>
	        <p>
	        	<span class="name-form">邮箱地址：</span>
	        	<input class="s-input" type="text" id="email" name="email" value="">
	            <em id="emailError"></em>
	        </p>
	        <p>
	        	<span class="name-form">登录密码：</span>
	        	<input class="s-input" type="password" id="password1" name="password1" value="">
	            <em id="password1Error">密码必须由字母和数字组成，长度6-16位</em>
	        </p>
	        <p>
	        	<span class="name-form">密码确认：</span>
	        	<input class="s-input" type="password" id="password2" name="password2" value="">
	            <em id="password2Error">请您再次输入密码</em>
	        </p>
	        <p class="padding">
	        	<span class="name-form">&nbsp;</span>
	        	<input class="form-check" type="checkbox" id="agree" name="agree" value="">我已阅读《<a target="_blank" href="http://about.91jinrong.com/privacy.html">91金融超市服务条款</a>》<em id="agreeError"></em> 
	        </p>
	        <p class="padding">
	        	<span class="name-form">&nbsp;</span>
	        	<input class="s-btn btn-login" type="submit" value="注册">
	        </p>
		</form>
	</div>
	<!-- login-form over -->
</div>
<!-- content over -->
<%@ include file="/include/new-footer.jsp"%>
<!-- footer over -->
<script src="http://ui.91jinrong.com/cs/script/fun-login.js"></script>
<script>
function addfavor(url,title) {
    if(confirm("网站名称："+title+"\n网址："+url+"\n确定添加收藏?")){
        var ua = navigator.userAgent.toLowerCase();
        if(ua.indexOf("msie 8")>-1){
            external.AddToFavoritesBar(url,title,'91jinrong');  //IE8
        }else{
            try {
                window.external.addFavorite(url, title);
            } catch(e) {
                try {
                    window.sidebar.addPanel(title, url, "");  //firefox
                } catch(e) {
                    alert("加入收藏失败，请使用Ctrl+D进行添加");
                }
            }
        }
    }
}
</script>

<script src="http://ui.91jinrong.com/cs/script/jquery-1.7.2.min.js"></script>
<script src="http://ui.91jinrong.com/cs/script/jquery.form.js"></script>
<script src="http://ui.91jinrong.com/cs/script/checkcodeTwo.js"></script>
<script> 
 $("#applicantMobile").blur(function(){checkPhone();});
 $("#checkNum").blur(function(){checkNumF();});
 $("#password1").blur(function(){password1F();});
 $("#password2").blur(function(){password2F();});
  $("#email").blur(function(){checkEmail();});
 
 $(document).ready(function(){
 		 
	 	$('#registForm').ajaxForm({
      		beforeSubmit:  checkForm,  // pre-submit callback
      		success:       complete,  // post-submit callback
      		dataType: 'json'
  		});
	});
//-------------------------------------------表单校验--------------------------------------------------------------    
 function checkForm(){
 	 var i=0;
	if(!checkPhone()){
		return false;
	}
	if(!checkNumF()){
		return false;	
	}
	if(!password1F()){
		return false;
	}
	if(!password2F()){
		return false;	
	}
 
	if(!agreeF()){
		return false;
	}
	if(!checkEmail()){
		return false;
	}
	return true;
}

function complete(data){
	var jsoncode = eval(data);
	if(jsoncode.data == "ok"){
		if($("#response_type").val().length < 1){
			window.location.href="/regist/toRegistT"
		}else{
			window.location.href="/regist/toRegistT?"+"response_type="+"${param.response_type}"+"&redirect_uri="+"${param.redirect_uri }"+"&client_id="+"${param.client_id }"
		}
	}else if(jsoncode.data == 'havePhoneError'){
		$("#phoneError").attr('style','color:red;').html("此帐号已存在。");
	}else if(jsoncode.data == 'phoneError'){
		$("#phoneError").attr('style','color:red;').html("请您填写正确的手机号码！");
	}else if(jsoncode.data == 'checkNumFormatError'){
		$("#checkNumError").attr('style','color:red;').html("请填写正确的验证码格式！");
	}else if(jsoncode.data == 'checkNumError'){
		$("#checkNumError").attr('style','color:red;').html("请填写验证码！");
	}else if(jsoncode.data == 'realNameError'){
		$("#realNameError").attr('style','color:red;').html("请您填写联系人名字！");
	}else if(jsoncode.data == 'realNameZWError'){
		$("#realNameError").attr('style','color:red;').html("联系人名字必须为中文！");
	}else if(jsoncode.data == 'emailError'){
		$("#emailError").attr('style','color:red;').html("请您填写邮箱！");
	}else if(jsoncode.data == 'passwordError'){
   		$("#password1Error").attr('class','tips tips-yes').html("请填写密码！");
   	}else if(jsoncode.data == 'agreeError'){
   		$("#agreeError").attr('class','tips tips-yes').html("您没有同意条款！");
   	}   
}

//手机号
function checkPhone(){
	var state="false";
	//联系电话
   	var applicantMobile = $("#applicantMobile").val();
   	var mobiletest = /^13[0-9]{9}$|15[0-9]{9}$|18[0-9]{9}$/;
   	if(applicantMobile.length < 1){
   		$("#phoneError").attr('style','color:red;').html("请您填写手机号");
			return false;
   	}else if(!mobiletest.test(applicantMobile)){
   		$("#phoneError").attr('style','color:red;').html("请您正确填写手机号");
			return false;
   	}else{
   		$.ajax({
   			  async:false,
   			  type:"POST",  
			  url: '/regist/checkPhone?mobile='+applicantMobile+'&rd='+ Math.random(),
			  dataType : "json",
			  success: function(data){
			   		var jsonvcod=eval(data);
			    	if(jsonvcod.data == "ok"){
   						state = "ok";
   						$("#phoneError").attr('class','tips tips-yes').html("&nbsp;");
					}else if(jsonvcod.data == "phoneError"){
						$("#phoneError").attr('style','color:red;').html("请您正确填写手机号");
   						state = "false";
					}else if(jsonvcod.data == "phoneExist"){
						$("#phoneError").attr('style','color:red;').html("此帐号已存在。");
						state = "false";
					}
			  }
			});
   		if(state == "ok"){
   			return true;
   		}else{
   			return false;
   		}
   	}
}

// 验证邮箱是否存在
 function isEmail(evt){
	 var email= $.trim($(evt).val());
 	 var tips="#"+  $(evt).attr("id")+"Error";
 	 var state=false;
		$.ajax({
   			  async:false,
   			  type:"POST",  
			  url: '/checkEmail?email='+email,
			  dataType : "json",
			  success: function(data){
			   		var  jsonData=eval(data);
			    	if(jsonData.result == "success"){
   							showRightMsg($(tips),"");
   							state=true;
					}else if(jsonData.result == "emailError"){
							showWrongMsg($(tips),"邮箱地址的格式不正确");
					}else if(jsonData.result == "emailExist"){
							showWrongMsg($(tips),"邮箱地址已存在，请您重新填写！");
					}
			  }
			});
			return state;
}
	
//校验码
function checkNumF(){
	var numTest = /^[0-9]{6}$/;
   	var checkNum = $("#checkNum").val();
   	if(checkNum.length < 1){
		$("#checkNumError").attr('style','color:red;').html("请您填校验码！");
			return false;
   	}else if(!numTest.test(checkNum)){
   		$("#checkNumError").attr('style','color:red;').html("请您填写正确的校验码格式！");
			return false;
   	}else{
   		$("#checkNumError").attr('class','tips tips-yes').html("&nbsp;");
   		return true;
   	}
}
//联系人
/*
function checkRealName(){
	var contacttest = /^[\u4e00-\u9fa5]+$/;
	var contact = $("#realName").val();
		if(contact.length < 1){
			$("#realNameError").attr('style','color:red;').html("请输入您的姓名！");
			return false;
   		}else if(!contacttest.test(contact)){
   			$("#realNameError").attr('style','color:red;').html("您的姓名必须为中文！");
			return false;
   		}else{
   			$("#realNameError").attr('class','tips tips-yes').html("&nbsp;");
   			return true;
   		}
}

*/
 
//联系邮箱
function checkEmail(){
	var email = $("#email").val();
	var emailtest = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	if(email.length < 1){
		$("#emailError").attr('style','color:red;').html("请输入您的邮箱！");
		return false;
   	}else if(!emailtest.test(email)){
   		$("#emailError").attr('style','color:red;').html("请您填写正确的邮箱格式！");
		return false;
   	}else{
   		return isEmail("#email");
   }
}
 
//密码1
function password1F(){
	var password1 =  $.trim($("#password1").val());
	var pattern=/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~\(\)\{\}\[\]\,\?\<\>\/\\]{6,16}$/;
	if(password1.length < 1){
		$("#password1Error").attr('style','color:red;').html("请输入密码！");
			return false;
   	}else if((password1.length<6)&&(password1.length>0)){
   		$("#password1Error").attr('style','color:red;').html("密码长度不小于6位");
			return false;
   	}else if(!pattern.test(password1)){
   		$("#password1Error").attr('style','color:red;').html("密码不能包含特殊字符");
   		return false;
   	}else{
   			$("#password1Error").attr('style','').html(" ");
   		return true;
   	}
}

//确认密码
function password2F(){
   var password1 =  $.trim($("#password1").val());
	var password2 =  $.trim($("#password2").val());
   	if(password1.length < 1){
		$("#password1Error").attr('style','color:red;').html("请输入密码！");
			return false;
   	}else if(password1 != password2){
   		$("#password2Error").attr('style','color:red;').html("您两次输入的密码不一致");
			return false;
   	}else{
   		$("#password2Error").attr('style','').html(" ");
   		return true;
   	}
}


//条款agree
function agreeF(){
	//alert($("#agree").attr("checked") == "checked");
	if($("#agree").attr("checked") == "checked"){
		$("#agreeError").attr('class','tips tips-yes').html("");
   		$("#mm").html("<input class='s-btn btn-login' type='submit' value='注册'>");
   		return true;
   	}else{
   		$("agreeError").attr('style','color:red;').html("您没有同意条款！");
		$("#mm").html("<input class='s-btn btn-login' type='button' value='注册'>");
		return false;
   	}
}

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
</script>
</body>
</html>
