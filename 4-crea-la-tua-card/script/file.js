// For the form validation I will use REGEX

// Found these regex from the internet
const regexName = /^\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+$/; // link: https://regexr.com/3f8cm
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // link: https://medium.com/@sketch.paintings/email-validation-with-javascript-regex-e1b40863ed23
const regexTel = /^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?[-.\s]?)?(\d[-.\s]?){6,9}\d$/; // link: https://www.reddit.com/r/GoogleForms/comments/1egqyxn/help_with_regex_validation_for_worldwide_email/?tl=it

const inputMessages = ["La tua mail è sbagliata", "Telefono obbligatorio", "Devi accettare le condizioni di utilizzo"];

const form = document.querySelector("#modulo > form");
const inputName = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const inputTel = document.querySelector("#tel");
const privacyCheckBox = document.querySelector("#privacy");
const privacyErrorSpan = document.querySelector("#privacy~span"); // To put the error message of the checkbox

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isNameValid = validateField(inputName, regexName, "Nome obbligatorio", "Il tuo nome è invalido");
    const isEmailValid = validateField(inputEmail, regexEmail, "Email obbligatoria", "La tua mail è sbagliata");
    const isTelValid = validateField(inputTel, regexTel, "Telefono obbligatorio", "Il telefono è sbagliato");
    const isPrivacyChecked = validatePrivacyCheckbox(privacyCheckBox);


    if (isNameValid && isEmailValid && isTelValid && isPrivacyChecked) {
        showCard(inputName.value, inputEmail.value, inputTel.value);
    }
});

function validateField(input, regex, emptyMsg, invalidMsg) {
    const errorSpan = input.nextElementSibling;
    const value = input.value.trim();

    if (value === "") {
        errorSpan.textContent = emptyMsg;
        return false;
    }
    if (!regex.test(value)) {
        errorSpan.textContent = invalidMsg;
        return false;
    }

    errorSpan.textContent = "";
    return true;
}


function validatePrivacyCheckbox(checkbox) {
    if (!checkbox.checked) {
        privacyErrorSpan.textContent = "Devi accettare le condizioni d'uso";
        return false;
    }
    
    privacyErrorSpan.textContent = "";
    return true;
}

function showCard(name, email, tel) {
    const formCtn = document.querySelector("#modulo");
    const cardCtn = document.querySelector("#card");

    const cardName = document.querySelector(".nome > span");
    const cardEmail = document.querySelector(".mail > span");
    const cardTel = document.querySelector(".phone > span");

    const cardImg = document.querySelector("#card > img");
    
    formCtn.style.display = "none";
    cardCtn.style.display = "block";

    cardImg.src = "immagini/" + (Math.floor(Math.random()*4) + 1)+ ".png";
    cardName.innerHTML = name;
    cardEmail.innerHTML = email;
    cardTel.innerHTML = "+ 39 " + tel;
}