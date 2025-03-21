# JavaScript Module Plan

## Prerequisites
- Completed HTML Module
- Completed CSS Module
- VS Code with JavaScript extensions

## Teaching Approach
Each 3-hour session follows this structure:
- Quick review of previous session and homework check (10 minutes)
- Brief overview of topics for the current session (5 minutes)
- Three cycles of:
  - Instructor demonstration and explanation (20-30 minutes)
  - Student application of concepts (15-20 minutes)
  - Feedback and assistance
- Wrap-up and homework assignment (10 minutes)

## Session 1: JavaScript Introduction & Basic Syntax

### Review & Introduction
- Introduction to the course
- Overview of JavaScript's role in web development
- Brief history of JavaScript

### Part 1: JavaScript Integration Methods
**Instructor Demonstrates:**
- Three ways to add JavaScript:
  - Inline JavaScript with HTML attributes
  - Internal JavaScript with `<script>` tags
  - External JavaScript files with `<script src="...">`
- Basic syntax elements
- Case sensitivity
- Statements and semicolons

**Students Apply:**
- Create a simple HTML page
- Add JavaScript using all three methods
- Write basic statements
- Test their code in the browser

### Part 2: Console Output & Comments
**Instructor Demonstrates:**
- Using console.log() for debugging
- Browser developer tools console
- Alert() and document.write()
- JavaScript comments (single-line and multi-line)

**Students Apply:**
- Print different types of messages to console
- Use alerts for user notification
- Add proper comments to their code
- Use the browser console to test commands

### Part 3: Debugging Basics
**Instructor Demonstrates:**
- Common syntax errors
- Using the browser console for error messages
- Debugging workflow
- Proper indentation and code formatting

**Students Apply:**
- Debug a provided script with errors
- Format code properly
- Use console to identify and fix problems
- Create a simple web page with working JavaScript

### Homework
- Create a personal introduction page with:
  - External JavaScript file
  - Console messages
  - Alert with welcome message
  - Well-commented code
- Experiment with different console methods (log, warn, error)

## Session 2: Variables, Data Types & Operators

### Review & Introduction
- Review of JavaScript integration methods
- Check homework assignments
- Overview of variables and data types

### Part 1: Variables & Declaration
**Instructor Demonstrates:**
- Variable declaration:
  - `let` for changeable values
  - `const` for constants
  - `var` (older method, with explanation of differences)
- Naming rules and conventions
- Variable reassignment
- Variable scope basics

**Students Apply:**
- Create variables with different declaration types
- Follow proper naming conventions
- Reassign values where appropriate
- Log variables to the console

### Part 2: Data Types
**Instructor Demonstrates:**
- Primary data types:
  - Strings
  - Numbers
  - Booleans
  - Undefined and null
- Using typeof operator
- Type conversion
- Template literals for strings

**Students Apply:**
- Create variables with different data types
- Check types with typeof
- Convert between data types
- Use template literals for string formatting

### Part 3: Operators
**Instructor Demonstrates:**
- Arithmetic operators (+, -, *, /, %)
- Assignment operators (=, +=, -=, etc.)
- Comparison operators (==, ===, !=, !==, >, <, >=, <=)
- Logical operators (&&, ||, !)

**Students Apply:**
- Create expressions using different operators
- Build a simple calculator with arithmetic operators
- Compare values using comparison operators
- Combine conditions with logical operators

### Homework
- Create a script that:
  - Collects user input with prompt()
  - Performs calculations
  - Converts between data types
  - Displays formatted results
- Additional exploration: Try using increment/decrement operators and string methods

## Session 3: Control Flow (Conditionals)

### Review & Introduction
- Review of variables, data types, and operators
- Check homework assignments
- Introduction to conditional statements

### Part 1: If Statements
**Instructor Demonstrates:**
- Basic if statement syntax
- if...else statements
- if...else if...else statements
- Nested conditionals
- Truthy and falsy values

**Students Apply:**
- Create simple condition checks
- Build multi-condition checks
- Implement nested conditionals
- Test with different inputs

### Part 2: Switch Statements
**Instructor Demonstrates:**
- Switch statement syntax
- Case and break
- Default case
- Fall-through behavior
- Comparing switch vs. if/else

**Students Apply:**
- Convert if/else statements to switch
- Create a menu system with switch
- Handle multiple cases
- Use proper break statements

### Part 3: Ternary Operator
**Instructor Demonstrates:**
- Ternary operator syntax (condition ? exprIfTrue : exprIfFalse)
- When to use ternary vs. if/else
- Nested ternary operators (with caution)
- Combining with other operators

**Students Apply:**
- Convert simple if/else to ternary
- Use ternary for variable assignment
- Create conditional displays on a webpage
- Chain multiple conditions

### Homework
- Create a grade calculator that:
  - Takes a numeric score input
  - Uses if/else to determine the letter grade
  - Implements the same logic with switch
  - Uses ternary for pass/fail determination
- Additional exploration: Try implementing a simple login system

## Session 4: Functions & Scope

### Review & Introduction
- Review of conditional statements
- Check homework assignments
- Introduction to functions and scope

### Part 1: Function Basics
**Instructor Demonstrates:**
- Function declaration
- Function expressions
- Parameters and arguments
- Return values
- Calling functions

**Students Apply:**
- Create simple functions
- Pass different arguments
- Return and use values
- Create functions with multiple parameters

### Part 2: Arrow Functions & Default Parameters
**Instructor Demonstrates:**
- Arrow function syntax
- Implicit returns
- Default parameter values
- When to use arrow functions vs. regular functions

**Students Apply:**
- Convert regular functions to arrow functions
- Create functions with default parameters
- Use implicit returns
- Implement functions with varying parameters

### Part 3: Scope & Hoisting
**Instructor Demonstrates:**
- Global scope
- Function scope
- Block scope (let and const)
- Variable hoisting
- Function hoisting

**Students Apply:**
- Create variables in different scopes
- Observe hoisting behavior
- Fix scope-related issues
- Create a small application with proper scope management

### Homework
- Create a calculator library with:
  - Various calculation functions (add, subtract, multiply, etc.)
  - Different function types (declaration, expression, arrow)
  - Proper parameter validation
  - Default parameters where appropriate
- Additional exploration: Try using closures for private variables

## Session 5: Arrays & Array Methods

### Review & Introduction
- Review of functions and scope
- Check homework assignments
- Introduction to arrays

### Part 1: Array Basics
**Instructor Demonstrates:**
- Creating arrays
- Accessing elements with indexes
- Modifying array elements
- Array properties (length)
- Basic array methods (push, pop, shift, unshift)

**Students Apply:**
- Create and modify arrays
- Access array elements
- Change array length
- Add and remove elements from arrays

### Part 2: Array Iteration
**Instructor Demonstrates:**
- Looping through arrays with for loop
- forEach() method
- Finding elements with indexOf() and includes()
- Finding objects with find() and findIndex()

**Students Apply:**
- Loop through arrays using different methods
- Search for elements in arrays
- Create a list display from array data
- Implement a search function

### Part 3: Array Manipulation
**Instructor Demonstrates:**
- Slicing and splicing arrays
- Combining arrays with concat() and spread operator
- Sorting arrays
- Reversing arrays

**Students Apply:**
- Extract portions of arrays
- Combine multiple arrays
- Sort arrays of numbers and strings
- Create a sorting interface for array data

### Homework
- Create a to-do list application that:
  - Stores tasks in an array
  - Allows adding and removing tasks
  - Allows searching for tasks
  - Displays sorted tasks
- Additional exploration: Try implementing filtering and array mapping

## Session 6: Objects & Basic DOM Manipulation

### Review & Introduction
- Review of arrays and array methods
- Check homework assignments
- Introduction to objects and the DOM

### Part 1: Object Basics
**Instructor Demonstrates:**
- Creating objects with object literals
- Accessing and modifying properties
- Methods in objects
- Object property shorthand
- Nested objects

**Students Apply:**
- Create objects with properties and methods
- Access and modify object properties
- Add methods to objects
- Create nested object structures

### Part 2: Introduction to the DOM
**Instructor Demonstrates:**
- What is the DOM?
- Accessing elements:
  - getElementById()
  - querySelector()
  - querySelectorAll()
- DOM tree navigation

**Students Apply:**
- Select elements from a web page
- Store elements in variables
- Navigate between parent and child elements
- Create a simple element selector utility

### Part 3: Basic DOM Manipulation
**Instructor Demonstrates:**
- Modifying content with:
  - innerHTML
  - textContent
- Changing attributes with:
  - setAttribute()
  - getAttribute()
- Styling elements with the style property

**Students Apply:**
- Change text content of elements
- Modify HTML structure
- Update element attributes
- Change element styles dynamically

### Homework
- Create a product display application that:
  - Stores products as objects
  - Displays products on a webpage
  - Allows updating product details
  - Includes styling manipulation
- Additional exploration: Try adding data validation

## Session 7: Events & Event Handling

### Review & Introduction
- Review of objects and DOM manipulation
- Check homework assignments
- Introduction to events

### Part 1: Event Basics
**Instructor Demonstrates:**
- Common event types:
  - click
  - mouseover, mouseout
  - keydown, keyup
  - submit
- Adding event listeners with addEventListener()
- Removing event listeners

**Students Apply:**
- Add click handlers to buttons
- Create hover effects
- Handle keyboard input
- Properly remove event listeners

### Part 2: The Event Object
**Instructor Demonstrates:**
- Event object properties
- Preventing default behavior with preventDefault()
- Stopping propagation with stopPropagation()
- Event delegation

**Students Apply:**
- Access event object properties
- Create a form that prevents default submission
- Implement event delegation for a list
- Handle event bubbling

### Part 3: Practical Event Application
**Instructor Demonstrates:**
- Creating toggles and dropdowns
- Building modal windows
- Implementing keyboard shortcuts
- Form events and validation

**Students Apply:**
- Create a toggle menu
- Build a simple modal
- Add keyboard shortcuts to an application
- Validate form input on events

### Homework
- Create an interactive image gallery that:
  - Shows larger images on click
  - Has prev/next navigation
  - Allows keyboard navigation
  - Includes modal functionality
- Additional exploration: Try adding touch events for mobile

## Session 8: Forms & Input Validation

### Review & Introduction
- Review of events and event handling
- Check homework assignments
- Introduction to form handling

### Part 1: Form Elements Access
**Instructor Demonstrates:**
- Accessing form elements
- Getting input values
- Working with different input types
- Radio buttons and checkboxes
- Select dropdowns

**Students Apply:**
- Access various form elements
- Get and set form values
- Handle different input types
- Create a form data collector

### Part 2: Form Validation
**Instructor Demonstrates:**
- Required field validation
- Pattern validation with regular expressions
- Numeric and date validation
- Custom validation rules
- Displaying validation errors

**Students Apply:**
- Validate required fields
- Implement email validation
- Create password strength validation
- Display error messages

### Part 3: Form Submission & Processing
**Instructor Demonstrates:**
- Handling form submit event
- Collecting and processing form data
- Creating form objects
- Form reset and clearing

**Students Apply:**
- Handle form submission
- Create objects from form data
- Display submitted data
- Implement form reset functionality

### Homework
- Create a registration form that:
  - Has multiple fields with different input types
  - Implements comprehensive validation
  - Displays appropriate error messages
  - Creates a user object on submission
- Additional exploration: Try implementing a multi-step form

## Session 9: Loops & Iteration

### Review & Introduction
- Review of forms and validation
- Check homework assignments
- Introduction to loops and iteration

### Part 1: For Loops
**Instructor Demonstrates:**
- Basic for loop syntax
- Looping through arrays
- Nested for loops
- Loop control with break and continue

**Students Apply:**
- Create basic counting loops
- Loop through array data
- Implement nested loops
- Control loop execution with break/continue

### Part 2: While & Do-While Loops
**Instructor Demonstrates:**
- While loop syntax
- Do-while loop syntax
- Choosing between for and while
- Avoiding infinite loops

**Students Apply:**
- Create while loops for various scenarios
- Implement do-while for user input
- Convert between loop types
- Debug infinite loop issues

### Part 3: Array Iteration Methods
**Instructor Demonstrates:**
- forEach()
- map()
- filter()
- reduce()
- some() and every()

**Students Apply:**
- Transform arrays with map()
- Filter arrays based on conditions
- Reduce arrays to single values
- Check array conditions with some()/every()

### Homework
- Create a data processing application that:
  - Processes an array of objects (e.g., products, users)
  - Provides filtering and searching
  - Creates transformed data sets
  - Calculates statistics from the data
- Additional exploration: Try implementing sorting with custom comparison functions

## Session 10: Advanced DOM Manipulation

### Review & Introduction
- Review of loops and iteration
- Check homework assignments
- Introduction to advanced DOM techniques

### Part 1: Creating & Removing Elements
**Instructor Demonstrates:**
- Creating elements with createElement()
- Adding elements with appendChild() and insertBefore()
- Removing elements with removeChild()
- Replacing elements with replaceChild()

**Students Apply:**
- Create new elements dynamically
- Add elements to the DOM in different positions
- Remove elements based on conditions
- Replace existing content

### Part 2: Working with Classes & Attributes
**Instructor Demonstrates:**
- Managing classes with classList (add, remove, toggle, contains)
- Setting and getting attributes
- Working with data attributes
- Managing styles dynamically

**Students Apply:**
- Toggle element classes
- Work with multiple classes
- Use data attributes for storing information
- Create dynamic styling

### Part 3: DOM Traversal
**Instructor Demonstrates:**
- Parent/child relationships
- Siblings navigation
- Relative positioning
- Finding specific elements from a reference point

**Students Apply:**
- Navigate DOM relationships
- Select elements relative to others
- Create a DOM tree viewer
- Implement DOM traversal utility functions

### Homework
- Create a dynamic content management system that:
  - Allows adding, editing, and removing content
  - Manages content categories with classes
  - Implements drag-and-drop functionality
  - Uses DOM traversal for content relationships
- Additional exploration: Try implementing a tabbed interface component

## Session 11: Error Handling & Browser Storage

### Review & Introduction
- Review of advanced DOM manipulation
- Check homework assignments
- Introduction to error handling and storage

### Part 1: Error Handling
**Instructor Demonstrates:**
- Try...catch...finally syntax
- Error object and properties
- Throwing custom errors
- Error handling strategies

**Students Apply:**
- Implement try/catch blocks
- Create custom error types
- Add error logging
- Build robust error handling

### Part 2: localStorage
**Instructor Demonstrates:**
- What is localStorage
- Setting and getting items
- Storing objects with JSON
- localStorage limitations

**Students Apply:**
- Store and retrieve simple data
- Save and load objects with JSON
- Create a persistent settings system
- Handle localStorage errors

### Part 3: sessionStorage & Cookies
**Instructor Demonstrates:**
- sessionStorage basics
- Cookies introduction
- Choosing the right storage method
- Storage events

**Students Apply:**
- Implement sessionStorage for temporary data
- Create and read basic cookies
- Build a storage manager utility
- Handle cross-tab storage events

### Homework
- Create a note-taking application that:
  - Saves notes to localStorage
  - Provides proper error handling
  - Includes auto-save functionality
  - Allows export and import of notes
- Additional exploration: Try implementing theme preferences with storage

## Session 12: Working with Dates & Timer Functions

### Review & Introduction
- Review of error handling and browser storage
- Check homework assignments
- Introduction to dates and timers

### Part 1: Date Object
**Instructor Demonstrates:**
- Creating Date objects
- Getting date components (year, month, day, etc.)
- Setting date components
- Formatting dates for display

**Students Apply:**
- Create and manipulate dates
- Extract date components
- Calculate date differences
- Format dates in different styles

### Part 2: Timer Functions
**Instructor Demonstrates:**
- setTimeout() for delayed execution
- setInterval() for repeated execution
- clearTimeout() and clearInterval()
- Performance considerations

**Students Apply:**
- Create delayed function execution
- Implement recurring tasks
- Build a countdown timer
- Handle timer cleanup

### Part 3: Practical Timing Applications
**Instructor Demonstrates:**
- Creating animations with timers
- Building a countdown clock
- Implementing debounce and throttle
- Scheduling future actions

**Students Apply:**
- Create a digital clock
- Build an animation using setInterval
- Implement a slideshow with timers
- Add debounce to input handling

### Homework
- Create a productivity timer application that:
  - Includes a countdown timer
  - Has a scheduling feature
  - Shows current date/time information
  - Saves timer history to localStorage
- Additional exploration: Try implementing a calendar view

## Session 13: Introduction to ES6+ Features

### Review & Introduction
- Review of dates and timers
- Check homework assignments
- Introduction to modern JavaScript features

### Part 1: Modern Variable Features
**Instructor Demonstrates:**
- Let and const (review)
- Template literals (review)
- Destructuring assignment
- Spread and rest operators

**Students Apply:**
- Use destructuring for objects and arrays
- Apply spread operator for arrays and objects
- Use rest parameters in functions
- Refactor code to use modern syntax

### Part 2: Modern Function Features
**Instructor Demonstrates:**
- Arrow functions (review)
- Default parameters
- Parameter destructuring
- Method shorthand in objects

**Students Apply:**
- Refactor functions to use modern syntax
- Apply parameter destructuring
- Create objects with method shorthand
- Implement functions with default parameters

### Part 3: Advanced ES6+ Features
**Instructor Demonstrates:**
- Classes and inheritance
- Modules (import/export)
- Promises basics
- Async/await introduction

**Students Apply:**
- Create a class-based structure
- Implement inheritance
- Convert callbacks to promises
- Use async/await for asynchronous operations

### Homework
- Refactor an existing project to use ES6+ features:
  - Convert variables to let/const
  - Use template literals for strings
  - Implement destructuring and spread operators
  - Refactor functions to use arrow syntax and classes
- Additional exploration: Try implementing a simple module system

## Session 14: Final Project - Part 1

### Review & Introduction
- Review of ES6+ features
- Check homework assignments
- Introduction to the final project

### Part 1: Project Planning
**Instructor Demonstrates:**
- Project requirements overview
- Planning the application structure
- Creating wireframes
- Setting up project files

**Students Apply:**
- Choose a project type
- Plan application features
- Sketch basic wireframes
- Set up project file structure

### Part 2: HTML & CSS Structure
**Instructor Demonstrates:**
- Setting up the HTML structure
- Creating the CSS foundation
- Implementing responsive design
- Adding accessibility features

**Students Apply:**
- Create HTML structure for their project
- Implement CSS styling
- Ensure responsive design
- Add proper accessibility attributes

### Part 3: Core JavaScript Functionality
**Instructor Demonstrates:**
- Setting up JavaScript files
- Creating core functionality
- Implementing data structures
- Building the initial logic

**Students Apply:**
- Create JavaScript files and link them
- Implement core data structures
- Build essential functions
- Test basic functionality

### Homework
- Continue developing the project:
  - Complete the HTML structure
  - Finalize the CSS styling
  - Implement remaining core functionality
  - Prepare for adding advanced features

## Session 15: Final Project - Part 2

### Review & Introduction
- Review of project progress
- Check current project status
- Plan for completion

### Part 1: Advanced Features
**Instructor Demonstrates:**
- Adding advanced functionality
- Implementing local storage
- Error handling integration
- Performance optimization

**Students Apply:**
- Add advanced features to their project
- Implement data persistence
- Add comprehensive error handling
- Optimize for performance

### Part 2: Testing & Debugging
**Instructor Demonstrates:**
- Testing methodologies
- Debugging techniques
- Cross-browser compatibility
- Mobile testing

**Students Apply:**
- Test their application thoroughly
- Debug and fix issues
- Ensure cross-browser compatibility
- Test on different devices/screen sizes

### Part 3: Project Presentation
**Instructor Demonstrates:**
- Presenting a project effectively
- Highlighting key features
- Discussing challenges and solutions
- Getting and giving feedback

**Students Apply:**
- Prepare project presentations
- Present their projects to the class
- Give and receive feedback
- Plan future enhancements

### Final JavaScript Module Assessment
Complete a fully functional interactive web application that demonstrates proficiency in JavaScript. The project should:
- Use proper JavaScript syntax and best practices
- Implement several ES6+ features
- Include event handling and DOM manipulation
- Utilize arrays, objects, functions, and loops
- Include form validation if applicable
- Store data using browser storage
- Have a polished user interface
- Run without errors
- Include all resources locally for offline use

## Resources
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [Free Code Camp](https://www.freecodecamp.org/)
- [JavaScript 30](https://javascript30.com/)
- [Can I Use](https://caniuse.com/)
- [JSFiddle](https://jsfiddle.net/)
- [ESLint](https://eslint.org/)