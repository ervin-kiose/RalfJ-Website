// Video background - force autoplay with fallback
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
    function tryPlay() {
        heroVideo.muted = true;
        heroVideo.play().catch(() => {
            // Retry after a short delay if browser blocked autoplay
            setTimeout(tryPlay, 500);
        });
    }

    // Try playing immediately, on DOM ready, and on window load
    tryPlay();
    document.addEventListener('DOMContentLoaded', tryPlay);
    window.addEventListener('load', tryPlay);

    // Also try on first user interaction as a last resort
    function playOnInteraction() {
        tryPlay();
        document.removeEventListener('click', playOnInteraction);
        document.removeEventListener('touchstart', playOnInteraction);
        document.removeEventListener('scroll', playOnInteraction);
    }
    document.addEventListener('click', playOnInteraction);
    document.addEventListener('touchstart', playOnInteraction);
    document.addEventListener('scroll', playOnInteraction);
}

// Language Switcher (only on biography page)
if (document.querySelector('.language-selector')) {
    const langButtons = document.querySelectorAll('.lang-btn');
    const bioLangSections = document.querySelectorAll('.bio-lang');

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.getAttribute('data-lang');
            
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            bioLangSections.forEach(section => {
                section.style.display = 'none';
            });
            
            const selectedSection = document.querySelector(`.bio-lang[data-lang="${selectedLang}"]`);
            if (selectedSection) {
                selectedSection.style.display = 'block';
            }
            
            localStorage.setItem('preferredLanguage', selectedLang);
        });
    });

    window.addEventListener('load', () => {
        const savedLang = localStorage.getItem('preferredLanguage');
        
        if (savedLang) {
            const savedLangButton = document.querySelector(`.lang-btn[data-lang="${savedLang}"]`);
            if (savedLangButton) {
                savedLangButton.click();
            }
        }
    });
}

// Navigation scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Contact form submission is handled by FormSubmit
// Form submits directly to FormSubmit.co - no custom JavaScript needed

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.event-card, .bio-content, .spotify-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Initialize on load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Also initialize icons when DOM is ready (backup)
document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Prevent default drag behavior on images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
});

// Console message
console.log('%c🎵 Ralf Jay - Professional DJ Website 🎵', 'font-size: 20px; font-weight: bold; color: #FF0080;');
