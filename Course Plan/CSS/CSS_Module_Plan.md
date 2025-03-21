
## Prerequisites
- Completed HTML Module
- VS Code with Live Server and CSS extensions

## Teaching Approach
Each 3-hour session follows this structure:
- Quick review of previous session and homework check (10 minutes)
- Brief overview of topics for the current session (5 minutes)
- Three cycles of:
  - Instructor demonstration and explanation (20-30 minutes)
  - Student application of concepts (15-20 minutes)
  - Feedback and assistance
- Wrap-up and homework assignment (10 minutes)

## Session 1: CSS Introduction & Selectors

### Review & Introduction
- Review of HTML concepts
- Introduction to CSS and why we need it
- Overview of topics for the session

### Part 1: CSS Integration Methods
**Instructor Demonstrates:**
- Three ways to apply CSS:
  - Inline CSS with `style` attribute
  - Internal CSS with `<style>` tags
  - External CSS with .css files and `<link>` tags
- Basic CSS syntax (selectors, properties, values)
- CSS comments

**Students Apply:**
- Create a simple HTML page with headings and paragraphs
- Apply styling using all three methods
- Write proper CSS comments

### Part 2: Basic Selectors
**Instructor Demonstrates:**
- Element selectors (p, h1, div)
- Class selectors (.classname)
- ID selectors (#idname)
- Combining selectors

**Students Apply:**
- Add classes and IDs to HTML elements
- Create CSS rules using different selector types
- Apply different styles to elements with the same tag but different classes

### Part 3: Inspecting with DevTools
**Instructor Demonstrates:**
- Opening browser DevTools
- Inspecting elements
- Viewing applied CSS
- Making temporary CSS changes in the browser

**Students Apply:**
- Inspect their own page with DevTools
- Make temporary changes using DevTools
- Find and fix issues with their CSS

### Homework
- Convert your HTML-only personal page to use external CSS
- Use at least 5 different selectors
- Apply styling to text, backgrounds, and borders
- Experiment with more advanced selectors (universal, attribute)

## Session 2: Box Model & Basic Styling

### Review & Introduction
- Review of CSS integration methods and selectors
- Check homework assignments
- Introduction to the box model

### Part 1: The Box Model
**Instructor Demonstrates:**
- The CSS Box Model explained:
  - Content
  - Padding
  - Border
  - Margin
- Using browser DevTools to visualize the box model

**Students Apply:**
- Create boxes with visible borders, padding, and margins
- Use DevTools to inspect the box model of their elements
- Experiment with different box model values

### Part 2: Width, Height & Box-Sizing
**Instructor Demonstrates:**
- Setting width and height
- Min and max width/height
- The box-sizing property (content-box vs. border-box)
- Shorthand properties for margin and padding

**Students Apply:**
- Create boxes with specified dimensions
- Apply box-sizing: border-box to elements
- Use shorthand properties for margin and padding

### Part 3: Display Property
**Instructor Demonstrates:**
- Display property values:
  - block
  - inline
  - inline-block
  - none
- Impact on box model behavior

**Students Apply:**
- Change display properties of various elements
- Create a simple layout using inline-block
- Hide and show elements with display:none

### Homework
- Create a card-based layout with:
  - At least 3 cards with consistent spacing
  - Good use of margin and padding
  - Borders and background colors
  - Proper box-sizing
- Additional exploration: Try using calc() for widths

## Session 3: Colors, Backgrounds & Borders

### Review & Introduction
- Review of box model and display properties
- Check homework assignments
- Introduction to colors and backgrounds

### Part 1: Colors
**Instructor Demonstrates:**
- Color properties:
  - color (text)
  - background-color
- Color values:
  - Named colors
  - Hex values (#RRGGBB)
  - RGB and RGBA
- Color contrast and accessibility

**Students Apply:**
- Create a color palette for a webpage
- Apply text and background colors
- Experiment with different color values
- Check color contrast for accessibility

### Part 2: Backgrounds
**Instructor Demonstrates:**
- Essential background properties:
  - background-image
  - background-repeat
  - background-position
  - background-size (cover, contain)
- Background shorthand

**Students Apply:**
- Add background images to elements
- Control image repetition and positioning
- Use background-size for responsive backgrounds
- Apply background shorthand

### Part 3: Borders & Rounded Corners
**Instructor Demonstrates:**
- Border properties:
  - border-width
  - border-style
  - border-color
  - border shorthand
- Border-radius for rounded corners
- Box-shadow basics

**Students Apply:**
- Apply different border styles to elements
- Create rounded corners with border-radius
- Add subtle shadows to elements
- Create a button with borders and hover effects

### Homework
- Create a themed webpage with:
  - Consistent color scheme (at least 4 colors)
  - Background image in the header
  - Different border styles throughout
  - Rounded corners and shadows where appropriate
- Additional exploration: linear and radial gradients

## Session 4: Typography & Text Styling

### Review & Introduction
- Review of colors, backgrounds, and borders
- Check homework assignments
- Introduction to web typography

### Part 1: Font Properties
**Instructor Demonstrates:**
- Key font properties:
  - font-family
  - font-size
  - font-weight
  - font-style
- Font stacks and fallbacks
- Web safe fonts

**Students Apply:**
- Set up font stacks for their webpage
- Apply different font sizes and weights
- Create emphasis with font-style
- Use proper fallback fonts

### Part 2: Text Properties
**Instructor Demonstrates:**
- Essential text properties:
  - text-align
  - text-decoration
  - text-transform
  - line-height
- Letter-spacing and word-spacing

**Students Apply:**
- Apply text alignment to paragraphs and headings
- Use text-decoration for links and highlights
- Transform text case with text-transform
- Improve readability with line-height

### Part 3: Web Fonts
**Instructor Demonstrates:**
- Adding Google Fonts to a webpage
- Using @font-face for custom fonts
- Font icons basics (Font Awesome)
- Performance considerations

**Students Apply:**
- Add Google Fonts to their project
- Implement icons with Font Awesome
- Apply custom fonts to different elements
- Ensure all fonts are available locally (offline use)

### Homework
- Create a typography-focused page with:
  - Custom fonts from Google Fonts (downloaded for offline use)
  - Well-structured headings and paragraphs
  - Pull quotes or highlighted text
  - Icons for lists or navigation
- Additional exploration: Variable fonts

## Session 5: Layout Basics with Display & Position

### Review & Introduction
- Review of typography and text styling
- Check homework assignments
- Introduction to CSS layout techniques

### Part 1: Position Property
**Instructor Demonstrates:**
- Position values:
  - static (default)
  - relative
  - absolute
  - fixed
- Positioning context
- Offset properties (top, right, bottom, left)

**Students Apply:**
- Create relatively positioned elements
- Position elements absolutely within containers
- Create a fixed header or navigation
- Understand positioning context

### Part 2: Z-index & Stacking
**Instructor Demonstrates:**
- Z-index property and how it works
- Stacking contexts
- Controlling overlap
- Common z-index issues

**Students Apply:**
- Create overlapping elements
- Control stacking order with z-index
- Build a simple modal or popup
- Troubleshoot z-index issues

### Part 3: Overflow Control
**Instructor Demonstrates:**
- Overflow property:
  - visible
  - hidden
  - scroll
  - auto
- Controlling content behavior
- Creating scrollable containers

**Students Apply:**
- Create containers with different overflow behaviors
- Build a scrollable content area
- Handle text and image overflow
- Apply overflow control to a card layout

### Homework
- Create a page with advanced positioning:
  - Fixed navigation header
  - Content with relative and absolute elements
  - A modal or popup with proper z-index
  - Scrollable sections with overflow control
- Additional exploration: sticky positioning

## Session 6: Flexbox Layout

### Review & Introduction
- Review of positioning and layout basics
- Check homework assignments
- Introduction to Flexbox

### Part 1: Flexbox Container
**Instructor Demonstrates:**
- Creating a flex container with `display: flex`
- Main axis vs. cross axis
- Key container properties:
  - flex-direction
  - justify-content
  - align-items

**Students Apply:**
- Convert existing layouts to use flexbox
- Control alignment of items
- Change flex direction
- Center content both horizontally and vertically

### Part 2: Flexbox Items
**Instructor Demonstrates:**
- Key item properties:
  - flex-grow
  - flex-shrink
  - flex-basis
- The flex shorthand property

**Students Apply:**
- Create flexible items that grow and shrink
- Control the size of specific flex items
- Apply the flex shorthand
- Create a layout with different-sized items

### Part 3: Practical Flexbox Layout
**Instructor Demonstrates:**
- Building a navigation bar with flexbox
- Creating card layouts
- Handling wrapping with flex-wrap
- Responsive flexbox design

**Students Apply:**
- Build a flexible navigation menu
- Create a card layout that wraps on smaller screens
- Make a content section with sidebar using flexbox
- Test responsiveness by resizing the browser

### Homework
- Create a complete page layout using flexbox:
  - Header with navigation
  - Main content with sidebar
  - Card-based section that wraps
  - Footer with multiple columns
- Additional exploration: nested flex containers

## Session 7: CSS Grid Layout

### Review & Introduction
- Review of flexbox layouts
- Check homework assignments
- Introduction to CSS Grid

### Part 1: Grid Container
**Instructor Demonstrates:**
- Creating a grid container with `display: grid`
- Setting up columns and rows:
  - grid-template-columns
  - grid-template-rows
- Using fr units and repeat()

**Students Apply:**
- Create a basic grid with columns and rows
- Use fr units for flexible layouts
- Apply repeat() for multiple columns
- Create a photo gallery grid

### Part 2: Grid Placement
**Instructor Demonstrates:**
- Placing items on the grid:
  - grid-column
  - grid-row
- Spanning multiple cells
- Grid line numbers and naming

**Students Apply:**
- Place items at specific positions on the grid
- Make elements span multiple rows or columns
- Create a layout with different-sized grid areas
- Use the inspector to visualize grid lines

### Part 3: Grid Template Areas
**Instructor Demonstrates:**
- Using named grid areas:
  - grid-template-areas
  - grid-area
- Creating complex layouts with areas
- Responsive grid areas

**Students Apply:**
- Define a layout using grid-template-areas
- Create a complete page layout with header, footer, content, sidebar
- Make the layout responsive
- Combine grid with other layout techniques

### Homework
- Create a complete website layout using CSS Grid:
  - Complex header with logo and navigation
  - Main content area with different sections
  - Sidebar with widgets
  - Footer with multiple columns
- Additional exploration: auto-fit and auto-fill with minmax()

## Session 8: Responsive Design & Media Queries

### Review & Introduction
- Review of CSS Grid
- Check homework assignments
- Introduction to responsive design principles

### Part 1: Viewport & Relative Units
**Instructor Demonstrates:**
- Viewport meta tag
- Relative units:
  - percentages
  - em and rem
  - vh and vw
- Using calc() for mixed units

**Students Apply:**
- Set up a responsive base with viewport meta tag
- Convert fixed pixel values to relative units
- Use viewport units for full-height sections
- Create a fluid layout with relative units

### Part 2: Media Queries
**Instructor Demonstrates:**
- Media query syntax
- Common breakpoints
- Mobile-first approach
- Feature queries (@supports)

**Students Apply:**
- Add media queries to existing layouts
- Create styles for mobile, tablet, and desktop
- Test layouts at different sizes
- Implement a mobile-first approach

### Part 3: Responsive Images & Tables
**Instructor Demonstrates:**
- Responsive images:
  - max-width: 100%
  - object-fit
  - picture element
- Responsive tables

**Students Apply:**
- Make images responsive with CSS
- Use object-fit for image control
- Create a responsive table
- Test all responsive elements across different sizes

### Homework
- Convert a desktop-only design to be fully responsive:
  - Implement mobile-first approach
  - Use at least 3 breakpoints
  - Include responsive images
  - Ensure all text is readable at all sizes
- Additional exploration: fluid typography with clamp()

## Session 9: Animations & Transitions

### Review & Introduction
- Review of responsive design
- Check homework assignments
- Introduction to CSS animations and transitions

### Part 1: CSS Transitions
**Instructor Demonstrates:**
- Transition property basics:
  - transition-property
  - transition-duration
  - transition-timing-function
- Simple hover effects
- Transition shorthand

**Students Apply:**
- Create button hover effects
- Add transitions to navigation elements
- Create a smooth color change transition
- Use different timing functions

### Part 2: CSS Transforms
**Instructor Demonstrates:**
- Transform properties:
  - translate
  - scale
  - rotate
  - skew
- Combining transforms
- 3D transforms

**Students Apply:**
- Create elements that move with transform
- Build hover effects with scale and rotation
- Combine multiple transform properties
- Create a flip card effect

### Part 3: CSS Animations
**Instructor Demonstrates:**
- @keyframes rule
- Animation properties:
  - animation-name
  - animation-duration
  - animation-timing-function
  - animation-iteration-count
- Animation shorthand

**Students Apply:**
- Create a simple loading animation
- Build a multi-step animation sequence
- Control animation playback
- Add animations to existing page elements

### Homework
- Create an animated landing page:
  - Button hover effects
  - Navigation transitions
  - Loading animations
  - At least one complex animation sequence
- Additional exploration: animation-play-state and pausing animations

## Session 10: CSS Best Practices & Advanced Techniques

### Review & Introduction
- Review of animations and transitions
- Check homework assignments
- Introduction to CSS best practices

### Part 1: CSS Organization
**Instructor Demonstrates:**
- CSS organization methodologies:
  - BEM (Block, Element, Modifier)
  - Component-based approach
- CSS file structure
- CSS comments and documentation

**Students Apply:**
- Refactor existing CSS using BEM
- Organize CSS into logical sections
- Add proper comments
- Create a style guide for their project

### Part 2: CSS Variables
**Instructor Demonstrates:**
- Custom properties (CSS variables):
  - Defining variables
  - Using variables
  - Changing variables with JavaScript
- Scoping variables

**Students Apply:**
- Create a set of variables for colors and sizes
- Apply variables throughout a stylesheet
- Create a theme switcher with CSS variables
- Use variables for responsive design

### Part 3: CSS Frameworks Introduction
**Instructor Demonstrates:**
- Overview of CSS frameworks:
  - Bootstrap basics
  - Tailwind CSS approach
- When to use frameworks
- Adding a framework to a project

**Students Apply:**
- Implement a simple component with Bootstrap
- Add a Tailwind utility to a project
- Convert a custom component to use a framework
- Compare framework approach to custom CSS

### Homework & Final CSS Project
- Create a complete, responsive website using all CSS techniques learned:
  - Consistent design system with CSS variables
  - Well-organized CSS using BEM or similar methodology
  - Responsive layout using flexbox and/or grid
  - Interactive elements with transitions and animations
  - Design system documentation
- Additional exploration: CSS preprocessors (brief introduction to Sass)

## Resources
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)
- [Flexbox Froggy](https://flexboxfroggy.com/)
- [Grid Garden](https://cssgridgarden.com/)
- [Can I Use](https://caniuse.com/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/) 