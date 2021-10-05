const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    if (email.value === "" || password.value === "")
        alert("Необходимо заполнить все поля формы!");
    else console.log(`email: ${email.value}, passvord: ${password.value}`);
    event.currentTarget.reset();
}
