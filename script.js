// Create the 'Back to Top' button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑ Back to Top';
backToTopButton.id = 'back-to-top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.backgroundColor = '#333';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none';
backToTopButton.style.zIndex = '1000';

// Append the button to the body
document.body.appendChild(backToTopButton);

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll back to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});