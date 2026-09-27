const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("bookingDate").value;
    const people = document.getElementById("people").value;
    const time = document.getElementById("timeSlot").value;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    if (email === "") {
        alert("Please enter your email");
        return;
    }

    if (phone === "") {
        alert("Please enter your phone number");
        return;
    }

    if (date === "") {
        alert("Please select booking date");
        return;
    }

    if (people === "") {
        alert("Please select number of people");
        return;
    }

    if (time === "") {
        alert("Please select time slot");
        return;
    }

    alert("🎉 Table booked successfully!");

    bookingForm.reset();

});