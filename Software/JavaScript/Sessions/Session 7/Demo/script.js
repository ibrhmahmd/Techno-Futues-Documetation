// Session 7 Demo: Events & Event Handling

// Event types: click and mouseover
const btn = document.getElementById('btn');
btn.onclick = function() {
  alert('Button clicked!');
};

const box = document.getElementById('box');
box.addEventListener('mouseover', function() {
  box.style.background = 'yellow';
});
box.addEventListener('mouseout', function() {
  box.style.background = '#eee';
});

// Event object: keydown
const keyInput = document.getElementById('keyInput');
keyInput.addEventListener('keydown', function(event) {
  console.log('Key pressed:', event.key);
});

// Event delegation
const list = document.getElementById('list');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    alert('Item: ' + e.target.textContent);
  }
});

// Practical exercise: change background color
const colorBtn = document.getElementById('colorBtn');
colorBtn.onclick = function() {
  document.body.style.background = '#e0ffe0';
};