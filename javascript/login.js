alert("JS Connected!")

const form = document.querySelector(".needs-validation");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validation
    if (email === "") {
        alert("Please enter your email");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email");
        return;
    }

    if (password === "") {
        alert("Please enter your password");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }


    // Demo users
    const users = [
        {
            email: "yash@gmail.com",
            password: "yash123"
        },
        {
            email: "user@gmail.com",
            password: "user123"
        },
        {
            email: "admin@gmail.com",
            password: "admin123"
        }
    ];


    // Check user
    const validUser = users.find(function (user) {

        return user.email === email &&
               user.password === password;

    });


    if (validUser) {

        alert("Login successful!");

        window.location.href = "index.html";

    } else {

        alert("Invalid email or password");

    }

});


// Show / Hide Password

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.innerHTML =
            '<i class="bi bi-eye-slash"></i>';

    } else {

        password.type = "password";

        togglePassword.innerHTML =
            '<i class="bi bi-eye"></i>';

    }

});