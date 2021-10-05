/* более короткое решенеи задачи*/
const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector("button[data-action=decrement]");
const incrementBtn = document.querySelector("button[data-action=increment]");

incrementBtn.addEventListener("click", () => {
    counterValue.textContent = parseInt(counterValue.textContent) + 1;
});
decrementBtn.addEventListener("click", () => {
    counterValue.textContent = parseInt(counterValue.textContent) - 1;
});

/*  по условию*/
/*
let counterValue = 0;
const counterValueOutput = document.querySelector("#value");
const decrementBtn = document.querySelector("button[data-action=decrement]");
const incrementBtn = document.querySelector("button[data-action=increment]");

incrementBtn.addEventListener("click", () => {
    counterValue = parseInt(counterValueOutput.textContent);
    counterValueOutput.textContent = counterValue + 1;
});
decrementBtn.addEventListener("click", () => {
    counterValue = parseInt(counterValueOutput.textContent);
    counterValueOutput.textContent = counterValue - 1;
});
*/
