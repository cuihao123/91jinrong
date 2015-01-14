
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String p="";
try{
	p=request.getAttribute("javax.servlet.forward.request_uri").toString();
}catch (Exception e) {
	p=request.getRequestURI();
}
String p1="";
String p2="";
String p3="";
String p4="";
String p5="";

if(p.indexOf("index")>-1){
	p5=" class=\"active\" ";
}
if(p.indexOf("loan")>-1){
	p1=" class=\"active\" ";
}
if(p.indexOf("card")>-1){
	p2=" class=\"active\" ";
}
if(p.indexOf("toEditPwd")>-1){
	p3=" class=\"active\" ";
}
if(p.indexOf("toEditMobile")>-1){
	p4=" class=\"active\" ";
}
 
%>

<ul class="use-menu">
    <li><a href="/userCenter/index" title="账户信息">账户信息</a></li>
    <li><a href="/userCenter/toEditPwd" title="修改密码">修改密码</a></li>
    <li><a href="/userCenter/toEditMobile" title="修改手机号码">修改手机号码</a></li>
    <li><a href="http://www.91wangcai.com/" target="_blank" title="个人理财">个人理财</a></li>
    <li><a href="http://bj.91dk.com/" target="_blank" title="我要贷款">我要贷款</a></li>
    <li><a href="http://chexian.91jinrong.com/index.html" target="_blank" title="购买车险">购买车险</a></li>
    <li><a href="http://zzb.91jinrong.com/" target="_blank" title="企业理财">企业理财</a></li>
  </ul>
