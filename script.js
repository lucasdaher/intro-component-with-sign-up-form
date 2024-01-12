// Inputs
const firstName = document.getElementById('form-firstname');
const lastName = document.getElementById('form-lastname');
const emailAddress = document.getElementById('form-email');
const password = document.getElementById('form-password');

// Button
const button = document.getElementById('btn-claim');

// Form Error
const firstNameError = document.getElementById('form-firstname-error');
const lastNameError = document.getElementById('form-lastname-error');
const emailError = document.getElementById('form-email-error');
const passError = document.getElementById('form-password-error');

// Error Icons
const firstNameIconError = document.getElementById('firstname-error');
const lastNameIconError = document.getElementById('lastname-error');
const emailIconError = document.getElementById('email-error');
const passwordIconError = document.getElementById('password-error');

// Click Event
button.addEventListener('click', e => {
    validateEmailInput();
    validateFirstName();
    validateLastName();
    validatePassword();
});

// Validations
function validateEmailInput() {
    emailValue = emailAddress.value;
     if (emailValue.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailIconError.style.display="none";
        emailAddress.style.border="1px solid #DEDEDE";
        emailAddress.style.color="#3D3B48";
        emailAddress.style.opacity=".75";
        emailError.innerHTML = null;
     } else {
        emailIconError.style.display="block";
        emailAddress.style.border="2px solid #FF7979";
        emailAddress.style.color="#FF7979";
        emailAddress.style.opacity="1";
        emailError.innerHTML = `Looks like this is not an email`
     }
}

function validateFirstName() {
    firstNameValue = firstName.value;
    if (!firstNameValue) {
        firstNameError.innerHTML = `First Name cannot be empty`
        firstNameIconError.style.display="block";
        firstName.style.border="2px solid #FF7979";
        firstName.style.color="#FF7979";
        firstName.style.opacity="1";
    } else {
        firstNameIconError.style.display="none";
        firstName.style.border="1px solid #DEDEDE";
        firstName.style.color="#3D3B48";
        firstName.style.opacity=".75";
        firstNameError.innerHTML = null;
    }
}

function validateLastName() {
    lastNameValue = lastName.value;
    if (!lastNameValue) {
        
        lastNameError.innerHTML = `Last Name cannot be empty`
        lastNameIconError.style.display="block";
        lastName.style.border="2px solid #FF7979";
        lastName.style.color="#FF7979";
        lastName.style.opacity="1";
    } else {
        lastNameIconError.style.display="none";
        lastName.style.border="1px solid #DEDEDE";
        lastName.style.color="#3D3B48";
        lastName.style.opacity=".75";
        lastNameError.innerHTML = null;
    }
}

function validatePassword() {
    passwordValue = password.value;
    if (!passwordValue) {
        passError.innerHTML = `Password cannot be empty`
        passwordIconError.style.display="block";
        password.style.border="2px solid #FF7979";
        password.style.color="#FF7979";
        password.style.opacity="1";
    } else {
        passwordIconError.style.display="none";
        password.style.border="1px solid #DEDEDE";
        password.style.color="#3D3B48";
        password.style.opacity=".75";
        passError.innerHTML = null;
    }
}