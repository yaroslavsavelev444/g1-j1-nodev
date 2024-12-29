// ScrollReveal animations
ScrollReveal().reveal('#hero', { delay: 200, origin: 'top', distance: '50px' });
ScrollReveal().reveal('#about', { delay: 200, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal('#projects .bg-white', { delay: 200, interval: 200, origin: 'left', distance: '50px' });
ScrollReveal().reveal('#contact', { delay: 200, origin: 'right', distance: '50px' });

// Form Submission (Frontend Only)
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  alert('Form submitted successfully. Backend processing is pending.');
});

// Modal Functionality
const projectModal = document.getElementById('projectModal');
const closeModal = document.getElementById('closeModal');
const projectLinks = document.querySelectorAll('.project-link');

projectLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    projectModal.classList.remove('hidden');
  });
});

closeModal.addEventListener('click', () => {
  projectModal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === projectModal) {
    projectModal.classList.add('hidden');
  }
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.remove('hidden');
  } else {
    backToTop.classList.add('hidden');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Newsletter Form Submission
document.getElementById('newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
  
    if (!email) {
      alert('Please enter a valid email address.');
      return;
    }
  
    alert('Subscription successful!');
    e.target.reset();
  });


  document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert(data.success);
        e.target.reset();
      } else {
        alert(data.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again later.');
    }
  });