
## Prerequisites
- Completed HTML Module

## Session 1: CSS Introduction & Selectors

### Review & Introduction
- Review HTML concepts
- Why we need CSS

### Part 1: CSS Integration Methods
**Demo:**
- Three ways to add CSS:
  - Inline (style attribute)
  - Internal (style tags)
  - External (CSS files and link tags)
- Basic syntax (selectors, properties, values)
- CSS comments

**Apply:**
- Create HTML page with headings and paragraphs
- Style it using all three methods
- Write comments

### Part 2: Basic Selectors
**Demo:**
- Element selectors (p, h1, div)
- Class selectors (.classname)
- ID selectors (#idname)
- Combining selectors

**Apply:**
- Add classes and IDs to elements
- Create CSS rules with different selectors
- Style same tags with different classes

### Part 3: Inspecting with DevTools
**Demo:**
- Opening browser DevTools
- Inspecting elements
- Viewing CSS
- Making temporary changes

**Apply:**
- Inspect your page with DevTools
- Make temporary changes
- Find and fix CSS issues

### Homework
- Convert your HTML-only page to use external CSS
- Use at least 5 different selectors
- Style text, backgrounds, and borders
- Try advanced selectors (universal, attribute)

## Session 2: Box Model & Basic Styling

### Review & Introduction
- Review CSS integration and selectors
- Check homework
- Intro to box model

### Part 1: The Box Model
**Demo:**
- CSS Box Model explained:
  - Content
  - Padding
  - Border
  - Margin
- Using DevTools to see box model

**Apply:**
- Create boxes with borders, padding, margins
- Inspect box model in DevTools
- Try different values

### Part 2: Width, Height & Box-Sizing
**Demo:**
- Setting width and height
- Min and max width/height
- Box-sizing property (content-box vs. border-box)
- Shorthand for margin and padding

**Apply:**
- Create boxes with specific dimensions
- Apply box-sizing: border-box
- Use margin/padding shorthands

### Part 3: Display Property
**Demo:**
- Display values:
  - block
  - inline
  - inline-block
  - none
- How they affect box model

**Apply:**
- Change display of various elements
- Create simple layout with inline-block
- Hide and show elements with display:none

### Homework
- Create card-based layout with:
  - 3+ cards with consistent spacing
  - Good use of margin and padding
  - Borders and backgrounds
  - Proper box-sizing
- Try using calc() for widths

## Session 3: Colors, Backgrounds & Borders

### Review & Introduction
- Review box model and display
- Check homework
- Intro to colors and backgrounds

### Part 1: Colors
**Demo:**
- Color properties:
  - color (text)
  - background-color
- Color values:
  - Named colors
  - Hex (#RRGGBB)
  - RGB and RGBA
- Color contrast and accessibility

**Apply:**
- Create color palette for webpage
- Apply text and background colors
- Try different color values
- Check contrast for accessibility

### Part 2: Backgrounds
**Demo:**
- Background properties:
  - background-image
  - background-repeat
  - background-position
  - background-size (cover, contain)
- Background shorthand

**Apply:**
- Add background images to elements
- Control image repetition and position
- Make responsive backgrounds
- Use background shorthand

### Part 3: Borders & Rounded Corners
**Demo:**
- Border properties:
  - border-width
  - border-style
  - border-color
  - border shorthand
- Border-radius for rounded corners
- Box-shadow basics

**Apply:**
- Apply different border styles
- Create rounded corners
- Add subtle shadows
- Make button with hover effects

### Homework
- Create themed webpage with:
  - Color scheme (4+ colors)
  - Background image in header
  - Various border styles
  - Rounded corners and shadows
- Try gradients

## Session 4: Typography & Text Styling

### Review & Introduction
- Review colors, backgrounds, borders
- Check homework
- Intro to web typography

### Part 1: Font Properties
**Demo:**
- Key font properties:
  - font-family
  - font-size
  - font-weight
  - font-style
- Font stacks and fallbacks
- Web safe fonts

**Apply:**
- Set up font stacks
- Apply different sizes and weights
- Create emphasis with font-style
- Use proper fallbacks

### Part 2: Text Properties
**Demo:**
- Essential text properties:
  - text-align
  - text-decoration
  - text-transform
  - line-height
- Letter-spacing and word-spacing

**Apply:**
- Align paragraphs and headings
- Style links with text-decoration
- Transform text case
- Improve readability with line-height

### Part 3: Web Fonts
**Demo:**
- Adding Google Fonts
- Using @font-face
- Font icons (Font Awesome)
- Performance considerations

**Apply:**
- Add Google Fonts to project
- Implement icons
- Apply custom fonts
- Download fonts for offline use

### Homework
- Create typography-focused page with:
  - Custom fonts (downloaded for offline use)
  - Well-structured headings and paragraphs
  - Pull quotes or highlighted text
  - Icons for lists or navigation
- Try variable fonts

## Session 5: Layout Basics with Display & Position

### Review & Introduction
- Review typography and text styling
- Check homework
- Intro to layout techniques

### Part 1: Position Property
**Demo:**
- Position values:
  - static (default)
  - relative
  - absolute
  - fixed
- Positioning context
- Offset properties (top, right, bottom, left)

**Apply:**
- Create relatively positioned elements
- Position elements absolutely in containers
- Create fixed header/navigation
- Understand positioning context

### Part 2: Z-index & Stacking
**Demo:**
- Z-index property
- Stacking contexts
- Controlling overlap
- Common z-index issues

**Apply:**
- Create overlapping elements
- Control stacking order
- Build simple modal/popup
- Fix z-index issues

### Part 3: Overflow Control
**Demo:**
- Overflow property:
  - visible
  - hidden
  - scroll
  - auto
- Controlling content behavior
- Creating scrollable containers

**Apply:**
- Create containers with different overflow
- Build scrollable content area
- Handle text and image overflow
- Apply overflow to card layout

### Homework
- Create page with advanced positioning:
  - Fixed navigation header
  - Content with relative/absolute elements
  - Modal/popup with proper z-index
  - Scrollable sections
- Try sticky positioning

## Session 6: Flexbox Layout

### Review & Introduction
- Review positioning and layout
- Check homework
- Intro to Flexbox

### Part 1: Flexbox Container
**Demo:**
- Creating flex container (display: flex)
- Main axis vs. cross axis
- Container properties:
  - flex-direction
  - justify-content
  - align-items

**Apply:**
- Convert layouts to use flexbox
- Control alignment
- Change direction
- Center content horizontally and vertically

### Part 2: Flexbox Items
**Demo:**
- Item properties:
  - flex-grow
  - flex-shrink
  - flex-basis
- Flex shorthand

**Apply:**
- Create flexible items
- Control specific item sizes
- Use flex shorthand
- Make layout with different-sized items

### Part 3: Practical Flexbox Layout
**Demo:**
- Building navigation with flexbox
- Creating card layouts
- Wrapping with flex-wrap
- Responsive flexbox design

**Apply:**
- Build flexible navigation menu
- Create wrapping card layout
- Make content with sidebar
- Test responsiveness

### Homework
- Create complete page layout with flexbox:
  - Header with navigation
  - Main content with sidebar
  - Card section that wraps
  - Footer with columns
- Try nested flex containers

## Session 7: CSS Grid Layout

### Review & Introduction
- Review flexbox layouts
- Check homework
- Intro to CSS Grid

### Part 1: Grid Container
**Demo:**
- Creating grid container (display: grid)
- Setting up columns and rows:
  - grid-template-columns
  - grid-template-rows
- Using fr units and repeat()

**Apply:**
- Create basic grid
- Use fr units for flexible layouts
- Apply repeat() for multiple columns
- Create photo gallery grid

### Part 2: Grid Placement
**Demo:**
- Placing items:
  - grid-column
  - grid-row
- Spanning multiple cells
- Grid line numbers and naming

**Apply:**
- Place items at specific positions
- Make elements span multiple rows/columns
- Create layout with different-sized areas
- Use inspector to see grid lines

### Part 3: Grid Template Areas
**Demo:**
- Named grid areas:
  - grid-template-areas
  - grid-area
- Creating complex layouts
- Responsive grid areas

**Apply:**
- Define layout using grid-template-areas
- Create page layout with header, footer, content, sidebar
- Make layout responsive
- Combine grid with other techniques

### Homework
- Create website layout using CSS Grid:
  - Header with logo and navigation
  - Main content with sections
  - Sidebar with widgets
  - Footer with columns
- Try auto-fit and auto-fill with minmax()

## Session 8: Responsive Design & Media Queries

### Review & Introduction
- Review CSS Grid
- Check homework
- Intro to responsive design

### Part 1: Viewport & Relative Units
**Demo:**
- Viewport meta tag
- Relative units:
  - percentages
  - em and rem
  - vh and vw
- Using calc() for mixed units

**Apply:**
- Set up responsive base
- Convert pixels to relative units
- Use viewport units for full-height sections
- Create fluid layout

### Part 2: Media Queries
**Demo:**
- Media query syntax
- Common breakpoints
- Mobile-first approach
- Feature queries (@supports)

**Apply:**
- Add media queries to layouts
- Create styles for mobile, tablet, desktop
- Test at different sizes
- Use mobile-first approach

### Part 3: Responsive Images & Tables
**Demo:**
- Responsive images:
  - max-width: 100%
  - object-fit
  - picture element
- Responsive tables

**Apply:**
- Make images responsive
- Use object-fit for control
- Create responsive table
- Test all elements at different sizes

### Homework
- Convert desktop design to be responsive:
  - Use mobile-first approach
  - Include 3+ breakpoints
  - Make images responsive
  - Ensure readable text at all sizes
- Try fluid typography with clamp()

## Session 9: Animations & Transitions

### Review & Introduction
- Review responsive design
- Check homework
- Intro to animations and transitions

### Part 1: CSS Transitions
**Demo:**
- Transition basics:
  - transition-property
  - transition-duration
  - transition-timing-function
- Hover effects
- Transition shorthand

**Apply:**
- Create button hover effects
- Add transitions to navigation
- Make smooth color changes
- Try different timing functions

### Part 2: CSS Transforms
**Demo:**
- Transform properties:
  - translate
  - scale
  - rotate
  - skew
- Combining transforms
- 3D transforms

**Apply:**
- Create moving elements
- Build hover effects with scale/rotation
- Combine multiple transforms
- Create flip card effect

### Part 3: CSS Animations
**Demo:**
- @keyframes rule
- Animation properties:
  - animation-name
  - animation-duration
  - animation-timing-function
  - animation-iteration-count
- Animation shorthand

**Apply:**
- Create loading animation
- Build multi-step animation
- Control animation playback
- Add animations to page elements

### Homework
- Create animated landing page:
  - Button hover effects
  - Navigation transitions
  - Loading animations
  - Complex animation sequence
- Try animation-play-state

## Session 10: CSS Best Practices & Advanced Techniques

### Review & Introduction
- Review animations and transitions
- Check homework
- Intro to CSS best practices

### Part 1: CSS Organization
**Demo:**
- CSS organization approaches:
  - BEM (Block, Element, Modifier)
  - Component-based approach
- File structure
- Comments and documentation

**Apply:**
- Refactor CSS using BEM
- Organize into logical sections
- Add proper comments
- Create style guide

### Part 2: CSS Variables
**Demo:**
- Custom properties (CSS variables):
  - Defining variables
  - Using variables
  - Changing with JavaScript
- Scoping variables

**Apply:**
- Create variables for colors and sizes
- Apply variables throughout stylesheet
- Create theme switcher
- Use variables for responsive design

### Part 3: CSS Frameworks Introduction
**Demo:**
- CSS frameworks overview:
  - Bootstrap basics
  - Tailwind approach
- When to use frameworks
- Adding framework to project

**Apply:**
- Implement component with Bootstrap
- Add Tailwind utility
- Convert custom component to use framework
- Compare framework vs. custom approach

### Homework & Final Project
- Create complete responsive website:
  - Design system with CSS variables
  - Well-organized CSS using BEM
  - Responsive layout (flexbox/grid)
  - Interactive elements with animations
  - Design system documentation
- Try CSS preprocessor (Sass introduction)

## Resources
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)
- [Flexbox Froggy](https://flexboxfroggy.com/)
- [Grid Garden](https://cssgridgarden.com/)
- [Can I Use](https://caniuse.com/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/) 