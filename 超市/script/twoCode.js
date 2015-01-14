window.onload = function(){
	function twoCode(){
		var twoCode = document.createElement('div'),
			twoCode2 = document.createElement('div');
		twoCode.className = 't-code';
		twoCode.id = 'tCode';
		twoCode2.className = 't-code2';
		twoCode2.id = 'tCode2';
		twoCode2.innerHTML = '<i id="tCodeI"></i>';
		document.body.appendChild(twoCode);
		document.body.appendChild(twoCode2);
		document.getElementById('tCode').onmouseover = function(){
			document.getElementById('tCode2').style.display = 'block';
		}
		document.getElementById('tCodeI').onclick = function(){
			document.getElementById('tCode2').style.display = 'none';
		}
	}
	twoCode();
}




