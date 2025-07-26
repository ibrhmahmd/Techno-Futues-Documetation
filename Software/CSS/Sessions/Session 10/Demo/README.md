# CSS Best Practices & Advanced Techniques - Design System Demo

This demo showcases a comprehensive design system built with modern CSS best practices, including CSS variables, BEM methodology, responsive design, and theming capabilities.

## Features

- **Theming System**: Switch between light, dark, and high contrast themes
- **Responsive Layout**: Adapts to all screen sizes with a mobile-first approach
- **Component Library**: Reusable UI components built with BEM methodology
- **Accessibility**: Built with accessibility in mind (keyboard navigation, focus states, ARIA attributes)
- **Performance Optimized**: Efficient CSS with minimal redundancy
- **Modern CSS Features**: CSS Grid, Flexbox, CSS Variables, and more

## Getting Started

1. Clone or download this repository
2. Open `index.html` in a modern web browser
3. Explore the different sections of the design system

## File Structure

```
demo/
├── index.html          # Main HTML file
├── styles.css          # Main CSS file with all styles
├── script.js           # JavaScript for interactive elements
└── README.md           # This file
```

## Theme System

The design system includes three built-in themes:

- **Light** (default): Clean, light interface for standard viewing
- **Dark**: Dark mode for reduced eye strain in low-light conditions
- **High Contrast**: High contrast theme for improved accessibility

To switch themes, use the theme switcher in the header.

## Components

The design system includes the following components:

### Buttons
- Primary, secondary, and text buttons
- Various sizes and states (hover, focus, active, disabled)
- Button groups and icon buttons

### Cards
- Multiple card variations
- Hover and focus states
- Content organization with proper spacing

### Forms
- Form controls (inputs, textareas, selects)
- Validation states and error messages
- Custom checkboxes and radio buttons
- Toggle switches

### Navigation
- Responsive navigation menu
- Active state indicators
- Mobile-friendly menu toggle

### Layout
- Responsive grid system
- Flexible containers
- Spacing utilities

## CSS Architecture

The CSS is organized using the following principles:

1. **CSS Variables**: For consistent theming and easy customization
2. **BEM Methodology**: For maintainable and scoped component styles
3. **Utility Classes**: For common styling patterns
4. **Mobile-First**: Responsive design starting from small screens
5. **Accessibility**: Proper contrast ratios and focus states

## Browser Support

The design system works in all modern browsers, including:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Theme Colors

To customize the theme colors, modify the CSS variables in the `:root` selector in `styles.css`:

```css
:root {
  /* Primary Colors */
  --color-primary: #0066cc;
  --color-primary-light: #3388dd;
  --color-primary-dark: #004c99;
  
  /* Secondary Colors */
  --color-secondary: #6c757d;
  --color-success: #28a745;
  --color-warning: #ffc107;
  --color-danger: #dc3545;
  --color-info: #17a2b8;
  
  /* Neutral Colors */
  --color-white: #ffffff;
  --color-light: #f8f9fa;
  --color-gray: #6c757d;
  --color-dark: #343a40;
  
  /* Text Colors */
  --color-text: #212529;
  --color-text-muted: #6c757d;
  --color-text-light: #f8f9fa;
  
  /* Background Colors */
  --color-bg: #ffffff;
  --color-bg-alt: #f8f9fa;
  --color-bg-muted: #e9ecef;
  
  /* Border Colors */
  --color-border: #dee2e6;
  
  /* Shadows */
  --shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  --shadow-md: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  
  /* Transitions */
  --transition-default: all 0.2s ease-in-out;
  
  /* Border Radius */
  --radius-sm: 0.2rem;
  --radius-md: 0.25rem;
  --radius-lg: 0.3rem;
  --radius-pill: 50rem;
  
  /* Spacing */
  --spacing-xxs: 0.25rem;
  --spacing-xs: 0.5rem;
  --spacing-sm: 0.75rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-xxl: 3rem;
  
  /* Typography */
  --font-family-base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-family-heading: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-family-mono: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-md: 1.25rem;
  --font-size-lg: 1.5rem;
  --font-size-xl: 2rem;
  --font-size-xxl: 2.5rem;
  
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-loose: 1.7;
  
  /* Z-index */
  --zindex-dropdown: 1000;
  --zindex-sticky: 1020;
  --zindex-fixed: 1030;
  --zindex-modal-backdrop: 1040;
  --zindex-modal: 1050;
  --zindex-popover: 1060;
  --zindex-tooltip: 1070;
}
```

### Dark Theme

The dark theme is activated by adding a `data-theme="dark"` attribute to the `html` element. The theme-specific variables are defined in the `[data-theme="dark"]` selector.

### High Contrast Theme

The high contrast theme is activated by adding a `data-theme="high-contrast"` attribute to the `html` element. The theme-specific variables are defined in the `[data-theme="high-contrast"]` selector.

## Best Practices Demonstrated

1. **CSS Variables**: Used throughout for consistent theming and easy customization
2. **BEM Naming**: All components use the Block__Element--Modifier pattern
3. **Responsive Design**: Mobile-first approach with appropriate breakpoints
4. **Accessibility**: Proper contrast, focus states, and ARIA attributes
5. **Performance**: Optimized selectors and minimal redundant code
6. **Maintainability**: Logical organization and clear naming conventions

## Browser Support

This design system is built to work in all modern browsers:

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

[Your Name]  
[Your Email]  
[Your Website]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
