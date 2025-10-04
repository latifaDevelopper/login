const form = document.getElementById("signupForm");
const alertBox = document.getElementById("customAlert");
const closeAlert = document.getElementById("closeAlert");

// Validation function
form.addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");

    // Reset errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("emailError").textContent = "";

    // Name validation
    if (name.value.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required";
        isValid = false;
    }

    // Phone validation
    if (phone.value.trim() === "") {
        document.getElementById("phoneError").textContent = "Phone is required";
        isValid = false;
    }

    // Email validation
    if (email.value.trim() === "") {
        document.getElementById("emailError").textContent = "Email is required";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        document.getElementById("emailError").textContent = "Email is invalid";
        isValid = false;
    }

    if (isValid) {
        alertBox.style.display = "flex";
        form.reset();
    }
});

// Close alert
closeAlert.addEventListener("click", () => {
    alertBox.style.display = "none";
});
