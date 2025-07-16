
## Session 2: Links & Images

### Review
- Quick review of session 1
- Check homework
 
### Part 1: Links
**Demo:**
- Basic links (a tag)
- Internal vs external links
- Email links (mailto:)
- Target attribute
- ID links

```html
<!-- External link -->
<a href="https://www.example.com">Visit Example Website</a>

<!-- Internal link (to another page in same site) -->
<a href="about.html">About Us</a>

<!-- Email link -->
<a href="mailto:contact@example.com">Contact Us</a>

<!-- Open in new tab -->
<a href="https://www.example.com" target="_blank">Visit Example (New Tab)</a>

<!-- Link to page section (using ID) -->
<a href="#section1">Jump to Section 1</a>

<!-- Section with ID (target for link above) -->
<h2 id="section1">Section 1</h2>
```
*Links connect pages and resources. The href attribute specifies the destination. Different types serve different purposes (external sites, internal pages, emails). The target attribute controls how links open.*

**Apply:**
- Add links to websites
- Create email link
- Make links open in new tab
- Create page section links

### Part 2: Images
**Demo:**
- Adding images (img tag)
- src, alt, width, height attributes
- Image file types
- File organization

```html
<!-- Basic image -->
<img src="images/photo.jpg" alt="Description of the image">

<!-- Image with size attributes -->
<img src="images/logo.png" alt="Company Logo" width="200" height="100">

<!-- Responsive image -->
<img src="images/responsive-image.jpg" alt="Responsive image" style="max-width:100%;">
```
*The img element displays images. The src attribute points to the image file, while alt provides a text description for accessibility. Width and height attributes control size.*

**Apply:**
- Add 2-3 images with alt text
- Adjust image sizes
- Create images folder

### Part 3: Multi-Page Setup
**Demo:**
- Block vs inline elements
- Creating second page
- Navigation between pages
- File structure

```html
<!-- Block elements (create new lines) -->
<div>This is a block element</div>
<p>This is another block element</p>

<!-- Inline elements (flow within text) -->
This text has <span>an inline element</span> within it.

<!-- Basic navigation between pages -->
<nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
</nav>
```
*Block elements create new lines, while inline elements flow within text. Multi-page sites need consistent navigation to connect pages.*

**Apply:**
- Create second HTML page
- Add navigation links
- Test navigation

### Homework
- Create "My Hobbies" page with:
  - 3+ hobbies with descriptions
  - Images for each hobby
  - Links to related sites
  - Navigation back to home