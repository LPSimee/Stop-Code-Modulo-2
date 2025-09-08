// For the form validation I will use REGEX


// Found these regex from the internet
const regexName = /^([a-zA-Z0-9_\s]+)$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexTel = /^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?[-.\s]?)?(\d[-.\s]?){6,9}\d$/;

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