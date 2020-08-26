const CALC = document.querySelector("#calc");
const CALC_DISPLAY = document.querySelector("#calcDisplay");
const CALC_MEMORY = [];
const CLEAR_BTN = document.querySelector("#clear-btn");
const EQUAL_BTN = CALC.querySelector(".btn-equal");
const DECIMAL_BTN = CALC.querySelector(".btn-decimal");

const operations = {
  "+": (numOne, numTwo) => {
    return numOne + numTwo;
  },
  "-": (numOne, numTwo) => {
    return numOne - numTwo;
  },
  "×": (numOne, numTwo) => {
    return numOne * numTwo;
  },
  "÷": (numOne, numTwo) => {
    return numOne / numTwo;
  },
};

const operate = (operator, numOne, numTwo) => {
  let result = operations[operator](numOne, numTwo);
  let decRegex = /\d*.\d+/;
  if (decRegex.test(result)) {
    result = result.toFixed(4);
  }
  CALC_MEMORY.splice(0, 3, result);
};

CALC.querySelectorAll(".btn-number").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (CALC_MEMORY.length == 1 && CALC_MEMORY[0] == CALC_DISPLAY.innerText) {
      CALC_MEMORY.length = 0;
      CALC_DISPLAY.innerText = "";
    }
    CALC_DISPLAY.innerText += event.target.innerText;
    if (document.querySelector(".btn-active")) {
      document
        .querySelector(".btn-active")
        .setAttribute("class", "btn btn-utility");
    }
    console.log(CALC_MEMORY);
  });
});

DECIMAL_BTN.addEventListener("click", (event) => {
  CALC_DISPLAY.innerText += event.target.innerText;
  if (CALC_DISPLAY.innerText.split("").indexOf(".") > -1) {
    DECIMAL_BTN.disabled = true;
  }
});

CALC.querySelectorAll(".btn-operator").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    DECIMAL_BTN.disabled = false;
    event.target.setAttribute("class", "btn btn-utility btn-active");
    if (CALC_DISPLAY.innerText) {
      if (CALC_MEMORY.length == 1 && CALC_MEMORY[0] == CALC_DISPLAY.innerText) {
        CALC_MEMORY.length = 0;
      }
      CALC_MEMORY.push(Number(CALC_DISPLAY.innerText));
      CALC_MEMORY.push(event.target.innerText);
      CALC_DISPLAY.innerText = "";
      if (CALC_MEMORY.length == 4) {
        operate(CALC_MEMORY[1], CALC_MEMORY[0], CALC_MEMORY[2]);
      }
    }

    console.log(CALC_MEMORY);
  });
});

EQUAL_BTN.addEventListener("click", (event) => {
  DECIMAL_BTN.disabled = false;
  if (CALC_MEMORY.length == 2 && CALC_DISPLAY.innerText) {
    CALC_MEMORY.push(Number(CALC_DISPLAY.innerText));
    operate(CALC_MEMORY[1], CALC_MEMORY[0], CALC_MEMORY[2]);
    CALC_DISPLAY.innerText = CALC_MEMORY[0];
  }

  console.log(CALC_MEMORY);
});


CALC.querySelector("#clear-btn").addEventListener("click", (event) => {
    if (CALC_DISPLAY.innerText && CALC_MEMORY[2]!=0 ){
        CALC_MEMORY.length = 1;
        CALC_DISPLAY.innerText = CALC_MEMORY[0];
    }else if(CALC_DISPLAY.innerText && CALC_MEMORY[1]!=0){
        CALC_MEMORY.length = 0;
        CALC_DISPLAY.innerText =0;
    }
  
  });
  