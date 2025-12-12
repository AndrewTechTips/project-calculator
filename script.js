/*define 3 variables that keeps track on numbers and operator*/
let currentNum = "";
let previousNum = "";
let operator = "";

/*Get the elements*/
const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operation");

//Add event listener for all number btns

numberButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => handleNumber(e.target.textContent));       
})


//Function to append the numbers in display
function handleNumber(number) {
    if(currentNum.length <= 10) {       //Set a limit to max 10 chars to prevent overflow
        currentNum += number;
        display.textContent = currentNum;
    }
}


//Function to handle the operator
