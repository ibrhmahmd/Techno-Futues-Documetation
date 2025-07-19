// Inject Bootstrap CDN if not present
let bsLink = document.querySelector('link[href*="bootstrap"]');
if (!bsLink) {
  let bs = document.createElement('link');
  bs.rel = 'stylesheet';
  bs.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
  document.head.appendChild(bs);
}

// Inject Font Awesome CDN if not present
let faLink = document.querySelector('link[href*="font-awesome"]');
if (!faLink) {
  let fa = document.createElement('link');
  fa.rel = 'stylesheet';
  fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
  fa.crossOrigin = 'anonymous';
  fa.referrerPolicy = 'no-referrer';
  document.head.appendChild(fa);
}





let CDNLINK = document.createElement('link');
CDNLINK.rel = 'stylesheet';
CDNLINK.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';

CDNLINK.crossOrigin = 'anonymous';
CDNLINK.referrerPolicy = 'no-referrer';
CDNLINK.integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" ;

document.head.appendChild(CDNLINK);









document.body.className = 'bg-light text-center p-5';
const container = document.createElement('div');
document.body.appendChild(container);


const btn1 = document.createElement('button');
btn1.textContent = 'Primary';
btn1.className = 'btn btn-primary m-2';


btn1.onclick = function () {
  btn1.classList.toggle('btn-primary');
  btn1.classList.toggle('btn-warning'); // Toggle between blue and yellow

  setTimeout(()=>{
    const alert1 = document.createElement('div');
    alert1.className = 'alert alert-danger my-2';
    alert1.role = 'alert';
    alert1.textContent = 'This is a Failed alert!';
    container.appendChild(alert1);
    
  }, 3000);


};

container.appendChild(btn1);






// Title
const title = document.createElement('h2');
title.textContent = 'Bootstrap & Font Awesome Demo (All JS)';
container.appendChild(title);




// 3 Colorful Bootstrap Buttons with toggle event listeners








const btn2 = document.createElement('button');
btn2.textContent = 'Success';
btn2.className = 'btn btn-success m-2';
btn2.addEventListener('click', function () {
  btn2.classList.toggle('btn-success');
  btn2.classList.toggle('btn-danger'); // Toggle between green and red
});
container.appendChild(btn2);

const btn3 = document.createElement('button');
btn3.textContent = 'Danger';
btn3.className = 'btn btn-danger m-2';

btn3.onclick = function () {
  btn3.classList.toggle('btn-danger');
  btn3.classList.toggle('btn-info'); // Toggle between red and light blue
};
container.appendChild(btn3);




// 3 Font Awesome Icons
const iconRow = document.createElement('div');
iconRow.className = 'my-4';
iconRow.innerHTML = `
  <i class="fas fa-thumbs-up fa-2x text-success m-2"></i>
  <i class="fas fa-star fa-2x text-warning m-2"></i>
  <i class="fas fa-heart fa-2x text-danger m-2"></i>
`;
container.appendChild(iconRow);



// Social Media Icons (Font Awesome)
const socialRow = document.createElement('div');
socialRow.className = 'my-4';
socialRow.innerHTML = `
  <i class="fab fa-facebook fa-2x text-primary m-2"></i>
  <i class="fab fa-instagram fa-2x text-danger m-2"></i>
  <i class="fab fa-twitter fa-2x text-info m-2"></i>
  <i class="fab fa-youtube fa-2x text-danger m-2"></i>
  <i class="fab fa-google fa-2x text-success m-2"></i>
`;
container.appendChild(socialRow);


// 2 Bootstrap Alerts
const alert1 = document.createElement('div');
alert1.className = 'alert alert-warning my-2';
alert1.role = 'alert';
alert1.textContent = 'This is a warning alert!';
container.appendChild(alert1);



const alert2 = document.createElement('div');
alert2.className = 'alert alert-success my-2';
alert2.role = 'alert';
alert2.textContent = 'This is a success alert!';
container.appendChild(alert2);

// Multiple Bootstrap Spinners (different colors)
const spinnerRow = document.createElement('div');
spinnerRow.className = 'my-4';
spinnerRow.innerHTML = `
  <div class="spinner-border text-primary m-2" role="status"><span class="visually-hidden">Loading...</span></div>
  <div class="spinner-border text-success m-2" role="status"><span class="visually-hidden">Loading...</span></div>
  <div class="spinner-border text-danger m-2" role="status"><span class="visually-hidden">Loading...</span></div>
  <div class="spinner-border text-warning m-2" role="status"><span class="visually-hidden">Loading...</span></div>
  <div class="spinner-border text-info m-2" role="status"><span class="visually-hidden">Loading...</span></div>
`;
container.appendChild(spinnerRow);
