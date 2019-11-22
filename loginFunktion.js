// Koden skal opnå at 
var registerName = document.getElementById('registername');
var registerPassword = document.getElementById('registerpassword');
var confirmPassword = document.getElementById("confirmpassword");
// storing input from register-form
function register() {
    if(registerPassword.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords stemmer ikke overens!");
    } else {
        localStorage.setItem('registername', registerName.value);
        localStorage.setItem('registerpassword', registerPassword.value);
    }
}

// check if stored data from register-form is equal to entered data in the   login-form
function login() {

    // stored data from the register-form
    var storedName = localStorage.getItem('registername');
    var storedPassword = localStorage.getItem('registerpassword');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPassword = document.getElementById('userPassword');

    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedName && userPassword.value == storedPassword) {
        window.location = ("forsiden.html")
    }else {
        alert('ERROR.');
    }
}