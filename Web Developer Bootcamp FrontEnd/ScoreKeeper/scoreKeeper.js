//button and input Selectors
let p1Button = document.querySelector("#p1");
let p2Button = document.getElementById("p2"); //element by ID, no #
let resetButton = document.getElementById("p3");
let scoreChanger = document.querySelector("input[type = number]");
//this would work as well for scoreChanger -
// let scoreChanger = document.querySelector("input");

//Display Manipulators
let p1 = document.querySelector("#p1Display");
let p2 = document.querySelector("#p2Display");
let scoreDisplay = document.querySelector("p span");

//other variables
let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

//Player One Button
p1Button.addEventListener("click",function(){
	if(!isGameOver){
		p1Score++;
		console.log(p1Score, winningScore);
		if(p1Score === winningScore)
		{
			console.log("Game Over");
			isGameOver = true;
			p1.classList.add("green")
		}
		p1.textContent = p1Score;
	}

});

//Player Two Button
p2Button.addEventListener("click",function(){
	if(!isGameOver){
		p2Score++;
		console.log(p2Score);
		if(p2Score === winningScore)
		{
			console.log("Game Over");
			isGameOver = true;
			p2.classList.add("green")
		}
		p2.textContent = p2Score;
	}
});

//Reset Button
resetButton.addEventListener("click",function(){
	reset();
	
})

//Change Winning Score 
//this is using "change" event so it will run every 
//time input is changed 
 
scoreChanger.addEventListener("change",function(){
	
	//set winning score on page
	//scoreDisplay.textContent = scoreChanger.value;
	scoreDisplay.textContent = this.value;

	//set winning score in logic
	//winningScore = Number(scoreChanger.value); 
	winningScore = Number(this.value);
	//change winning score to string so values match

	//resets when winningScore changes
	reset();
})

function reset(){
	//reset score to zero
	p1Score = 0;
	p2Score = 0;
	
	console.log("Reset");

	//reset display values to zero
	p1.textContent = p1Score;
	p2.textContent = p2Score;
	
	//game over is false again
	isGameOver = false;

	//remove green winner from both
	p1.classList.remove("green")
	p2.classList.remove("green")
}