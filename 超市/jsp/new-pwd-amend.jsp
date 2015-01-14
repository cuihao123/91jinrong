<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/include/common.jsp"%>
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

<div class="content content-use">
	<%@ include file="/include/new-userAdmin-menu.jsp"%>
	<div class="login" id="oLogin">
		<div class="login-form clearfix">
			<h4 class="login-t"><em>修改密码</em></h4>
			<form action="/userCenter/doEditPwd" method="post" onsubmit="return valideFrom();">
				<input type="hidden" name="userId" value="${baseInfo.userId}"/>
		        <p>
		        	<span class="name-form">旧密码：</span>
		        	<input name="password" id="password" class="s-input" type="password" value="">
		        	<span id="passwordError"></span>
		        </p>
		        <p>
		        	<span class="name-form">新密码：</span>
		        	<input name="password1" id="password1"class="s-input" type="password" value="">
		        	<span id="password1Error"></span>
		        </p>
		        <p>
		        	<span class="name-form">新密码确认：</span>
		        	<input name="password2" id="password2" class="s-input" type="password" value="">
		        	<span id="password2Error"></span>
		        </p>
		        <p>
		        	<span class="name-form">&nbsp;</span>
		        	<input type="submit" value="完成" class="s-btn btn-login">
		        </p>
		    </form>
		</div>
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
<script src="http://ui.91jinrong.com/cs/script/city.js"></script>
<script>
$(document).ready(function (){
	 var errMsg="<%=request.getParameter("errMsg")%>"; 
	if( errMsg!="null" && errMsg.length>0){
		$("#passwordError").css("color","red");
		$("#passwordError").html(decodeURI(errMsg));
	}
})


function valideFrom(){
	if(!passwordValide()){
		return false;
	}
	if(!password1Valide()){
		return false;
	}
	if(!password2Valide()){
		return false;
	}
	return true;
}

$("#password").blur(function (){passwordValide();});
$("#password1").blur(function (){password1Valide();});
$("#password2").blur(function (){password2Valide();});
//校验原来的密码
function passwordValide( ){
    var password = $.trim($("#password").val());
	var passwordTest = /^([a-z]|[A-Z]|[0-9]){6,15}$/;
	if(password.length <= 0){
		showWrongMsg($("#passwordError"),"请填写密码");
		return false;
	}else  if(!passwordTest.test(password)){
		showWrongMsg($("#passwordError"),"密码格式错误");
		return false;
	}else{
		showRightMsg($("#passwordError"),"");
		return true;
	}
}



//校验第一次验证码
function password1Valide( ){
    var password = $.trim($("#password1").val());
	var passwordTest = /^([a-z]|[A-Z]|[0-9]){6,15}$/;
	if(password.length <= 0){
		showWrongMsg($("#password1Error"),"请填写密码");
		return false;
	}else  if(!passwordTest.test(password)){
		showWrongMsg($("#password1Error"),"密码格式错误");
		return false;
	}else{
		showRightMsg($("#password1Error"),"");
		return true;
	}
}
//校验第二次输入的验证码
function password2Valide( ){
    var password2 = $.trim($("#password2").val());
    var password1 = $.trim($("#password1").val());
	var passwordTest = /^([a-z]|[A-Z]|[0-9]){6,15}$/;
	var resulet= (password2 == password1 && password2.length >=6 );
	if(resulet){
		showRightMsg($("#password2Error"),"");
		return true;
	}else{
		showWrongMsg($("#password2Error"),"两次密码不一致");
		return false;
	}
}

function showRightMsg(element,msg){
	$(element).css("color","");
	$(element).html(msg);
 
}
function showWrongMsg(element, msg){
	$(element).css("color","red");
	$(element).html(msg);
}
</script>

</body>
</html>
