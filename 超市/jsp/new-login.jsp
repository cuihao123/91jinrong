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
<%@ include file="/include/common.jsp"%>
<%@page import="com.foreseeuniverse.util.LoginCookieUtil"%>
<%@page import="com.foreseeuniverse.db.module.UserBaseInfo"%>

<%@ include file="/include/new-top.jsp"%>
<!-- top over -->

<div class="content login" id="oLogin">
	<h4 class="login-t"><em>用户登录</em>如果您还没有91金融账号，<a href="/regist/toRegist?response_type=token&redirect_uri=http://www.91jinrong.com/callback&client_id=91jinrong" title="请注册">请注册</a></h4>
	<div class="login-form clearfix">
		<form action="/oauth2/authorize" method="post" onsubmit="return checkFrom()">
			<input type="hidden" name="action" value="login"/>
   			<input type="hidden" name="redirect_uri" value="${redirect_uri }"/>
   			<input type="hidden" name="response_type" value="${response_type }"/>
   			<input type="hidden" name="client_id" value="${client_id }"/>
   			<p>
	        	<span class="name-form">&nbsp;</span>
	        	<span id="errorMsg">${errorMsg}</span>
	        </p>
	        <p>
	        	<span class="name-form">手机号码：</span>
	        	<input name="username" id="username"  class="s-input" type="text" value="${username}">
	            <em id="usernameTips">请使用手机号码作为91金融的登录账号</em>
	        </p>
	        <p>
	        	<span class="name-form">登录密码：</span>
	        	<input name="password" id="password" class="s-input" type="password" value="">
	            <em id="passwordTips"><a href="/findPwd/showFindpwd?response_type=${param.response_type}&redirect_uri=${param.redirect_uri }&client_id=${param.client_id}">忘记密码？</a></em>
	        </p>
	        <p class="padding">
	        	<span class="name-form">&nbsp;</span>
	        	没有账号？<a href="/regist/toRegist?response_type=${param.response_type}&redirect_uri=${param.redirect_uri }&client_id=${param.client_id}">立即注册</a>
	        </p>
	        <p class="padding">
	        	<span class="name-form">&nbsp;</span>
	        	<input class="s-btn btn-login" type="submit" value="登录"  >
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
<script src="http://ui.91jinrong.com/cs/script/commonValidate.js"></script>
<script>
	$("#username").blur(function(){mobileValidate(this);});
	$("#password").blur(function(){
		passwordValidate(this);
		$("#errorMsg").attr("style","display:none");
	});
	function checkFrom(){
		 if(!mobileValidate("#username")){
		 	return false;
		 }
		 if(!passwordValidate("#password")){
		 	return false;
		 }
			return true;
	}
</script>
</body>
</html>
