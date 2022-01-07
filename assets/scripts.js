var currentNumberWrapper= document.getElementById ("currentNumber");
var currentNumber= 0;

function increment () { // vai somar quando cliar no botao de +
currentNumber = currentNumber + 1;
currentNumberWrapper.innerHTML=currentNumber;

}

function decrement () { // vai subtrair quando clicar no botão de -
currentNumber = currentNumber - 1;
currentNumberWrapper.innerHTML=currentNumber;

}