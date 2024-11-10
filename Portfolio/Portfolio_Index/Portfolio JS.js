// Portfolio JS.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form validation (example)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const email = document.querySelector('#contact-email').value;
        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            e.preventDefault();
        }
    });
}
