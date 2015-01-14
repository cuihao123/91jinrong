var ntime = 60;
	$("#zhong").hide();
	$("#after").hide();
	$(document).ready(function() { 
		/**
			手机短信验证码分为3种状态：
			1、手机发送前的状态id即before
			2、短信发送中的状态id即zhong
			3、短信发送后的状态id即after
			4、显示倒计时的id即now_time
		*/
		run("before","zhong","after","now_time");
	});
	

/**
			点击获取验证码：
			1、传入发送短信的手机号id即mobile
			2、手机发送前的状态id即 before
			3、短信发送中的状态id即 zhong
			4、短信发送后的状态id即 after
			5、显示倒计时的id即now_time
		 */
		function getCheckCode(){
			getCode("mobile","before","zhong","after","now_time");
		}
		
		//在做表单提交验证时，这里可以根据实际情况做调整
		/**
			表单提交时 进行表单验证
			1、检查手机号，传入手机号id
			2、检查验证码 传入验证码id
		*/
		function check(){
			if(!checkMobile("mobile")){
				return false;
			}
			if(!checkCode("code")){
				return false;
			}
			$("#checkCode").submit();
		}