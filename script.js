const display = document.getElementById("display");

const buttons = document.querySelectorAll(".major");

let currentInput = "";

buttons.forEach(function(button) {
    button.addEventListener("click", handleButton);
});

function handleButton(event) {    
    const value = event.target.textContent;
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay(){
    display.value="";
}

function deleteLastDisplay(){
    display.value=display.value.slice(0, -1)
}


function add(){
    return(a+b);
}
function subtract(){
    return(a+b);
}
function mulitplication(){
    return(a*b);
}
function division(){
    return(a/b);
}
function clear(){

}
