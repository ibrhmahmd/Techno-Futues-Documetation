# HTML Course for Juniors

## Index

### Level 1: HTML Fundamentals
- **Session 1**: Web Page Blocks - Basic HTML structure, head and body tags, headers, paragraphs
- **Session 2**: Text Styling and Images - formatting tags, image, attributes
- **Session 3**: Lists and Links - OL, UL, LI, hyperlinks
- **Session 4**: Major Revision and Input Elements - introduction to input tags
- **Session 5**: Forms - Creating forms with input types, labels, and submit button

### Level 2: intro HTML and CSS
- **Session 1**: Div, Span, Semantic Tags and Audio - Container elements, semantic structure, inline styling, audio elements
- **Session 2**: Tables - Creating and styling tables
- **Session 3**: Simple CSS Styling - Introduction to CSS, styling tags
- **Session 4**: CSS Classes - writing CSS classes for reusability
- **Session 5**: Final Project - Building a complete multi-page website with all learned concepts.

---

# Level-1
## Prerequisites
- Basic computer skills
- ability to accept new terminology
- Basic typing ability

## Session 1: Web Page Blocks

### Review & Introduction
- What is a webpage?
- Head and body tags as "brain" and "body" parts
- Headers as "big important titles" (H1-H6)
- Paragraphs as "Sentences" (P)
- mark tag

### Demo: My pet Page
```html
<!DOCTYPE html>
<html>
<head>
    <title>Zaki</title>
</head>
<body>
    <h1>Zaki</h1>
    <p>This is my cat. zaki.</p>
    <p>zaki is gray.<br>
    zaki ate cookies.</p>
</body>
</html>
```

### Activity: "My Favorites" Page
- page about their favorite toy/animal/**sport**
- more of h1, h2, and p tags with new content
- steps to View results in browser

### Wrap-Up
- Review this session tags.
- Preview (Marks) and (images) tags

## Session 2: Text Styling and Images

### Review
- Basic HTML structure
- Headers and paragraphs

### Demo: Text Styling
```html
<h1>My Personal Page</h1>
<p>I am norgina <strong>7 years old</strong> and I <em>love</em> to play Karate.</p>
<p>My favorite subject is <mark>Science</mark></p>

<h2>My Photo</h2>
<img src="Zaki.jpg" width="200" height="150" alt="My pet cat">
<p>This is my <strong>cat</strong> Zaki</p>
```

### Activity: Photo Album
- Add text styles to descriptions (`<strong>, <em>, <mark>, <u>`)
- Insert images with different sizes alt text

### Wrap-Up
- Review text styling tags and image properties
- Preview lists and links for next session

## Session 3: Lists and Links

### Review
- Text styling tags
- Image insertion

### Demo: Lists
```html
<h2>fruites</h2>
<ul>
    <li>oranges</li>
    <li>appels</li>
    <li>banans</li>
</ul>

<h2>cake</h2>
<ol>
    <li>flour</li>
    <li>eggs</li>
    <li>vanilla</li>
</ol>
```

### Demo: Links
```html
<a href="kickboxing.html">my sport "kickboxing"</a>
<a href="Friday.html">my song "friday"</a>
```

### Activity: "Favorites List with Links"
- lists of favorite foods, sport (ul)
- steps list for an activity (ol)
- links to  other pages
- clicking the links to move between pages

### Wrap-Up
- Review OL,  UL and links
- Preview review session and inputs

## Session 4: heavy Revision and Input Elements *مراجعه*

### Heavy Review
- Page structure and  tags
- Text styling and images
- Lists and links
- Fix any problems from previous sessions

### Demo: Input Elements
```html
<h1>Tell Me About Yourself</h1>

<label for="name">Your Name:</label>
<input type="text" id="name">

<label for="age">Your Age:</label>
<input type="number" id="age">

<label for="favorite-color">Favorite Color:</label>
<input type="color" id="favorite-color">
```

### Activity: "Info Collector"
- Create simple input fields with labels
- Practice different input types (text, number, color)
- Add descriptive labels for each input

### Wrap-Up
- Review all concepts from previous sessions
- Preview input tags for next session

## Session 5: Forms

### Review
- Input and labels
- Review previous concepts as needed

### Demo: simple form
```html
<h1>write about you</h1>
<form>
    <label for="name">Name:</label>
    <input type="text" id="name">
    
    <label for="number"> Phone:</label>
    <input type="text" id="number">

	<label for="Password">Password :</label>
    <input type="text" id="Password">

	<label for="color">color :</label>
    <input type="color" id="color">
    
    <input type="submit" value="submit">
</form>
```

### Activity: "Form"
- simple form with 2-3 inputs
- labels for each input
- Explain submit button as "Confirm"

### Wrap-Up
- inside-form tags 
- Review everything learned in Level 1
- Preview Level 2 content



# Level-2
## Prerequisites
- Completed HTML Level 1

## Session 1: Div, Span, Semantic Tags and Audio

### Review
- Level 1 tags and structure
- Links and forms from Level 1

### Demo: Containers with Style
```html
<div style="background-color:lightblue; border: 2px solid blue;">
    <h2 style="color:navy;">Blue Box</h2>
    <p>Everything in this box has blue background!</p>
    <img src="cloud.jpg" width="100" height="80" alt="Cloud">
</div>

<p>My favorite color is <span style="color:purple; font-weight:bold;">purple</span>!</p>
```

### Demo: Semantic Structure
```html
<header style="background-color: #f0f0f0; padding: 10px;">
    <h1>My Website</h1>
    <nav>
        <a href="home.html">Home</a>
        <a href="about.html">About</a>
    </nav>
</header>

<main>
    <section style="border: 1px; margin: 10px; padding: 10px;">
        <h2>Welcome Section</h2>
        <p>This is the main content area.</p>
    </section>
    
    <article style="background-color: #ffffcc; padding: 10px; margin: 10px;">
        <h2>My Story</h2>
        <p>This is an article about me.</p>
    </article>
</main>

<footer style="background-color: #333; color: white; padding: 10px; text-align: center;">
    <p>© 2025 My Website</p>
</footer>
```

### Demo: Sound Player
```html
<div style="background-color:lightyellow; padding:10px;">
    <h3 style="color:orange;">Animal Sounds</h3>
    <p>Lion Roar</p>
    <audio controls>
        <source src="lion-roar.mp3" type="audio/mpeg">
    </audio>
</div>
```

### Activity: "Colorful Media Page"
- colored sections with div, spans 
- style attributes directly to tags
- audio elements with controls


### Wrap-Up
- Review div vs. span usage
- Review in-tag styling basics
- Preview tables for next session

## Session 2: Tables

### Review
- Div and span concepts
- Style attributes
- Audio elements

### Demo: Styled Tables
```html
<h1 style="color:green;">My Collection</h1>
<table border="1" style="background-color:lightgreen;">
    <tr style="background-color:darkgreen; color:white;">
        <td>Item</td>
        <td>Count</td>
    </tr>
    <tr>
        <td>Toys</td>
        <td>5</td>
    </tr>
    <tr>
        <td>Books</td>
        <td>3</td>
    </tr>
</table>
```

### Activity: "Data Table"
- Create tables for collections
- Add borders and background colors
- Style table headers
- Use simple 2-3 column tables

### Wrap-Up
- row and column concepts
- Review table nesting tags
- Preview more CSS styling

## Session 3: Simple CSS Styling

### Review
- In-tag styling
- Benefits of separating content from style

### Demo: Style Tags
```html
<head>
    <style>
        h1 {
            color: navy;
            background-color: lightblue;
        }
        p {
            color: darkgreen;
        }
    </style>
</head>
<body>
    <h1>My Styled Page</h1>
    <p>This text is dark green!</p>
    <p>This text is also dark green!</p>
</body>
```

### Activity: "Style My Tags"
- Add simple CSS styles for headers and paragraphs
- Change text colors
- Add background colors
- Compare with in-tag styling

### Wrap-Up
- basic CSS syntax
- Compare tag styling methods
- Preview CSS classes

## Session 4: CSS Classes

### Review
- CSS styling for tags
- Style tag syntax

### Demo: Using Classes
```html
<head>
    <style>
        .blue-box {
            background-color: lightblue;
            border: 2px solid blue;
            padding: 10px;
            margin: 10px;
        }
        .highlight {
            background-color: yellow;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="blue-box">
        <h2>First Section</h2>
        <p>This is in a blue box.</p>
    </div>
    
    <div class="blue-box">
        <h2>Second Section</h2>
        <p>This has <span class="highlight">highlighted</span> text.</p>
    </div>
</body>
```

### Activity: "Style Classes"
- different style classes
- Apply classes to elements
- Mix and match classes
- themed sections

### Wrap-Up
- Review class concept
- Preview final project

## Session 5: Final Project

### Review
- All previous concepts
- Quick practice of important tags and styles

### Project Requirements
- Multi-page website
- Include all learned elements:
  - Div containers with styling
  - Tables with colors
  - Audio elements
  - CSS styling (both in-tag and with style tag)
  - Links between pages

### Implementation
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
    <style>
        .section {
            padding: 10px;
            margin: 10px;
            border-radius: 5px;
        }
        .blue {
            background-color: lightblue;
            border: 2px solid blue;
        }
        .green {
            background-color: lightgreen;
            border: 2px solid green;
        }
    </style>
</head>
<body>
    <h1 style="color:purple;">My World</h1>
    
    <div class="section blue">
        <h2>My Favorites</h2>
        <img src="hobby.jpg" width="150" height="100" alt="My hobby">
        <ul>
            <li>Games</li>
            <li>Sports</li>
            <li>Music</li>
        </ul>
        
        <audio controls>
            <source src="favorite-song.mp3" type="audio/mpeg">
        </audio>
    </div>
    
    <div class="section green">
        <h2>My Collection</h2>
        <table border="1" style="background-color:white;">
            <tr style="background-color:darkgreen; color:white;">
                <td>Item</td>
                <td>Count</td>
            </tr>
            <tr>
                <td>Cards</td>
                <td>25</td>
            </tr>
        </table>
    </div>
    
    <a href="page2.html" style="font-size:20px; color:red;">Go to page 2</a>
</body>
</html>
```

### Wrap-Up
- Present finished websites
- Review all concepts
- Award "HTML Wizard" certificates
- Discuss next steps
