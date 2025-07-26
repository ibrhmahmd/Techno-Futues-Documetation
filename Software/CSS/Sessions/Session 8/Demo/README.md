# CSS Preprocessors Demo

This interactive demo showcases the power of CSS preprocessors, specifically SASS/SCSS and LESS. It allows you to write, compile, and see the results of your preprocessor code in real-time.

## Features

- **Live Code Editing**: Write SASS/SCSS or LESS code and see the compiled CSS instantly
- **Side-by-Side Comparison**: Compare the syntax and features of SASS and LESS
- **Interactive Examples**: Test out different preprocessor features with built-in examples
- **Dark/Light Theme**: Toggle between light and dark themes for better visibility
- **Responsive Design**: Works on both desktop and mobile devices

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- (Optional) Node.js and npm for local development

### Running the Demo

1. Simply open the `index.html` file in your web browser
2. No server required - it works directly from the file system

### Local Development

If you want to modify the demo or use it as a starting point:

1. Clone this repository
2. Open the project in your code editor
3. Make your changes
4. Open `index.html` in a web browser to see your changes

## How to Use

1. **Switch Between Preprocessors**:
   - Use the toggle buttons at the top to switch between SASS/SCSS and LESS

2. **Edit Code**:
   - The left panel shows the preprocessor code
   - The right panel shows the compiled CSS output
   - Changes are automatically compiled and applied to the preview

3. **Preview**:
   - The bottom section shows a live preview of your styles
   - Interact with the elements to see hover states and other dynamic effects

4. **Toggle Theme**:
   - Click the "Toggle Dark Mode" button to switch between light and dark themes

## Preprocessor Installation

### SASS/SCSS

```bash
# Install SASS globally
npm install -g sass

# Compile a SASS file to CSS
sass input.scss output.css

# Watch for changes
sass --watch input.scss:output.css
```

### LESS

```bash
# Install LESS globally
npm install -g less

# Compile a LESS file to CSS
lessc input.less output.css

# Watch for changes (requires nodemon)
npm install -g nodemon
nodemon --exec "lessc input.less output.css" --watch input.less
```

## Features Demonstrated

### Common to Both SASS and LESS
- Variables
- Nesting
- Mixins
- Extend/Inheritance
- Functions
- Loops
- Conditionals
- Color functions
- Math operations

### SASS/SCSS Specific
- Placeholder selectors (%)
- Control directives (@if, @for, @each, @while)
- Parent selector (&)
- Built-in modules

### LESS Specific
- Lazy loading of variables
- Namespaces
- JavaScript evaluation
- Color blending functions

## Browser Support

This demo uses modern JavaScript and CSS features. For best results, use:
- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+

## License

This project is open source and available under the MIT License.

## Credits

- [CodeMirror](https://codemirror.net/) - Code editor component
- [Sass.js](https://github.com/medialize/sass.js/) - SASS/SCSS compiler in JavaScript
- [LESS.js](http://lesscss.org/) - LESS compiler in JavaScript

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
