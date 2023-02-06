"use strict";
function changeColor() {
    //var randomColor = Math.floor(Math.random()*16777215).toString(16); later implement random color
    
	let color = document.body.style.color;
	if (color === 'blue' || color === 'black') {
		document.body.style.color = 'white';
	} else {
		document.body.style.color = 'black';
	}
}