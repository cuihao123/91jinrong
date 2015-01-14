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
	<h4 class="login-t"><em>会员注册</em>如果您还没有注册91金融账号，<a href="/oauth2/authorize?response_type=${param.response_type}&redirect_uri=${param.redirect_uri }&client_id=${param.client_id}" title="请直接登录">请直接登录</a></h4>
	<div class="box-fsh clearfix">
		<h4>恭喜您，注册成功！</h4>
		<span><img src="http://ui.91jinrong.com/cs/images/fsh.png"></span>
        <p><em id="jumpTo">3秒</em>后进入登录页面</p>
        <input type="hidden" id="redirect_uri" value="http://passport.91jinrong.com/oauth2/authorize${redirect_uri }"/> 
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
function countDown(secs,surl){     
 //alert(surl);     
    var jumpTo = document.getElementById('jumpTo');
    jumpTo.innerHTML=secs;  
    if(--secs>0){     
         setTimeout("countDown("+secs+",'"+surl+"')",1000);
    }else{       
         location.href=surl;     
    }     
}     
</script>
<script>
    var redirect = $("#redirect_uri").val();
    countDown(3, redirect);
</script>  
</body>
</html>
