<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/include/common.jsp"%>
<%@page import="com.foreseeuniverse.util.LoginCookieUtil"%>
<%@page import="com.foreseeuniverse.db.module.UserBaseInfo"%>
<!-- top-nav -->
<div class="box-header">
	<div class="box-top clearfix">
		<div class="box-products">
			<h3>91金融超市旗下产品&nbsp;&nbsp;</h3>
			<ul class="products-list">
				<li><a target="_blank" href="http://zzb.91jinrong.com">增值宝</a></li>
				<li class="wc"><a href="http://www.91wangcai.com" target="_blank"><i></i>91旺财</a></li>
				<li><a target="_blank" href="http://www.91dk.com">91贷款</a></li>
				<li><a target="_blank"  href="http://chexian.91jinrong.com">车险通</a></li>
				<li><a target="_blank"  href="http://app.91jinrong.com/download/wangcai.apk">旺财安卓版</a></li>
			</ul>
		</div>
		<div class="box-login">
			<%if(LoginCookieUtil.checkLogin( response, request)){
				UserBaseInfo userBaseInfo = LoginCookieUtil.getBaseInfo(request);
			%>
				<a href="/logout">退出</a>&nbsp;|
				&nbsp;<a href="/userCenter/index"><% if(userBaseInfo.getUserName()!=null && !"".equals(userBaseInfo.getUserName()) ){out.print(userBaseInfo.getUserName());}else{out.print(userBaseInfo.getMobile());} %></a>
			<%
				}else{
			%>
				  <a href="/oauth2/authorize?response_type=${param.response_type}&redirect_uri=${param.redirect_uri }&client_id=${param.client_id }">登录</a>&nbsp;|&nbsp;<a href="/regist/toRegist?response_type=${param.response_type}&redirect_uri=${param.redirect_uri }&client_id=${param.client_id }">注册</a>
			<%
				}
			%>
			<span class="collect"><a href="javascript:addfavor(' http://www.91jirnong.com','91金融超市');">收藏91金融超市</a></span>
		</div>
	</div>
</div>
<!-- top-nav over -->
<div class="box-bg-logo">
	<div class="box box-logo clearfix">
		<h2 class="logo"><a href="/" title="91金融超市">91金融超市</a></h2>
		<div class="box-tel"></div>
	</div>
</div>
<!-- box-logo over -->
