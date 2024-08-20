document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');
    const inputs = form.querySelectorAll('input');
    const nextButton = document.getElementById('next-button');
    const errorMessage = document.getElementById('error-message');

    function validateForm() {
        let isValid = true;
        errorMessage.textContent = '';

        inputs.forEach(input => {
            input.classList.remove('error');
            if (input.value.trim() === '') {
                input.classList.add('error');
                isValid = false;
            }
        });

        const password = document.getElementById('password').value;
        const passwordCriteria = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

        if (!passwordCriteria.test(password)) {
            document.getElementById('password').classList.add('error');
            errorMessage.textContent = 'Password must be at least 8 characters long, with an uppercase letter, a number, and a special character.';
            isValid = false;
        }

        const confirmPassword = document.getElementById('confirm-password').value;
        if (password !== confirmPassword) {
            document.getElementById('confirm-password').classList.add('error');
            errorMessage.textContent = 'Passwords do not match.';
            isValid = false;
        }

        nextButton.disabled = !isValid;
        return isValid;
    }

    form.addEventListener('input', validateForm);

    nextButton.addEventListener('click', function () {
        if (validateForm()) {
            window.location.href = "login.html";
        } else {
            errorMessage.textContent = 'Please fill out all fields correctly.';
        }
    });
});
