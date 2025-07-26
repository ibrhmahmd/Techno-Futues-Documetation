/**
 * CSS Best Practices & Advanced Techniques - Design System
 * Interactive functionality for the design system demo
 */

document.addEventListener('DOMContentLoaded', function() {
  // Theme switching functionality
  const themeSwitcher = document.querySelector('.theme-switcher');
  const html = document.documentElement;
  
  // Set initial theme based on system preference or saved preference
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);
  
  // Add event listener for theme switcher buttons
  if (themeSwitcher) {
    themeSwitcher.addEventListener('click', function(e) {
      const btn = e.target.closest('.theme-switcher__btn');
      if (!btn) return;
      
      // Remove active class from all buttons
      document.querySelectorAll('.theme-switcher__btn').forEach(b => {
        b.classList.remove('active');
      });
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      // Set the theme based on button data-theme attribute
      const theme = btn.dataset.theme;
      setTheme(theme);
      
      // Save preference to localStorage
      localStorage.setItem('theme', theme);
    });
  }
  
  // Set the theme
  function setTheme(theme) {
    // Remove all theme classes
    html.removeAttribute('data-theme');
    
    // Set the selected theme
    if (theme !== 'light') {
      html.setAttribute('data-theme', theme);
    }
    
    // Update active button in theme switcher
    if (themeSwitcher) {
      document.querySelectorAll('.theme-switcher__btn').forEach(btn => {
        if (btn.dataset.theme === theme) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if open
        const mobileMenu = document.querySelector('.nav__menu');
        const menuToggle = document.querySelector('.menu-toggle');
        if (mobileMenu && mobileMenu.classList.contains('is-open')) {
          mobileMenu.classList.remove('is-open');
          menuToggle?.classList.remove('is-active');
        }
        
        // Smooth scroll to target
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL without page jump
        history.pushState(null, null, targetId);
      }
    });
  });
  
  // Highlight active navigation link based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  
  function highlightNav() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
        current = '#' + section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === current) {
        link.classList.add('active');
      }
    });
  }
  
  // Run once on page load
  highlightNav();
  
  // Add scroll event listener
  window.addEventListener('scroll', () => {
    // Throttle the scroll event for better performance
    let ticking = false;
    
    if (!ticking) {
      window.requestAnimationFrame(() => {
        highlightNav();
        ticking = false;
      });
      
      ticking = true;
    }
  });
  
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav__menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
      this.classList.toggle('is-active');
      navMenu.classList.toggle('is-open');
    });
  }
  
  // Form validation example
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      let isValid = true;
      const requiredFields = form.querySelectorAll('[required]');
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('is-invalid');
          
          // Add error message if not already present
          if (!field.nextElementSibling?.classList.contains('error-message')) {
            const error = document.createElement('div');
            error.className = 'error-message';
            error.textContent = field.dataset.error || 'This field is required';
            error.style.color = 'var(--color-danger)';
            error.style.fontSize = '0.875rem';
            error.style.marginTop = '0.25rem';
            field.parentNode.insertBefore(error, field.nextSibling);
          }
        } else {
          field.classList.remove('is-invalid');
          const error = field.nextElementSibling;
          if (error?.classList.contains('error-message')) {
            error.remove();
          }
        }
      });
      
      if (!isValid) {
        e.preventDefault();
        
        // Scroll to first invalid field
        const firstInvalid = form.querySelector('.is-invalid');
        if (firstInvalid) {
          firstInvalid.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
          firstInvalid.focus();
        }
      }
    });
    
    // Clear error on input
    form.addEventListener('input', function(e) {
      if (e.target.hasAttribute('required')) {
        if (e.target.value.trim()) {
          e.target.classList.remove('is-invalid');
          const error = e.target.nextElementSibling;
          if (error?.classList.contains('error-message')) {
            error.remove();
          }
        }
      }
    });
  });
  
  // Toggle password visibility
  const togglePasswordBtns = document.querySelectorAll('.toggle-password');
  
  togglePasswordBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const input = this.previousElementSibling;
      const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
      input.setAttribute('type', type);
      this.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
    });
  });
  
  // Copy to clipboard functionality for code blocks
  const copyButtons = document.querySelectorAll('.copy-btn');
  
  copyButtons.forEach(button => {
    button.addEventListener('click', function() {
      const codeBlock = this.nextElementSibling;
      const code = codeBlock.textContent;
      
      navigator.clipboard.writeText(code).then(() => {
        // Show copied feedback
        const originalText = this.textContent;
        this.textContent = 'Copied!';
        this.classList.add('copied');
        
        // Reset button after delay
        setTimeout(() => {
          this.textContent = originalText;
          this.classList.remove('copied');
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  });
  
  // Initialize tooltips
  const tooltipTriggers = document.querySelectorAll('[data-tooltip]');
  
  tooltipTriggers.forEach(trigger => {
    let tooltip = null;
    
    const showTooltip = (e) => {
      // Don't show if already showing
      if (document.querySelector('.tooltip')) return;
      
      // Create tooltip element
      tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = trigger.getAttribute('data-tooltip');
      document.body.appendChild(tooltip);
      
      // Position tooltip
      const rect = trigger.getBoundingClientRect();
      const tooltipRect = tooltip.getBoundingClientRect();
      
      let top = rect.top - tooltipRect.height - 8;
      let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
      
      // Adjust if tooltip would go off screen
      if (left < 10) left = 10;
      if (left + tooltipRect.width > window.innerWidth - 10) {
        left = window.innerWidth - tooltipRect.width - 10;
      }
      
      tooltip.style.top = `${top + window.scrollY}px`;
      tooltip.style.left = `${left}px`;
      tooltip.classList.add('visible');
    };
    
    const hideTooltip = () => {
      if (tooltip) {
        tooltip.remove();
        tooltip = null;
      }
    };
    
    // Add event listeners
    trigger.addEventListener('mouseenter', showTooltip);
    trigger.addEventListener('focus', showTooltip);
    trigger.addEventListener('mouseleave', hideTooltip);
    trigger.addEventListener('blur', hideTooltip);
  });
  
  // Add animation to elements with data-animate attribute
  const animateElements = document.querySelectorAll('[data-animate]');
  
  const animateOnScroll = () => {
    animateElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        const animation = element.getAttribute('data-animate');
        element.classList.add('animate__animated', `animate__${animation}`);
      }
    });
  };
  
  // Run once on page load
  animateOnScroll();
  
  // Add scroll event listener for animations
  window.addEventListener('scroll', animateOnScroll);
  
  // Initialize any carousels or sliders
  const carousels = document.querySelectorAll('.carousel');
  
  carousels.forEach(carousel => {
    const slides = carousel.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    
    // Show first slide
    showSlide(currentSlide);
    
    // Add event listeners for prev/next buttons
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      });
    }
    
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
      });
    }
  });
  
  // Handle tabbed interfaces
  const tabContainers = document.querySelectorAll('.tabs');
  
  tabContainers.forEach(container => {
    const tabs = container.querySelectorAll('.tab');
    const tabPanes = container.querySelectorAll('.tab-pane');
    
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs and panes
        tabs.forEach(t => t.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding pane
        tab.classList.add('active');
        if (tabPanes[index]) {
          tabPanes[index].classList.add('active');
        }
      });
    });
    
    // Activate first tab by default if none are active
    if (!container.querySelector('.tab.active') && tabs.length > 0) {
      tabs[0].classList.add('active');
      if (tabPanes[0]) {
        tabPanes[0].classList.add('active');
      }
    }
  });
  
  // Handle accordion functionality
  const accordionToggles = document.querySelectorAll('.accordion-toggle');
  
  accordionToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      
      // Toggle the open state
      toggle.setAttribute('aria-expanded', !isOpen);
      content.style.maxHeight = isOpen ? '0' : `${content.scrollHeight}px`;
      
      // Toggle icon if present
      const icon = toggle.querySelector('.accordion-icon');
      if (icon) {
        icon.textContent = isOpen ? '+' : '-';
      }
    });
  });
  
  // Initialize any modals
  const modalTriggers = document.querySelectorAll('[data-modal]');
  
  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      
      if (modal) {
        modal.classList.add('is-visible');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
        
        // Focus the first focusable element in the modal
        const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable) focusable.focus();
      }
    });
  });
  
  // Close modal when clicking close button or outside modal
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal') || e.target.classList.contains('modal-close')) {
      const modal = e.target.closest('.modal');
      if (modal) {
        modal.classList.remove('is-visible');
        document.body.style.overflow = ''; // Re-enable scrolling
      }
    }
  });
  
  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.querySelector('.modal.is-visible');
      if (modal) {
        modal.classList.remove('is-visible');
        document.body.style.overflow = ''; // Re-enable scrolling
      }
    }
  });
  
  // Handle form submission feedback
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      try {
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Simulate form submission (replace with actual fetch/AJAX call)
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'alert alert-success';
        successMessage.textContent = 'Message sent successfully!';
        contactForm.reset();
        contactForm.insertBefore(successMessage, contactForm.firstChild);
        
        // Remove success message after delay
        setTimeout(() => {
          successMessage.remove();
        }, 5000);
        
      } catch (error) {
        // Show error message
        const errorMessage = document.createElement('div');
        errorMessage.className = 'alert alert-danger';
        errorMessage.textContent = 'An error occurred. Please try again.';
        contactForm.insertBefore(errorMessage, contactForm.firstChild);
        
        // Remove error message after delay
        setTimeout(() => {
          errorMessage.remove();
        }, 5000);
        
      } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }
});
