// Select all arrow links
document.querySelectorAll('.arrow-link').forEach(link => {
  const arrow = link.querySelector('.arrow');
  const text = link.querySelector('.link-text');

  link.addEventListener('mouseenter', () => {
    text.style.opacity = '1';
    arrow.style.transform = `translateX(175px)`;
  });

  link.addEventListener('mouseleave', () => {
    text.style.opacity = '0';
    arrow.style.transform = 'translateX(0)';
  });
});

// ===== VIDEO CONTROLLER ===== 
document.querySelectorAll('.video-wrapper').forEach(wrapper => {
  const video = wrapper.querySelector('video');
  const btn = wrapper.querySelector('.play-btn');

  if (video && btn) {
    wrapper.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        btn.style.display = 'none';
      } else {
        video.pause();
        btn.style.display = 'flex';
      }
    });
  }
});

// ===== CONTEXT GRID ANIMATION WITH STAGGER ===== 
const contextElements = document.querySelectorAll(
  ".context-grid div, .context-stats div"
);

const contextObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("show");
      }, index * 100);
    }
  });
}, {
  threshold: 0.2
});

contextElements.forEach(el => contextObserver.observe(el));

// ===== HAMBURGER MENU ===== 
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const dropdown = document.querySelector('.dropdown');
const dropdownLink = dropdown?.querySelector('a');
const navLinks = document.querySelectorAll('.nav > ul > li > a');
const dropdownMenuLinks = document.querySelectorAll('.dropdown-menu a');

if (hamburger) {
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburger.classList.toggle('active');
    nav.classList.toggle('menu-open');
  });
}

// Toggle dropdown submenu on mobile
if (dropdownLink && window.innerWidth <= 768) {
  dropdownLink.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdown.classList.toggle('active');
    }
  });
}

// Close menu when clicking actual page navigation links
navLinks.forEach(link => {
  if (link.textContent.trim() !== 'Work') {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('active');
      nav?.classList.remove('menu-open');
      dropdown?.classList.remove('active');
    });
  }
});

// Close menu when clicking dropdown menu items
dropdownMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('active');
    nav?.classList.remove('menu-open');
    dropdown?.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (hamburger && nav && !nav.contains(e.target)) {
    hamburger.classList.remove('active');
    nav.classList.remove('menu-open');
    dropdown?.classList.remove('active');
  }
});