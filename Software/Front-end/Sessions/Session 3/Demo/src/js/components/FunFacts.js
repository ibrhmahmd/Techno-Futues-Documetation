// FunFacts.js - dynamically creates a simple "Fun Facts" section at the end of the page

document.addEventListener('DOMContentLoaded', () => {
  const facts = [
    'Fact One 1',
    'Fact Two 2',
    'Fact Three 3',
    'Fact Four 4',
    'Fact Five 5'
  ];

  // Build section elements
  const container = document.createElement('div');
  container.className = 'container text-center my-4';

  const factPara = document.createElement('p');
  factPara.id = 'fact';
  factPara.className = 'fs-5 mb-3';
  factPara.textContent = 'Click the button to learn a fun fact!';
  container.appendChild(factPara);

  const btn = document.createElement('button');
  btn.id = 'factBtn';
  btn.className = 'btn btn-success';
  btn.textContent = 'Surprise Fact';
  container.appendChild(btn);

  // Append at end of body
  document.body.appendChild(container);

  btn.addEventListener('click', () => {
    const random = facts[Math.floor(Math.random() * facts.length)];
    factPara.textContent = random;
  });
});
