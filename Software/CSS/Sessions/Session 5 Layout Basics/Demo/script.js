/**
 * Session 5: Layout Basics - Interactive Demo
 * This script adds interactivity to the layout demo, allowing users to:
 * - Adjust flexbox properties in real-time
 * - Modify grid layouts
 * - Preview different positioning techniques
 * - Copy code examples
 */

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const flexContainer = document.getElementById('flex-demo');
    const flexDirection = document.getElementById('flex-direction');
    const justifyContent = document.getElementById('justify-content');
    const alignItems = document.getElementById('align-items');
    const gridContainer = document.getElementById('grid-demo');
    const gridTemplateColumns = document.getElementById('grid-template-columns');
    const gridGap = document.getElementById('grid-gap');
    const gridGapValue = document.getElementById('grid-gap-value');
    const flexCode = document.getElementById('flex-code');
    const gridCode = document.getElementById('grid-code');
    const copyButtons = document.querySelectorAll('.copy-button');

    // Initialize the demo
    function init() {
        // Set up event listeners
        setupFlexControls();
        setupGridControls();
        setupCodeCopy();
        
        // Initial updates
        updateFlexCode();
        updateGridCode();
        
        // Add console message for developers
        console.log('%c🎨 Layout Basics Demo', 
            'font-size: 18px; font-weight: bold; color: #3498db;');
        console.log('Try adjusting the layout properties using the controls!');
    }
    
    // Set up flexbox controls
    function setupFlexControls() {
        const flexControls = [flexDirection, justifyContent, alignItems];
        
        flexControls.forEach(control => {
            control.addEventListener('change', updateFlexLayout);
            control.addEventListener('input', updateFlexLayout);
        });
    }
    
    // Update flexbox layout based on controls
    function updateFlexLayout() {
        // Apply styles to flex container
        flexContainer.style.flexDirection = flexDirection.value;
        flexContainer.style.justifyContent = justifyContent.value;
        flexContainer.style.alignItems = alignItems.value;
        
        // Update code preview
        updateFlexCode();
    }
    
    // Update flexbox code preview
    function updateFlexCode() {
        const code = `.flex-container {
    display: flex;
    flex-direction: ${flexDirection.value};
    justify-content: ${justifyContent.value};
    align-items: ${alignItems.value};
    gap: 10px;
    flex-wrap: wrap;
}`;
        
        flexCode.textContent = code;
        Prism.highlightElement(flexCode);
    }
    
    // Set up grid controls
    function setupGridControls() {
        // Update grid template columns
        gridTemplateColumns.addEventListener('input', updateGridLayout);
        gridTemplateColumns.addEventListener('change', updateGridLayout);
        
        // Update grid gap
        gridGap.addEventListener('input', function() {
            const gap = this.value + 'px';
            gridGapValue.textContent = gap;
            updateGridLayout();
        });
    }
    
    // Update grid layout based on controls
    function updateGridLayout() {
        const columns = gridTemplateColumns.value;
        const gap = gridGap.value + 'px';
        
        // Apply styles to grid container
        gridContainer.style.gridTemplateColumns = columns;
        gridContainer.style.gap = gap;
        
        // Update code preview
        updateGridCode(columns, gap);
    }
    
    // Update grid code preview
    function updateGridCode(columns, gap) {
        const code = `.grid-container {
    display: grid;
    grid-template-columns: ${columns};
    grid-template-rows: auto 200px auto;
    gap: ${gap};
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`;
        
        gridCode.textContent = code;
        Prism.highlightElement(gridCode);
    }
    
    // Set up copy to clipboard functionality
    function setupCodeCopy() {
        copyButtons.forEach(button => {
            button.addEventListener('click', function() {
                const codeBlock = this.previousElementSibling;
                const code = codeBlock.textContent;
                
                copyToClipboard(code).then(() => {
                    // Show feedback
                    const originalText = this.textContent;
                    this.textContent = 'Copied!';
                    this.classList.add('copied');
                    
                    // Reset after 2 seconds
                    setTimeout(() => {
                        this.textContent = originalText;
                        this.classList.remove('copied');
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy code: ', err);
                });
            });
        });
    }
    
    // Helper function to copy text to clipboard
    function copyToClipboard(text) {
        return new Promise((resolve, reject) => {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(resolve).catch(reject);
            } else {
                // Fallback for older browsers
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';  // Prevent scrolling to bottom
                document.body.appendChild(textarea);
                textarea.select();
                
                try {
                    document.execCommand('copy');
                    resolve();
                } catch (err) {
                    reject(err);
                }
                
                document.body.removeChild(textarea);
            }
        });
    }
    
    // Initialize the application
    init();
});

// Add Prism.js for syntax highlighting if not already loaded
function loadPrism() {
    if (typeof Prism === 'undefined') {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism-tomorrow.min.css';
        document.head.appendChild(link);
        
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/prism.min.js';
        script.onload = function() {
            // Load CSS language support
            const cssScript = document.createElement('script');
            cssScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-css.min.js';
            document.body.appendChild(cssScript);
        };
        document.body.appendChild(script);
    }
}

// Load Prism.js when the page loads
window.addEventListener('load', loadPrism);
