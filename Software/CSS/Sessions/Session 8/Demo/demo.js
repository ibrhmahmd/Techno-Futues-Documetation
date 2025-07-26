document.addEventListener('DOMContentLoaded', function() {
    // Initialize CodeMirror editors
    const sassEditor = CodeMirror.fromTextArea(document.getElementById('sass-code'), {
        mode: 'sass',
        theme: 'dracula',
        lineNumbers: true,
        lineWrapping: true,
        autofocus: true
    });

    const lessEditor = CodeMirror.fromTextArea(document.getElementById('less-code'), {
        mode: 'text/x-less',
        theme: 'dracula',
        lineNumbers: true,
        lineWrapping: true
    });

    // Toggle between SASS and LESS sections
    const buttons = document.querySelectorAll('.preprocessor-selector button');
    const sections = document.querySelectorAll('.preprocessor-section');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            
            // Update active button
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show target section
            sections.forEach(section => {
                section.style.display = section.id === target ? 'block' : 'none';
            });
            
            // Refresh CodeMirror
            if (target === 'sass') {
                setTimeout(() => sassEditor.refresh(), 0);
            } else {
                setTimeout(() => lessEditor.refresh(), 0);
            }
        });
    });

    // Compile SASS/SCSS
    function compileSass() {
        const sassCode = sassEditor.getValue();
        Sass.compile(sassCode, result => {
            if (result.status === 0) {
                document.getElementById('sass-compiled').textContent = result.text;
                applyStyles(result.text, 'sass');
            } else {
                document.getElementById('sass-compiled').textContent = '/* Error compiling SASS/SCSS:\n' + result.formatted + '\n*/';
            }
        });
    }

    // Compile LESS
    function compileLess() {
        const lessCode = lessEditor.getValue();
        less.render(lessCode, {
            javascriptEnabled: true
        }).then(output => {
            document.getElementById('less-compiled').textContent = output.css;
            applyStyles(output.css, 'less');
        }).catch(error => {
            document.getElementById('less-compiled').textContent = '/* Error compiling LESS:\n' + error.message + '\n*/';
        });
    }

    // Apply compiled styles to the preview
    function applyStyles(css, type) {
        let styleElement = document.getElementById(`${type}-style`);
        
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = `${type}-style`;
            document.head.appendChild(styleElement);
        }
        
        styleElement.textContent = css;
    }

    // Toggle theme (light/dark)
    function toggleTheme() {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update button text
        const themeButtons = document.querySelectorAll('.toggle-theme');
        themeButtons.forEach(btn => {
            btn.textContent = `Toggle ${newTheme === 'dark' ? 'Light' : 'Dark'} Mode`;
        });
    }

    // Toggle tabs in the footer
    function setupTabs() {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                
                // Update active button
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Show target content
                tabContents.forEach(content => {
                    content.classList.toggle('active', content.id === targetTab);
                });
            });
        });
    }

    // Initialize
    function init() {
        // Set initial theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        // Set initial button text
        const themeButtons = document.querySelectorAll('.toggle-theme');
        themeButtons.forEach(btn => {
            btn.textContent = `Toggle ${savedTheme === 'dark' ? 'Light' : 'Dark'} Mode`;
            btn.addEventListener('click', toggleTheme);
        });
        
        // Compile initial code
        compileSass();
        compileLess();
        
        // Set up tabs
        setupTabs();
        
        // Add change events to editors
        sassEditor.on('change', compileSass);
        lessEditor.on('change', compileLess);
    }

    // Start the application
    init();
});
