// Phase 1: Inject Required Stylesheets

// Inject FooterStyles.css if not present
let footerCss = document.querySelector('link[href="FooterStyles.css"]');

if (!footerCss) {
  let link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'FooterStyles.css';
  document.head.appendChild(link);
}




// Inject Font Awesome CDN if not present
let faLink = document.querySelector('link[href*="font-awesome"]');

if (! faLink) {
  let fa = document.createElement('link');
  fa.rel = 'stylesheet';  
  fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
  fa.crossOrigin = 'anonymous';
  fa.referrerPolicy = 'no-referrer';
  document.head.appendChild(fa);
}




// Phase 2: Build Footer Structure with JS DOM

// Main footer container
var footer = document.createElement('div');
footer.classList.add('footer');

// Footer content
var footerContent = document.createElement('div');
footerContent.classList.add('footer-content');

// Footer logo section
var footerLogo = document.createElement('div');
footerLogo.classList.add('footer-logo');
var logoImg = document.createElement('img');
logoImg.src = 'assets/chef-preview.png';
logoImg.alt = 'Logo';
footerLogo.appendChild(logoImg);



var logoText = document.createElement('p');
logoText.classList.add('footer-text');
logoText.innerHTML = 'Open an account in minutes,<br>get full financial control for much longer.';
footerLogo.appendChild(logoText);
footerContent.appendChild(footerLogo);





// Footer links section
var footerLinks = document.createElement('div');
footerLinks.classList.add('footer-links');


// Column 1: Company
var col1 = document.createElement('div');
col1.classList.add('footer-column');

var h4_1 = document.createElement('h4');
h4_1.textContent = 'Company';
col1.appendChild(h4_1);


var links1 = [
  { href: 'about.html', icon: 'fa-building', text: 'About' },
  { href: 'policcies.html', icon: 'fa-file-contract', text: 'Terms and Conditions' },
  { href: '#', icon: 'fa-blog', text: 'Blog' },
  { href: 'menu.html', icon: 'fa-utensils', text: 'Menu' },
  { href: '#', icon: 'fa-cogs', text: 'How we work?' }
];
for (var i = 0; i < links1.length; i++) {
  var a = document.createElement('a');
  a.href = links1[i].href;
  a.innerHTML = '<i class="fas ' + links1[i].icon + '"></i> ' + links1[i].text;
  col1.appendChild(a);
}
footerLinks.appendChild(col1);




// Column 2: Links
var col2 = document.createElement('div');
col2.classList.add('footer-column');
var h4_2 = document.createElement('h4');
h4_2.textContent = 'Links';
col2.appendChild(h4_2);
var links2 = [
  { href: 'cheifs.html', icon: 'fa-user-chef', text: 'Chefs' },
  { href: 'services.html', icon: 'fa-concierge-bell', text: 'Services' },
  { href: 'review.html', icon: 'fa-star', text: 'Review' },
  { href: 'policcies.html', icon: 'fa-shield-alt', text: 'policies' },
  { href: '#', icon: 'fa-store-alt', text: 'Restaurant Management' }
];
for (var j = 0; j < links2.length; j++) {
  var a2 = document.createElement('a');
  a2.href = links2[j].href;
  a2.innerHTML = '<i class="fas ' + links2[j].icon + '"></i> ' + links2[j].text;
  col2.appendChild(a2);
}
footerLinks.appendChild(col2);




// Column 3: More
var col3 = document.createElement('div');
col3.classList.add('footer-column');
var h4_3 = document.createElement('h4');
h4_3.textContent = 'More';
col3.appendChild(h4_3);


var links3 = [
  { href: 'home.html', icon: 'fa-home', text: 'Home' },
  { href: '#', icon: 'fa-users', text: 'Customer Engagement' },
  { href: 'recipe.html', icon: 'fa-book-open', text: 'Recipes' }
];
for (var k = 0; k < links3.length; k++) {
  var a3 = document.createElement('a');
  a3.href = links3[k].href;
  a3.innerHTML = '<i class="fas ' + links3[k].icon + '"></i> ' + links3[k].text;
  col3.appendChild(a3);
}
footerLinks.appendChild(col3);

footerContent.appendChild(footerLinks);





// Social icons
var socialIcons = document.createElement('div');
socialIcons.classList.add('social-icons2');
var socials = [
  { href: '#', src: 'assets/facebook.png', alt: 'Facebook' },
  { href: '#', src: 'assets/instagram.png', alt: 'Instagram' },
  { href: '#', src: 'assets/twitter.png', alt: 'Twitter' }
];
for (var s = 0; s < socials.length; s++) {

  var sa = document.createElement('a');
  sa.href = socials[s].href;

  var simg = document.createElement('img');
  simg.src = socials[s].src;
  simg.alt = socials[s].alt;

  sa.appendChild(simg);
  socialIcons.appendChild(sa);
}

footer.appendChild(footerContent);
footer.appendChild(socialIcons);

// Phase 3: Append Footer to Document
document.body.appendChild(footer);



// Copyright footer
var copyright = document.createElement('footer');
copyright.classList.add('footer2');
var cp = document.createElement('p');
cp.innerHTML = '© 2025 Made with ❤️ by Farida Mohamed';

copyright.appendChild(cp);
document.body.appendChild(copyright);