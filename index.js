// script.js
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    console.log(navLinks.classList); // Toggle the 'show' class to show/hide the menu
});



document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.service-item');
    const dotsContainer = document.querySelector('.pagination-dots');
    const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
    let currentIndex = 0;
    let autoScrollInterval;

    if (isSmallScreen) {
        // Create dots dynamically
        items.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active'); // Mark the first dot as active
            dot.addEventListener('click', () => {
                navigateToService(index);
                resetAutoScroll(); // Reset the timer on manual navigation
            });
            dotsContainer.appendChild(dot);
        });

        // Function to navigate to a specific service item
        function navigateToService(index) {
            items[currentIndex].classList.remove('active');
            dotsContainer.children[currentIndex].classList.remove('active');

            currentIndex = index;

            items[currentIndex].classList.add('active');
            dotsContainer.children[currentIndex].classList.add('active');
        }

        // Function to auto-scroll through items
        function autoScroll() {
            const nextIndex = (currentIndex + 1) % items.length; // Cycle through items
            navigateToService(nextIndex);
        }

        // Reset the auto-scroll interval
        function resetAutoScroll() {
            clearInterval(autoScrollInterval);
            autoScrollInterval = setInterval(autoScroll, 1500);
        }

        // Initialize the first item as active
        if (items.length > 0) {
            items[0].classList.add('active');
            resetAutoScroll(); // Start the auto-scroll
        }
    }
});