//**************Variables*******************//
let numSquares = 6 //init numSquares on page

//color array of numSquares random colors
let colors = [];

//random goal color
let pickedColor;

//***************Selectors and Manipulators********//

//selectors
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

//manipulators
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");

//***************Init******************************//

init();


//****************Events**********************//

//resetButton
resetButton.addEventListener("click",function(){
	reset();
})

//****************FUNCTIONS****************************//

//main function (INIT)
function init(){
	//Mode Button Listeners
	for (var i=0; i < modeButtons.length; i++)
	{
		modeButtons[i].addEventListener("click",function(){
			//remove selection from both buttons
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");

			//add to the one we clicked on
			this.classList.add("selected");

			//Ternary operator
			// if condition             then            otherwise
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		
			//call reset function
			reset();
		});
	}

	//Square Button Listeners

	for (let i=0; i<squares.length; i++){
	//add initial colors to squares (we will use reset)
	
		//add click listeners to squares
		squares[i].addEventListener("click",function(){
					
			//grab color of clicked square
			let clickedColor = this.style.backgroundColor;
		
			//compare color to pickedcolor
			if(clickedColor === pickedColor){ //win
				//Display correct
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				h1.style.backgroundColor = pickedColor;
			}
			//set square = to background
			else //loss
			{
				//set square to body backGround color if wrong
				//and display "Try Again"
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		})
	}

	reset();
}


//change colors of all squares to color
function changeColors(color){
	//loop through all squares
	for(let i = 0; i < colors.length; i++)
	{
		//must use squares aray.
		squares[i].style.background = color;
	}
	//change each color to match given color
}

//pick a random array number (to be a target)
function pickColor()
{
	let random = Math.floor(Math.random() * colors.length) //random between 0 and 5 
	return colors[random];
}

function generateRandomColors(num)
{
	//make an array
	let arr = [];

	//add num random colors to array
	//repeat num times
	for(let i = 0; i<num; i++)
	{
		//get random color and push into array
		arr.push(getRandomColor());
	}

	//return that array
	return arr
}

//generate a random rgb color
function getRandomColor(){
	//pick a "red" from 0-255
	let r = Math.floor(Math.random()*256)
	//pick a "green" from 0-255
	let g = Math.floor(Math.random()*256)
	//pick a "blue" from 0-255
	let b = Math.floor(Math.random()*256)
	//create string "rgb(r, g, b)"
	let testColor =  'rgb(' + r + ', ' + g + ', ' + b + ')'
	return testColor;

}

function reset(){
	//reset the button
	resetButton.textContent = "New Colors";

	//remove correct or try again
	messageDisplay.textContent = "";

	//generate all new colors
	colors = generateRandomColors(numSquares);
	
	//pick a new randomcolor from array
	pickedColor = pickColor();

	//change color display to match picked color
	colorDisplay.textContent = pickedColor;

	//change colors of the squares
	for (let i=0; i<squares.length; i++){
		if(colors[i]){ //add correct colors
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else { //remove colors not in the array
			squares[i].style.display = "none";
		}
	}
	//change background color back to default
	h1.style.backgroundColor = "steelblue";
}