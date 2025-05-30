/*
 * DIFFERENCE BETWEEN getElementById AND querySelector
 * 
 * getElementById:
 * - Only works with ID selectors
 * - Faster performance
 * - Simpler syntax: document.getElementById('id-name')
 * - Returns null if element not found
 * 
 * querySelector:
 * - Works with any CSS selector (ID, class, tag, attribute, etc.)
 * - More versatile but slightly slower
 * - Syntax: document.querySelector('#id-name') or document.querySelector('.class-name')
 * - Returns the first matching element
 */

//===========================================================
// TOPIC 1: DOM SELECTORS
// Uncomment this section to demonstrate DOM selectors
//===========================================================





// Get element by ID (only works with IDs)
const uniqueElement = document.getElementById('unique-id');
console.log('Element by ID:', uniqueElement.textContent);



// Query selector with ID (note the # symbol)
const sameElement = document.querySelector('#unique-id');
console.log('Same element with querySelector:', sameElement.textContent);



// Query selector with class (note the . symbol)
const firstParagraph = document.querySelector('.demo-class');
console.log('First paragraph:', firstParagraph.textContent);


// Query selector ALL (returns all matches)
const allParagraphs = document.querySelectorAll('.demo-class');
console.log('Number of paragraphs:', allParagraphs.length);


// Loop through all matching elements
allParagraphs.forEach((paragraph, index) => {
    console.log(`Paragraph ${index + 1}:`, paragraph.textContent);
});


// Complex selector (nested elements)
const nestedElement = document.querySelector('.container .nested');
console.log('Nested element:', nestedElement.textContent);







//===========================================================
// TOPIC 2: MODIFYING CONTENT AND STYLES
// Uncomment this section to demonstrate content modification
//===========================================================

/*
const contentBox = document.getElementById('content-box');

// Text content button
document.getElementById('text-btn').addEventListener('click', function() {
    // textContent modifies only text (no HTML)
    contentBox.textContent = 'Changed with textContent';
});

// HTML content button
document.getElementById('html-btn').addEventListener('click', function() {
    // innerHTML allows HTML tags
    contentBox.innerHTML = 'Changed with <strong>innerHTML</strong>';
});

// Style button
document.getElementById('style-btn').addEventListener('click', function() {
    // Direct style manipulation
    contentBox.style.backgroundColor = 'lightblue';
    contentBox.style.color = 'navy';
    contentBox.style.padding = '10px';
    contentBox.style.borderRadius = '5px';
});

// Class toggle button
document.getElementById('class-btn').addEventListener('click', function() {
    // Toggle CSS class
    contentBox.classList.toggle('highlight');
});
*/


//===========================================================
// TOPIC 3: EVENT HANDLING
// Uncomment this section to demonstrate event handling
//===========================================================

/*
const outputDiv = document.getElementById('event-output');

// Click event
document.getElementById('click-me').addEventListener('click', function() {
    outputDiv.textContent = 'Button was clicked!';
});

// Hover events
const hoverBox = document.getElementById('hover-box');

hoverBox.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightgreen';
    outputDiv.textContent = 'Mouse is over the box';
});

hoverBox.addEventListener('mouseout', function() {
    this.style.backgroundColor = 'lightblue';
    outputDiv.textContent = 'Mouse left the box';
});

// Form events
const form = document.getElementById('simple-form');
const nameInput = document.getElementById('name-input');

form.addEventListener('submit', function(event) {
    // Prevent form submission (page reload)
    event.preventDefault();
    outputDiv.textContent = `Form submitted with name: ${nameInput.value}`;
});

nameInput.addEventListener('input', function() {
    outputDiv.textContent = `Currently typing: ${this.value}`;
});
*/
