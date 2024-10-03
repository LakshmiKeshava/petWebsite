const openSignup = document.getElementById('openSignup');
const closeSignup = document.getElementById('closeSignup');
const signupModal = document.getElementById('signupModal');

openSignup.addEventListener('click', () => {
    signupModal.style.display = 'flex';
});

closeSignup.addEventListener('click', () => {
    signupModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === signupModal) {
        signupModal.style.display = 'none';
    }
});

const openLogin = document.getElementById('openLogin');
const closeLogin = document.getElementById('closeLogin');
const loginModal = document.getElementById('loginModal');

openLogin.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

closeLogin.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    document.querySelectorAll('.error-message').forEach(error => error.textContent = '');

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const terms = document.getElementById('terms').checked;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    let isValid = true;

    if (!username) {
        document.getElementById('usernameError').textContent = 'Username is required';
        isValid = false;
    }

    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }

    if (!password) {
        document.getElementById('passwordError').textContent = 'Password is required';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long';
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }

    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid phone number (123-456-7890)';
        isValid = false;
    }

    if (!terms) {
        document.getElementById('termsError').textContent = 'You must agree to the terms and conditions';
        isValid = false;
    }

    if (isValid) {
        alert('Signup successful! Welcome to PetAdopt');
    }
});

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    document.querySelectorAll('.error-message').forEach(error => error.textContent = '');

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let isValid = true;

    if (!emailPattern.test(email)) {
        document.getElementById('loginEmailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }

    if (!password) {
        document.getElementById('loginPasswordError').textContent = 'Password is required';
        isValid = false;
    }

    if (isValid) {
        alert('Login successful! Welcome back to PetAdopt');
    }
});
