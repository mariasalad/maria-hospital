document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // Function-ka beddelaya sawirka
    function goToSlide(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        
        // Update dots
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    // Event listeners buttonada
    prevButton.addEventListener('click', () => {
        const index = (currentSlide - 1 + slideCount) % slideCount;
        goToSlide(index);
    });
    
    nextButton.addEventListener('click', () => {
        const index = (currentSlide + 1) % slideCount;
        goToSlide(index);
    });
    
    // Event listeners dots-ka
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // Auto-sliding
    setInterval(() => {
        const index = (currentSlide + 1) % slideCount;
        goToSlide(index);
    }, 5000); // Bedel 5 ilbiriqsi kasta

    // Mobile Menu Functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    const body = document.body;

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    body.appendChild(overlay);

    // Toggle menu when button is clicked
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Change menu icon
        if (mainNav.classList.contains('active')) {
            mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', () => {
        mainNav.classList.remove('active');
        overlay.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking menu items
    const menuItems = mainNav.querySelectorAll('a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            mainNav.classList.remove('active');
            overlay.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
});
// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    const body = document.body;

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    body.appendChild(overlay);

    // Toggle menu when button is clicked
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Change menu icon
        if (mainNav.classList.contains('active')) {
            mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', () => {
        mainNav.classList.remove('active');
        overlay.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking menu items
    const menuItems = mainNav.querySelectorAll('a');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            mainNav.classList.remove('active');
            overlay.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
});
