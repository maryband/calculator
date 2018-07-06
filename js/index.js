document.querySelector('.one').addEventListener('click', clickOne);
document.querySelector('.two').addEventListener('click', clickTwo);
document.querySelector('.three').addEventListener('click', clickThree);
document.querySelector('.four').addEventListener('click', clickFour);
document.querySelector('.five').addEventListener('click', clickFive);
document.querySelector('.six').addEventListener('click', clickSix);
document.querySelector('.seven').addEventListener('click', clickSeven);
document.querySelector('.eight').addEventListener('click', clickEight);
document.querySelector('.nine').addEventListener('click', clickNine);
document.querySelector('.zero').addEventListener('click', clickZero);
document.querySelector('.addition').addEventListener('click', addition);
document.querySelector('.substraction').addEventListener('click', substraction)
document.querySelector('.calc').addEventListener('click', calc);
document.querySelector('.multiplication').addEventListener('click', multiplication);
document.querySelector('.division').addEventListener('click', division);
document.querySelector('.clear').addEventListener('click', clear);
const display = document.querySelector('.display');

function clickOne() {
    display.value += 1;
}

function clickTwo() {
    display.value += 2;
}

function clickThree() {
    display.value += 3;
}

function clickFour() {
    display.value += 4;
}

function clickFive() {
    display.value += 5;
}

function clickSix() {
    display.value += 6;
}

function clickSeven() {
    display.value += 7;
}

function clickEight() {
    display.value += 8;
}

function clickNine() {
    display.value += 9;
}

function clickZero() {
    display.value += 0;
}

function addition() {
    display.value += '+';
}

function substraction() {
    display.value += '-';
}

function multiplication() {
    display.value += '*';
}

function division() {
    display.value += '/';
}

function calc() {
    display.value = eval(display.value);
}

function clear() {
    display.value = '';
}