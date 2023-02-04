"use strict";
function changeColor() {
    //var randomColor = Math.floor(Math.random()*16777215).toString(16); later implement random color
    
	let color = document.body.style.color;
	if (color === 'blue') {
		document.body.style.color = 'red';
	} else {
		document.body.style.color = 'blue';
	}
}