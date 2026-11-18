
"use strict";

/* =========================================================
   1. WEBSITE CONFIGURATION
========================================================= */

const CONFIG = Object.freeze({
    phoneNumbers: [
        "+966508777407",
        "+966540925179"
    ],

    whatsappNumber: "966508777407",

    socialMedia: {
        facebook1: "https://www.facebook.com/khald.alrajhy.693594",
        facebook2: "https://www.facebook.com/profile.php?id=100075697549136",
        instagram: "https://www.instagram.com/abokhaleed23"
    },

    workingHours: {
        start: "07:00",
        end: "24:00"
    },

    toastDuration: 3000,
    mobileBreakpoint: 768,
    scrollThreshold: 100,

    translations: {
        ar: {
            name: "الاسم *",
            email: "البريد الإلكتروني",
            phone: "رقم الهاتف",
            city: "المدينة",
            category: "نوع الخدمة",
            message: "تفاصيل الطلب *",

            namePlaceholder: "أدخل اسمك الكامل",
            emailPlaceholder: "example@email.com",
            phonePlaceholder: "+966 5X XXX XXXX",
            cityPlaceholder: "اختر مدينتك",
            messagePlaceholder: "اكتب تفاصيل طلبك هنا...",

            submitButton: "إرسال عبر واتساب",
            loadingButton: "جاري فتح واتساب...",

            requiredName: "الرجاء إدخال الاسم الكامل",
            requiredMessage: "الرجاء كتابة تفاصيل الطلب",

            whatsappOpened: "تم فتح واتساب. اضغط إرسال لإتمام طلبك.",
            popupBlocked: "تعذر فتح واتساب. يرجى السماح بالنوافذ المنبثقة.",
            generalError: "حدث خطأ. يرجى المحاولة مرة أخرى.",

            themeDark: "تم تفعيل الوضع الليلي 🌙",
            themeLight: "تم تفعيل الوضع النهاري ☀️",

            languageArabic: "تم التبديل إلى العربية 🇸🇦",
            languageEnglish: "Switched to English 🇬🇧"
        },

        en: {
            name: "Name *",
            email: "Email",
            phone: "Phone Number",
            city: "City",
            category: "Service Type",
            message: "Request Details *",

            namePlaceholder: "Enter your full name",
            emailPlaceholder: "example@email.com",
            phonePlaceholder: "+966 5X XXX XXXX",
            cityPlaceholder: "Select your city",
            messagePlaceholder: "Write your request details...",

            submitButton: "Send via WhatsApp",
            loadingButton: "Opening WhatsApp...",

            requiredName: "Please enter your full name",
            requiredMessage: "Please enter your request details",

            whatsappOpened: "WhatsApp opened. Press Send to complete your request.",
            popupBlocked: "Unable to open WhatsApp. Please allow popups.",
            generalError: "Something went wrong. Please try again.",

            themeDark: "Dark mode enabled 🌙",
            themeLight: "Light mode enabled ☀️",

            languageArabic: "Switched to Arabic 🇸🇦",
            languageEnglish: "Switched to English 🇬🇧"
        }
    },

    services: [
        "شراء مكيفات مستعملة",
        "شراء مكيفات خربانة",
        "شراء مكيفات سكراب وكمبروسرات",
        "شراء نحاس المكيفات والنحاس الخردة",
        "شراء الألمنيوم وسكرابه",
        "شراء الحديد والسكراب والمعادن",
        "شراء الأجهزة الكهربائية",
        "شراء معدات المطاعم",
        "شراء المطابخ المستعملة",
        "شراء الأثاث المستعمل"
    ],

    cities: [
        "جدة",
        "مكة",
        "رابغ"
    ]
});


/* =========================================================
   2. SAFE STORAGE MANAGER
========================================================= */

class StorageManager {

    static get(key, defaultValue) {
        try {
            return localStorage.getItem(key) || defaultValue;
        } catch (error) {
            console.warn("Storage read error:", error);
            return defaultValue;
        }
    }

    static set(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            console.warn("Storage write error:", error);
        }
    }
}


/* =========================================================
   3. TOAST NOTIFICATION MANAGER
========================================================= */

class ToastManager {

    static show(message, type = "success") {

        const container = document.getElementById("toastContainer");

        if (!container) {
            console.warn("Toast container not found.");
            return;
        }

        const allowedTypes = ["success", "error", "info"];

        const toastType = allowedTypes.includes(type)
            ? type
            : "info";

        const icons = {
            success: "fa-check-circle",
            error: "fa-exclamation-circle",
            info: "fa-info-circle"
        };

        const toast = document.createElement("div");

        toast.className = `toast toast-${toastType}`;
        toast.setAttribute("role", "status");
        toast.setAttribute("aria-live", "polite");

        const icon = document.createElement("i");

        icon.className = `fas ${icons[toastType]}`;
        icon.setAttribute("aria-hidden", "true");

        const text = document.createElement("span");

        // Prevent unsafe HTML injection.
        text.textContent = String(message);

        toast.append(icon, text);

        container.appendChild(toast);

        window.setTimeout(() => {

            toast.classList.add("toast-removing");

            window.setTimeout(() => {
                toast.remove();
            }, 300);

        }, CONFIG.toastDuration);
    }
}


/* =========================================================
   4. MAIN WEBSITE MANAGER
========================================================= */

class WebsiteManager {

    constructor() {

        this.currentLanguage = StorageManager.get(
            "language",
            "ar"
        );

        this.currentTheme = StorageManager.get(
            "theme",
            "light"
        );

        this.formSubmitted = false;
        this.scrollScheduled = false;

        this.mobileMenu = null;
        this.mobileToggle = null;

        this.init();
    }


    /* -----------------------------------------------------
       INITIALIZATION
    ----------------------------------------------------- */

    init() {

        this.setupEventListeners();

        this.applyLanguage(this.currentLanguage);
        this.applyTheme(this.currentTheme);

        this.setupMobileMenu();
        this.setupContactForm();

        this.setupSmoothScrolling();
        this.setupScrollEffects();

        this.setupProgressBar();
        this.updateHeaderOnScroll();

        this.setupExternalLinks();
    }


    /* =====================================================
       5. EVENT LISTENERS
    ===================================================== */

    setupEventListeners() {

        const themeToggle = document.getElementById("themeToggle");
        const langToggle = document.getElementById("langToggle");
        const mobileToggle = document.getElementById("mobileToggle");

        if (themeToggle) {
            themeToggle.addEventListener("click", () => {
                this.toggleTheme();
            });
        }

        if (langToggle) {
            langToggle.addEventListener("click", () => {
                this.toggleLanguage();
            });
        }

        if (mobileToggle) {
            mobileToggle.addEventListener("click", () => {
                this.toggleMobileMenu();
            });
        }

        // Optimized scroll handling.
        window.addEventListener(
            "scroll",
            () => {

                if (this.scrollScheduled) return;

                this.scrollScheduled = true;

                window.requestAnimationFrame(() => {

                    this.updateProgressBar();
                    this.updateHeaderOnScroll();

                    this.scrollScheduled = false;
                });

            },
            { passive: true }
        );

        window.addEventListener("resize", () => {
            this.handleResize();
        });

        // Close mobile menu when clicking outside.
        document.addEventListener("click", (event) => {

            if (!this.mobileMenu || !this.mobileToggle) return;

            const insideMenu = this.mobileMenu.contains(event.target);
            const insideToggle = this.mobileToggle.contains(event.target);

            if (!insideMenu && !insideToggle) {
                this.closeMobileMenu();
            }
        });

        // Close mobile menu using Escape.
        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {
                this.closeMobileMenu();
            }
        });
    }


    /* =====================================================
       6. THEME MANAGEMENT
    ===================================================== */

    toggleTheme() {

        this.currentTheme =
            this.currentTheme === "light"
                ? "dark"
                : "light";

        this.applyTheme(this.currentTheme);

        StorageManager.set("theme", this.currentTheme);

        const translations = CONFIG.translations[this.currentLanguage];

        ToastManager.show(
            this.currentTheme === "dark"
                ? translations.themeDark
                : translations.themeLight,
            "info"
        );
    }


    applyTheme(theme) {

        const selectedTheme =
            theme === "dark" ? "dark" : "light";

        this.currentTheme = selectedTheme;

        document.documentElement.setAttribute(
            "data-theme",
            selectedTheme
        );

        const themeToggle = document.getElementById("themeToggle");

        const themeIcon = themeToggle
            ? themeToggle.querySelector("i")
            : null;

        if (themeIcon) {

            themeIcon.className =
                selectedTheme === "light"
                    ? "fas fa-moon"
                    : "fas fa-sun";
        }

        if (themeToggle) {

            const label = selectedTheme === "dark"
                ? "تفعيل الوضع النهاري"
                : "تفعيل الوضع الليلي";

            themeToggle.setAttribute("aria-label", label);
            themeToggle.setAttribute("title", label);
        }
    }


    /* =====================================================
       7. LANGUAGE MANAGEMENT
    ===================================================== */

    toggleLanguage() {

        this.currentLanguage =
            this.currentLanguage === "ar"
                ? "en"
                : "ar";

        this.applyLanguage(this.currentLanguage);

        StorageManager.set(
            "language",
            this.currentLanguage
        );

        const translations = CONFIG.translations[this.currentLanguage];

        ToastManager.show(
            this.currentLanguage === "ar"
                ? translations.languageArabic
                : translations.languageEnglish,
            "info"
        );
    }


    applyLanguage(language) {

        const lang = language === "en" ? "en" : "ar";

        this.currentLanguage = lang;

        document.documentElement.lang = lang;

        document.documentElement.dir =
            lang === "ar" ? "rtl" : "ltr";

        // Update language button.
        const langButton = document.querySelector(
            "#langToggle span"
        );

        if (langButton) {
            langButton.textContent = lang === "ar" ? "EN" : "ع";
        }

        // Translate static elements.
        this.translateElements(lang);

        // Update form fields.
        this.updateFormLabels(lang);
    }


    translateElements(language) {

        const elements = document.querySelectorAll(
            "[data-ar][data-en]"
        );

        elements.forEach((element) => {

            const translation = element.getAttribute(
                `data-${language}`
            );

            if (translation === null) return;

            const tag = element.tagName;

            if (
                tag === "INPUT" ||
                tag === "TEXTAREA" ||
                tag === "SELECT"
            ) {
                element.placeholder = translation;
                return;
            }

            // Preserve icons and nested elements.
            const textNode = Array.from(element.childNodes).find(
                (node) =>
                    node.nodeType === Node.TEXT_NODE &&
                    node.textContent.trim() !== ""
            );

            if (textNode) {
                textNode.textContent = translation;
            } else if (element.children.length === 0) {
                element.textContent = translation;
            }
        });
    }


    updateFormLabels(language) {

        const translations = CONFIG.translations[language];

        const fields = {
            name: translations.name,
            email: translations.email,
            phone: translations.phone,
            city: translations.city,
            category: translations.category,
            message: translations.message
        };

        Object.entries(fields).forEach(([id, text]) => {

            const label = document.querySelector(
                `label[for="${id}"]`
            );

            if (label) {
                label.textContent = text;
            }
        });

        const placeholders = {
            name: translations.namePlaceholder,
            email: translations.emailPlaceholder,
            phone: translations.phonePlaceholder,
            city: translations.cityPlaceholder,
            message: translations.messagePlaceholder
        };

        Object.entries(placeholders).forEach(([id, text]) => {

            const field = document.getElementById(id);

            if (field) {
                field.placeholder = text;
            }
        });

        this.updateSubmitButtonLanguage(language);
    }


    updateSubmitButtonLanguage(language) {

        const button = document.querySelector(
            "#contactForm .form-submit"
        );

        if (!button || this.formSubmitted) return;

        const translations = CONFIG.translations[language];

        const icon = button.querySelector("i");

        button.textContent = "";

        if (icon) {
            button.appendChild(icon);
        }

        button.appendChild(
            document.createTextNode(
                ` ${translations.submitButton}`
            )
        );
    }


    /* =====================================================
       8. MOBILE NAVIGATION
    ===================================================== */

    setupMobileMenu() {

        const nav = document.querySelector(".nav");

        const headerContainer = document.querySelector(
            ".header .container"
        );

        this.mobileToggle = document.getElementById(
            "mobileToggle"
        );

        if (!nav || !headerContainer) return;

        const existingMenu = document.querySelector(
            ".mobile-menu"
        );

        if (existingMenu) {

            this.mobileMenu = existingMenu;

        } else {

            const menu = document.createElement("div");

            menu.className = "mobile-menu";
            menu.id = "mobileMenu";

            const clonedNav = nav.cloneNode(true);

            clonedNav.removeAttribute("id");

            menu.appendChild(clonedNav);

            const phoneButton = document.querySelector(
                ".phone-btn"
            );

            if (phoneButton) {
                menu.appendChild(phoneButton.cloneNode(true));
            }

            headerContainer.appendChild(menu);

            this.mobileMenu = menu;
        }

        this.mobileMenu.id = "mobileMenu";

        if (this.mobileToggle) {

            this.mobileToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            this.mobileToggle.setAttribute(
                "aria-controls",
                "mobileMenu"
            );
        }

        // Event delegation for cloned links.
        this.mobileMenu.addEventListener("click", (event) => {

            const link = event.target.closest("a");

            if (link) {
                this.closeMobileMenu();
            }
        });
    }


    toggleMobileMenu() {

        if (!this.mobileMenu || !this.mobileToggle) return;

        const isOpen = this.mobileMenu.classList.contains("active");

        if (isOpen) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }


    openMobileMenu() {

        if (!this.mobileMenu || !this.mobileToggle) return;

        this.mobileMenu.classList.add("active");
        this.mobileToggle.classList.add("active");

        this.mobileToggle.setAttribute(
            "aria-expanded",
            "true"
        );
    }


    closeMobileMenu() {

        if (!this.mobileMenu || !this.mobileToggle) return;

        this.mobileMenu.classList.remove("active");
        this.mobileToggle.classList.remove("active");

        this.mobileToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    }


    /* =====================================================
       9. CONTACT FORM
    ===================================================== */

    setupContactForm() {

        const form = document.getElementById("contactForm");

        if (!form) return;

        form.addEventListener("submit", (event) => {

            event.preventDefault();

            if (this.formSubmitted) {

                ToastManager.show(
                    "جاري معالجة طلبك، يرجى الانتظار...",
                    "info"
                );

                return;
            }

            // Validate browser form constraints.
            if (!form.reportValidity()) return;

            const data = this.collectFormData();

            if (!data.name) {

                this.showValidationError(
                    CONFIG.translations[this.currentLanguage].requiredName,
                    "name"
                );

                return;
            }

            if (!data.message) {

                this.showValidationError(
                    CONFIG.translations[this.currentLanguage].requiredMessage,
                    "message"
                );

                return;
            }

            // Generate WhatsApp message.
            const message = this.buildWhatsAppMessage(data);

            const whatsappUrl =
                `https://wa.me/${CONFIG.whatsappNumber}` +
                `?text=${encodeURIComponent(message)}`;

            // Open directly inside the user interaction.
            const whatsappWindow = window.open(
                whatsappUrl,
                "_blank",
                "noopener,noreferrer"
            );

            if (!whatsappWindow) {

                ToastManager.show(
                    CONFIG.translations[this.currentLanguage].popupBlocked,
                    "error"
                );

                return;
            }

            this.formSubmitted = true;

            const submitButton = form.querySelector(
                ".form-submit"
            );

            this.setSubmitButtonLoading(submitButton);

            ToastManager.show(
                CONFIG.translations[this.currentLanguage].whatsappOpened,
                "success"
            );

            window.setTimeout(() => {

                form.reset();

                this.formSubmitted = false;

                this.resetSubmitButton(submitButton);

            }, 2500);
        });
    }


    collectFormData() {

        const getValue = (id) => {

            const element = document.getElementById(id);

            return element
                ? element.value.trim()
                : "";
        };

        return {
            name: getValue("name"),
            email: getValue("email"),
            phone: getValue("phone"),
            city: getValue("city"),
            category: getValue("category"),
            message: getValue("message")
        };
    }


    buildWhatsAppMessage(data) {

        const isArabic = this.currentLanguage === "ar";

        if (isArabic) {

            return [
                "مرحباً، أرغب في التواصل مع حراج أبو خالد.",
                "",
                "بيانات العميل:",
                `الاسم: ${data.name}`,
                `رقم الهاتف: ${data.phone || "غير محدد"}`,
                `البريد الإلكتروني: ${data.email || "غير محدد"}`,
                `المدينة: ${data.city || "غير محددة"}`,
                `نوع الخدمة: ${data.category || "غير محدد"}`,
                "",
                "تفاصيل الطلب:",
                data.message,
                "",
                "يرجى التواصل معي بخصوص الطلب. شكراً لكم."
            ].join("\n");
        }

        return [
            "Hello, I would like to contact Abu Khalid.",
            "",
            "Customer Information:",
            `Name: ${data.name}`,
            `Phone: ${data.phone || "Not provided"}`,
            `Email: ${data.email || "Not provided"}`,
            `City: ${data.city || "Not specified"}`,
            `Service: ${data.category || "Not specified"}`,
            "",
            "Request Details:",
            data.message,
            "",
            "Please contact me regarding this request. Thank you."
        ].join("\n");
    }


    setSubmitButtonLoading(button) {

        if (!button) return;

        const translations = CONFIG.translations[this.currentLanguage];

        button.disabled = true;

        button.setAttribute("aria-busy", "true");

        const icon = button.querySelector("i");

        button.textContent = "";

        const loadingIcon = document.createElement("i");

        loadingIcon.className = "fas fa-spinner fa-spin";

        if (icon) {
            button.appendChild(loadingIcon);
        } else {
            button.appendChild(loadingIcon);
        }

        button.appendChild(
            document.createTextNode(
                ` ${translations.loadingButton}`
            )
        );
    }


    resetSubmitButton(button) {

        if (!button) return;

        button.disabled = false;

        button.removeAttribute("aria-busy");

        const translations = CONFIG.translations[this.currentLanguage];

        const icon = document.createElement("i");

        icon.className = "fab fa-whatsapp";

        button.textContent = "";

        button.appendChild(icon);

        button.appendChild(
            document.createTextNode(
                ` ${translations.submitButton}`
            )
        );
    }


    showValidationError(message, fieldId) {

        ToastManager.show(message, "error");

        const field = document.getElementById(fieldId);

        if (field) {
            field.focus();
        }
    }


    /* =====================================================
       10. SMOOTH SCROLLING
    ===================================================== */

    setupSmoothScrolling() {

        document.addEventListener("click", (event) => {

            const link = event.target.closest(
                'a[href^="#"]'
            );

            if (!link) return;

            const href = link.getAttribute("href");

            if (!href || href === "#") return;

            const targetId = href.substring(1);

            const target = document.getElementById(targetId);

            if (!target) return;

            event.preventDefault();

            const header = document.getElementById("header");

            const headerHeight = header
                ? header.getBoundingClientRect().height
                : 0;

            const position =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight -
                12;

            const reduceMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            window.scrollTo({
                top: Math.max(0, position),
                behavior: reduceMotion ? "auto" : "smooth"
            });

            this.closeMobileMenu();

            history.replaceState(null, "", href);
        });
    }


    /* =====================================================
       11. SCROLL REVEAL
    ===================================================== */

    setupScrollEffects() {

        const elements = document.querySelectorAll(
            ".service-card, .about-card, .testimonial, .contact-card"
        );

        if (!("IntersectionObserver" in window)) {

            elements.forEach((element) => {
                element.classList.add("animate-in");
            });

            return;
        }

        const observer = new IntersectionObserver(
            (entries, currentObserver) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;

                    entry.target.classList.add("animate-in");

                    currentObserver.unobserve(entry.target);
                });

            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        elements.forEach((element) => {
            observer.observe(element);
        });
    }


    /* =====================================================
       12. PROGRESS BAR
    ===================================================== */

    setupProgressBar() {
        this.updateProgressBar();
    }


    updateProgressBar() {

        const progressBar = document.getElementById(
            "progressBar"
        );

        if (!progressBar) return;

        const scrollTop = Math.max(
            0,
            window.scrollY || document.documentElement.scrollTop
        );

        const documentHeight =
            document.documentElement.scrollHeight;

        const viewportHeight = window.innerHeight;

        const scrollableHeight =
            documentHeight - viewportHeight;

        if (scrollableHeight <= 0) {

            progressBar.style.width = "0%";

            return;
        }

        const percentage = Math.min(
            100,
            Math.max(
                0,
                (scrollTop / scrollableHeight) * 100
            )
        );

        progressBar.style.width = `${percentage}%`;
    }


    /* =====================================================
       13. HEADER SCROLL EFFECT
    ===================================================== */

    updateHeaderOnScroll() {

        const header = document.getElementById("header");

        if (!header) return;

        header.classList.toggle(
            "scrolled",
            window.scrollY > CONFIG.scrollThreshold
        );
    }


    /* =====================================================
       14. EXTERNAL LINKS
    ===================================================== */

    setupExternalLinks() {

        document.querySelectorAll(
            'a[target="_blank"]'
        ).forEach((link) => {

            const relValues = new Set(
                (link.getAttribute("rel") || "").split(/\s+/).filter(Boolean)
            );

            relValues.add("noopener");
            relValues.add("noreferrer");

            link.setAttribute(
                "rel",
                Array.from(relValues).join(" ")
            );
        });
    }


    /* =====================================================
       15. RESIZE HANDLER
    ===================================================== */

    handleResize() {

        if (window.innerWidth > CONFIG.mobileBreakpoint) {
            this.closeMobileMenu();
        }

        this.updateProgressBar();
    }
}


/* =========================================================
   16. ANIMATION EFFECTS
========================================================= */

class AnimationEffects {

    constructor() {
        this.setupHoverEffects();
    }


    setupHoverEffects() {

        // Disable hover transformations on touch devices.
        if (!window.matchMedia("(hover: hover)").matches) {
            return;
        }

        const cards = document.querySelectorAll(
            ".service-card"
        );

        cards.forEach((card) => {

            card.addEventListener("mouseenter", () => {
                card.classList.add("is-hovered");
            });

            card.addEventListener("mouseleave", () => {
                card.classList.remove("is-hovered");
            });
        });

        const buttons = document.querySelectorAll(
            ".btn, .service-btn, .quick-btn"
        );

        buttons.forEach((button) => {

            button.addEventListener("mouseenter", () => {
                button.classList.add("is-hovered");
            });

            button.addEventListener("mouseleave", () => {
                button.classList.remove("is-hovered");
            });
        });
    }
}


/* =========================================================
   17. DYNAMIC ANIMATION STYLES
========================================================= */

function injectAnimationStyles() {

    if (document.getElementById("websiteDynamicStyles")) {
        return;
    }

    const style = document.createElement("style");

    style.id = "websiteDynamicStyles";

    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(25px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .animate-in {
            animation: fadeInUp 0.6s ease forwards;
        }

        .fa-spin {
            animation: fa-spin 1.5s infinite linear;
        }

        @keyframes fa-spin {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }

        .service-card,
        .btn,
        .service-btn,
        .quick-btn {
            transition:
                transform 0.3s ease,
                box-shadow 0.3s ease;
        }

        .service-card.is-hovered {
            transform: translateY(-8px);
        }

        .btn.is-hovered,
        .service-btn.is-hovered,
        .quick-btn.is-hovered {
            transform: translateY(-3px);
        }

        @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
                scroll-behavior: auto !important;
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    `;

    document.head.appendChild(style);
}


/* =========================================================
   18. APPLICATION INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    injectAnimationStyles();

    try {

        window.websiteManager = new WebsiteManager();

        window.animationEffects = new AnimationEffects();

        document.body.classList.add("loaded");

        console.info(
            "Abu Khalid Website initialized successfully."
        );

    } catch (error) {

        document.body.classList.add("loaded");

        console.error(
            "Website initialization error:",
            error
        );
    }
});
