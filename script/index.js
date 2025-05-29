// Filter functionality
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    document.querySelectorAll('.project-card').forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Testimonials slider functionality
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-slide');

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? 'block' : 'none';
  });
}

document.querySelector('.prev-testimonial').addEventListener('click', () => {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
});

document.querySelector('.next-testimonial').addEventListener('click', () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
});

// Initialize first testimonial
showTestimonial(currentTestimonial);

// Contact form submission handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  this.reset();
});

document.getElementById('menuToggle').addEventListener('click', () => {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('hidden');
});
