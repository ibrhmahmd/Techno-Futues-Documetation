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
    const hoverCode = document.getElementById('hover-code');
    const copyButtons = document.querySelectorAll('.copy-button');
    
    // Hover Effect Controls
    const scaleValue = document.getElementById('scale-value');
    const scaleInput = document.getElementById('scale');
    const rotateValue = document.getElementById('rotate-value');
    const rotateInput = document.getElementById('rotate');
    const translateXValue = document.getElementById('translate-x-value');
    const translateXInput = document.getElementById('translate-x');
    const shadowX = document.getElementById('shadow-x');
    const shadowY = document.getElementById('shadow-y');
    const shadowBlur = document.getElementById('shadow-blur');
    const shadowColor = document.getElementById('shadow-color');
    const transitionDuration = document.getElementById('transition-duration');
    const transitionTiming = document.getElementById('transition-timing');
    const hoverDemo = document.querySelector('.hover-demo');
    const hoverEffectType = document.getElementById('hover-effect-type');

    // Initialize the demo
    function init() {
        // Set up event listeners
        setupFlexControls();
        setupGridControls();
        setupHoverControls();
        setupCodeCopy();
        
        // Initial updates
        updateFlexCode();
        updateGridCode();
        updateHoverCode();
        
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
    
    // Set up hover effect controls
    function setupHoverControls() {
        // Handle effect type change
        hoverEffectType.addEventListener('change', function() {
            // Hide all options first
            document.querySelectorAll('.effect-options').forEach(option => {
                option.style.display = 'none';
            });
            
            // Show selected effect options
            const selectedEffect = this.value;
            if (selectedEffect === 'scale') {
                document.getElementById('scale-options').style.display = 'block';
            } else if (selectedEffect === 'transform') {
                document.getElementById('transform-options').style.display = 'block';
            } else if (selectedEffect === 'shadow') {
                document.getElementById('shadow-options').style.display = 'block';
            }
            
            updateHoverDemo();
            updateHoverCode();
        });
        
        // Initialize with scale effect
        document.getElementById('scale-options').style.display = 'block';
        
        // Update scale value display
        scaleInput.addEventListener('input', function() {
            scaleValue.textContent = this.value;
            updateHoverDemo();
            updateHoverCode();
        });
        
        // Update rotate value display
        rotateInput.addEventListener('input', function() {
            rotateValue.textContent = this.value + 'deg';
            updateHoverDemo();
            updateHoverCode();
        });
        
        // Update translateX value display
        translateXInput.addEventListener('input', function() {
            translateXValue.textContent = this.value + 'px';
            updateHoverDemo();
            updateHoverCode();
        });
        
        // Update shadow controls
        const shadowControls = [
            shadowX, shadowY, shadowBlur, shadowColor, 
            transitionDuration, transitionTiming
        ];
        
        // Update shadow value displays
        shadowX.addEventListener('input', function() {
            document.getElementById('shadow-x-value').textContent = this.value + 'px';
        });
        
        shadowY.addEventListener('input', function() {
            document.getElementById('shadow-y-value').textContent = this.value + 'px';
        });
        
        shadowBlur.addEventListener('input', function() {
            document.getElementById('shadow-blur-value').textContent = this.value + 'px';
        });
        
        // Update transition duration display
        transitionDuration.addEventListener('input', function() {
            document.getElementById('duration-value').textContent = this.value;
        });
        
        // Add event listeners for all controls
        shadowControls.forEach(control => {
            control.addEventListener('input', function() {
                updateHoverDemo();
                updateHoverCode();
            });
        });
    }
    
    // Update hover demo based on controls
    function updateHoverDemo() {
        const scale = scaleInput.value;
        const rotate = rotateInput.value;
        const translateX = translateXInput.value;
        const shadow = `${shadowX.value}px ${shadowY.value}px ${shadowBlur.value}px ${shadowColor.value}`;
        const duration = transitionDuration.value;
        const timing = transitionTiming.value;
        const effectType = hoverEffectType.value;
        
        // Reset all hover effects
        hoverDemo.style.transform = '';
        hoverDemo.style.boxShadow = '';
        hoverDemo.style.backgroundColor = '';
        hoverDemo.style.color = '';
        hoverDemo.style.transition = '';
        
        // Apply selected effect
        switch(effectType) {
            case 'scale':
                hoverDemo.style.transform = `scale(${scale})`;
                hoverDemo.style.transition = `all ${duration}ms ${timing}`;
                break;
                
            case 'color':
                hoverDemo.style.backgroundColor = '#2c3e50';
                hoverDemo.style.color = 'white';
                hoverDemo.style.transition = `all ${duration}ms ${timing}`;
                break;
                
            case 'shadow':
                hoverDemo.style.boxShadow = shadow;
                hoverDemo.style.transform = `translateY(-3px)`;
                hoverDemo.style.transition = `all ${duration}ms ${timing}`;
                break;
                
            case 'transform':
                hoverDemo.style.transform = `rotate(${rotate}deg) translateX(${translateX}px)`;
                hoverDemo.style.transition = `all ${duration}ms ${timing}`;
                break;
        }
    }
    
    // Update hover effect code preview
    function updateHoverCode() {
        const scale = scaleInput.value;
        const rotate = rotateInput.value;
        const translateX = translateXInput.value;
        const shadow = `${shadowX.value}px ${shadowY.value}px ${shadowBlur.value}px ${shadowColor.value}`;
        const duration = transitionDuration.value;
        const timing = transitionTiming.value;
        const effectType = hoverEffectType.value;
        
        let code = `/* ${effectType.charAt(0).toUpperCase() + effectType.slice(1)} Effect */\n`;
        
        switch(effectType) {
            case 'scale':
                code += `.element:hover {\n  transform: scale(${scale});\n  transition: all ${duration}ms ${timing};\n}`;
                break;
                
            case 'color':
                code += `.element:hover {\n  background-color: #2c3e50;\n  color: white;\n  transition: all ${duration}ms ${timing};\n}`;
                break;
                
            case 'shadow':
                code += `.element:hover {\n  box-shadow: ${shadow};\n  transform: translateY(-3px);\n  transition: all ${duration}ms ${timing};\n}`;
                break;
                
            case 'transform':
                code += `.element:hover {\n  transform: rotate(${rotate}deg) translateX(${translateX}px);\n  transition: all ${duration}ms ${timing};\n}`;
                break;
        }
        
        if (hoverCode) {
            hoverCode.textContent = code;
            Prism.highlightElement(hoverCode);
        }
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
