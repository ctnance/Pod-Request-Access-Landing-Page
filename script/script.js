function validateEmail(inputText) {
    var emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    if (!inputText.match(emailformat)) {
        // Email is not valid
        var emailError = document.getElementById("email-error");
        emailError.style.display = "block";
        return false;
    }
    // Email is valid
    return true;
}