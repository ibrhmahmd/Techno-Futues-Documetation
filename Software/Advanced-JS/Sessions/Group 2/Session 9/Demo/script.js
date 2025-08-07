// Main container
const app = document.getElementById('app');



// 1. Create header
const header = document.createElement('h1');
header.className = 'text-center my-4';
header.textContent = 'Simple Task Manager';
app.appendChild(header);



// 2. Create card
const card = document.createElement('div');
card.className = 'card mx-auto';
card.style.maxWidth = '500px';



// Card header
const cardHeader = document.createElement('div');
cardHeader.className = 'card-header';

const cardTitle = document.createElement('h5');
cardTitle.className = 'card-title mb-0';
cardTitle.textContent = 'Add New Task';

cardHeader.appendChild(cardTitle);




// Card body
const cardBody = document.createElement('div');
cardBody.className = 'card-body';



// Input group
const inputGroup = document.createElement('div');
inputGroup.className = 'input-group mb-3';



// Task input
const taskInput = document.createElement('input');
taskInput.type = 'text';
taskInput.className = 'form-control';
taskInput.placeholder = 'Enter task...';
taskInput.id = 'taskInput';



// Add button
const addButton = document.createElement('button');
addButton.className = 'btn btn-primary';
addButton.id = 'addTask';

const addIcon = document.createElement('i');
addIcon.className = 'fas fa-plus';

addButton.appendChild(document.createTextNode(' '));
addButton.appendChild(addIcon);
addButton.appendChild(document.createTextNode(' Add'));



// Task list
const taskList = document.createElement('div');
taskList.id = 'taskList';



// Assemble input group
inputGroup.appendChild(taskInput);
inputGroup.appendChild(addButton);



// Assemble card
cardBody.appendChild(inputGroup);
cardBody.appendChild(taskList);



// Assemble card
card.appendChild(cardHeader);
card.appendChild(cardBody);
app.appendChild(card);










// 3. Theme toggle button
const themeBtn = document.createElement('button');
themeBtn.className = 'btn btn-sm btn-outline-secondary position-fixed top-0 end-0 m-3';

const themeIcon = document.createElement('i');
themeIcon.className = 'fas fa-moon';

themeBtn.appendChild(themeIcon);
themeBtn.appendChild(document.createTextNode(' Toggle Theme'));
app.appendChild(themeBtn);




// 4. Task counter
const counter = document.createElement('div');
counter.className = 'text-center mt-3';
counter.id = 'taskCounter';



// Assemble card
counter.textContent = 'No tasks yet';
app.appendChild(counter);



// Theme toggle functionality
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('bg-dark');
  document.body.classList.toggle('text-white');
  card.classList.toggle('bg-dark');
  
  if (document.body.classList.contains('bg-dark')) {
    themeIcon.className = 'fas fa-sun';
    themeBtn.lastChild.textContent = ' Light Mode';
  } else {
    themeIcon.className = 'fas fa-moon';
    themeBtn.lastChild.textContent = ' Dark Mode';
  }
});


// Task management
let taskCount = 0;

function updateCounter() {
  counter.textContent = taskCount === 0 ? 'No tasks yet' : `${taskCount} task${taskCount > 1 ? 's' : ''} remaining`;
}


function addTask(text) {
  if (!text.trim()) return;
  
  const taskId = Date.now();
  const taskItem = document.createElement('div');
  taskItem.className = 'd-flex justify-content-between align-items-center p-2 border-bottom';
  taskItem.id = `task-${taskId}`;
  
  // Create task content
  const taskContent = document.createElement('div');
  taskContent.className = 'form-check';
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'form-check-input';
  checkbox.id = `check-${taskId}`;
  
  const label = document.createElement('label');
  label.className = 'form-check-label';
  label.htmlFor = `check-${taskId}`;
  label.textContent = text;
  
  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-sm btn-outline-danger';
  const trashIcon = document.createElement('i');
  trashIcon.className = 'fas fa-trash';
  deleteBtn.appendChild(trashIcon);
  

  

  // Assemble task item
  taskContent.appendChild(checkbox);
  taskContent.appendChild(label);
  taskItem.appendChild(taskContent);
  taskItem.appendChild(deleteBtn);
  




  // Toggle task completion
  checkbox.addEventListener('change', () => {
    label.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    taskCount += checkbox.checked ? -1 : 1;
    updateCounter();
  });
  
  // Delete task
  deleteBtn.addEventListener('click', () => {
    if (!checkbox.checked) taskCount--;
    taskItem.remove();
    updateCounter();
  });
  
  taskList.appendChild(taskItem);
  taskCount++;
  updateCounter();
  taskInput.value = '';
  taskInput.focus();
}







// Add task on button click
addButton.addEventListener('click', () => {
  addTask(taskInput.value);
});


// Add task on Enter key
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask(taskInput.value);
  }
});





// Initialize
updateCounter();