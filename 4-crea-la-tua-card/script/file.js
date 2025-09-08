// For the form validation I will use REGEX


// Found these regex from the internet
const regexName = /^([a-zA-Z0-9_\s]+)$/; // link: https://regexr.com/3agii
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // link: https://medium.com/@sketch.paintings/email-validation-with-javascript-regex-e1b40863ed23
const regexTel = /^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?[-.\s]?)?(\d[-.\s]?){6,9}\d$/; // link: https://www.reddit.com/r/GoogleForms/comments/1egqyxn/help_with_regex_validation_for_worldwide_email/?tl=it

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#modulo > form");
    const inputName = document.querySelector("#nome");
    const inputEmail = document.querySelector("#email");
    const inputTel = document.querySelector("#tel");
    const privacyCheckBox = document.querySelector("#privacy");


    form.addEventListener("submit", (event) => {
        event.preventDefault();

        console.log(checkInput(inputTel.value, regexTel));

        if (checkInput(inputName.value, regexName) && checkInput(inputEmail.value, regexEmail) && checkInput(inputTel.value, regexTel) && privacyCheckBox.checked){
            showCard(inputName.value, inputEmail.value, inputTel.value);
        }
    });
});

function checkInput(inputValue, regex) {
    return regex.test(inputValue);
}

function showCard(name, email, tel) {
    console.log("La tua card è stata creata con successo!");
    const formCtn = document.querySelector("#modulo");
    const cardCtn = document.querySelector("#card");

    formCtn.style.display = "none";
    cardCtn.style.display = "block";

    const cardName = document.querySelector(".nome");
    const cardEmail = document.querySelector(".mail");
    const cardTel = document.querySelector(".phone");

    cardName.innterHTML = name;
    cardEmail.innerHTML = email;
    cardTel.innerHTML = "+ 39 " + tel;
}