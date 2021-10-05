const textInput = document.querySelector("input#name-input");
const stringOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value === "")
        stringOutput.textContent = "Anonymous";
    else stringOutput.textContent = event.currentTarget.value;
});
