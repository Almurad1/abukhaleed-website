 // ---------- Website Manager ----------
        class WebsiteManager {
            constructor() {
                this.currentLanguage = localStorage.getItem('language') || 'ar';
                this.currentTheme = localStorage.getItem('theme') || 'light';
                this.init();
            }

            init() {
                this.setupEventListeners();
                this.applyLanguage(this.currentLanguage);
                this.applyTheme(this.currentTheme);
                this.setupScrollEffects();
                this.setupProgressBar();
                this.setupMobileMenu();
                this.setupContactForm();
                this.setupSmoothScrolling();
            }

            setupEventListeners() {
                const themeToggle = document.getElementById('themeToggle');
                if (themeToggle) themeToggle.addEventListener('click', () => this.toggleTheme());

                const langToggle = document.getElementById('langToggle');
                if (langToggle) langToggle.addEventListener('click', () => this.toggleLanguage());

                const mobileToggle = document.getElementById('mobileToggle');
                if (mobileToggle) mobileToggle.addEventListener('click', () => this.toggleMobileMenu());

                window.addEventListener('scroll', () => {
                    this.updateProgressBar();
                    this.updateHeaderOnScroll();
                });
                window.addEventListener('resize', () => this.handleResize());
            }

            toggleTheme() {
                this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
                this.applyTheme(this.currentTheme);
                localStorage.setItem('theme', this.currentTheme);
            }

            applyTheme(theme) {
                document.documentElement.setAttribute('data-theme', theme);
                const themeIcon = document.querySelector('#themeToggle i');
                if (themeIcon) {
                    themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
                }
            }

            toggleLanguage() {
                this.currentLanguage = this.currentLanguage === 'ar' ? 'en' : 'ar';
                this.applyLanguage(this.currentLanguage);
                localStorage.setItem('language', this.currentLanguage);
            }

            applyLanguage(lang) {
                document.documentElement.lang = lang;
                document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

                const langToggleSpan = document.querySelector('#langToggle span');
                if (langToggleSpan) langToggleSpan.textContent = lang === 'ar' ? 'EN' : 'ع';

                const elements = document.querySelectorAll('[data-ar][data-en]');
                elements.forEach(element => {
                    const text = element.getAttribute(`data-${lang}`);
                    if (text) {
                        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                            element.placeholder = text;
                        } else {
                            element.textContent = text;
                        }
                    }
                });

                this.updateFormLabels(lang);
            }

            updateFormLabels(lang) {
                const labels = {
                    ar: {
                        name: 'الاسم *', email: 'البريد الإلكتروني', phone: 'رقم الهاتف', message: 'الرسالة *',
                        namePlaceholder: 'أدخل اسمك الكامل', emailPlaceholder: 'example@email.com',
                        phonePlaceholder: '+966 5X XXX XXXX', messagePlaceholder: 'اكتب رسالتك هنا...'
                    },
                    en: {
                        name: 'Name *', email: 'Email', phone: 'Phone Number', message: 'Message *',
                        namePlaceholder: 'Enter your full name', emailPlaceholder: 'example@email.com',
                        phonePlaceholder: '+966 5X XXX XXXX', messagePlaceholder: 'Write your message here...'
                    }
                };
                const l = labels[lang];
                const nameLabel = document.querySelector('label[for="name"]');
                const emailLabel = document.querySelector('label[for="email"]');
                const phoneLabel = document.querySelector('label[for="phone"]');
                const messageLabel = document.querySelector('label[for="message"]');
                if (nameLabel) nameLabel.textContent = l.name;
                if (emailLabel) emailLabel.textContent = l.email;
                if (phoneLabel) phoneLabel.textContent = l.phone;
                if (messageLabel) messageLabel.textContent = l.message;

                const nameInput = document.getElementById('name');
                const emailInput = document.getElementById('email');
                const phoneInput = document.getElementById('phone');
                const messageInput = document.getElementById('message');
                if (nameInput) nameInput.placeholder = l.namePlaceholder;
                if (emailInput) emailInput.placeholder = l.emailPlaceholder;
                if (phoneInput) phoneInput.placeholder = l.phonePlaceholder;
                if (messageInput) messageInput.placeholder = l.messagePlaceholder;
            }

            setupScrollEffects() {
                const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) entry.target.classList.add('animate-in');
                    });
                }, observerOptions);
                const animateElements = document.querySelectorAll('.service-card, .about-card, .testimonial, .contact-card');
                animateElements.forEach(el => observer.observe(el));
            }

            setupProgressBar() {
                this.updateProgressBar();
            }

            updateProgressBar() {
                const progressBar = document.getElementById('progressBar');
                if (!progressBar) return;
                const scrollTop = window.pageYOffset;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const percent = (scrollTop / docHeight) * 100;
                progressBar.style.width = `${Math.min(percent, 100)}%`;
            }

            updateHeaderOnScroll() {
                const header = document.getElementById('header');
                if (header) {
                    if (window.scrollY > 100) header.classList.add('scrolled');
                    else header.classList.remove('scrolled');
                }
            }

            setupMobileMenu() {
                if (document.querySelector('.mobile-menu')) return;
                const nav = document.querySelector('.nav');
                if (!nav) return;
                const mobileMenu = document.createElement('div');
                mobileMenu.className = 'mobile-menu';
                mobileMenu.innerHTML = nav.innerHTML;
                const phoneBtn = document.querySelector('.phone-btn');
                if (phoneBtn) mobileMenu.appendChild(phoneBtn.cloneNode(true));
                document.querySelector('.header .container').appendChild(mobileMenu);
            }

            toggleMobileMenu() {
                const mobileToggle = document.getElementById('mobileToggle');
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileToggle && mobileMenu) {
                    mobileToggle.classList.toggle('active');
                    mobileMenu.classList.toggle('active');
                }
            }

            setupContactForm() {
                const form = document.getElementById('contactForm');
                if (!form) return;
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const name = document.getElementById('name')?.value || '';
                    const email = document.getElementById('email')?.value || '';
                    const phone = document.getElementById('phone')?.value || '';
                    const message = document.getElementById('message')?.value || '';
                    let whatsappMsg = `مرحباً، اسمي ${name}`;
                    if (email) whatsappMsg += `%0Aالبريد الإلكتروني: ${email}`;
                    if (phone) whatsappMsg += `%0Aرقم الهاتف: ${phone}`;
                    whatsappMsg += `%0Aالرسالة: ${message}`;
                    window.open(`https://wa.me/966508777407?text=${whatsappMsg}`, '_blank');
                });
            }

            setupSmoothScrolling() {
                const links = document.querySelectorAll('a[href^="#"]');
                links.forEach(link => {
                    link.addEventListener('click', (e) => {
                        const href = link.getAttribute('href');
                        if (href === '#') return;
                        const targetId = href.substring(1);
                        const target = document.getElementById(targetId);
                        if (target) {
                            e.preventDefault();
                            const header = document.getElementById('header');
                            const headerHeight = header ? header.offsetHeight : 70;
                            const pos = target.offsetTop - headerHeight;
                            window.scrollTo({ top: pos, behavior: 'smooth' });
                            const mobileMenu = document.querySelector('.mobile-menu');
                            const mobileToggle = document.getElementById('mobileToggle');
                            if (mobileMenu && mobileMenu.classList.contains('active')) {
                                mobileMenu.classList.remove('active');
                                if (mobileToggle) mobileToggle.classList.remove('active');
                            }
                        }
                    });
                });
            }

            handleResize() {
                if (window.innerWidth > 768) {
                    const mobileMenu = document.querySelector('.mobile-menu');
                    const mobileToggle = document.getElementById('mobileToggle');
                    if (mobileMenu && mobileMenu.classList.contains('active')) {
                        mobileMenu.classList.remove('active');
                        if (mobileToggle) mobileToggle.classList.remove('active');
                    }
                }
            }
        }

        // ---------- Animation Effects ----------
        class AnimationEffects {
            constructor() {
                this.setupHoverEffects();
                this.setupScrollReveal();
            }

            setupHoverEffects() {
                const cards = document.querySelectorAll('.service-card');
                cards.forEach(card => {
                    card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-12px) scale(1.02)');
                    card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0) scale(1)');
                });
                const btns = document.querySelectorAll('.btn, .service-btn, .quick-btn');
                btns.forEach(btn => {
                    btn.addEventListener('mouseenter', () => btn.style.transform = 'translateY(-3px)');
                    btn.addEventListener('mouseleave', () => btn.style.transform = 'translateY(0)');
                });
            }

            setupScrollReveal() {
                const elements = document.querySelectorAll('.section-title, .section-subtitle, .hero-content > *');
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }
                    });
                }, { threshold: 0.1 });
                elements.forEach(el => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(30px)';
                    el.style.transition = 'all 0.6s ease';
                    observer.observe(el);
                });
            }
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            new WebsiteManager();
            new AnimationEffects();
            document.body.classList.add('loaded');
            setTimeout(() => {
                const heroElements = document.querySelectorAll('.hero-content > *');
                heroElements.forEach((el, i) => {
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, i * 200);
                });
            }, 100);
        });

        // Additional loading styles
        const style = document.createElement('style');
        style.textContent = `
            body:not(.loaded) { overflow: hidden; }
            body:not(.loaded) .hero-content > * { opacity: 0; transform: translateY(30px); transition: all 0.6s ease; }
            .animate-in { animation: fadeInUp 0.6s ease forwards; }
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);