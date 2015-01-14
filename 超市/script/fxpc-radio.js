$('document').ready(function(){
	$('#wBtn').click(function(){
		var arrRadio = {},
				num = 0,
				typeText = null,
				oBtn = true,
				radioQ1 = parseInt($('[name="q1"]:radio:checked').val()) || 0,
				radioQ2 = parseInt($('[name="q2"]:radio:checked').val()) || 0,
				radioQ3 = parseInt($('[name="q3"]:radio:checked').val()) || 0,
				radioQ4 = parseInt($('[name="q4"]:radio:checked').val()) || 0,
				radioQ5 = parseInt($('[name="q5"]:radio:checked').val()) || 0,
				radioQ6 = parseInt($('[name="q6"]:radio:checked').val()) || 0,
				radioQ7 = parseInt($('[name="q7"]:radio:checked').val()) || 0,
				radioQ8 = parseInt($('[name="q8"]:radio:checked').val()) || 0,
				radioQ9 = parseInt($('[name="q9"]:radio:checked').val()) || 0,
				radioQ10 = parseInt($('[name="q10"]:radio:checked').val()) || 0,
				arrNum = new Array,
				radioQ1Len = radioQ1/2,
				radioQ2Len = radioQ2/2,
				radioQ3Len = radioQ3/2,
				radioQ4Len = radioQ4/2,
				radioQ5Len = radioQ5/2,
				radioQ6Len = radioQ6/2,
				radioQ7Len = radioQ7/2,
				radioQ8Len = radioQ8/2,
				radioQ9Len = radioQ9/2,
				radioQ10Len = radioQ10/2;
		arrRadio = {
				'1' : radioQ1Len,
				'2' : radioQ2Len,
				'3' : radioQ3Len,
				'4' : radioQ4Len,
				'5' : radioQ5Len,
				'6' : radioQ6Len,
				'7' : radioQ7Len,
				'8' : radioQ8Len,
				'9' : radioQ9Len,
				'10' : radioQ10Len
			};

			var arrJson = JSON.stringify(arrRadio);
			$('input.array').val(arrJson);
			arrNum.push( radioQ1, radioQ2, radioQ3, radioQ4, radioQ5, radioQ6, radioQ7, radioQ8, radioQ9, radioQ10 );
			$.each(arrNum,function(i,n){
				num += n;
			});
			$('input.number').val(num);
			if( num >= 20 && num <= 30 ){
				typeText = '保守型';
			}else if( num >= 31 && num <= 45 ){
				typeText = '稳健型';
			}else if( num >= 46 && num <= 60 ){
				typeText = '平衡型';
			}else if( num >= 61 && num <= 80 ){
				typeText = '积极型';
			}else if( num >= 81 && num <= 100 ){
				typeText = '进取型';
			}else{
				typeText = 'null';
			}
			$('input.type').val(typeText);
			$.each(arrNum,function(i){
				if(arrNum[i] == 0){
					alert('请您填写第' + (i + 1) + '题答案');
					oBtn = false;
					return false;
				}else{
					oBtn = true;
				}
			});
		if( oBtn == true ){
			alert('提交成功，您的分值为' + num +'分，您是' + typeText);
			$('#fxpcForm').submit();
		};
	});

});