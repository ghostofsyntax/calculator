const display = document.getElementById("display");

let currentInput = "";


function appendToDisplay(value){
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay(){
    currentInput=""
    display.value="";
}

function deleteLastDisplay(){
    display.value=display.value.slice(0, -1);
    display.value=currentInput;

}
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiplication(a,b){
    return a*b;
}

function division(a,b){
    if(b===0){
        return "error";
    }
    return a/b;
}
function calculate(){

    let expression = display.value;
    
    let operator;
    
    if(expression.includes("+")){
        operator = "+";
    }
    else if(expression.includes("-")){
        operator = "-";
    }
    else if(expression.includes("*")){
        operator = "*";
    }
    else if(expression.includes("/")){
        operator = "/";
    }

    let numbers = expression.split(operator);

    let a = Number(numbers[0]);
    let b = Number(numbers[1]);


    if(operator === "+"){
        display.value = add(a,b);
    }

    else if(operator === "-"){
        display.value = subtract(a,b);
    }

    else if(operator === "*"){
        display.value = multiplication(a,b);
    }

    else if(operator === "/"){
        display.value = division(a,b);
    }
}
   

