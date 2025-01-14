document.addEventListener('DOMContentLoaded', function () {
    // Login Form Validation
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            const username = document.getElementById('login-username').value.trim();
            const password = document.getElementById('login-password').value.trim();

            if (username === '' || password === '') {
                alert('Please fill in both Username and Password fields.');
                event.preventDefault(); // Prevent form submission
            } else {
                // Example: Simulate login success
                alert('Login successful!');
                window.location.href = 'dashboard.html'; // Redirect to dashboard
            }
        });
    }

    // Signup Form Validation
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            const username = document.getElementById('signup-username').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const password = document.getElementById('signup-password').value.trim();
            const confirmPassword = document.getElementById('signup-confirm-password').value.trim();

            if (username === '' || email === '' || password === '' || confirmPassword === '') {
                alert('Please fill in all fields.');
                event.preventDefault();
            } else if (password !== confirmPassword) {
                alert('Passwords do not match.');
                event.preventDefault();
            } else if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                event.preventDefault();
            } else {
                // Example: Simulate signup success
                alert('Signup successful! Redirecting to Login...');
                window.location.href = 'login.html'; // Redirect to login page
            }
        });
    }
});
