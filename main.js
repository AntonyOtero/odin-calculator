const CALC = document.querySelector("#calc");
const CALC_DISPLAY = document.querySelector("#calcDisplay");
const CALC_MEMORY = [];
const CLEAR_BTN = document.querySelector("#clear-btn");
const EQUAL_BTN = CALC.querySelector(".btn-equal");

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
  CALC_MEMORY.splice(0, 3, result);
};

CALC.querySelectorAll(".btn-primary").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    CALC_DISPLAY.innerText += event.target.innerText;
    if (document.querySelector(".btn-active")) {
      document
        .querySelector(".btn-active")
        .setAttribute("class", "btn btn-utility");
    }
    console.log(CALC_MEMORY);
  });
});

CALC.querySelectorAll(".btn-operator").forEach((btn) => {
  btn.addEventListener("click", (event) => {
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
  if (CALC_MEMORY.length == 2 && CALC_DISPLAY.innerText) {
    CALC_MEMORY.push(Number(CALC_DISPLAY.innerText));
    operate(CALC_MEMORY[1], CALC_MEMORY[0], CALC_MEMORY[2]);
    CALC_DISPLAY.innerText = CALC_MEMORY[0];
  }

  console.log(CALC_MEMORY);
});
