/**
 * Session 4: Typography & Text Styling - Interactive Demo
 * This script adds interactivity to the typography demo, allowing users to:
 * - Adjust text properties in real-time
 * - Copy CSS code examples
 * - Preview different font styles
 */

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const fontSizeInput = document.getElementById('font-size');
    const fontSizeValue = document.getElementById('font-size-value');
    const lineHeightInput = document.getElementById('line-height');
    const lineHeightValue = document.getElementById('line-height-value');
    const letterSpacingInput = document.getElementById('letter-spacing');
    const letterSpacingValue = document.getElementById('letter-spacing-value');
    const textSample = document.getElementById('text-sample');
    const fontCards = document.querySelectorAll('.font-card');
    const effectCards = document.querySelectorAll('.effect-card');
    const codeBlocks = document.querySelectorAll('code');

    // Initialize the demo
    function init() {
        // Set initial values
        updateTextSample();
        
        // Add event listeners
        fontSizeInput.addEventListener('input', updateTextSample);
        lineHeightInput.addEventListener('input', updateTextSample);
        letterSpacingInput.addEventListener('input', updateTextSample);
        
        // Add change events for better mobile support
        fontSizeInput.addEventListener('change', updateTextSample);
        lineHeightInput.addEventListener('change', updateTextSample);
        letterSpacingInput.addEventListener('change', updateTextSample);
        
        // Initialize font cards
        setupFontCards();
        
        // Initialize effect cards
        setupEffectCards();
        
        // Initialize code copy functionality
        setupCodeCopy();
        
        // Add console message for developers
        console.log('%c🎨 Typography & Text Styling Demo', 
            'font-size: 18px; font-weight: bold; color: #3498db;');
        console.log('Try adjusting the text properties using the controls!');
    }
    
    // Update the text sample with current control values
    function updateTextSample() {
        // Update displayed values
        fontSizeValue.textContent = fontSizeInput.value;
        lineHeightValue.textContent = lineHeightInput.value;
        letterSpacingValue.textContent = letterSpacingInput.value;
        
        // Apply styles to the text sample
        textSample.style.fontSize = `${fontSizeInput.value}px`;
        textSample.style.lineHeight = lineHeightInput.value;
        textSample.style.letterSpacing = `${letterSpacingInput.value}px`;
        
        // Update all paragraphs in the text sample
        const paragraphs = textSample.querySelectorAll('p');
        paragraphs.forEach(p => {
            p.style.fontSize = `${fontSizeInput.value}px`;
            p.style.lineHeight = lineHeightInput.value;
            p.style.letterSpacing = `${letterSpacingInput.value}px`;
        });
    }
    
    // Setup font cards with click-to-select functionality
    function setupFontCards() {
        fontCards.forEach(card => {
            // Add click handler to select/deselect font
            card.addEventListener('click', function() {
                // Remove selected class from all cards
                fontCards.forEach(c => c.classList.remove('selected'));
                
                // Add selected class to clicked card
                this.classList.add('selected');
                
                // Get the font family from the card
                const fontFamily = window.getComputedStyle(this).fontFamily;
                
                // Apply the font to the text sample
                textSample.style.fontFamily = fontFamily;
                
                // For Arabic text, we need to handle RTL separately
                const arabicParagraphs = document.querySelectorAll('.arabic');
                arabicParagraphs.forEach(p => {
                    if (fontFamily.includes('Cairo')) {
                        p.style.fontFamily = 'Cairo, sans-serif';
                        p.style.direction = 'rtl';
                        p.style.textAlign = 'right';
                    } else if (fontFamily.includes('Roboto')) {
                        p.style.fontFamily = 'Roboto, sans-serif';
                        p.style.direction = 'rtl';
                        p.style.textAlign = 'right';
                    } else {
                        p.style.fontFamily = 'Cairo, sans-serif';
                        p.style.direction = 'rtl';
                        p.style.textAlign = 'right';
                    }
                });
            });
            
            // Add hover effects
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', function() {
                if (!this.classList.contains('selected')) {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                }
            });
        });
        
        // Select the first font card by default
        if (fontCards.length > 0) {
            fontCards[0].click();
        }
    }
    
    // Setup effect cards with click-to-apply functionality
    function setupEffectCards() {
        effectCards.forEach(card => {
            // Add click handler to apply effect
            card.addEventListener('click', function() {
                // Get the effect preview element
                const preview = this.querySelector('.effect-preview');
                
                // Get the computed styles from the preview
                const styles = window.getComputedStyle(preview);
                
                // Apply the text shadow to the sample text
                const textShadow = styles.textShadow;
                const color = styles.color;
                
                // Apply the effect to all paragraphs in the text sample
                const paragraphs = textSample.querySelectorAll('p');
                paragraphs.forEach(p => {
                    p.style.textShadow = textShadow;
                    if (color) {
                        p.style.color = color;
                    }
                });
                
                // Highlight the selected card
                effectCards.forEach(c => c.classList.remove('selected'));
                this.classList.add('selected');
            });
            
            // Add hover effects
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px)';
                this.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.1)';
            });
            
            card.addEventListener('mouseleave', function() {
                if (!this.classList.contains('selected')) {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                }
            });
        });
    }
    
    // Setup copy-to-clipboard functionality for code blocks
    function setupCodeCopy() {
        codeBlocks.forEach(block => {
            // Create copy button
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-button';
            copyButton.textContent = 'Copy';
            copyButton.title = 'Copy to clipboard';
            
            // Position the copy button
            block.parentNode.style.position = 'relative';
            block.parentNode.appendChild(copyButton);
            
            // Add click handler
            copyButton.addEventListener('click', function() {
                const code = block.textContent;
                copyToClipboard(code);
                
                // Show feedback
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                this.classList.add('copied');
                
                // Reset after 2 seconds
                setTimeout(() => {
                    this.textContent = originalText;
                    this.classList.remove('copied');
                }, 2000);
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
    
    // Start the application
    init();
});
