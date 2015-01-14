$(document).ready(function() {
	$.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip=',function(){
		var cityName = remote_ip_info.city;
		$('.coordinate').html(cityName);
	});
});