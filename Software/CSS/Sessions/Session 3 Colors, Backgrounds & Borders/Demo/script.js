/**
 * Session 3: Colors, Backgrounds & Borders - Interactive Demo
 * This script adds interactivity to the demo page, allowing users to:
 * - View color values on hover
 * - Copy color codes to clipboard
 * - Interactively modify the demo box with controls
 */

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const colorBoxes = document.querySelectorAll('.color-box');
    const bgColorInput = document.getElementById('bg-color');
    const borderColorInput = document.getElementById('border-color');
    const borderRadiusInput = document.getElementById('border-radius');
    const radiusValue = document.getElementById('radius-value');
    const interactiveBox = document.getElementById('interactive-box');
    
    // Initialize the interactive box with default values
    function initInteractiveBox() {
        updateInteractiveBox();
        
        // Display the initial border radius value
        radiusValue.textContent = borderRadiusInput.value;
        
        // Add event listeners for color inputs
        bgColorInput.addEventListener('input', updateInteractiveBox);
        borderColorInput.addEventListener('input', updateInteractiveBox);
        borderRadiusInput.addEventListener('input', updateInteractiveBox);
        
        // Add change event for better mobile support
        bgColorInput.addEventListener('change', updateInteractiveBox);
        borderColorInput.addEventListener('change', updateInteractiveBox);
        borderRadiusInput.addEventListener('change', updateInteractiveBox);
    }
    
    // Update the interactive box styles based on control values
    function updateInteractiveBox() {
        interactiveBox.style.backgroundColor = bgColorInput.value;
        interactiveBox.style.borderColor = borderColorInput.value;
        interactiveBox.style.borderRadius = `${borderRadiusInput.value}px`;
        
        // Update the displayed radius value
        radiusValue.textContent = borderRadiusInput.value;
        
        // Adjust text color based on background brightness
        const bgColor = getComputedStyle(interactiveBox).backgroundColor;
        const brightness = getBrightness(bgColor);
        interactiveBox.style.color = brightness > 128 ? '#333' : '#fff';
    }
    
    // Calculate the brightness of a color (0-255)
    function getBrightness(color) {
        // Handle different color formats (rgb, rgba, hex)
        let r, g, b;
        
        // Handle rgb/rgba format
        const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
        if (rgbMatch) {
            r = parseInt(rgbMatch[1]);
            g = parseInt(rgbMatch[2]);
            b = parseInt(rgbMatch[3]);
        } 
        // Handle hex format
        else if (color.startsWith('#')) {
            const hex = color.substring(1);
            const bigint = parseInt(hex.length === 3 ? 
                hex.split('').map(c => c + c).join('') : hex, 16);
            r = (bigint >> 16) & 255;
            g = (bigint >> 8) & 255;
            b = bigint & 255;
        }
        
        // Calculate brightness using the formula: (R*299 + G*587 + B*114) / 1000
        return r && g && b ? (r * 299 + g * 587 + b * 114) / 1000 : 0;
    }
    
    // Add click to copy functionality to color boxes
    function setupColorBoxes() {
        colorBoxes.forEach(box => {
            // Add click to copy
            box.addEventListener('click', function() {
                const colorCode = this.querySelector('span:first-child').textContent;
                copyToClipboard(colorCode);
                
                // Show feedback
                const feedback = document.createElement('div');
                feedback.textContent = 'Copied!';
                feedback.style.position = 'absolute';
                feedback.style.background = 'rgba(0, 0, 0, 0.8)';
                feedback.style.color = 'white';
                feedback.style.padding = '5px 10px';
                feedback.style.borderRadius = '4px';
                feedback.style.fontSize = '0.8rem';
                feedback.style.top = '5px';
                feedback.style.right = '5px';
                feedback.style.opacity = '0';
                feedback.style.transition = 'opacity 0.3s';
                
                this.style.position = 'relative';
                this.appendChild(feedback);
                
                // Trigger reflow
                void feedback.offsetWidth;
                
                // Fade in
                feedback.style.opacity = '1';
                
                // Remove after animation
                setTimeout(() => {
                    feedback.style.opacity = '0';
                    setTimeout(() => feedback.remove(), 300);
                }, 1000);
            });
            
            // Add hover effect
            box.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
            });
            
            box.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
    
    // Helper function to copy text to clipboard
    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';  // Prevent scrolling to bottom
        document.body.appendChild(textarea);
        textarea.select();
        
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
        
        document.body.removeChild(textarea);
    }
    
    // Initialize everything
    function init() {
        setupColorBoxes();
        initInteractiveBox();
        
        // Add console message for developers
        console.log('%c🎨 CSS Colors, Backgrounds & Borders Demo', 
            'font-size: 18px; font-weight: bold; color: #3498db;');
        console.log('Try changing the colors and border radius using the controls!');
    }
    
    // Start the application
    init();
});
