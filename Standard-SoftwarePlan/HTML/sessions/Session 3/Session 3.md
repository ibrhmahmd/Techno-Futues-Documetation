
## Session 3: Lists

### Review
- Review of links and images
- Check homework

### Part 1: Unordered Lists
**Demo:**
- Creating unordered lists (ul, li)
- Changing bullet style
- Nested lists

```html
<!-- Basic unordered list -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<!-- With style attribute -->
<ul style="list-style-type: square;">
    <li>Square bullet item</li>
    <li>Another square bullet</li>
</ul>

<!-- Nested list -->
<ul>
    <li>Main item 1
        <ul>
            <li>Sub-item 1.1</li>
            <li>Sub-item 1.2</li>
        </ul>
    </li>
    <li>Main item 2</li>
</ul>
```
*Unordered lists display items with bullets. The list-style-type can change bullet appearance. Lists can be nested to show hierarchy.*

**Apply:**
- Create list of favorite foods
- Add nested categories
- Try different content

### Part 2: Ordered Lists
**Demo:**
- Creating ordered lists (ol, li)
- Changing number type
- Starting number
- Nested ordered lists

```html
<!-- Basic ordered list -->
<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>

<!-- With type attribute -->
<ol type="A">
    <li>Item A</li>
    <li>Item B</li>
    <li>Item C</li>
</ol>

<!-- With start attribute -->
<ol start="5">
    <li>This is item #5</li>
    <li>This is item #6</li>
</ol>

<!-- Nested ordered list -->
<ol>
    <li>Main step
        <ol type="a">
            <li>Sub-step a</li>
            <li>Sub-step b</li>
        </ol>
    </li>
    <li>Next main step</li>
</ol>
```
*Ordered lists use numbers or letters for sequence. The type attribute changes numbering style (1, A, a, I, i), and start sets the initial number.*

**Apply:**
- Create top 5 list
- Make step-by-step instructions
- Combine list types

### Part 3: Audio Elements
**Demo:**
- Audio tag
- Controls and autoplay
- Multiple sources
- File formats

```html
<!-- Basic audio player -->
<audio controls>
    <source src="audio/sample.mp3" type="audio/mpeg">
    <source src="audio/sample.ogg" type="audio/ogg">
    Your browser does not support audio playback.
</audio>

<!-- With autoplay and loop -->
<audio controls autoplay loop>
    <source src="audio/background.mp3" type="audio/mpeg">
</audio>
```
*The audio element adds sound to webpages. Controls attribute shows playback buttons, and multiple source elements provide fallback formats for browser compatibility.*

**Apply:**
- Add audio to your page
- Set up controls
- Test playback

### Homework
- Create recipe page with:
  - Ingredients list (unordered)
  - Steps list (ordered)
  - Description list for terms
  - Optional audio
