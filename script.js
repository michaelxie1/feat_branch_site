"use strict";






function changeColor() {
    
	let color = document.body.style.color;
	if (color === 'blue' || color === 'black') {
		document.body.style.color = 'white';
	} else {
		document.body.style.color = 'black';
	}

}
/*
//var randomColor = Math.floor(Math.random()*16777215).toString(16); later implement random color
	function random_bg_color() {
		var x = Math.floor(Math.random() * 256);
		var y = Math.floor(Math.random() * 256);
		var z = Math.floor(Math.random() * 256);
		var bgColor = "rgb(" + x + "," + y + "," + z + ")";
		 console.log(bgColor);
		return bgColor;
		}
	//var randomColor = Math.floor(Math.random()*16777215).toString(16);
	/*
	let color = document.body.style.color;
	if(color === 'blue' || color === randomColor){
		document.body.style.color = randomColor;}
	else{
	document.body.style.color = 'blue';
}*/
