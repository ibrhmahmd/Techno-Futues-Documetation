/**
 * Design System - Interactive Demo
 * 
 * This script handles:
 * 1. Theme switching between light, dark, and high contrast modes
 * 2. Smooth scrolling for anchor links
 * 3. Active navigation highlighting
 * 4. Form validation and submission
 * 5. Responsive menu toggle for mobile
 */

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const html = document.documentElement;
    const themeButtons = document.querySelectorAll('[data-theme]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const form = document.querySelector('.form');
    const mobileMenuButton = document.createElement('button');
    const navMenu = document.querySelector('.nav-menu');
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply saved theme
    html.setAttribute('data-theme', savedTheme);
    
    // Theme Switching
    function setTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update active state on theme buttons
        themeButtons.forEach(button => {
            if (button.getAttribute('data-theme') === theme) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
    
    // Theme Button Event Listeners
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            setTheme(theme);
        });
        
        // Set initial active state
        if (button.getAttribute('data-theme') === savedTheme) {
            button.classList.add('active');
        }
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100, // Account for fixed header
                    behavior: 'smooth'
                });
                
                // Update URL without page jump
                history.pushState(null, null, targetId);
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });
    
    // Active Navigation Highlighting
    function setActiveNav() {
        const scrollPosition = window.scrollY + 150; // Account for fixed header
        
        // Reset all active states
        navLinks.forEach(link => {
            link.classList.remove('active');
            const section = document.querySelector(link.getAttribute('href'));
            if (section) link.setAttribute('aria-current', 'false');
        });
        
        // Find the section in view
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = '#' + section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Find corresponding nav link and set active
                const activeLink = document.querySelector(`.nav-menu a[href="${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                    activeLink.setAttribute('aria-current', 'true');
                }
            }
        });
    }
    
    // Create Mobile Menu Toggle Button
    function createMobileMenuButton() {
        mobileMenuButton.classList.add('mobile-menu-toggle');
        mobileMenuButton.setAttribute('aria-label', 'Toggle menu');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
        
        const header = document.querySelector('.header .container');
        if (header) {
            header.appendChild(mobileMenuButton);
        }
        
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }
    
    // Toggle Mobile Menu
    function toggleMobileMenu() {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        
        // Toggle icon between menu and close
        const icon = mobileMenuButton.querySelector('i');
        if (isExpanded) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    }
    
    // Form Validation and Submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });
            
            // Email validation
            const email = form.querySelector('input[type="email"]');
            if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                isValid = false;
                email.classList.add('error');
            }
            
            if (isValid) {
                // In a real app, you would submit the form here
                alert('Form submitted successfully!');
                form.reset();
            } else {
                // Show error message
                const errorMessage = document.createElement('div');
                errorMessage.className = 'form-error';
                errorMessage.textContent = 'Please fill in all required fields correctly.';
                
                // Remove any existing error messages
                const existingError = form.querySelector('.form-error');
                if (existingError) {
                    existingError.remove();
                }
                
                form.prepend(errorMessage);
            }
        });
    }
    
    // Initialize
    function init() {
        createMobileMenuButton();
        setActiveNav();
        
        // Set up event listeners
        window.addEventListener('scroll', setActiveNav);
        window.addEventListener('resize', function() {
            // Close mobile menu on larger screens
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    // Start the app
    init();
});

// Utility function to debounce function calls
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}
