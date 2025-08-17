// Login module
import { accounts } from '../data/Data.js';



document.addEventListener('DOMContentLoaded', () => {
    const loginFormContainer = document.getElementById('registerForm');

    /* Build form elements */
    const UserNameGroup = document.createElement('div');
    UserNameGroup.className = 'mb-3';

    const UserNameLabel = document.createElement('label');
    UserNameLabel.className = 'form-label';
    UserNameLabel.textContent = 'Username';
    UserNameLabel.htmlFor = 'UserNameInput';

    const UserNameInput = document.createElement('input');
    UserNameInput.type = 'text';
    UserNameInput.className = 'form-control';
    UserNameInput.id = 'UserNameInput';
    UserNameInput.required = true;

    UserNameGroup.appendChild(UserNameLabel);
    UserNameGroup.appendChild(UserNameInput);

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
    submitButton.textContent = 'Register';

    const form = document.createElement('form');
    form.appendChild(UserNameGroup);
    form.appendChild(emailGroup);
    form.appendChild(passwordGroup);
    form.appendChild(submitButton);

    form.onsubmit = e => {
        e.preventDefault();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const emailExists = accounts.find(acc => acc.email === email);

        if (emailExists) {
            alert('User already exists. Please try again.');
            passwordInput.value = '';
        } else {

            const newAccount = {
                email: emailInput.value,
                password: passwordInput.value,
                username: UserNameInput.value,
                img: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
            };
            
            console.log(newAccount);
            accounts.push(newAccount);

            sessionStorage.setItem('IsLoggedIn', true);
            sessionStorage.setItem('UserName', newAccount.username);
            sessionStorage.setItem('UserImg', newAccount.img);

            window.location.href = 'index.html';
        }
    };

    loginFormContainer.appendChild(form);
});



