
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
    let result = operations[operator](numOne, numTwo);
     CALC_MEMORY.splice(0,3,result);    
     CALC_DISPLAY.innerText = result;
};



CALC.querySelectorAll(".btn-primary").forEach( (btn) => {
    btn.addEventListener("click", (event) => {
        CALC_DISPLAY.innerText += event.target.innerText;
    });
});


CALC.querySelectorAll(".btn-operator").forEach( (btn)=>{
    btn.addEventListener("click",(event) =>{
        CALC_MEMORY.push(parseInt(CALC_DISPLAY.innerText));
        CALC_MEMORY.push(event.target.innerText);
        CALC_DISPLAY.innerText = "";
        if(CALC_MEMORY.length == 4){
            operate(CALC_MEMORY[1],CALC_MEMORY[0],CALC_MEMORY[2]);
        };

        console.log(CALC_MEMORY);

    }); 
      

});


CALC.querySelectorAll(".btn-equal").forEach( (btn)=>{
    btn.addEventListener("click",(event) =>{
        CALC_MEMORY.push(parseInt(CALC_DISPLAY.innerText));
        if(CALC_MEMORY.length == 3){
            operate(CALC_MEMORY[1],CALC_MEMORY[0],CALC_MEMORY[2]);
        };

        console.log(CALC_MEMORY);
    });
});
