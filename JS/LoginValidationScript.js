
// function Validation (loginButton, username, password){
    
//     if (loginButton) {
//         loginButton.addEventListener("click", function() {

//             if (username == null || username.length === 0) {
//                 console.log("you have to enter your username");
//             }
            
//             else if (password == null || password.length <= 8) {
//                 console.log("you have to enter your password");
//             }
            
//             else {
//                 console.log("you are logged in");
//             }
            
//         });
//     }
    
//     else {
//         console.error("Login button not found");
//     }
// };






// const loginButton = document.getElementById("loginButton");
// let username = document.getElementById("username").value;
// let password = document.getElementById("password").value;




// Validation(loginButton, username, password);


















function Validation(submitButton, username, password){

    submitButton.addEventListener("click", function() {
    
        if (username.value == null ){
            alert("username id empty");
        }
        else if (password.value == null ){
            alert("password id empty");
        }
        });

    }










const username = document.getElementById("username");

const password = document.getElementById("password");

const submitButton = document.getElementById("submitButton");




Validation(submitButton, username, password);









