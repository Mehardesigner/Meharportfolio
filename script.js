// script.js
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const spans = document.querySelectorAll('.hamburger span');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  spans.forEach(span => span.classList.toggle('toggle'));
});
// FAQ Section Slide Effect
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
      // Toggle the active class to show/hide the answer
      const faqItem = this.parentElement;
      faqItem.classList.toggle('active');
  
      // Close other questions if they are open
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
        }
      });
    });
  });
  