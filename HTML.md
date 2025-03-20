
### **Quick HTML Revision with Code Snippets**

---

### **1️⃣ Introduction to HTML**
		
📌 **Basic Structure of an HTML Page:**

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Webpage</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is a simple HTML page.</p>
</body>
</html>
```

**🔹 Explanation:**

- `<!DOCTYPE html>`: Declares the document type as HTML5.
- `<html>`: The root element of an HTML document.
- `<head>`: Contains meta information and the title.
- `<body>`: Contains the visible content of the page.

---

### **2️⃣ Headings (h1 - h6)**

Headings define titles and subtitles on a webpage.

📌 **Example:**

```html
<h1>This is Heading 1</h1>
<h2>This is Heading 2</h2>
<h3>This is Heading 3</h3>
<h4>This is Heading 4</h4>
<h5>This is Heading 5</h5>
<h6>This is Heading 6</h6>
```

**🔹 Explanation:**

- `<h1>` is the largest, `<h6>` is the smallest.
- Used for structuring content and improving SEO.

---

### **3️⃣ Paragraphs & Text Formatting**

📌 **Example:**

```html
<p>This is a <b>bold</b> word.</p>
<p>This is an <i>italic</i> word.</p>
<p>This is an <u>underlined</u> word.</p>
<p>This is a <mark>highlighted</mark> word.</p>
```

**🔹 Explanation:**

- `<p>`: Defines a paragraph.
- `<b>`: Makes text **bold**.
- `<i>`: Makes text _italic_.
- `<u>`: **Underlines** text.
- `<mark>`: Highlights text.

---

### **4️⃣ Horizontal Rule & Line Breaks (`hr`, `br`)**

📌 **Example:**

```html
<p>First line of text.<br>Second line of text.</p>
<hr>
<p>New section starts here.</p>
```

**🔹 Explanation:**

- `<br>`: Inserts a line break.
- `<hr>`: Creates a horizontal line (used for section breaks).

---

### **5️⃣ Inline vs. Block Elements**

📌 **Example:**

```html
<p>This is a block element.</p>  
<span>This is an inline element.</span> <span>Another inline element.</span>
```

**🔹 Explanation:**

- **Block Elements:** Take full width (`<p>`, `<div>`, `<h1>`).
- **Inline Elements:** Take only necessary width (`<span>`, `<b>`, `<i>`).

---

### **6️⃣ Images (`<img>` Tag)**

📌 **Example:**

```html
<img src="image.jpg" alt="A beautiful image" width="300">
```

**🔹 Explanation:**

- `src`: Specifies the image file location.
- `alt`: Alternative text if the image doesn’t load.
- `width`: Sets the image width.

---

### **7️⃣ Videos (`<video>` Tag)**

📌 **Example:**

```html
<video width="320" height="240" controls>
    <source src="video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

**🔹 Explanation:**

- `controls`: Adds play/pause buttons.
- `<source>`: Specifies the video file.
- `width` & `height`: Set video dimensions.

---

### **8️⃣ Links (`<a>` Tag)**

📌 **Example:**

```html
<a href="https://www.google.com" target="_blank">Visit Google</a>
```

**🔹 Explanation:**

- `href`: Defines the link’s destination.
- `target="_blank"`: Opens link in a new tab.

---

### **9️⃣ Lists (`<ul>`, `<ol>`)**

📌 **Example:**

```html
<h3>Unordered List</h3>
<ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
</ul>

<h3>Ordered List</h3>
<ol>
    <li>Step 1</li>
    <li>Step 2</li>
    <li>Step 3</li>
</ol>
```

**🔹 Explanation:**

- `<ul>`: Creates an unordered list (bullets).
- `<ol>`: Creates an ordered list (numbers).
- `<li>`: List item inside lists.


---

### **🔟 Ordered Lists (`<ol>`)**

Ordered lists display items in a numbered format.

📌 **Example:**

```html
<h3>Steps to Make Coffee</h3>
<ol>
    <li>Boil water</li>
    <li>Add coffee powder</li>
    <li>Pour hot water</li>
    <li>Stir and serve</li>
</ol>
```

**🔹 Explanation:**

- `<ol>`: Creates an ordered (numbered) list.
- `<li>`: Defines each list item.

---

### **1️⃣1️⃣ Unordered Lists (`<ul>`)**

Unordered lists use bullet points.

📌 **Example:**

```html
<h3>Fruits List</h3>
<ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Orange</li>
</ul>
```

**🔹 Explanation:**

- `<ul>`: Creates an unordered (bulleted) list.
- `<li>`: Defines each list item.

---

## **✅ Tables (`<table>`)**

### **1️⃣2️⃣ Basic Structure (`<table>`)**

Tables organize data into rows and columns.

📌 **Example:**

```html
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Country</th>
    </tr>
    <tr>
        <td>John</td>
        <td>25</td>
        <td>USA</td>
    </tr>
    <tr>
        <td>Emma</td>
        <td>22</td>
        <td>UK</td>
    </tr>
</table>
```

**🔹 Explanation:**

- `<table>`: Defines a table.
- `<tr>`: Defines a table row.
- `<th>`: Table header (bold by default).
- `<td>`: Table data (cell).
- `border="1"`: Adds a border for visibility (optional).

---

### **1️⃣3️⃣ Merging Cells (`colspan`, `rowspan`)**

You can merge multiple cells using `colspan` (horizontal) and `rowspan` (vertical).

📌 **Example:**

```html
<table border="1">
    <tr>
        <th colspan="2">Full Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>John</td>
        <td>Doe</td>
        <td>25</td>
    </tr>
    <tr>
        <td rowspan="2">Emma</td>
        <td>Smith</td>
        <td>22</td>
    </tr>
    <tr>
        <td>Brown</td>
        <td>30</td>
    </tr>
</table>
```

**🔹 Explanation:**

- `colspan="2"`: Merges two columns.
- `rowspan="2"`: Merges two rows.

---

## **✅ Forms (`<form>`)**

### **1️⃣4️⃣ Input Types**

Forms allow user input with different input fields.

📌 **Example:**

```html
<form action=''>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name"><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" requird><br><br>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password"><br><br>

    <label for="dob">Date of Birth:</label>
    <input type="date" id="dob" name="dob" placeholer='date of birth' requ><br><br>

    <label for="color">Favorite Color:</label>
    <input type="color" id="color" name="color"><br><br>

    <label>Gender:</label>
    <input type="radio" name="gender" value="male"> Male
    <input type="radio" name="gender" value="female"> Female<br><br>

    <label>Hobbies:</label>
    <input type="checkbox" name="hobby" value="sports"> Sports
    <input type="checkbox" name="hobby" value="music"> Music<br><br>

    <input type="submit" value="Submit">
</form>
```

**🔹 Explanation:**

- `<input type="text">`: Text input.
- `<input type="email">`: Email validation.
- `<input type="password">`: Hides entered text.
- `<input type="date">`: Date picker.
- `<input type="color">`: Color picker.
- `<input type="radio">`: Select one option.
- `<input type="checkbox">`: Select multiple options.
- `<input type="submit">`: Submit the form.

---

### **1️⃣5️⃣ Select Dropdown (`<select>`)**

Dropdowns allow users to choose from predefined options.

📌 **Example:**

```html
<label for="country">Choose a country:</label>
<select id="country" name="country">
    <option value="usa">USA</option>
    <option value="uk">UK</option>
    <option value="canada">Canada</option>
</select>
```

**🔹 Explanation:**

- `<select>`: Creates a dropdown.
- `<option>`: Defines selectable options.

---

### **1️⃣6️⃣ Required & Placeholder Attributes**

These attributes improve form usability.

📌 **Example:**

```html
<form>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" placeholder="Enter your username" required><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="example@mail.com" required><br><br>

    <input type="submit" value="Register">
</form>
```

**🔹 Explanation:**

- `required`: Forces user to fill the field.
- `placeholder`: Provides a hint inside the field.

---

## **✅ Div Element (`<div>`)**

### **1️⃣7️⃣ Div for Structuring Content**

`<div>` is a block-level container for grouping elements.

📌 **Example:**

```html
<div style="border: 1px solid black; padding: 10px;">
    <h2>Welcome!</h2>
    <p>This is inside a div container.</p>
</div>
```

**🔹 Explanation:**

- `<div>`: Groups multiple elements.
- Used for styling and layout purposes.

---

