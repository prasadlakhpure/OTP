function validateForm() {
    let fullNameInput = document.getElementById('fullName');
    let fullName = fullNameInput.value.trim();

    // Regular expression to validate full name (two words, each with min 4 chars)
    let fullNameRegex = /^[A-Za-z]{4,}(?: [A-Za-z]{4,})+$/;

    if (!fullNameRegex.test(fullName)) {
        document.getElementById('nameError').textContent = 'Please enter a valid full name(min two words, each with min 4 characters)';
        fullNameInput.focus();
        return false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    let emailInput = document.getElementById('email');
    let email = emailInput.value.trim();

    // Regular expression for email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        emailInput.focus();
        return false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    let panInput = document.getElementById('pan');
    let pan = panInput.value.trim();

    // PAN format validation using pattern attribute
    if (pan.length !== 10) {
        document.getElementById('panError').textContent = 'PAN should be exactly 10 characters long';
        panInput.focus();
        return false;
    } else {
        document.getElementById('panError').textContent = '';
    }

    // Other PAN validations (like alphanumeric and specific format) can be added here

    // Additional validations can be added for loan amount, etc.

    generateOtp()
    return true;

}


let chances = 0;

function generateOtp() {
    var mainOtp = Math.round(Math.random() * 20000) + 20000;
    localStorage.setItem("mainOtp", mainOtp);
    alert(mainOtp);
    window.location.assign("confirm.html");
}