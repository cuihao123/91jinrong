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
	<h4 class="login-t"><em>密码找回</em>如果您还没有注册91金融账号，<a href="/regist/toRegist?response_type=${param.response_type}&redirect_uri=${param.redirect_uri }&client_id=${param.client_id }" title="请注册">请注册</a></h4>
	<ul class="pwd-step clearfix">
		<li class="active"><i></i>输入信息</li>
		<li><i></i>验证信息</li>
		<li><i></i>设置新密码</li>
		<li><i></i>成功</li>
	</ul>
	<div class="login-form clearfix">
		<form action="/findPwd/find" method="post" id="regForm">
	        <p>
	        	<span class="name-form">手机号码：</span>
	        	<input name="mobile" id="mobile"  class="s-input" type="text" value="">
	        	<em id="reminder1" style="display: none;">您输入的手机号码未注册</em>
	        </p>
	        <p>
	        	<span class="name-form">验证码：</span>
	        	<input class="s-input" name="code" id="captcha"  type="text" value="">
	            <span class="code">
	            	<img style="cursor:pointer; margin-right:10px;" width="100" height="47" src="/findPwd/captchaImg"  id="img" >
                </span>
                <span><a href="javascript:changeCodeImage()">换一张</a></span>
                <em style="margin-left:10px; color:#f00;" id="reminder2"></em>
	        </p>
	        <p class="padding">
	        	<span class="name-form">&nbsp;</span>
	        	<input class="s-btn btn-login" type="button" onclick="sub()" value="下一步">
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
function sub(){
var flag = 0;	
	if(mobileValid()){
		flag ++;
	}
	if(captchaValide()){
		flag ++;
	}
	if(flag == 2){
		$("#regForm").submit();
	}
}
function changeCodeImage(){
	$("#captcha").val('');
	$("#img").attr("src",$("#img").attr("src")+"?"+new Date());
}
function captchaValide(){
	var captcha = $("#captcha").val();
	if(captcha.length <= 0){
		$("#captcha").removeClass().addClass("s-input text-error");
		$("#reminder2").html("请输入验证码");
		return false;
	}else{
		var result = false;
		$.ajax({
		    type:'POST',
			dataType : "json",
            async : false,
            url : "/findPwd/checkVerifyCode",
            data:{'captcha':captcha},
            success : function(data){
                if(data == 1){
                $("#reminder2").html("");
                result = true;
                	
                }
           }
		});
		if(result){
			$("#captcha").removeClass().addClass("s-input");
			$("#reminder2").html("");
			return true;
		}else{
		    $("#captcha").removeClass().addClass("s-input text-error");
			$("#reminder2").html("验证码错误，请重新输入");
			return false;
		}
	}
}
function mobileValid(){
	var mobile = $("#mobile").val();
	var mobileTest = /^(13[0-9]|15[0-9]|18[0-9])\d{8}$/;
	if(mobile.length <= 0){
	    $("#mobile").removeClass().addClass("s-input text-error");
		$("#reminder1").css('display','inline-block'); 
		$("#reminder1").html("请输入手机号");
		return false;
	}else if(!mobileTest.test(mobile)){
	    $("#mobile").removeClass().addClass("s-input text-error");
		$("#reminder1").css('display','inline-block');
		$("#reminder1").html("手机号码格式不正确");
		return false;
	}else{
		var result = false;
		$.ajax({
			type:'POST',
			data:{'arg':mobile},
			async:false,
			url:"/findPwd/argCheck",
			success:function(data){
				if(data == 1){
					result = true;
				}
			}
		});
		if(result){
			 $("#mobile").removeClass().addClass("s-input");
			 $("#reminder1").css('display','inline-block');
			  $("#reminder1").removeClass().addClass("tips-yes");
			  $("#reminder1").html("");
			return true;
		}else{
		    $("#mobile").removeClass().addClass("s-input text-error");
			$("#reminder1").css('display','inline-block');
			$("#reminder1").removeClass().addClass("tips-usr");
			$("#reminder1").html("您输入的手机号码未注册");
			return false;
		}
	}
}
$("#captcha").blur(function(){captchaValide();});
$("#mobile").blur(function(){mobileValid();});
window.onload=function(){
	var mobile = $("#serviceMobile").val();
	var code = $("#serviceCode").val();
	if(mobile == null || mobile == ""){
		 $("#mobile").removeClass().addClass("s-input");
		 $("#reminder1").css('display','none');
	}else{
		if(mobile == 1){
			$("#mobile").removeClass().addClass("s-input text-error");
			$("#reminder1").css('display','inline-block'); 
			$("#reminder1").html("请输入手机号");
		}else{
			$("#mobile").removeClass().addClass("s-input text-error");
			$("#reminder1").css('display','inline-block');
			$("#reminder1").removeClass().addClass("tips-usr");
			$("#reminder1").html("您输入的手机号码未注册");
		}
	}
	if(code == null || code == ""){
		$("#captcha").removeClass().addClass("s-input");
		$("#reminder2").html("");
	}else{
		if(code == 1){
			$("#captcha").removeClass().addClass("s-input text-error");
			$("#reminder2").html("请输入验证码");
		}else{
			$("#captcha").removeClass().addClass("s-input text-error");
			$("#reminder2").html("验证码错误，请重新输入");
		}
	}
}
</script>
</body>
</html>
