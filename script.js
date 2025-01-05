// Add event listeners to toggle FAQ answers and slide bar rotation
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        const slideBar = item.querySelector('.slide-bar');
        
        // Toggle open/close FAQ
        item.classList.toggle('open');
        
        // Slide answer up/down
        if (item.classList.contains('open')) {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});
// Typing effect logic
let textArray = ["Shopify Store Designer", "Graphic Designing"];
let currentIndex = 0;
let currentText = "";
let currentCharIndex = 0;
let typingElement = document.querySelector(".typing-effect-text");

function typeText() {
    if (currentCharIndex < textArray[currentIndex].length) {
        currentText += textArray[currentIndex].charAt(currentCharIndex);
        typingElement.textContent = currentText;
        currentCharIndex++;
        setTimeout(typeText, 150); // Speed of typing
    } else {
        setTimeout(deleteText, 1000); // Delay before deleting
    }
}

function deleteText() {
    if (currentCharIndex > 0) {
        currentText = currentText.slice(0, -1);
        typingElement.textContent = currentText;
        currentCharIndex--;
        setTimeout(deleteText, 100); // Speed of deleting
    } else {
        // Add class to shrink and fade the section
        document.querySelector(".typing-effect-section").classList.add("removing");

        // Wait for animation to finish and restart typing
        setTimeout(() => {
            document.querySelector(".typing-effect-section").classList.remove("removing");
            currentIndex = (currentIndex + 1) % textArray.length; // Switch to the next text
            setTimeout(typeText, 500); // Delay before typing the next text
        }, 300); // Wait for shrinking effect to finish
    }
}

// Start typing effect
typeText();
// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Scroll to target section smoothly
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animation for Elements on Viewport
window.addEventListener('scroll', () => {
    // Get all elements with the class 'animate-on-scroll'
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
});

// Check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Optional: Add a class for fade-in or other animations
document.querySelectorAll('.animate-on-scroll').forEach(element => {
    element.classList.add('hidden');
});
