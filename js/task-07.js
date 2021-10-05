const inputControl = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");
inputControl.addEventListener("change", (value) => {
    outputText.style.fontSize = `${inputControl.value}px`;
});
