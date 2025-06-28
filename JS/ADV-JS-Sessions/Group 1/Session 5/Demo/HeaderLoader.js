

let header = document.createElement('header');
header.style.height = '200px';
header.style.display = 'flex';




let logo = document.createElement('div');


let nav = document.createElement('nav');







header.appendChild(logo);


header.appendChild(nav);



let h1 = document.createElement('h1');

logo.appendChild(h1);



let ul = document.createElement('ul');

nav.appendChild(ul);



























document.body.insertBefore(header, document.body.firstChild);