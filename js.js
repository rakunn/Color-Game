var numSquares = 6;
var colors;
var selectedColor;

var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var msg = document.querySelector("#message");	
var header = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init()

function init() {
	setupButtons()
	setupSquares()
	reset();
}

function setupButtons() {
	for(var i = 0; i<modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === 'Easy'){
				numSquares = 3;
			} else {
				numSquares = 6;
			}
			reset();
		});
	}
}

function setupSquares() {
	for(var i = 0; i<squares.length;i++) {
	squares[i].addEventListener("click", function(){
		if (selectedColor === this.style.backgroundColor) {
			msg.textContent = "You won!";
			changeColor(selectedColor);
			header.style.backgroundColor = selectedColor;
			resetButton.textContent = "Play again!";
		} else {
			this.style.backgroundColor = "#232323";
			msg.textContent = "Try again!";
		}
	});
	}
}

function reset() {
	colors = generateRandomColors(numSquares);
	selectedColor = pickColor();
	colorDisplay.textContent = selectedColor;
	for(var i = 0; i<squares.length; i++) {
		if(colors[i]) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		} else {
		squares[i].style.display = "none";
		}
	}
	header.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	msg.textContent = "";
}

resetButton.addEventListener("click", function() {
	reset();
});


function changeColor(color) {
	for(var i = 0; i<squares.length;i++) {
		squares[i].style.backgroundColor = selectedColor;
	}
}

function pickColor() {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for(var i = 0; i<num;i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";
}