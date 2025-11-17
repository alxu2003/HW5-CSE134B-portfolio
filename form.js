let first = document.getElementById("first-name");
let last = document.getElementById("last-name");
let email = document.getElementById("email");
let comments = document.getElementById("comments");
let submit = document.querySelector('input[type="submit"]');
let errorOutput = document.getElementById("error");
let infoOutput = document.getElementById("info");
let counter = document.getElementById("char-limit");
let errorTimeout;

let formErrorsField = document.getElementById("form-errors");
let formErrors = [];

function showError(errorMsg, infoMsg) {
    errorOutput.value = errorMsg;
    infoOutput.value = infoMsg;

    // Clear any previous timeout so messages don't overlap
    clearTimeout(errorTimeout);

    // Make the messages disappear after 2 seconds
    errorTimeout = setTimeout(() => {
        errorOutput.value = "";
        infoOutput.value = "";
    }, 2000);
}

function validateForm(event) {
    const field = event.target;

    const firstNameError = "Error in First Name field";
    const lastNameError = "Error in Last Name field";
    const emailError = "Error in Email field";
    const commentError = "Error in Comment field";
    const patternError = "Please enter only letters, spaces, hyphens, and apostrophes."
    const fiftyError = "Please enter a max of 50 characters";

    if (field === first) {
        if (first.validity.patternMismatch) {
            first.setCustomValidity(patternError);
            showError(firstNameError, patternError);
        } else if (first.validity.tooLong){
            first.setCustomValidity(fiftyError);
            showError(firstNameError, fiftyError);
        } else {
            first.setCustomValidity("");
        }
    }


    else if (field === last) {
        if (last.validity.patternMismatch) {
            last.setCustomValidity(patternError);
            showError(lastNameError, patternError);
        } else if (last.validity.tooLong){
            last.setCustomValidity(fiftyError);
            showError(lastNameError, fiftyError);
        } else {
            last.setCustomValidity("");
        }
    }


    else if (field === email) {
        if (email.validity.valid) {
            email.setCustomValidity("");
        } else {
            showError(emailError, "Please enter a valid email address.");
        }
    }

    else if (field === submit) {
        if(!first.checkValidity()){
            let error = {
                field: first.id,
                value: first.value
            }
            if (first.validity.patternMismatch) {
                error.message = "Special characters";
            } else if (first.validity.tooLong){
                error.message = "Too long";
            } else {
                error.message = "Empty";
            }
            formErrors.push(error);
            console.log(formErrors);
        }

        if(!last.checkValidity()){
            let error = {
                field: last.id,
                value: last.value
            }
            if (last.validity.patternMismatch) {
                error.message = "Special characters";
            } else if (last.validity.tooLong){
                error.message = "Too long";
            } else {
                error.message = "Empty";
            }
            formErrors.push(error);
            console.log(formErrors);
        }

        if (!email.validity.valid) {
            let error = {
                field: email.id,
                value: email.value,
                message: "Invalid email"
            }
            formErrors.push(error);
            console.log(formErrors);
        }

        if(!comments.validity.valid) {
            let error = {
                field: comments.id,
                value: comments.value,
                message: "Empty"
            }
            formErrors.push(error);
            console.log(formErrors);
        }
        formErrorsField.value = JSON.stringify(formErrors);
        console.log(formErrorsField.value);
    }
 }




first.addEventListener("input", validateForm);
last.addEventListener("input", validateForm);
email.addEventListener("input", validateForm);
comments.addEventListener("input", validateForm);

counter.textContent = `${comments.maxLength}/${comments.maxLength}`;
comments.addEventListener("input", () => {
    const remaining = comments.maxLength - comments.value.length;
    counter.textContent = `${remaining}/${comments.maxLength}`;
    if (remaining <= 20) {
        counter.classList.add("warning");
    } else {
        counter.classList.remove("warning");
    }
});
submit.addEventListener("click", validateForm);
