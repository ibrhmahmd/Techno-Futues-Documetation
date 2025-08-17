// Login module
import { accounts } from '../data/Data.js';



document.addEventListener('DOMContentLoaded', () => {
    const loginFormContainer = document.getElementById('loginForm');

    /* Build form elements */
    const emailGroup = document.createElement('div');
    emailGroup.className = 'mb-3';

    const emailLabel = document.createElement('label');
    emailLabel.className = 'form-label';
    emailLabel.textContent = 'Email';
    emailLabel.htmlFor = 'emailInput';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.className = 'form-control';
    emailInput.id = 'emailInput';
    emailInput.required = true;

    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(emailInput);

    const passwordGroup = document.createElement('div');
    passwordGroup.className = 'mb-3';

    const passwordLabel = document.createElement('label');
    passwordLabel.className = 'form-label';
    passwordLabel.textContent = 'Password';
    passwordLabel.htmlFor = 'passwordInput';

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.className = 'form-control';
    passwordInput.id = 'passwordInput';
    passwordInput.required = true;

    passwordGroup.appendChild(passwordLabel);
    passwordGroup.appendChild(passwordInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.className = 'btn btn-primary w-100';
    submitButton.textContent = 'Login';

    const form = document.createElement('form');
    form.appendChild(emailGroup);
    form.appendChild(passwordGroup);
    form.appendChild(submitButton);

    form.onsubmit = e => {
        e.preventDefault();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const user = accounts.find(acc => acc.email === email && acc.password === password);

        if (user) {
            
            localStorage.setItem('IsLoggedIn', true);
            localStorage.setItem('UserName', user.username);
            localStorage.setItem('UserImg', user.img);
            
            window.location.href = 'index.html';
        } else {
            alert('Invalid email or password. Please try again.');
            passwordInput.value = '';
        }
    };

    loginFormContainer.appendChild(form);
});



