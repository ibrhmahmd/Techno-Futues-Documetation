// Footer.js

// Match Header.js approach: ensure Bootstrap CSS
let CdnLink = document.createElement('link');
CdnLink.rel = 'stylesheet';
CdnLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
document.head.appendChild(CdnLink);




document.addEventListener('DOMContentLoaded', () => {
    // Ensure page stretches full height and footer sticks to bottom
    document.body.style.minHeight = '100vh';
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column';

    // Footer wrapper
    const footerEl = document.createElement('footer');
    footerEl.classList.add('bg-primary', 'text-white', 'py-3', 'mt-auto');

    // Container like Header.js
    const container = document.createElement('div');
    container.classList.add(
        'container-fluid',
        'd-flex',
        'justify-content-between',
        'align-items-center'
    );

    // Left text
    const leftText = document.createElement('small');
    leftText.classList.add('mb-0');
    leftText.textContent = ' 2025 Front App';

    // Right links
    const linksWrap = document.createElement('div');

    const homeLink = document.createElement('a');
    homeLink.href = 'Home.html';
    homeLink.textContent = 'Home';
    homeLink.classList.add('text-white', 'text-decoration-none', 'me-3');

    const contactLink = document.createElement('a');

    contactLink.href = '#';
    contactLink.textContent = 'Contact';
    contactLink.classList.add('text-white', 'text-decoration-none');

    linksWrap.appendChild(homeLink);
    linksWrap.appendChild(contactLink);

    // Simple Fun Facts embedded inside footer
    const facts = ['Fact One 1', 'Fact Two 2', 'Fact Three 3', 'Fact Four 4', 'Fact Five 5'];
    const funWrap = document.createElement('div');
    funWrap.classList.add('d-flex', 'align-items-center', 'gap-2');

    const factPara = document.createElement('small');
    factPara.id = 'footer-fact';
    factPara.classList.add('mb-0');
    factPara.textContent = 'Click for a fun fact!';

    const factBtn = document.createElement('button');
    factBtn.type = 'button';
    factBtn.id = 'footerFactBtn';
    factBtn.classList.add('btn', 'btn-light', 'btn-sm');
    factBtn.textContent = 'Next Fact >';

    funWrap.appendChild(factPara);
    funWrap.appendChild(factBtn);

    factBtn.addEventListener('click', () => {
        const random = facts[Math.floor(Math.random() * facts.length)];
        factPara.textContent = random;
    });

    // Assemble
    container.appendChild(leftText);
    container.appendChild(funWrap);
    container.appendChild(linksWrap);
    footerEl.appendChild(container);

    // Inject at end of body
    document.body.appendChild(footerEl);
});