function splitRun(){
	var inString = document.getElementById('inString').value;
	var separator = document.getElementById('separator').value;
	var aniRef = document.getElementById('ani');
	var outStringRef = document.getElementById('outString');
	var aniCode = "";
	var pos = inString.indexOf(separator,0);
	var words = inString.split(separator);
	var outString="";
	
	for(var i = 0; i < inString.length; i++){
		if(i>=pos&&i<pos+separator.length)
			aniCode+="<div class='box box-opacity'>"+inString.charAt(i)+"</div>";
		else
			aniCode+="<div class='box box-down'>"+inString.charAt(i)+"</div>";
		if(pos!=-1&&i>=pos+separator.length)
			pos = inString.indexOf(separator,pos+1);
	}
	if(inString===""){
		aniCode = "<div class='box box-down'>A</div><div class='box box-opacity'>,</div><div class='box box-down'>B</div>";
		words.push("A");
		words.push("B");
	}
	
	aniRef.innerHTML = aniCode;
	outStringRef.innerHTML=words;
}
function splitStop(){
	var inString = document.getElementById('inString').value;
	var separator = document.getElementById('separator').value;
	var aniRef = document.getElementById('ani');
	var outStringRef = document.getElementById('outString');
	var aniCode = "";
	for(var i = 0; i < inString.length; i++){
		aniCode+="<div class='box'>"+inString.charAt(i)+"</div>";
	}
	if(inString===""){
		aniCode = "<div class='box'>A</div><div class='box'>,</div><div class='box'>B</div>";
	}
	aniRef.innerHTML = aniCode;
	outStringRef.innerHTML="";
}
function homepage(){
	window.open("../homepage.html","_self");
}