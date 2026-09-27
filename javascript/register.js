const form = document.querySelector(".needs-validation");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector('input:not([type])').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const phone = document.querySelector('input[type="tel"]').value.trim();

    const passwords = document.querySelectorAll('input[type="password"]');
    const password = passwords[0].value.trim();
    const confirmPassword = passwords[1].value.trim();

    const terms = document.querySelector("#terms").checked;

    // Full Name
    if (name === "") {
        alert("Please enter your full name");
        return;
    }

    // Email
    if (email === "") {
        alert("Please enter your email");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email");
        return;
    }

    // Phone
    if (phone === "") {
        alert("Please enter your phone number");
        return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        alert("Please enter a valid 10-digit phone number");
        return;
    }

    // Password
    if (password === "") {
        alert("Please enter your password");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    // Confirm Password
    if (confirmPassword === "") {
        alert("Please confirm your password");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Terms
    if (!terms) {
        alert("Please agree to the terms and conditions");
        return;
    }

    alert("Registration successful!");
});