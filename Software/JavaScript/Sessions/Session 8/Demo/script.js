// Session 8 Demo: Forms & Input Validation

// Get form and input elements
const form = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const agreeTermsInput = document.getElementById('agreeTerms');

// Username validation
function validateUsername() {
  const username = usernameInput.value.trim();
  const usernameError = document.getElementById('usernameError');

  if (username === '') {
    usernameError.textContent = 'Username is required';
    return false;
  }

  if (username.length < 3) {
    usernameError.textContent = 'Username must be at least 3 characters long';
    return false;
  }

  usernameError.textContent = '';
  return true;
}

// Email validation
function validateEmail() {
  const email = emailInput.value.trim();
  const emailError = document.getElementById('emailError');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '') {
    emailError.textContent = 'Email is required';
    return false;
  }

  if (!emailRegex.test(email)) {
    emailError.textContent = 'Invalid email format';
    return false;
  }

  emailError.textContent = '';
  return true;
}

// Password validation
function validatePassword() {
  const password = passwordInput.value;
  const passwordError = document.getElementById('passwordError');

  if (password === '') {
    passwordError.textContent = 'Password is required';
    return false;
  }

  if (password.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long';
    return false;
  }

  if (!/[A-Z]/.test(password)) {
    passwordError.textContent = 'Password must contain at least one uppercase letter';
    return false;
  }

  if (!/[0-9]/.test(password)) {
    passwordError.textContent = 'Password must contain at least one number';
    return false;
  }

  passwordError.textContent = '';
  return true;
}

// Terms agreement validation
function validateTerms() {
  return agreeTermsInput.checked;
}

// Real-time validation on input
usernameInput.addEventListener('input', validateUsername);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

// Form submission validation
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const isUsernameValid = validateUsername();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const areTermsAgreed = validateTerms();

  if (isUsernameValid && isEmailValid && isPasswordValid && areTermsAgreed) {
    console.log('Form submitted successfully!');
    console.log('Username:', usernameInput.value);
    console.log('Email:', emailInput.value);
    // In a real app, you would send this data to a server
  } else {
    console.log('Please correct the form errors.');
  }
});
