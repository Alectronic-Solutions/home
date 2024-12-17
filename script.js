document.addEventListener('DOMContentLoaded', function () {
    // Add portfolio icons dynamically
    const portfolioGallery = document.getElementById('portfolio-gallery');
    if (portfolioGallery) {
        for (let i = 1; i <= 19; i++) {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            portfolioItem.setAttribute('data-modal', `siteModal${i}`); // Link to modal

            const img = document.createElement('img');
            img.src = `images/portfolio-${i}.png`; // Ensure the path is correct
            img.alt = `Portfolio Item ${i}`;
            img.className = 'portfolio-img';

            portfolioItem.appendChild(img);
            portfolioGallery.appendChild(portfolioItem);
        }
    }

    // Modal functionality for portfolio modals
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const portfolioModals = document.querySelectorAll('.portfolio-modal');

    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const modalId = item.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('open');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });

    portfolioModals.forEach(modal => {
        const closeButton = modal.querySelector('.close');
        closeButton.addEventListener('click', () => {
            modal.classList.remove('open');
            document.body.style.overflow = 'auto'; // Restore scrolling
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('open');
                document.body.style.overflow = 'auto'; // Restore scrolling
            }
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modal.classList.contains('open')) {
                modal.classList.remove('open');
                document.body.style.overflow = 'auto'; // Restore scrolling
            }
        });
    });

    // Carousel functionality
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function nextItem() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
    }

    setInterval(nextItem, 5000);

    // Testimonials rotation
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    let currentTestimonial = 0;

    function nextTestimonial() {
        testimonialItems[currentTestimonial].classList.remove('active');
        currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
        testimonialItems[currentTestimonial].classList.add('active');
    }

    setInterval(nextTestimonial, 7000);

    // Modal functionality for service modals
    const serviceModalButtons = document.querySelectorAll('.service-card button');
    const serviceModals = document.querySelectorAll('.service-modal');

    serviceModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('open');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });

    serviceModals.forEach(modal => {
        const closeButton = modal.querySelector('.close');
        closeButton.addEventListener('click', () => {
            modal.classList.remove('open');
            document.body.style.overflow = 'auto'; // Restore scrolling
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('open');
                document.body.style.overflow = 'auto'; // Restore scrolling
            }
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modal.classList.contains('open')) {
                modal.classList.remove('open');
                document.body.style.overflow = 'auto'; // Restore scrolling
            }
        });
    });

    // Smooth scrolling for project sections
    const buttons = document.querySelectorAll('[data-section]');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Modal functionality for blog modals
    const blogButtons = document.querySelectorAll('.blog-btn');
    const blogModals = document.querySelectorAll('.blog-modal');

    blogButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('open');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            }
        });
    });

    blogModals.forEach(modal => {
        const closeButton = modal.querySelector('.close');
        closeButton.addEventListener('click', () => {
            modal.classList.remove('open');
            document.body.style.overflow = 'auto'; // Restore scrolling
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('open');
                document.body.style.overflow = 'auto'; // Restore scrolling
            }
        });

        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modal.classList.contains('open')) {
                modal.classList.remove('open');
                document.body.style.overflow = 'auto'; // Restore scrolling
            }
        });

        // Navigation buttons for blog modals
        const prevBtn = modal.querySelector('.prev-btn');
        const nextBtn = modal.querySelector('.next-btn');

        prevBtn.addEventListener('click', () => {
            const prevModalId = prevBtn.getAttribute('data-modal');
            const prevModal = document.getElementById(prevModalId);
            if (prevModal) {
                modal.classList.remove('open');
                prevModal.classList.add('open');
            }
        });

        nextBtn.addEventListener('click', () => {
            const nextModalId = nextBtn.getAttribute('data-modal');
            const nextModal = document.getElementById(nextModalId);
            if (nextModal) {
                modal.classList.remove('open');
                nextModal.classList.add('open');
            }
        });
    });

    // Footer contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Scroll to top functionality
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.className = 'scroll-to-top';
    scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopButton);

    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    const contactMeButtons = document.querySelectorAll('.modal-btn');
    contactMeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            const modal = button.closest('.service-modal');
            if (modal) {
                modal.classList.remove('open');
                document.body.style.overflow = 'auto'; // Restore scrolling
            }
            // Scroll to footer
            const footerContact = document.getElementById('footer-contact');
            if (footerContact) {
                footerContact.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    
});