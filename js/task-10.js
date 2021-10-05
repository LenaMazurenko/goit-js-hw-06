function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector("#controls input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const containerForBoxes = document.querySelector("#boxes");

let activeNumber;

function createBoxes(currentValue) {
    let divItem;
    for (let i = 0; i < currentValue; i += 1) {
        divItem = document.createElement("div");
        divItem.style.backgroundColor = getRandomHexColor();
        divItem.style.width = `${30 + 10 * i}px`;
        divItem.style.height = `${30 + 10 * i}px`;

        containerForBoxes.append(divItem);
    }
}

inputNumber.addEventListener("change", (value) => {
    activeNumber = inputNumber.value;
});

btnCreate.addEventListener("click", () => createBoxes(activeNumber));

btnDestroy.addEventListener("click", () => {
    for (let el of document.querySelectorAll("#boxes div")) {
        el.remove();
    }
});
