/* ========================================
   Navigation Toggle
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('open');
      });
    });
  }

  /* ========================================
     Language Toggle
     ======================================== */

  const langToggle = document.getElementById('lang-toggle');

  if (langToggle) {
    langToggle.addEventListener('click', function() {
      const currentPath = window.location.pathname;
      
      // Check if we're on an Italian page
      if (currentPath.includes('/it/')) {
        // Go to English version
        const englishPath = currentPath.replace('/it/', '/');
        window.location.href = englishPath;
      } else {
        // Go to Italian version
        let italianPath;
        if (currentPath === '/' || currentPath === '') {
          italianPath = '/it/';
        } else {
          italianPath = currentPath.replace(/^\//, '/it/');
        }
        window.location.href = italianPath;
      }
    });
  }

  /* ========================================
     Smooth scroll for hash links
     ======================================== */

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  /* ========================================
     Accessibility: Add loading state feedback
     ======================================== */

  // Optional: Add a loading class to body during navigation
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && !link.hasAttribute('target') && !link.href.includes('youtube') && !link.href.includes('github')) {
      document.body.style.opacity = '0.95';
    }
  });
});

/* ========================================
   Analytics (optional)
   ======================================== */

// If you want to add analytics, include it here
// Example: Google Analytics, Plausible, etc.