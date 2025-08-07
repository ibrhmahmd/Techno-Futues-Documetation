# Level 3 - Session 3: CSS Basics - Positioning, Units, and Display

## Topics Covered

### 1. CSS Colors with RGB
- **RGB Color Model**:
  - Stands for Red, Green, Blue
  - Each value ranges from 0 to 255
  - Example: `rgb(255, 0, 0)` is pure red
- **RGBA Color Model**:
  - Adds Alpha channel for transparency
  - Alpha ranges from 0 (transparent) to 1 (opaque)
  - Example: `rgba(0, 0, 255, 0.5)` is semi-transparent blue
- **Hex Colors**:
  - Shorthand: `#RGB` (e.g., `#f00` for red)
  - Full form: `#RRGGBB` (e.g., `#ff0000` for red)
  - With alpha: `#RRGGBBAA` (e.g., `#0000ff80` for 50% transparent blue)

### 1. CSS Positioning
- `static` - Default positioning
- `relative` - Positioned relative to its normal position
- `absolute` - Positioned relative to the nearest positioned ancestor
- `fixed` - Positioned relative to the viewport
- `sticky` - Toggles between relative and fixed

### 2. CSS Units Comparison
#### Absolute Units
- `px` - Pixels (1/96th of 1 inch)
- `pt` - Points (1/72 of 1 inch)
- `cm`, `mm`, `in` - Physical measurements

#### Relative Units
- `%` - Percentage of parent element
- `em` - Relative to font-size of the element
- `rem` - Relative to font-size of root element
- `vw` - 1% of viewport width
- `vh` - 1% of viewport height

### 3. Box Shadow
- `box-shadow: h-offset v-offset blur spread color;`
- Multiple shadows
- Inset shadows

### 4. Display Properties
- `block` - Takes full width, starts on a new line
- `inline` - Takes only necessary width, no line breaks
- `inline-block` - Like inline but respects width/height
- `none` - Element is not displayed
- `flex` - Enables flexbox layout
- `grid` - Enables grid layout

## Exercise
1. Create a simple layout with different positioned elements
2. Style elements using different CSS units
3. Add box shadows to elements
4. Experiment with different display properties