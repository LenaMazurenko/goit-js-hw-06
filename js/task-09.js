function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelector(".change-color");
const body = document.querySelector("body");
const str = document.querySelector(".color");
let actualColor;
btn.addEventListener("click", () => {
    actualColor = getRandomHexColor();
    str.textContent = actualColor;
    body.style.backgroundColor = actualColor;
});
