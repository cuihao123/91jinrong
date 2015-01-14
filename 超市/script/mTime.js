window.onload = function(){
	if( byId('mBox') ){
		var mTime = null,
			mTime2 = null,
			mTime3 = null;
		mTime = setTimeout(function(){
			Move(byId('mTitle'),{opacity: 100,marginTop:-170},function(){
				mTime2 = setTimeout(function(){
					Move(byId('lhBox'),{opacity:100},function(){
						mTime3 = setTimeout(function(){
							Move(byId('mTitle'),{marginTop: -150},function(){
								Move(byId('bgLh'),{opacity:80},function(){
									Move(byId('lhBox'),{height:50},function(){
										Move(byId('lhBox'),{height:150},function(){
											byId('mTitle').style.display = 'none';
											byId('lhBox').style.display = 'none';
											Move(byId('bgLh'),{height:0,width:0},function(){
												byId('bgLh').style.display = 'none';
												byId('mLogo').style.display = 'none';
												clearTimeout(mTime);
												clearTimeout(mTime2);
												clearTimeout(mTime3);
												byId('mBox').parentNode.removeChild(byId('mBox'));
												fn();
											})
										})
									})
								})
							})
						},2000)
					});
				},2000)
			})
		},2000)
	}else{
		fn();
	}
}