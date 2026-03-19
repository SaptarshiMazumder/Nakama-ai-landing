// ============================================================
// Nakama AI — Main JavaScript
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

    // ---- Navbar scroll effect ----
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });

    // ---- Mobile nav toggle ----
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });

        // Close on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('nav-open');
            });
        });
    }

    // ---- Smooth scroll for anchor links ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = navbar.offsetHeight + 20;
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // ---- Stat counter animation ----
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    let statsAnimated = false;

    const animateStats = () => {
        if (statsAnimated) return;
        const statsSection = document.querySelector('.hero-stats');
        if (!statsSection) return;
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            statsAnimated = true;
            statNumbers.forEach(el => {
                const target = parseInt(el.dataset.target);
                let current = 0;
                const increment = target / 40;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        el.textContent = target;
                        clearInterval(timer);
                    } else {
                        el.textContent = Math.floor(current);
                    }
                }, 30);
            });
        }
    };

    window.addEventListener('scroll', animateStats);
    animateStats();

    // ---- Scroll reveal animations ----
    const revealElements = document.querySelectorAll(
        '.section-header, .product-card, .industry-card, .feature-card, .step-card, .testimonial-card, .faq-item'
    );

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    // ---- FAQ accordion ----
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isActive = item.classList.contains('active');

            // Close all
            document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('active'));

            // Open clicked if wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // ---- Waitlist form ----
    const waitlistForm = document.getElementById('waitlistForm');
    const waitlistSuccess = document.getElementById('waitlistSuccess');

    if (waitlistForm) {
        // Pre-select product from button click
        document.querySelectorAll('[data-product]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const product = btn.dataset.product;
                const select = document.getElementById('product');
                if (select) {
                    if (product.includes('Studio')) select.value = 'studio';
                    else if (product.includes('Agents')) select.value = 'agents';
                }
            });
        });

        waitlistForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = waitlistForm.querySelector('.btn-submit');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            const btnArrow = submitBtn.querySelector('.btn-arrow');

            // Show loading
            btnText.style.display = 'none';
            btnArrow.style.display = 'none';
            btnLoading.style.display = 'inline-flex';
            submitBtn.disabled = true;

            // Simulate submission
            setTimeout(() => {
                waitlistForm.style.display = 'none';
                waitlistSuccess.style.display = 'block';
                waitlistSuccess.classList.add('revealed');
            }, 1500);
        });
    }

    // ---- Typing animation for hero card ----
    const promptText = document.querySelector('.prompt-text');
    if (promptText) {
        const text = promptText.textContent;
        promptText.textContent = '';
        let i = 0;
        const type = () => {
            if (i < text.length) {
                promptText.textContent += text.charAt(i);
                i++;
                setTimeout(type, 50 + Math.random() * 50);
            }
        };
        setTimeout(type, 1500);
    }

    // ---- Cookie consent banner ----
    if (!localStorage.getItem('nakama_cookies_accepted')) {
        const banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-content">
                <p>We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
                <a href="cookies.html">Learn more</a></p>
                <div class="cookie-actions">
                    <button class="btn btn-sm btn-secondary" id="cookieDecline">Decline</button>
                    <button class="btn btn-sm btn-primary" id="cookieAccept">Accept All</button>
                </div>
            </div>
        `;
        document.body.appendChild(banner);

        setTimeout(() => banner.classList.add('visible'), 1000);

        document.getElementById('cookieAccept').addEventListener('click', () => {
            localStorage.setItem('nakama_cookies_accepted', 'true');
            banner.classList.remove('visible');
            setTimeout(() => banner.remove(), 400);
        });

        document.getElementById('cookieDecline').addEventListener('click', () => {
            localStorage.setItem('nakama_cookies_accepted', 'minimal');
            banner.classList.remove('visible');
            setTimeout(() => banner.remove(), 400);
        });
    }
});
