# CSS Module Plan

## Prerequisites
- Completed HTML Module
- VS Code with Live Server and CSS extensions

## Session 1: CSS Introduction & Selectors (3 hours)

### Hour 1: Theory
- What is CSS and why we need it
- Three ways to apply CSS:
  - Inline CSS
  - Internal CSS (using `<style>` tags)
  - External CSS (using .css files)
- CSS syntax: selectors, properties, values
- Basic selectors:
  - Element selectors
  - Class selectors (`.class`)
  - ID selectors (`#id`)

### Hour 2: Guided Practice
- Setting up an external CSS file
- Linking CSS to HTML
- Applying different types of selectors
- CSS comments
- Inspecting CSS with browser DevTools

### Hour 3: Independent Practice
- **Exercise 1:** Create a styled "About Me" page using all three CSS methods
- **Exercise 2:** Apply different selectors to style a provided HTML document
- **Homework:** Convert a solely HTML page to use external CSS with multiple selectors

## Session 2: Box Model & Basic Styling (3 hours)

### Hour 1: Theory
- The CSS Box Model explained:
  - Content
  - Padding
  - Border
  - Margin
- Width and height properties
- Box-sizing property
- Shorthand properties for margin and padding
- Display property basics:
  - block
  - inline
  - inline-block

### Hour 2: Guided Practice
- Applying box model properties to elements
- Creating boxed content layouts
- Using margin for spacing
- Using padding for internal spacing
- Working with borders

### Hour 3: Independent Practice
- **Exercise 1:** Create a card-based layout with consistent spacing
- **Exercise 2:** Build a simple photo gallery with borders and margins
- **Homework:** Design a product showcase page using box model properties

## Session 3: Colors, Backgrounds & Borders (3 hours)

### Hour 1: Theory
- Color properties:
  - color (text color)
  - background-color
- Color values:
  - Named colors
  - Hex values
  - RGB and RGBA
  - HSL and HSLA
- Background properties:
  - background-image
  - background-repeat
  - background-position
  - background-size
  - background-attachment
  - background shorthand
- Border properties:
  - border-width
  - border-style
  - border-color
  - border-radius
  - border shorthand

### Hour 2: Guided Practice
- Applying color schemes to a webpage
- Creating gradients with CSS
- Adding and positioning background images
- Creating styled borders
- Making rounded corners and circular elements

### Hour 3: Independent Practice
- **Exercise 1:** Create a color palette showcase
- **Exercise 2:** Build a hero section with background image
- **Homework:** Design a themed website with consistent color scheme and background elements

## Session 4: Typography & Text Styling (3 hours)

### Hour 1: Theory
- Web typography fundamentals
- Font properties:
  - font-family
  - font-size
  - font-weight
  - font-style
  - font shorthand
- Text properties:
  - text-align
  - text-decoration
  - text-transform
  - text-indent
  - line-height
  - letter-spacing
  - word-spacing
- Web fonts:
  - Using web safe fonts
  - Google Fonts integration
  - Font Awesome icons

### Hour 2: Guided Practice
- Setting up typography for a website
- Implementing font hierarchy
- Using Google Fonts
- Adding icons with Font Awesome
- Creating readable text layouts

### Hour 3: Independent Practice
- **Exercise 1:** Create a typographic poster
- **Exercise 2:** Design a blog post with proper typography
- **Homework:** Build a personal resume with professional typography

## Session 5: Layout Basics with Display & Position (3 hours)

### Hour 1: Theory
- Display property in depth:
  - block
  - inline
  - inline-block
  - none
- Position property:
  - static
  - relative
  - absolute
  - fixed
  - sticky
- Positioning context
- Z-index for stacking elements
- Overflow handling
- Float property basics and clearfix

### Hour 2: Guided Practice
- Creating positioned elements
- Building a sticky header
- Making a modal popup
- Using z-index to control layering
- Controlling element visibility

### Hour 3: Independent Practice
- **Exercise 1:** Create a fixed navigation bar
- **Exercise 2:** Build a photo gallery with overlay captions
- **Homework:** Design a page with mixed positioning techniques (floating sidebar, sticky header, absolute positioned elements)

## Session 6: Flexbox Layout (3 hours)

### Hour 1: Theory
- Flexbox concepts:
  - Flex container vs. flex items
  - Main axis vs. cross axis
- Flex container properties:
  - display: flex
  - flex-direction
  - flex-wrap
  - justify-content
  - align-items
  - align-content
- Flex item properties:
  - flex-grow
  - flex-shrink
  - flex-basis
  - align-self
  - order

### Hour 2: Guided Practice
- Setting up a flex container
- Creating a navigation bar with flexbox
- Building a card layout with flexbox
- Centering content with flexbox
- Creating flexible form layouts

### Hour 3: Independent Practice
- **Exercise 1:** Build a flexible photo gallery
- **Exercise 2:** Create a responsive header with navigation
- **Homework:** Design a complete homepage layout using flexbox

## Session 7: CSS Grid Layout (3 hours)

### Hour 1: Theory
- CSS Grid concepts:
  - Grid container vs. grid items
  - Grid lines, tracks, cells, and areas
- Grid container properties:
  - display: grid
  - grid-template-columns
  - grid-template-rows
  - grid-template-areas
  - grid-gap
  - justify-items
  - align-items
- Grid item properties:
  - grid-column
  - grid-row
  - grid-area
  - justify-self
  - align-self
- FR units and repeat function

### Hour 2: Guided Practice
- Creating a basic grid layout
- Building a responsive image gallery
- Designing a dashboard layout
- Combining grid and flexbox
- Creating named grid areas

### Hour 3: Independent Practice
- **Exercise 1:** Create a magazine-style layout with CSS Grid
- **Exercise 2:** Build a responsive product grid
- **Homework:** Design a complete website layout using CSS Grid

## Session 8: Responsive Design & Media Queries (3 hours)

### Hour 1: Theory
- Responsive design principles
- Mobile-first approach
- Viewport meta tag
- Relative units:
  - percentages
  - em and rem
  - vh and vw
- Media queries syntax
- Common breakpoints
- Responsive images
- Picture element

### Hour 2: Guided Practice
- Setting up responsive boilerplate
- Writing media queries
- Converting fixed layouts to responsive
- Creating a responsive navigation menu
- Testing on different devices

### Hour 3: Independent Practice
- **Exercise 1:** Convert a desktop-only design to be fully responsive
- **Exercise 2:** Create a responsive image gallery
- **Homework:** Build a complete responsive landing page

## Session 9: Animations & Transitions (3 hours)

### Hour 1: Theory
- CSS transitions:
  - transition-property
  - transition-duration
  - transition-timing-function
  - transition-delay
  - transition shorthand
- CSS animations:
  - @keyframes rule
  - animation-name
  - animation-duration
  - animation-timing-function
  - animation-delay
  - animation-iteration-count
  - animation-direction
  - animation-fill-mode
  - animation shorthand
- Transform property:
  - translate
  - scale
  - rotate
  - skew

### Hour 2: Guided Practice
- Creating hover effects with transitions
- Building loading animations
- Animating UI elements
- Creating parallax scrolling effects
- Combining transforms and animations

### Hour 3: Independent Practice
- **Exercise 1:** Create an animated button library
- **Exercise 2:** Build an animated banner/hero section
- **Homework:** Design a mini-website with various animations and transitions

## Session 10: CSS Best Practices & Advanced Techniques (3 hours)

### Hour 1: Theory
- CSS organizational methodologies:
  - BEM (Block, Element, Modifier)
  - OOCSS (Object-Oriented CSS)
- CSS variables (custom properties)
- Advanced selectors:
  - Attribute selectors
  - Pseudo-classes
  - Pseudo-elements
- CSS Filters
- Gradient patterns
- CSS Frameworks introduction:
  - Bootstrap overview
  - Tailwind CSS overview

### Hour 2: Guided Practice
- Refactoring CSS using BEM
- Setting up and using CSS variables
- Implementing advanced selectors
- Creating custom checkboxes and radio buttons
- Using CSS filters for image effects

### Hour 3: Independent Practice
- **Exercise 1:** Refactor an existing CSS codebase using BEM
- **Exercise 2:** Create a theme switcher using CSS variables
- **Final CSS Module Project:** Create a complete, responsive website using all learned CSS techniques

### Final CSS Module Assessment
Build a fully responsive, professional-looking website that demonstrates mastery of all CSS concepts covered. The site should include:
- Proper typography and color scheme
- Responsive layout using flexbox and/or grid
- Interactive elements with transitions and animations
- Well-organized CSS using a methodology like BEM
- Cross-browser compatibility

## Resources
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)
- [Flexbox Froggy](https://flexboxfroggy.com/)
- [Grid Garden](https://cssgridgarden.com/)
- [Can I Use](https://caniuse.com/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/) 