document.addEventListener("DOMContentLoaded", function() {
    // --- Efek Mengetik untuk Hero Section ---
    const textArray = [
        "Exploring AI, Cybersecurity & Blockchain to Shape the Future.",
        "Turning Curiosity into Technology that Matters.",
        "Tech Enthusiast | Cybersecurity & AI Learner | Blockchain Explorer.",
        "Simplifying Complexity through Code, Data, and Security.",
        "Learning. Building. Sharing my journey in Tech & Finance.",
        "Driven by curiosity, committed to continuous growth.",
        "From Ideas to Innovation.",
        "Future-Driven. Tech-Focused. Always Learning."
    ];

    let typingDelay = 60;
    let erasingDelay = 40;
    let newTextDelay = 1500;
    let textArrayIndex = 0;
    let charIndex = 0;

    const typingTextEl = document.getElementById("typingText");

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typingTextEl.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingTextEl.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) {
                textArrayIndex = 0;
            }
            setTimeout(type, typingDelay + 500);
        }
    }

    if (textArray.length) {
        setTimeout(type, newTextDelay + 250);
    }

    // --- Animasi Skill Bar saat Scroll ---
    const skillsSection = document.getElementById('skills');
    const skillProgressBars = document.querySelectorAll('.skill-progress');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillProgressBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width;
                });
                observer.disconnect(); // Hentikan mengamati setelah animasi dipicu
            }
        });
    }, {
        threshold: 0.5 // Memicu saat 50% bagian terlihat
    });

    observer.observe(skillsSection);

    // --- Fungsionalitas Navigasi Hamburger ---
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Sembunyikan menu saat tautan diklik
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});