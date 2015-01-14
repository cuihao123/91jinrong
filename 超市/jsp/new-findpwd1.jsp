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
<!-- top over -->

<div class="content login" id="oLogin">
	<h4 class="login-t"><em>密码找回</em>如果您还没有注册91金融账号，<a title="请注册" href="/regist/toRegist"${redirect_uri}>请注册</a></h4>
	<ul class="pwd-step clearfix">
		<li class="active"><i></i>输入信息</li>
		<li class="active"><i></i>验证信息</li>
		<li><i></i>设置新密码</li>
		<li><i></i>成功</li>
	</ul>
	<div class="login-form clearfix">
		<form action="/findPwd/find1" method="post" id="secondForm">
	        <p>
	        	<span class="name-form">手机号码：</span>
	        	<input class="s-input" readonly="readonly" id="smobile" name="smobile" type="text" value="${userBaseInfo}">
	        	<span id="mobile_error"></span>
	        </p>
	        <p>
	        	<span class="name-form">短信校验码：</span>
	        	<input class="s-input" type="text" id="vcode" name="sCode" value="">
	            <span id="before">
	            	<input class="s-btn" onclick="getCode()" type="button" value="点击获取校验码">
	            </span>
	            <span id="zhong" style="display:block;">短信获取中...</span>
	            <span id="show_time" style="display:block">
	            	<span id="now_time">60</span>秒后重新获取
	            </span>
	        </p>
	        <p class="padding">
	        	<span class="name-form">&nbsp;</span>
	        	<input class="s-btn btn-login" type="submit" value="下一步">
	        </p>
	        <p class="cite">
	        	<span class="name-form">&nbsp;</span>
	        	<em>*</em>如果您忘记账号，或者其它原因无法完成验证，请咨询客服：<em>400-000-9335</em>
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
<script src="http://ui.91jinrong.com/cs/script/checkcode.js"></script>
</body>
</html>
