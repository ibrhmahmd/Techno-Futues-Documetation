/**
 * CSS Transitions & Animations Demo - Session 7
 * This script provides interactive controls for demonstrating various CSS transitions and animations.
 */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const transitionBox = document.querySelector('.transition-box');
    const animationBox = document.querySelector('.animation-box');
    const playAnimationBtn = document.getElementById('play-animation');
    const toggleMotionBtn = document.getElementById('toggle-motion');
    const animateSvgBtn = document.getElementById('animate-svg');
    const rotateCubeBtn = document.getElementById('rotate-cube');
    const cube = document.querySelector('.cube');
    const scrollItems = document.querySelectorAll('.scroll-item');
    const copyButtons = document.querySelectorAll('.copy-button');
    
    // Form controls
    const transitionProperty = document.getElementById('transition-property');
    const transitionDuration = document.getElementById('transition-duration');
    const durationValue = document.getElementById('duration-value');
    const transitionTiming = document.getElementById('transition-timing');
    const animationType = document.getElementById('animation-type');
    const animationDuration = document.getElementById('animation-duration');
    const animDurationValue = document.getElementById('anim-duration-value');
    const animationIteration = document.getElementById('animation-iteration');
    
    // State
    let isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let isAnimating = false;
    let isCubeRotated = false;
    
    // Initialize the demo
    init();
    
    /**
     * Initialize the demo
     */
    function init() {
        // Set up event listeners
        setupEventListeners();
        
        // Update the transition box with initial values
        updateTransitionBox();
        
        // Set up intersection observer for scroll animations
        setupIntersectionObserver();
        
        // Update reduced motion preference on load
        updateReducedMotionState();
    }
    
    /**
     * Set up all event listeners
     */
    function setupEventListeners() {
        // Mobile menu toggle
        menuToggle.addEventListener('click', toggleMobileMenu);
        
        // Transition controls
        transitionProperty.addEventListener('change', updateTransitionBox);
        transitionDuration.addEventListener('input', updateTransitionDuration);
        transitionTiming.addEventListener('change', updateTransitionBox);
        
        // Animation controls
        animationType.addEventListener('change', updateAnimationBox);
        animationDuration.addEventListener('input', updateAnimationDuration);
        animationIteration.addEventListener('change', updateAnimationBox);
        playAnimationBtn.addEventListener('click', triggerAnimation);
        
        // Advanced demos
        toggleMotionBtn.addEventListener('click', toggleReducedMotion);
        animateSvgBtn.addEventListener('click', animateSvg);
        rotateCubeBtn.addEventListener('click', rotateCube);
        
        // Copy to clipboard
        copyButtons.forEach(button => {
            button.addEventListener('click', copyCodeToClipboard);
        });
        
        // Update on window resize
        window.addEventListener('resize', handleResize);
        
        // Listen for reduced motion preference changes
        window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', updateReducedMotionState);
    }
    
    /**
     * Toggle mobile menu
     */
    function toggleMobileMenu() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    }
    
    /**
     * Update the transition box with selected properties
     */
    function updateTransitionBox() {
        const property = transitionProperty.value;
        const duration = transitionDuration.value;
        const timing = transitionTiming.value;
        
        // Update the display value
        durationValue.textContent = duration;
        
        // Apply the transition to the box
        if (property === 'all') {
            transitionBox.style.transition = `all ${duration}s ${timing}`;
        } else {
            transitionBox.style.transition = `${property} ${duration}s ${timing}`;
        }
        
        // Update the code example
        updateTransitionCodeExample(property, duration, timing);
    }
    
    /**
     * Update the transition duration display value
     */
    function updateTransitionDuration() {
        durationValue.textContent = transitionDuration.value;
        updateTransitionBox();
    }
    
    /**
     * Update the transition code example
     */
    function updateTransitionCodeExample(property, duration, timing) {
        const code = `/* Transition applied to the element */
.transition-box {
  transition: ${property} ${duration}s ${timing};
}

/* Hover state that triggers the transition */
.transition-box:hover {
  transform: scale(1.1);
  background: ${property === 'opacity' ? 'rgba(79, 70, 229, 0.7)' : '#4338ca'};
  ${property === 'opacity' ? 'opacity: 0.7;' : ''}
}`;
        
        document.getElementById('transition-code').textContent = code;
        
        // Re-highlight the code
        if (window.Prism) {
            Prism.highlightElement(document.getElementById('transition-code'));
        }
    }
    
    /**
     * Update the animation box with selected properties
     */
    function updateAnimationBox() {
        const type = animationType.value;
        const duration = animationDuration.value;
        const iteration = animationIteration.value;
        
        // Update the display value
        animDurationValue.textContent = duration;
        
        // Update the code example
        updateAnimationCodeExample(type, duration, iteration);
    }
    
    /**
     * Update the animation duration display value
     */
    function updateAnimationDuration() {
        animDurationValue.textContent = animationDuration.value;
        updateAnimationBox();
    }
    
    /**
     * Update the animation code example
     */
    function updateAnimationCodeExample(type, duration, iteration) {
        let keyframes = '';
        let animation = '';
        
        switch (type) {
            case 'bounce':
                keyframes = `@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}`;
                animation = `animation: bounce ${duration}s ${iteration === 'infinite' ? 'infinite' : iteration} ease-in-out;`;
                break;
                
            case 'pulse':
                keyframes = `@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}`;
                animation = `animation: pulse ${duration}s ${iteration === 'infinite' ? 'infinite' : iteration} ease-in-out;`;
                break;
                
            case 'rotate':
                keyframes = `@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`;
                animation = `animation: rotate ${duration}s ${iteration === 'infinite' ? 'infinite' : iteration} linear;`;
                break;
                
            case 'shake':
                keyframes = `@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
}`;
                animation = `animation: shake ${duration}s ${iteration === 'infinite' ? 'infinite' : iteration} ease-in-out;`;
                break;
        }
        
        const code = `${keyframes}

.animation-box {
  ${animation}
}`;
        
        document.getElementById('animation-code').textContent = code;
        
        // Re-highlight the code
        if (window.Prism) {
            Prism.highlightElement(document.getElementById('animation-code'));
        }
    }
    
    /**
     * Trigger the animation on the animation box
     */
    function triggerAnimation() {
        if (isAnimating || isReducedMotion) return;
        
        const type = animationType.value;
        const duration = parseFloat(animationDuration.value);
        const iteration = animationIteration.value;
        
        // Reset animation
        animationBox.style.animation = 'none';
        void animationBox.offsetWidth; // Trigger reflow
        
        // Apply new animation
        animationBox.style.animation = `${type} ${duration}s ${iteration === 'infinite' ? 'infinite' : iteration} ${type === 'rotate' ? 'linear' : 'ease-in-out'}`;
        
        // If not infinite, reset after animation completes
        if (iteration !== 'infinite') {
            isAnimating = true;
            playAnimationBtn.disabled = true;
            
            setTimeout(() => {
                isAnimating = false;
                playAnimationBtn.disabled = false;
            }, duration * 1000 * (iteration === '2' ? 2 : 1));
        }
    }
    
    /**
     * Toggle reduced motion preference
     */
    function toggleReducedMotion() {
        isReducedMotion = !isReducedMotion;
        
        if (isReducedMotion) {
            toggleMotionBtn.textContent = 'Enable Animations';
            toggleMotionBtn.classList.add('reduced');
            document.documentElement.style.setProperty('--transition-duration', '0s');
        } else {
            toggleMotionBtn.textContent = 'Disable Animations';
            toggleMotionBtn.classList.remove('reduced');
            document.documentElement.style.removeProperty('--transition-duration');
        }
    }
    
    /**
     * Update reduced motion state based on system preference
     */
    function updateReducedMotionState() {
        isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (isReducedMotion) {
            toggleMotionBtn.textContent = 'Enable Animations';
            toggleMotionBtn.classList.add('reduced');
            document.documentElement.style.setProperty('--transition-duration', '0s');
        } else {
            toggleMotionBtn.textContent = 'Disable Animations';
            toggleMotionBtn.classList.remove('reduced');
            document.documentElement.style.removeProperty('--transition-duration');
        }
    }
    
    /**
     * Animate the SVG circle
     */
    function animateSvg() {
        if (isReducedMotion) return;
        
        const circle = document.querySelector('.circle');
        circle.style.transition = 'stroke-dashoffset 1.5s ease-in-out';
        circle.style.strokeDashoffset = '0';
        
        // Reset after animation
        setTimeout(() => {
            circle.style.transition = 'none';
            circle.style.strokeDashoffset = '251.2';
        }, 2500);
    }
    
    /**
     * Rotate the 3D cube
     */
    function rotateCube() {
        if (isReducedMotion) return;
        
        if (isCubeRotated) {
            cube.style.transform = 'rotateX(0) rotateY(0)';
            rotateCubeBtn.textContent = 'Rotate Cube';
        } else {
            cube.style.transform = 'rotateX(45deg) rotateY(45deg)';
            rotateCubeBtn.textContent = 'Reset Cube';
        }
        
        isCubeRotated = !isCubeRotated;
    }
    
    /**
     * Set up intersection observer for scroll animations
     */
    function setupIntersectionObserver() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        scrollItems.forEach(item => {
            observer.observe(item);
        });
    }
    
    /**
     * Copy code to clipboard
     */
    function copyCodeToClipboard(e) {
        const button = e.currentTarget;
        const codeContainer = button.parentElement;
        const codeElement = codeContainer.querySelector('code');
        const code = codeElement.textContent;
        
        navigator.clipboard.writeText(code).then(() => {
            // Visual feedback
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i> Copied!';
            button.classList.add('copied');
            
            // Reset button after delay
            setTimeout(() => {
                button.innerHTML = originalText;
                button.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }
    
    /**
     * Handle window resize
     */
    function handleResize() {
        // Close mobile menu if open when resizing to desktop
        if (window.innerWidth > 992 && navMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Initialize Prism.js syntax highlighting
if (typeof Prism !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        Prism.highlightAll();
    });
}
