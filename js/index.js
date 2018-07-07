document.querySelectorAll('.digit').forEach(el=>el.addEventListener('click', digitClicked));
document.querySelectorAll('.operation').forEach(el=>el.addEventListener('click', operationClicked));
document.querySelector('.clear').addEventListener('click', clear);
document.querySelector('.calc').addEventListener('click', calc);
const display = document.querySelector('.display');

function digitClicked() {
    display.value += event.target.innerText;
}

function operationClicked() {
    display.value += event.target.innerText;
}

function calc() {
    display.value = eval(display.value);
}

function clear() {
    display.value = '';
}
