document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Preloader
  const preloader = document.getElementById('preloader');
  
  // Simulate loading time for demo purposes (or use window.onload)
  setTimeout(() => {
    preloader.classList.add('hidden');
    // Trigger reveals on hero section once preloader is hidden
    setTimeout(checkReveals, 300);
  }, 1500);

  // 2. Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Prevent body scrolling when menu is open
    if(navLinks.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Close menu when a link is clicked
  const navItems = navLinks.querySelectorAll('a');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // 3. Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.reveal');
  
  function checkReveals() {
    const triggerBottom = window.innerHeight * 0.85;
    
    revealElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      
      if(elTop < triggerBottom) {
        el.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', checkReveals);
  // Initial check is handled after preloader

  // 4. Navbar Sticky Shrink (Optional polish)
  const navbar = document.getElementById('navbar');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.padding = '0.5rem 0';
    } else {
      navbar.style.padding = '0';
    }
    lastScrollY = window.scrollY;
  });
});
