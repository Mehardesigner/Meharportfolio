document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parentItem = item.closest('.faq-item');
        parentItem.classList.toggle('active');
    });
});
