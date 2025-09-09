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

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let nameTrim = regexName.test(inputName.value.trim());
    let emailTrim = regexEmail.test(inputEmail.value.trim());
    let telTrim = regexTel.test(inputTel.value.trim());

    checkName(nameTrim, inputName);
    checkEmail(emailTrim, inputEmail);
    checkTel(telTrim, inputTel);

});

function checkName(checkName, name){
    if(name.value == ""){
        name.nextElementSibling.innerHTML = "Nome obbligatorio";
    } else if(checkName == false){
        name.nextElementSibling.innerHTML = "Il tuo nome è invalido";
    } else {
        name.nextElementSibling.innerHTML = "";
    }
}


function checkEmail(checkEmail, mail){
    if(mail.value == ""){
        mail.nextElementSibling.innerHTML = "Email obbligatoria";
    } else if(checkEmail == false){
        mail.nextElementSibling.innerHTML = "La tua mail è sbagliata";
    } else {
        mail.nextElementSibling.innerHTML = "";
    }
}

function checkTel(checkTel, phone){
    if(phone.value == ""){
        phone.nextElementSibling.innerHTML = "Telefono obbligatorio";
    } else if(checkTel == false){
        phone.nextElementSibling.innerHTML = "Il telefono è sbagliato";
    } else {
        phone.nextElementSibling.innerHTML = "";
    }
}

function showCard(name, email, tel) {
    const formCtn = document.querySelector("#modulo");
    const cardCtn = document.querySelector("#card");

    formCtn.style.display = "none";
    cardCtn.style.display = "block";

    const cardName = document.querySelector(".nome > span");
    const cardEmail = document.querySelector(".mail > span");
    const cardTel = document.querySelector(".phone > span");

    const cardImg = document.querySelector("#card > img");

    cardImg.src = "immagini/" + (Math.floor(Math.random()*4) + 1)+ ".png";
    cardName.innerHTML = name;
    cardEmail.innerHTML = email;
    cardTel.innerHTML = "+ 39 " + tel;
}