/*
* Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
*/

const operations = {
    '+': (numOne, numTwo) => { return numOne + numTwo },
    '-': (numOne, numTwo) => { return numOne - numTwo },
    '*': (numOne, numTwo) => { return numOne * numTwo },
    '/': (numOne, numTwo) => { return numOne / numTwo },
};

const operate = (operator, numOne, numTwo) => {
    return operations[operator](numOne, numTwo);
};

console.log(operate('+', 1, 2));