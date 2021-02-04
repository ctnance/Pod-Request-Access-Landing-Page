function validateEmail(inputText) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (!inputText.match(mailformat)) {
        // Email is not valid
        var emailError = document.getElementById("email-error");
        emailError.style.display = "block";
        return false;
    }
    // Email is valid
    return true;
}

// document.getElementById("submit").addEventListener("click", validateEmail(document.getElementById("email").value));