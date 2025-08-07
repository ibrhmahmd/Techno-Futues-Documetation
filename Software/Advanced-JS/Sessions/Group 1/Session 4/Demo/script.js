





let paragraph = document.getElementById('test');

paragraph.style.borderWidth= '5px';
paragraph.style.borderColor = 'blue';
paragraph.style.padding= '10px';
paragraph.style.borderStyle= 'solid'





let header = document.createElement('header');

header.style.width = '100%';
header.style.border = '5px solid black';




let h1 = document.createElement('h1');

h1.innerText='mywebsite';

header.appendChild(h1);




document.body.insertBefore(header, document.body.firstChild);






    let btn = document.getElementById('submit');



    btn.addEventListener('click', function(){




        let username = document.getElementById('username');
        let password = document.getElementById('password');
        
        
        if (password.value == '' ){
            alert("password can not be empty");
        }
        
        else if (username.value === ''){
            alert("username can not be empty")
        }
        
    
    });































// // Function to style all items
// function styleItems() {
//     const items = document.querySelectorAll('.items');

//     items.forEach(item => {
//         item.style.color = 'white';
//         item.style.fontSize = '20px';
//         item.style.fontWeight = 'bold';
//         item.style.textAlign = 'center';
//         item.style.backgroundColor = '#333';
//         item.style.padding = '10px';
//         item.style.margin = '10px';
//         item.style.borderRadius = '5px';
//         item.style.border = '1px solid #555';
//     });
// }







// // Function to create and load header
// function loadHeader() {


//     // Create header element
//     const header = document.createElement('header');





//     header.style.backgroundColor = '#333';
//     header.style.color = 'white';
//     header.style.padding = '1rem';
//     header.style.textAlign = 'center';
//     header.style.marginBottom = '2rem';
//     header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';


//     // Create title
//     const title = document.createElement('h1');
//     title.textContent = 'My Dynamic Page';
//     title.style.margin = '0';



//     // Append title to header
//     header.appendChild(title);


    
//     // Insert header at the beginning of the body
//     document.body.insertBefore(header, document.body.firstChild);
// }









// function loadFooter() {
//     const footer = document.createElement('footer');
//     footer.style.backgroundColor = '#333';
//     footer.style.color = 'white';
//     footer.style.padding = '1rem';
//     footer.style.textAlign = 'center';
//     footer.style.marginBottom = '2rem';
//     footer.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';



//     const credits = document.createElement('credits');
//     credits.textContent = 'Created by me';
//     footer.appendChild(credits);

//     document.body.appendChild(footer);


// }
































// // Real-life example: Adding a notification message
// function showNotification(message, type = 'info') {
//     // Create the notification element
//     const notification = document.createElement('div');
//     notification.className = `notification ${type}`;
//     notification.textContent = message;

//     // Create close button
//     const closeBtn = document.createElement('button');
//     closeBtn.textContent = '×';
//     closeBtn.className = 'close-btn';
//     notification.appendChild(closeBtn);

//     // Add to page
//     document.body.insertBefore(notification, document.body.firstChild);

//     // Remove after 5 seconds
//     setTimeout(() => notification.remove(), 5000);

//     // Close button click handler
//     closeBtn.onclick = () => notification.remove();
// }



















// // Usage
// showNotification('Your changes have been saved!', 'success');
// showNotification('Please check your input', 'error');












// // Initialize the page
// loadHeader();
// styleItems();
// loadFooter();