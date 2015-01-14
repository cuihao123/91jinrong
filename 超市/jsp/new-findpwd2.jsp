<%@ page language="java" pageEncoding="UTF-8"%>
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
	<h4 class="login-t"><em>密码找回</em>如果您还没有注册91金融账号，<a href="/regist/toRegist?response_type=${param.response_type}&redirect_uri=${param.redirect_uri }&client_id=${param.client_id }" title="请注册">请注册</a></h4>
	<ul class="pwd-step clearfix">
		<li class="active"><i></i>输入信息</li>
		<li class="active"><i></i>验证信息</li>
		<li class="active"><i></i>设置新密码</li>
		<li><i></i>成功</li>
	</ul>
	<div class="login-form clearfix">
		<input type="hidden" id="wrongMes" value="${wrongMessage}">
		<form action="/findPwd/find2" method="post" id="nextForm">
            <input type="hidden" value="${mmobile}" name="mm">
            <input type="hidden"  name="redirect_uri"  id="redirect_uri" value="http://passport.91jinrong.com/oauth2/authorize?response_type=${param.response_type}&redirect_uri=${param.redirect_uri }&client_id=${param.client_id }"/> 
	        <p>
	        	<span class="name-form">设置新密码：</span>
	        	<input class="s-input"  id="newPwd"  name="newpassword" type="password" value="">
	        	<span id="newPwdShow">密码为以英文字母或数字开头的6-15个字母或数字</span>
	        </p>
	        <p>
	        	<span class="name-form">重新输入密码：</span>
	        	<input class="s-input" id="repPwd"  name="reppassword"  type="password" value="">
	        	<span id="repPwdShow" class="tips-yes" style="display: none;"></span>
	        </p>
	        <p class="padding">
	        	<span class="name-form">&nbsp;</span>
	        	<input class="s-btn btn-login" type="button" value="下一步" onclick="nextStep()">
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
<script>
window.onload=function(){
	var wrong = document.getElementById("wrongMes").value;
	if(wrong != null && wrong != ""){
		$("#newPwdShow").removeClass().addClass("tips-no");
		$("#newPwdShow").html("信息填写有误");
		$("#newPwd").removeClass().addClass("s-input text-error");
		$("#repPwdShow").css('display','inline-block');
		$("#repPwdShow").removeClass().addClass("tips-no");
		$("#repPwdShow").html("信息填写有误");
		$("#repPwd").removeClass().addClass("s-input text-error");
	}
}
$("#newPwd").blur(function(){
	checkNewPwd();
});
$("#repPwd").blur(function(){
	checkRepPwd();
});
function checkNewPwd(){
	var newpwd = document.getElementById("newPwd").value;
	if(newpwd == null || "" == newpwd){
		$("#newPwdShow").removeClass().addClass("tips-no");
		$("#newPwdShow").html("密码不能为空");
		$("#newPwd").removeClass().addClass("s-input text-error");
		return false;
	}else{
		var pattern=/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~\(\)\{\}\[\]\,\?\<\>\/\\]{6,16}$/;
		if(pattern.test(newpwd)){
			    $("#newPwdShow").removeClass().addClass("tips-yes");
				$("#newPwdShow").html("");
				$("#newPwd").removeClass().addClass("s-input"); 
			return true;
		}else{
		        $("#newPwdShow").removeClass().addClass("tips-no");
	            $("#newPwdShow").html("密码为以英文字母或数字开头的6-15个字母或数字");
	            $("#newPwd").removeClass().addClass("s-input text-error");
			return false;
		}
	}				
}



function checkRepPwd(){
	var newpwd = document.getElementById("newPwd").value;
	var reppwd = document.getElementById("repPwd").value;
	if(newpwd == null || "" == newpwd){
	    $("#repPwdShow").css('display','inline-block');
	    $("#repPwdShow").removeClass().addClass("tips-no");
		$("#repPwdShow").html("请先输入新密码");
		$("#repPwd").removeClass().addClass("s-input text-error");
	    return false;
	}else{
	    if(reppwd == null || "" == reppwd){
	        $("#repPwdShow").css('display','inline-block');
	        $("#repPwdShow").removeClass().addClass("tips-no");
			$("#repPwdShow").html("重复密码不能为空");
			$("#repPwd").removeClass().addClass("s-input text-error");
	        return false;
	    }else{
	      if(reppwd == newpwd){
	        $("#repPwdShow").css('display','inline-block');
	        $("#repPwdShow").removeClass().addClass("tips-yes");
			$("#repPwdShow").html("");
			$("#repPwd").removeClass().addClass("s-input");
	        return true;
	      }else{
	        $("#repPwdShow").css('display','inline-block');
	        $("#repPwdShow").removeClass().addClass("tips-no");
			$("#repPwdShow").html("两次输入的密码不一致，请重新输入");
			$("#repPwd").removeClass().addClass("s-input text-error");
	        return false;
	      }
	    }
	}
}

function nextStep(){
	if(checkNewPwd()){
		if(checkRepPwd()){
			$("#nextForm").submit();
		}
	}
}
</script>
</body>
</html>
