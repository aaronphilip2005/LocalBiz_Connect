console.log("Day 5 Login + Signup project loaded successfully.");

function showMessage() {
    const message = document.getElementById("message");

    if (message) {
        message.textContent =
            "Great! Day 5 adds login, signup, password validation and protected pages.";
    }
}

function validateSignupPassword() {
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm_password").value.trim();
    const passwordMessage = document.getElementById("passwordMessage");

    if (password === "" || confirmPassword === "") {
        passwordMessage.textContent = "Please enter both password fields.";
        passwordMessage.style.color = "red";
        return false;
    }

    if (password.length < 6) {
        passwordMessage.textContent = "Password must be at least 6 characters.";
        passwordMessage.style.color = "red";
        return false;
    }

    if (password !== confirmPassword) {
        passwordMessage.textContent = "Passwords do not match.";
        passwordMessage.style.color = "red";
        return false;
    }

    passwordMessage.textContent = "Password looks good.";
    passwordMessage.style.color = "#123c69";
    return true;
}
