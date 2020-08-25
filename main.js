
const CALC = document.querySelector("#calc");
const CALC_DISPLAY = document.querySelector("#calcDisplay");
const CALC_MEMORY = [];

const operations = {
    '+': (numOne, numTwo) => { return numOne + numTwo },
    '-': (numOne, numTwo) => { return numOne - numTwo },
    '*': (numOne, numTwo) => { return numOne * numTwo },
    '/': (numOne, numTwo) => { return numOne / numTwo },
};

const operate = (operator, numOne, numTwo) => {
    return operations[operator](numOne, numTwo);
};

const populateDisplay = () => {

};

CALC.querySelectorAll(".btn-primary").forEach( (btn) => {
    btn.addEventListener("click", (event) => {
        CALC_DISPLAY.innerText += event.target.innerText;
        console.log(event.target.innerText);
    });
});