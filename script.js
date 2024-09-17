document.addEventListener("DOMContentLoaded", function() {
    const signInButton = document.getElementById('signInButton');
    const customAlert = document.getElementById('customAlert');
    const closeAlertButton = document.getElementById('closeAlert');

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');

    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');

    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            nameError.style.display = 'block';
            return false;
        } else {
            nameError.style.display = 'none';
            return true;
        }
    }

    function validatePhone() {
        if (phoneInput.value.trim() === '' || !/^\d{10}$/.test(phoneInput.value)) {
            phoneError.textContent = 'Valid 10-digit phone number is required';
            phoneError.style.display = 'block';
            return false;
        } else {
            phoneError.style.display = 'none';
            return true;
        }
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Valid email is required';
            emailError.style.display = 'block';
            return false;
        } else {
            emailError.style.display = 'none';
            return true;
        }
    }

    function validateForm() {
        const isNameValid = validateName();
        const isPhoneValid = validatePhone();
        const isEmailValid = validateEmail();

        return isNameValid && isPhoneValid && isEmailValid;
    }

    function showAlert() {
        customAlert.classList.add('show');
    }

    function hideAlert() {
        customAlert.classList.remove('show');
    }

    signInButton.addEventListener('click', function() {
        if (validateForm()) {
            showAlert();
        }
    });

    closeAlertButton.addEventListener('click', function() {
        hideAlert();
    });
});
