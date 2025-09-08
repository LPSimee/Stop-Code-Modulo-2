// For the form validation I will use REGEX

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#modulo > form");
    const inputName = document.querySelector("#nome");
    const inputEmail = document.querySelector("#email");
    const inputTel = document.querySelector("#tel");
    const privacyCheckBox = document.querySelector("#privacy");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (checkName() && checkEmail() && checkTel() && privacyCheckBox.checked){
            console.log("La tua card è stata creata con successo!");
        }
    });
});

function checkInput(inputValue, regex) {
    return regex.test(inputValue);
}