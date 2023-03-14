		var dliny = [5,4,7,10,6,11,4];
		var arrayA=["a","b","c","d","e","j","k"];
		document.write('<div id="all">'+'<form id="myCros">');
		for (t=0;t<7;t++){
		var so=String(arrayA[t]);
			document.write('<div id="word'+(t+1)+'">'+(t+1));
		for(i=1;i<=dliny[t];i++){
  
			document.write('<input id="'+arrayA[t]+i+'" type="text" maxlength="1" pattern="[А-Яа-яЁё]" onkeyup="f(),chekWord('+(t+1)+')"/>');
			}
			document.write('<span id="otvet'+(t+1)+'"></span>'+'<br>'+'</div>');
		}
	function f(){
		var newid;
		var letters = "abcdejk";
		var key=window.event;
		var charCode = key.keyCode;
		var pole=document.activeElement;
		var id=pole.id;	
		var pos = letters.indexOf(id.charAt(0));
		if(charCode==116||charCode==16||charCode==18||charCode==17||charCode==8||charCode==123){
			newid=id;
		}else if(charCode==40){
			 newid = letters[(pos + 1)%letters.length] + '1';	
		}		
		else if(charCode==37){
			newid=letters[pos]+(parseInt(id.charAt(1)+id.charAt(2))-1);
			if(newid==letters[pos]+'0'){
				pos=(letters.length - 1 + pos)%letters.length;
				newid=letters[pos]+dliny[pos];
			}
			}
			else if(charCode==39){
				newid=letters[pos]+(parseInt(id.charAt(1)+id.charAt(2))+1);
				if((parseInt(id.charAt(1)+id.charAt(2))+1)==dliny[pos]+1){
					pos=(pos + 1)%letters.length;
					newid=letters[pos]+'1';
				}
		}
		else if(charCode==38){
			newid=letters[(letters.length - 1 + pos)%letters.length]+'1';
		}		
		else{
			 
		 newid=id.charAt(0)+(parseInt(id.charAt(1)+id.charAt(2))+1);	
		if((parseInt(id.charAt(1)+id.charAt(2))+1)==dliny[pos]+1){
					pos=(pos + 1)%letters.length;
					newid=letters[pos]+'1';

				}
			}
		document.getElementById(newid).focus();		
		}
		var answer = ["454c057dfb20954d2868f11f5d4fd2ff3ce00ea46c96d168946e50e48c8a2265","a833dbf18d8a11e59d40408852dc5d2671aa473fc0ad9fc1139f5fb9bd7317b1",
		"609dba10b84d293aa3799b7288847841d17e2900dd08cfd33c29b2f610195c13","6ca73d503ca3dccaf6caa3c37b484a7a7c4e7a9ac2d7f1d39ceb651b65c8a232",
		"55410d5817fc10df3bb4665c8bdcfb7e3aefcc62a0643e317b68a17d2b861ac8","8bdda82f470c919d98ffaf3f6d11a48c8fdc1097699e0cfe0dd914bb18e60ab1",
		"b1646280f6609ff0963aad1efd714579c9024c28ce038c9c6c2439a60182bc28" ];
	function check(){
		var word=["","","","","","",""],kol=0;
		for (q=0;q<7;q++){
			for (y=1;y<=dliny[q];y++){
				word[q]=word[q]+document.getElementById(arrayA[q]+y).value;
			}	
			if(CryptoJS.SHA256(word[q].toLowerCase()).toString() == answer[q]){
				kol++;
			}
		}
		if(kol==7){
			alert("Кросворд решен верно");
		}
		else{
			alert("Кросворд решен не верно");
		}
	   }	
	function chekWord(nomer) {
	 var word="";
	  for (j=1;j<=dliny[nomer-1];j++){
	   var wor=document.getElementById(arrayA[nomer-1]+j).value;
	   word=word+wor;
		    if(CryptoJS.SHA256(word.toLowerCase()).toString() == answer[nomer-1]||CryptoJS.SHA256(word.toLowerCase()).toString() == answer[8]){
			document.getElementById("otvet" + nomer).innerHTML="правильно";
			}else{
			document.getElementById("otvet" + nomer).innerHTML="не правильно";
					}
				}
			}