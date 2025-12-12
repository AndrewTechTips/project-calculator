/*define 3 variables that keeps track on numbers and operator*/
let currentNum = "";
let previousNum = "";
let operator = "";

/*Get the elements*/
const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operation");

const equalBtn = document.querySelector("#equal");
const dotbtn = document.querySelector("#dot");
const clearBtn = document.querySelector("#ac");
const signBtn = document.querySelector("#plus-minus");
const percentBtn = document.querySelector("#mod");
const deleteBtn = document.querySelector("#del");

//Function to append the numbers in display
function handleNumber(number) {
    if(currentNum.length <= 10) {       //Set a limit to max 10 chars to prevent overflow
        currentNum += number;
        
        if(operator !== "") {
            display.textContent = `${previousNum} ${operator} ${currentNum}`;
        } else {
            display.textContent = currentNum;
        }
    }
}

//Add event listener for all number btns

numberButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => handleNumber(e.target.textContent));       
})


//Function to handle the operator
function handleOperator(op) {

    if(!previousNum !== "" && currentNum !== "" && operator != ""){
        operate();
    }

    if(currentNum === "" && previousNum === "") {     //Prevent the operator functionaliy if there is not a current number
        return;
    }

    if(currentNum === "") {
        operator = op;
        display.textContent = `${previousNum} ${operator}`;
        return;
    }

    operator = op;
    previousNum = currentNum;
    currentNum = "";

    display.textContent = `${previousNum} ${operator}`;
}

operators.forEach((btn) => {
    btn.addEventListener("click", (e) => handleOperator(e.target.textContent));
})

//Function to operate the math

function operate() {
    let result;
    const num1 = parseFloat(previousNum);
    const num2 = parseFloat(currentNum);

    //Check if num1 and num2 are actual numbers
    if(isNaN(num1) || isNaN(num2)) {
        return;
    }

    switch(operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "x":
            result = num1 * num2;
            break;
        case "÷":
            if(num2 === 0) {
                result = "Cannot divide by 0!";
                display.textContent = result;
                currentNum = "";
                previousNum = "";
                operator = "";
                return
            } 
            
            result = num1 / num2;
            break;

        default: 
            return;
    }

    result = Math.round(result * 1000) / 1000;

    currentNum = result.toString();
    operator = "";
    previousNum = "";

    display.textContent = result;
}

equalBtn.addEventListener("click", () => {
    if(currentNum != "" && previousNum != "") {
        operate();
    }
})

dotbtn.addEventListener("click", () => {
    if(!currentNum.includes(".")){
        
        if(currentNum === "") {
            currentNum = "0";
        }

        currentNum += ".";

        if(previousNum !== "" && currentNum !== "") {
            display.textContent = `${previousNum} ${operator} ${currentNum}`;
        } else {
            display.textContent = currentNum;
        }
    }
})

clearBtn.addEventListener("click", () => {
    currentNum = "";
    previousNum = "";
    operator = "";

    display.textContent = "0";
})

signBtn.addEventListener("click", () => {
    
    if(currentNum === "") {
        return;
    }

    currentNum = (parseFloat(currentNum) * -1).toString();

    if(previousNum !== "" && currentNum !== "") {
            display.textContent = `${previousNum} ${operator} ${currentNum}`;
        } else {
            display.textContent = currentNum;
        }
})

percentBtn.addEventListener("click", () => {
    if(currentNum === ""){
        return;
    }

    currentNum = (parseFloat(currentNum) / 100).toString()

    if(previousNum !== "" && currentNum !== "") {
            display.textContent = `${previousNum} ${operator} ${currentNum}`;
        } else {
            display.textContent = currentNum;
        }
})

deleteBtn.addEventListener("click", () => {
    if(currentNum !== "") {
        currentNum = currentNum.slice(0, -1);

        if(previousNum !== "" && operator !== "") {
            display.textContent = `${previousNum} ${operator} ${currentNum}`;
        } else {
            if(currentNum === "") {
                display.textContent = "0";
            } else {
                display.textContent = currentNum;
            }
        }
    }
})