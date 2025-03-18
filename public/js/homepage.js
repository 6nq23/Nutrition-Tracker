// NutriTreck Homepage JavaScript

// DOM Elements
const cursor = document.querySelector('.cursor');
const header = document.querySelector('.header');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const themeSwitch = document.querySelector('.theme-switch');
const heroTitle = document.querySelector('.hero-title');
const featureCards = document.querySelectorAll('.feature-card');

// Cursor Animation
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
});

// Add hover effect to all clickable elements
const clickableElements = document.querySelectorAll('a, button, .feature-card, .theme-switch');
clickableElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.mixBlendMode = 'normal';
        cursor.style.backgroundColor = 'rgba(76, 175, 80, 0.2)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.mixBlendMode = 'difference';
        cursor.style.backgroundColor = 'rgba(76, 175, 80, 0.5)';
    });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
}

// Dark Mode Toggle
if (themeSwitch) {
    themeSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Store preference in local storage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

// Check for saved theme preference
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    
    // Initialize animations
    initAnimations();
});

// Scroll Animations
function initAnimations() {
    // Hero section text animation
    if (heroTitle) {
        heroTitle.classList.add('fade-in');
    }
    
    // Animate feature cards on scroll
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    featureCards.forEach((card, index) => {
        // Set initial state
        card.style.opacity = '0';
        // Add delay based on index
        card.style.animationDelay = `${0.1 * index}s`;
        // Observe element
        observer.observe(card);
    });
    
    // Observe other elements that need animations
    document.querySelectorAll('.section-title, .cta-content').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
        }
    });
});

// Parallax Scrolling Effect for Hero Section
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-image');
    const scrollPosition = window.scrollY;
    
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    }
}); 