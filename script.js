"use strict";

/* =========================================================
   1. WEBSITE CONFIGURATION
========================================================= */

const CONFIG = Object.freeze({

    phoneNumbers: Object.freeze([
        "+966508777407",
        "+966540925179"
    ]),

    whatsappNumber: "966508777407",

    socialMedia: Object.freeze({
        facebook1: "https://www.facebook.com/khald.alrajhy.693594",
        facebook2: "https://www.facebook.com/profile.php?id=100075697549136",
        instagram: "https://www.instagram.com/abokhaleed23"
    }),

    workingHours: Object.freeze({
        start: 7,
        end: 24
    }),

    toastDuration: 3000,
    toastAnimationDuration: 300,
    mobileBreakpoint: 768,
    scrollThreshold: 100,
    formResetDelay: 1200,

    translations: Object.freeze({

        ar: Object.freeze({

            name: "الاسم *",
            phone: "رقم الهاتف",
            city: "المدينة",
            category: "نوع الخدمة",
            message: "تفاصيل الطلب *",

            namePlaceholder: "أدخل اسمك الكامل",
            phonePlaceholder: "+966 5X XXX XXXX",
            cityPlaceholder: "اختر مدينتك",
            messagePlaceholder: "اكتب تفاصيل طلبك هنا...",

            submitButton: "إرسال عبر واتساب",
            loadingButton: "جاري فتح واتساب...",

            requiredName: "الرجاء إدخال الاسم الكامل",
            requiredMessage: "الرجاء كتابة تفاصيل الطلب",

            whatsappOpened:
                "تم تجهيز رابط واتساب. راجع الرسالة واضغط إرسال لإتمام طلبك. يمكنك إرفاق الصور يدويًا.",

            popupBlocked:
                "تعذر فتح واتساب. يرجى السماح بفتح الروابط الخارجية أو فتح واتساب يدويًا.",

            generalError: "حدث خطأ. يرجى المحاولة مرة أخرى.",
            processing: "جاري تجهيز رسالتك، يرجى الانتظار...",

            themeDark: "تم تفعيل الوضع الليلي 🌙",
            themeLight: "تم تفعيل الوضع النهاري ☀️",

            languageArabic: "تم التبديل إلى العربية 🇸🇦",
            languageEnglish: "تم التبديل إلى الإنجليزية 🇬🇧",

            darkModeLabel: "تفعيل الوضع الليلي",
            lightModeLabel: "تفعيل الوضع النهاري",

            openMenu: "فتح القائمة",
            closeMenu: "إغلاق القائمة",

            notProvided: "غير محدد",
            notSpecified: "غير محددة",

            openNow: "مفتوح الآن",
            closedNow: "مغلق حالياً",

            // ✅ إزالة "حراج"
            whatsappGreeting: "مرحباً، أرغب في التواصل مع أبو خالد.",
            customerInformation: "بيانات العميل:",
            requestDetails: "تفاصيل الطلب:",

            nameLabel: "الاسم:",
            phoneLabel: "رقم الهاتف:",
            cityLabel: "المدينة:",
            serviceLabel: "نوع الخدمة:",

            whatsappClosing: "يرجى التواصل معي بخصوص الطلب. شكراً لكم."
        }),

        en: Object.freeze({

            name: "Name *",
            phone: "Phone Number",
            city: "City",
            category: "Service Type",
            message: "Request Details *",

            namePlaceholder: "Enter your full name",
            phonePlaceholder: "+966 5X XXX XXXX",
            cityPlaceholder: "Select your city",
            messagePlaceholder: "Write your request details...",

            submitButton: "Send via WhatsApp",
            loadingButton: "Opening WhatsApp...",

            requiredName: "Please enter your full name",
            requiredMessage: "Please enter your request details",

            whatsappOpened:
                "WhatsApp link prepared. Review the message and press Send to complete your request. You can attach images manually.",

            popupBlocked:
                "Unable to open WhatsApp. Please allow external links or open WhatsApp manually.",

            generalError: "Something went wrong. Please try again.",
            processing: "Preparing your message. Please wait...",

            themeDark: "Dark mode enabled 🌙",
            themeLight: "Light mode enabled ☀️",

            languageArabic: "Switched to Arabic 🇸🇦",
            languageEnglish: "Switched to English 🇬🇧",

            darkModeLabel: "Enable dark mode",
            lightModeLabel: "Enable light mode",

            openMenu: "Open navigation menu",
            closeMenu: "Close navigation menu",

            notProvided: "Not provided",
            notSpecified: "Not specified",

            openNow: "Open now",
            closedNow: "Closed now",

            whatsappGreeting: "Hello, I would like to contact Abu Khalid.",
            customerInformation: "Customer Information:",
            requestDetails: "Request Details:",

            nameLabel: "Name:",
            phoneLabel: "Phone:",
            cityLabel: "City:",
            serviceLabel: "Service Type:",

            whatsappClosing: "Please contact me regarding this request. Thank you."
        })
    }),

    cityTranslations: Object.freeze({
        "جدة": "Jeddah",
        "مكة": "Makkah",
        "مكة المكرمة": "Makkah",
        "رابغ": "Rabigh",
        "مدينة أخرى": "Other City"
    }),

    serviceTranslations: Object.freeze({
        "مكيف مستعمل": "Used Air Conditioner",
        "مكيف خربان": "Broken Air Conditioner",
        "سكراب مكيفات": "AC Scrap",
        "كمبروسرات": "Compressors",
        "نحاس": "Copper",
        "ألمنيوم": "Aluminum",
        "حديد وسكراب": "Iron and Scrap Metal",
        "أجهزة كهربائية": "Electrical Appliances",
        "معدات مطاعم": "Restaurant Equipment",
        "مطابخ مستعملة": "Used Kitchens",
        "أثاث مستعمل": "Used Furniture",
        "كيابل وأسلاك": "Cables and Wires",
        "مكائن ومعدات صناعية": "Industrial Machinery and Equipment",
        "سكراب مصانع ومستودعات": "Factory and Warehouse Scrap",
        "سكراب هدم ومباني": "Demolition and Building Scrap",
        "سكراب مشاريع مقاولات": "Construction Project Scrap",
        "سكراب ورش": "Workshop Scrap",
        "هياكل ومنتجات معدنية": "Metal Structures and Products",
        "أغراض أخرى": "Other Items"
    })
});


/* =========================================================
   2. GENERAL UTILITIES
========================================================= */

const Utils = Object.freeze({

    getElement(id) {
        return document.getElementById(id);
    },

    isElement(value) {
        return value instanceof Element;
    },

    normalizeText(value) {
        return String(value ?? "").trim();
    },

    prefersReducedMotion() {
        return window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    },

    ready(callback) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", callback, { once: true });
        } else {
            callback();
        }
    },

    queryFirst(selectors, parent = document) {
        for (const selector of selectors) {
            const element = parent.querySelector(selector);
            if (element) return element;
        }
        return null;
    },

    encode(value) {
        return encodeURIComponent(String(value ?? ""));
    }
});


/* =========================================================
   3. SAFE STORAGE MANAGER
========================================================= */

class StorageManager {

    static get(key, defaultValue = null) {
        try {
            const value = window.localStorage.getItem(key);
            return value !== null ? value : defaultValue;
        } catch (error) {
            console.warn("Storage read error:", error);
            return defaultValue;
        }
    }

    static set(key, value) {
        try {
            window.localStorage.setItem(key, String(value));
            return true;
        } catch (error) {
            console.warn("Storage write error:", error);
            return false;
        }
    }

    static remove(key) {
        try {
            window.localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.warn("Storage remove error:", error);
            return false;
        }
    }
}


/* =========================================================
   4. TOAST NOTIFICATION MANAGER
========================================================= */

class ToastManager {

    static show(message, type = "success") {

        let container = Utils.getElement("toastContainer");

        if (!container) {
            container = document.createElement("div");
            container.id = "toastContainer";
            container.className = "toast-container";
            container.setAttribute("aria-live", "polite");
            container.setAttribute("aria-atomic", "true");
            document.body.appendChild(container);
        }

        const allowedTypes = ["success", "error", "info"];
        const toastType = allowedTypes.includes(type) ? type : "info";

        const icons = {
            success: "fa-check-circle",
            error: "fa-exclamation-circle",
            info: "fa-info-circle"
        };

        const toast = document.createElement("div");
        toast.className = `toast toast-${toastType}`;
        toast.setAttribute("role", "status");

        const icon = document.createElement("i");
        icon.className = `fas ${icons[toastType]}`;
        icon.setAttribute("aria-hidden", "true");

        const text = document.createElement("span");
        text.textContent = String(message);

        toast.append(icon, text);
        container.appendChild(toast);

        const removeToast = () => {
            if (!toast.isConnected) return;
            toast.classList.add("toast-removing");
            window.setTimeout(() => {
                toast.remove();
            }, CONFIG.toastAnimationDuration);
        };

        window.setTimeout(removeToast, CONFIG.toastDuration);

        return toast;
    }
}


/* =========================================================
   5. MAIN WEBSITE MANAGER
========================================================= */

class WebsiteManager {

    constructor() {

        const savedLanguage = StorageManager.get("language", "ar");
        const savedTheme = StorageManager.get("theme", "light");

        this.currentLanguage = savedLanguage === "en" ? "en" : "ar";
        this.currentTheme = savedTheme === "dark" ? "dark" : "light";

        this.formProcessing = false;
        this.scrollScheduled = false;

        this.mobileMenu = null;
        this.mobileToggle = null;
        this.mobileMenuCreated = false;

        this.form = null;
        this.submitButton = null;
        this.formTimeout = null;

        this.scrollObserver = null;
        this.initialized = false;

        this.init();
    }


    /* =====================================================
       5.1 APPLICATION INITIALIZATION
    ===================================================== */

    init() {

        if (this.initialized) return;
        this.initialized = true;

        this.applyLanguage(this.currentLanguage);
        this.applyTheme(this.currentTheme);

        this.setupWhatsAppLinks();
        this.setupOpenStatus();

        this.setupMobileMenu();
        this.setupContactForm();
        this.setupSmoothScrolling();
        this.setupScrollEffects();
        this.setupProgressBar();
        this.updateHeaderOnScroll();
        this.setupExternalLinks();
        this.setupEventListeners();
        this.setupSEO();

        console.info("Abu Khalid Website initialized successfully.");
    }


    /* =====================================================
       5.2 WHATSAPP LINKS SYNC
    ===================================================== */

    setupWhatsAppLinks() {

        const links = document.querySelectorAll("[data-whatsapp-link]");

        links.forEach((link) => {

            const href = link.getAttribute("href") || "";
            const hasText = href.includes("?text=");

            if (hasText) {
                link.href = href.replace(
                    /wa\.me\/\d+/,
                    `wa.me/${CONFIG.whatsappNumber}`
                );
            } else {
                link.href = `https://wa.me/${CONFIG.whatsappNumber}`;
            }
        });

        console.info(`WhatsApp links synced: ${links.length}`);
    }


    /* =====================================================
       5.3 OPEN STATUS
    ===================================================== */

    isOpenNow() {

        const now = new Date();
        const hour = now.getHours();
        const { start, end } = CONFIG.workingHours;

        if (end === 24) {
            return hour >= start && hour <= 23;
        }

        return hour >= start && hour < end;
    }

    setupOpenStatus() {

        const badge = document.querySelector(".hero-badge");
        if (!badge) return;

        if (badge.querySelector(".open-status")) return;

        const isOpen = this.isOpenNow();
        const translations = CONFIG.translations[this.currentLanguage];

        const statusEl = document.createElement("span");
        statusEl.className = "open-status";
        statusEl.style.cssText =
            "margin-inline-start:8px;font-size:11px;opacity:0.9;font-weight:700;";

        const dot = document.createElement("i");
        dot.className = "fas fa-circle";
        dot.style.cssText = `font-size:7px;margin-inline-end:5px;color:${isOpen ? "#22c55e" : "#ef4444"};`;
        dot.setAttribute("aria-hidden", "true");

        const text = document.createTextNode(
            isOpen ? translations.openNow : translations.closedNow
        );

        statusEl.append(dot, text);
        badge.appendChild(statusEl);
    }


    /* =====================================================
       6. EVENT LISTENERS
    ===================================================== */

    setupEventListeners() {

        const themeToggle = Utils.getElement("themeToggle");
        const langToggle = Utils.getElement("langToggle");

        this.mobileToggle = Utils.getElement("mobileToggle");

        if (themeToggle) {
            themeToggle.addEventListener("click", () => this.toggleTheme());
        }

        if (langToggle) {
            langToggle.addEventListener("click", () => this.toggleLanguage());
        }

        if (this.mobileToggle) {
            this.mobileToggle.addEventListener("click", () => this.toggleMobileMenu());
        }

        window.addEventListener("scroll", () => {

            if (this.scrollScheduled) return;

            this.scrollScheduled = true;

            window.requestAnimationFrame(() => {
                this.updateProgressBar();
                this.updateHeaderOnScroll();
                this.scrollScheduled = false;
            });

        }, { passive: true });

        window.addEventListener("resize", () => this.handleResize(), { passive: true });

        document.addEventListener("click", (event) => {

            if (!this.mobileMenu || !this.mobileToggle) return;

            const target = event.target;
            if (!Utils.isElement(target)) return;

            const insideMenu = this.mobileMenu.contains(target);
            const insideToggle = this.mobileToggle.contains(target);

            if (!insideMenu && !insideToggle) {
                this.closeMobileMenu();
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                this.closeMobileMenu();
            }
        });
    }


    /* =====================================================
       7. THEME MANAGEMENT
    ===================================================== */

    toggleTheme() {

        const nextTheme = this.currentTheme === "light" ? "dark" : "light";

        this.applyTheme(nextTheme);
        StorageManager.set("theme", nextTheme);

        const t = CONFIG.translations[this.currentLanguage];
        const message = nextTheme === "dark" ? t.themeDark : t.themeLight;

        ToastManager.show(message, "info");
    }

    applyTheme(theme) {

        const selectedTheme = theme === "dark" ? "dark" : "light";
        this.currentTheme = selectedTheme;

        document.documentElement.setAttribute("data-theme", selectedTheme);

        const themeToggle = Utils.getElement("themeToggle");
        if (!themeToggle) return;

        const themeIcon = themeToggle.querySelector("i");
        if (themeIcon) {
            themeIcon.className = selectedTheme === "light" ? "fas fa-moon" : "fas fa-sun";
        }

        const t = CONFIG.translations[this.currentLanguage];
        const label = selectedTheme === "dark" ? t.lightModeLabel : t.darkModeLabel;

        themeToggle.setAttribute("aria-label", label);
        themeToggle.setAttribute("title", label);
        themeToggle.setAttribute("aria-pressed", String(selectedTheme === "dark"));
    }


    /* =====================================================
       8. LANGUAGE MANAGEMENT
    ===================================================== */

    toggleLanguage() {

        const nextLanguage = this.currentLanguage === "ar" ? "en" : "ar";

        this.applyLanguage(nextLanguage);
        StorageManager.set("language", nextLanguage);

        const t = CONFIG.translations[nextLanguage];
        const message = nextLanguage === "ar" ? t.languageArabic : t.languageEnglish;

        ToastManager.show(message, "info");
    }

    applyLanguage(language) {

        const lang = language === "en" ? "en" : "ar";
        this.currentLanguage = lang;

        const root = document.documentElement;
        root.lang = lang;
        root.dir = lang === "ar" ? "rtl" : "ltr";
        root.setAttribute("data-language", lang);

        this.translateElements(lang);
        this.updateFormLabels(lang);
        this.updateLanguageButton(lang);
        this.applyTheme(this.currentTheme);
        this.updateMobileMenuLanguage();
        this.updateSEO();
        this.refreshOpenStatus();
    }

    refreshOpenStatus() {

        const badge = document.querySelector(".hero-badge");
        if (!badge) return;

        const existing = badge.querySelector(".open-status");
        if (existing) existing.remove();

        this.setupOpenStatus();
    }

    updateLanguageButton(language) {

        const button = Utils.getElement("langToggle");
        if (!button) return;

        button.textContent = language === "ar" ? "EN" : "ع";

        button.setAttribute(
            "aria-label",
            language === "ar" ? "Switch to English" : "التبديل إلى العربية"
        );
        button.setAttribute(
            "title",
            language === "ar" ? "Switch to English" : "التبديل إلى العربية"
        );
    }


    /* =====================================================
       8.1 PAGE ELEMENT TRANSLATION
    ===================================================== */

    translateElements(language) {

        const elements = document.querySelectorAll("[data-ar][data-en]");

        elements.forEach((element) => {

            const translation = element.getAttribute(`data-${language}`);
            if (translation === null) return;

            const tag = element.tagName;

            if (tag === "OPTION") {
                element.textContent = translation;
                return;
            }

            if (tag === "INPUT" || tag === "TEXTAREA") {
                if (element.hasAttribute("placeholder")) {
                    element.placeholder = translation;
                }
                return;
            }

            if (tag === "SELECT") return;

            if (
                element.id === "themeToggle" ||
                element.id === "langToggle" ||
                element.id === "mobileToggle"
            ) {
                return;
            }

            this.replaceTextPreservingChildren(element, translation);
        });

        this.translateAttributes(language);
    }

    replaceTextPreservingChildren(element, translation) {

        if (!element) return;

        const textNodes = Array.from(element.childNodes).filter((node) => {
            return (
                node.nodeType === Node.TEXT_NODE &&
                node.textContent.trim() !== ""
            );
        });

        if (textNodes.length > 0) {
            textNodes[0].textContent = translation;
            textNodes.slice(1).forEach((node) => node.remove());
            return;
        }

        if (element.children.length === 0) {
            element.textContent = translation;
        }
    }


    /* =====================================================
       8.2 ATTRIBUTE TRANSLATION
    ===================================================== */

    translateAttributes(language) {

        const mapping = [
            { suffix: "alt",         selector: "[data-ar-alt][data-en-alt]" },
            { suffix: "aria-label",  selector: "[data-ar-aria-label][data-en-aria-label]" },
            { suffix: "title",       selector: "[data-ar-title][data-en-title]" },
            { suffix: "placeholder", selector: "[data-ar-placeholder][data-en-placeholder]" }
        ];

        mapping.forEach(({ suffix, selector }) => {

            document.querySelectorAll(selector).forEach((el) => {

                const value = el.getAttribute(`data-${language}-${suffix}`);

                if (value !== null) {
                    el.setAttribute(suffix, value);
                }
            });
        });
    }


    /* =====================================================
       8.3 FORM TRANSLATIONS
    ===================================================== */

    updateFormLabels(language) {

        const t = CONFIG.translations[language];

        const fields = {
            name: t.name,
            phone: t.phone,
            city: t.city,
            category: t.category,
            message: t.message
        };

        Object.entries(fields).forEach(([id, text]) => {

            const label = document.querySelector(`label[for="${id}"]`);
            if (!label) return;

            if (label.hasAttribute("data-ar") && label.hasAttribute("data-en")) return;

            this.replaceTextPreservingChildren(label, text);
        });

        const placeholders = {
            name: t.namePlaceholder,
            phone: t.phonePlaceholder,
            city: t.cityPlaceholder,
            message: t.messagePlaceholder
        };

        Object.entries(placeholders).forEach(([id, text]) => {

            const field = Utils.getElement(id);
            if (field) field.placeholder = text;
        });

        this.translateSelectOptions(language);
        this.updateSubmitButtonLanguage(language);
    }


    /* =====================================================
       8.4 SELECT OPTIONS TRANSLATION
    ===================================================== */

    translateSelectOptions(language) {

        const selects = document.querySelectorAll("#city, #category");

        selects.forEach((select) => {

            Array.from(select.options).forEach((option) => {

                if (option.hasAttribute("data-ar") && option.hasAttribute("data-en")) {
                    const value = option.getAttribute(`data-${language}`);
                    if (value !== null) option.textContent = value;
                    return;
                }

                if (!option.hasAttribute("data-original-ar")) {
                    option.setAttribute("data-original-ar", option.textContent.trim());
                }

                const originalArabic = option.getAttribute("data-original-ar");
                if (!originalArabic) return;

                if (language === "ar") {
                    option.textContent = originalArabic;
                    return;
                }

                if (select.id === "city") {
                    option.textContent =
                        CONFIG.cityTranslations[originalArabic] || originalArabic;
                    return;
                }

                if (select.id === "category") {
                    option.textContent =
                        CONFIG.serviceTranslations[originalArabic] || originalArabic;
                }
            });
        });
    }


    /* =====================================================
       8.5 SUBMIT BUTTON TRANSLATION
    ===================================================== */

    getSubmitButton(form = null) {

        const parent = form || Utils.getElement("contactForm");
        if (!parent) return null;

        return Utils.queryFirst(
            [".form-submit", ".submit-button", 'button[type="submit"]', 'input[type="submit"]'],
            parent
        );
    }

    updateSubmitButtonLanguage(language) {

        const button = this.getSubmitButton();
        if (!button || this.formProcessing) return;

        const t = CONFIG.translations[language];

        if (button.tagName === "INPUT") {
            button.value = t.submitButton;
            return;
        }

        const icon = button.querySelector("i");

        button.textContent = "";

        if (icon) button.appendChild(icon);

        button.appendChild(document.createTextNode(` ${t.submitButton}`));
    }


    /* =====================================================
       9. MOBILE NAVIGATION
    ===================================================== */

    setupMobileMenu() {

        const nav = document.querySelector(".nav");
        const headerContainer = Utils.queryFirst([
            ".header .container",
            ".header-container",
            ".header"
        ]);

        this.mobileToggle = Utils.getElement("mobileToggle");

        if (!nav || !headerContainer) {
            console.warn("Mobile navigation elements were not found.");
            return;
        }

        let existingMenu = document.querySelector(".mobile-menu");

        if (existingMenu) {
            this.mobileMenu = existingMenu;

            if (!existingMenu.querySelector("a") && nav.querySelector("a")) {
                const clonedNav = nav.cloneNode(true);
                clonedNav.removeAttribute("id");
                existingMenu.appendChild(clonedNav);
            }
        } else {
            const menu = document.createElement("div");
            menu.className = "mobile-menu";
            menu.id = "mobileMenu";

            const clonedNav = nav.cloneNode(true);
            clonedNav.removeAttribute("id");
            menu.appendChild(clonedNav);

            const phoneButton = document.querySelector(".header-phone");
            if (phoneButton) {
                menu.appendChild(phoneButton.cloneNode(true));
            }

            headerContainer.appendChild(menu);
            this.mobileMenu = menu;
            this.mobileMenuCreated = true;
        }

        if (!this.mobileMenu.id) this.mobileMenu.id = "mobileMenu";

        if (this.mobileToggle) {
            this.mobileToggle.setAttribute("aria-expanded", "false");
            this.mobileToggle.setAttribute("aria-controls", this.mobileMenu.id);
            this.mobileToggle.setAttribute("aria-haspopup", "true");
        }

        this.mobileMenu.addEventListener("click", (event) => {
            const target = event.target;
            if (!Utils.isElement(target)) return;

            const link = target.closest("a");
            if (link) this.closeMobileMenu();
        });

        this.updateMobileMenuLanguage();
    }

    updateMobileMenuLanguage() {

        if (!this.mobileToggle) return;

        const t = CONFIG.translations[this.currentLanguage];
        const isOpen = this.mobileMenu && this.mobileMenu.classList.contains("active");

        const label = isOpen ? t.closeMenu : t.openMenu;

        this.mobileToggle.setAttribute("aria-label", label);
        this.mobileToggle.setAttribute("title", label);
    }

    toggleMobileMenu() {
        if (!this.mobileMenu || !this.mobileToggle) return;

        const isOpen = this.mobileMenu.classList.contains("active");
        isOpen ? this.closeMobileMenu() : this.openMobileMenu();
    }

    openMobileMenu() {
        if (!this.mobileMenu || !this.mobileToggle) return;

        this.mobileMenu.classList.add("active");
        this.mobileToggle.classList.add("active");
        this.mobileToggle.setAttribute("aria-expanded", "true");
        this.updateMobileMenuLanguage();
    }

    closeMobileMenu() {
        if (!this.mobileMenu || !this.mobileToggle) return;

        this.mobileMenu.classList.remove("active");
        this.mobileToggle.classList.remove("active");
        this.mobileToggle.setAttribute("aria-expanded", "false");
        this.updateMobileMenuLanguage();
    }


    /* =====================================================
       10. CONTACT FORM
    ===================================================== */

    setupContactForm() {

        this.form = Utils.getElement("contactForm");
        if (!this.form) return;

        this.submitButton = this.getSubmitButton(this.form);

        this.form.addEventListener("submit", (event) => {

            event.preventDefault();

            if (this.formProcessing) {
                ToastManager.show(
                    CONFIG.translations[this.currentLanguage].processing,
                    "info"
                );
                return;
            }

            if (!this.form.reportValidity()) return;

            const data = this.collectFormData();
            const t = CONFIG.translations[this.currentLanguage];

            if (!data.name) {
                this.showValidationError(t.requiredName, "name");
                return;
            }

            if (!data.message) {
                this.showValidationError(t.requiredMessage, "message");
                return;
            }

            try {

                const message = this.buildWhatsAppMessage(data);
                const whatsappUrl =
                    `https://wa.me/${CONFIG.whatsappNumber}?text=${Utils.encode(message)}`;

                const whatsappLink = document.createElement("a");
                whatsappLink.href = whatsappUrl;
                whatsappLink.target = "_blank";
                whatsappLink.rel = "noopener noreferrer";
                whatsappLink.style.display = "none";

                document.body.appendChild(whatsappLink);
                whatsappLink.click();
                whatsappLink.remove();

                this.formProcessing = true;
                this.submitButton = this.getSubmitButton(this.form);
                this.setSubmitButtonLoading(this.submitButton);

                ToastManager.show(t.whatsappOpened, "success");

                this.formTimeout = window.setTimeout(() => {
                    this.formProcessing = false;
                    this.resetSubmitButton(this.submitButton);
                    this.formTimeout = null;
                }, CONFIG.formResetDelay);

            } catch (error) {

                console.error("WhatsApp form error:", error);
                this.formProcessing = false;

                ToastManager.show(
                    CONFIG.translations[this.currentLanguage].generalError,
                    "error"
                );
                this.resetSubmitButton(this.getSubmitButton(this.form));
            }
        });
    }


    /* =====================================================
       10.1 COLLECT FORM DATA
    ===================================================== */

    collectFormData() {

        const getValue = (id) => {
            const element = Utils.getElement(id);
            return element ? Utils.normalizeText(element.value) : "";
        };

        return {
            name: getValue("name"),
            phone: getValue("phone"),
            city: getValue("city"),
            category: getValue("category"),
            message: getValue("message")
        };
    }


    /* =====================================================
       10.2 WHATSAPP MESSAGE BUILDER
    ===================================================== */

    buildWhatsAppMessage(data) {

        const t = CONFIG.translations[this.currentLanguage];
        const isArabic = this.currentLanguage === "ar";

        let city = data.city || t.notSpecified;
        let category = data.category || t.notProvided;

        if (!isArabic && data.city) {
            city = CONFIG.cityTranslations[data.city] || data.city;
        }

        if (!isArabic && data.category) {
            category = CONFIG.serviceTranslations[data.category] || data.category;
        }

        return [
            t.whatsappGreeting,
            "",
            t.customerInformation,
            `${t.nameLabel} ${data.name}`,
            `${t.phoneLabel} ${data.phone || t.notProvided}`,
            `${t.cityLabel} ${city}`,
            `${t.serviceLabel} ${category}`,
            "",
            t.requestDetails,
            data.message,
            "",
            t.whatsappClosing
        ].join("\n");
    }


    /* =====================================================
       10.3 SUBMIT BUTTON LOADING
    ===================================================== */

    setSubmitButtonLoading(button) {

        if (!button) return;

        const t = CONFIG.translations[this.currentLanguage];

        button.disabled = true;
        button.setAttribute("aria-busy", "true");

        if (button.tagName === "INPUT") {
            button.value = t.loadingButton;
            return;
        }

        const loadingIcon = document.createElement("i");
        loadingIcon.className = "fas fa-spinner fa-spin";
        loadingIcon.setAttribute("aria-hidden", "true");

        button.textContent = "";
        button.appendChild(loadingIcon);
        button.appendChild(document.createTextNode(` ${t.loadingButton}`));
    }


    /* =====================================================
       10.4 RESET SUBMIT BUTTON
    ===================================================== */

    resetSubmitButton(button) {

        if (!button) return;

        button.disabled = false;
        button.removeAttribute("aria-busy");

        const t = CONFIG.translations[this.currentLanguage];

        if (button.tagName === "INPUT") {
            button.value = t.submitButton;
            return;
        }

        const icon = document.createElement("i");
        icon.className = "fab fa-whatsapp";
        icon.setAttribute("aria-hidden", "true");

        button.textContent = "";
        button.appendChild(icon);
        button.appendChild(document.createTextNode(` ${t.submitButton}`));
    }


    /* =====================================================
       10.5 VALIDATION ERROR
    ===================================================== */

    showValidationError(message, fieldId) {

        ToastManager.show(message, "error");

        const field = Utils.getElement(fieldId);
        if (field) field.focus();
    }


    /* =====================================================
       11. SMOOTH SCROLLING
    ===================================================== */

    setupSmoothScrolling() {

        document.addEventListener("click", (event) => {

            const target = event.target;
            if (!Utils.isElement(target)) return;

            const link = target.closest('a[href^="#"]');
            if (!link) return;

            if (
                link.hasAttribute("data-bs-toggle") ||
                link.hasAttribute("data-toggle")
            ) {
                return;
            }

            const href = link.getAttribute("href");
            if (!href || href === "#") return;

            let targetId;
            try {
                targetId = decodeURIComponent(href.substring(1));
            } catch (error) {
                targetId = href.substring(1);
            }

            const section = Utils.getElement(targetId);
            if (!section) return;

            event.preventDefault();

            const header = Utils.getElement("header");

            const headerHeight = header ? header.getBoundingClientRect().height : 0;

            const position =
                section.getBoundingClientRect().top +
                window.scrollY -
                headerHeight -
                12;

            window.scrollTo({
                top: Math.max(0, position),
                behavior: Utils.prefersReducedMotion() ? "auto" : "smooth"
            });

            this.closeMobileMenu();

            try {
                window.history.replaceState(null, "", href);
            } catch (error) {
                console.warn("History update error:", error);
            }
        });
    }


    /* =====================================================
       12. SCROLL REVEAL ANIMATIONS
    ===================================================== */

    setupScrollEffects() {

        const elements = document.querySelectorAll(
            ".service-card, .about-card, .pricing-card, .step-card, .faq-card"
        );

        if (elements.length === 0) return;

        if (Utils.prefersReducedMotion()) {
            elements.forEach((el) => el.classList.add("animate-in"));
            return;
        }

        if (!("IntersectionObserver" in window)) {
            elements.forEach((el) => el.classList.add("animate-in"));
            return;
        }

        this.scrollObserver = new IntersectionObserver(

            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    entry.target.classList.add("animate-in");
                    observer.unobserve(entry.target);
                });
            },

            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        elements.forEach((el) => this.scrollObserver.observe(el));
    }


    /* =====================================================
       13. SCROLL PROGRESS BAR
    ===================================================== */

    setupProgressBar() {
        this.updateProgressBar();
    }

    updateProgressBar() {

        const progressBar = Utils.getElement("progressBar");
        if (!progressBar) return;

        const scrollTop = Math.max(0, window.scrollY || document.documentElement.scrollTop);
        const documentHeight = document.documentElement.scrollHeight;
        const viewportHeight = window.innerHeight;
        const scrollableHeight = documentHeight - viewportHeight;

        if (scrollableHeight <= 0) {
            progressBar.style.width = "0%";
            progressBar.setAttribute("aria-valuenow", "0");
            return;
        }

        const percentage = Math.min(
            100,
            Math.max(0, (scrollTop / scrollableHeight) * 100)
        );

        progressBar.style.width = `${percentage}%`;
        progressBar.setAttribute("aria-valuenow", String(Math.round(percentage)));
    }


    /* =====================================================
       14. HEADER SCROLL EFFECT
    ===================================================== */

    updateHeaderOnScroll() {

        const header = Utils.getElement("header");
        if (!header) return;

        header.classList.toggle("scrolled", window.scrollY > CONFIG.scrollThreshold);
    }


    /* =====================================================
       15. EXTERNAL LINKS SECURITY
    ===================================================== */

    setupExternalLinks() {

        const externalLinks = document.querySelectorAll('a[target="_blank"]');

        externalLinks.forEach((link) => {

            const relValues = new Set(
                (link.getAttribute("rel") || "").split(/\s+/).filter(Boolean)
            );

            relValues.add("noopener");
            relValues.add("noreferrer");

            link.setAttribute("rel", Array.from(relValues).join(" "));
        });
    }


    /* =====================================================
       16. SEO LANGUAGE MANAGEMENT
    ===================================================== */

    setupSEO() {
        this.updateSEO();
    }

    updateSEO() {

        const isArabic = this.currentLanguage === "ar";

        // ✅ إضافة "شراء وبيع"
        const title = isArabic
            ? "أبو خالد | شراء وبيع المكيفات والسكراب والألمنيوم والأثاث المستعمل جدة"
            : "Abu Khalid | Buying and Selling Used AC, Scrap, Aluminum and Furniture in Jeddah";

        const description = isArabic
            ? "أبو خالد لشراء وبيع المكيفات المستعملة والخربانة وسكراب المكيفات والنحاس والألمنيوم والحديد والأجهزة الكهربائية والمطابخ والأثاث المستعمل ومعدات المطاعم في جدة ومكة ورابغ."
            : "Abu Khalid buys and sells used and broken air conditioners, AC scrap, copper, aluminum, iron, electrical appliances, used kitchens, furniture and restaurant equipment in Jeddah, Makkah and Rabigh.";

        document.title = title;

        this.updateMetaContent('meta[name="description"]', description);
        this.updateMetaContent('meta[property="og:title"]', title);
        this.updateMetaContent('meta[property="og:description"]', description);
        this.updateMetaContent('meta[property="og:locale"]', isArabic ? "ar_SA" : "en_US");
        this.updateMetaContent('meta[name="twitter:title"]', title);
        this.updateMetaContent('meta[name="twitter:description"]', description);

        this.updateStructuredDataDescription(description);

        document.documentElement.lang = this.currentLanguage;

        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.href = isArabic
                ? "https://abu-khalid.netlify.app/"
                : "https://abu-khalid.netlify.app/?lang=en";
        }
    }

    updateMetaContent(selector, content) {

        const meta = document.querySelector(selector);
        if (!meta) return;

        meta.setAttribute("content", content);
    }

    updateStructuredDataDescription(description) {

        const scripts = document.querySelectorAll('script[type="application/ld+json"]');

        scripts.forEach((script) => {
            try {
                const jsonData = JSON.parse(script.textContent);

                const updateObject = (item) => {

                    if (!item || typeof item !== "object") return;

                    if (Array.isArray(item)) {
                        item.forEach(updateObject);
                        return;
                    }

                    const type = item["@type"];
                    const types = Array.isArray(type) ? type : [type];

                    const isBusiness = types.some((value) =>
                        ["LocalBusiness", "Store", "HomeAndConstructionBusiness"].includes(value)
                    );

                    if (isBusiness && item.description) {
                        item.description = description;
                    }

                    if (item["@graph"]) {
                        updateObject(item["@graph"]);
                    }
                };

                updateObject(jsonData);
                script.textContent = JSON.stringify(jsonData, null, 2);

            } catch (error) {
                console.warn("Structured data update error:", error);
            }
        });
    }


    /* =====================================================
       17. RESIZE HANDLER
    ===================================================== */

    handleResize() {

        if (window.innerWidth > CONFIG.mobileBreakpoint) {
            this.closeMobileMenu();
        }

        this.updateProgressBar();
        this.updateHeaderOnScroll();
    }
}


/* =========================================================
   18. ANIMATION EFFECTS
========================================================= */

class AnimationEffects {

    constructor() {
        this.setupHoverEffects();
    }

    setupHoverEffects() {

        if (!window.matchMedia("(hover: hover)").matches) return;

        const cards = document.querySelectorAll(".service-card");

        cards.forEach((card) => {
            card.addEventListener("mouseenter", () => card.classList.add("is-hovered"));
            card.addEventListener("mouseleave", () => card.classList.remove("is-hovered"));
        });

        const buttons = document.querySelectorAll(".btn, .service-btn, .quick-btn");

        buttons.forEach((button) => {
            button.addEventListener("mouseenter", () => button.classList.add("is-hovered"));
            button.addEventListener("mouseleave", () => button.classList.remove("is-hovered"));
        });
    }
}


/* =========================================================
   19. DYNAMIC ANIMATION STYLES
========================================================= */

function injectAnimationStyles() {

    if (Utils.getElement("websiteDynamicStyles")) return;

    const style = document.createElement("style");
    style.id = "websiteDynamicStyles";

    style.textContent = `

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(25px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .animate-in { animation: fadeInUp 0.6s ease forwards; }

        .fa-spin { animation: website-fa-spin 1.5s infinite linear; }

        @keyframes website-fa-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .service-card,
        .btn,
        .service-btn,
        .quick-btn {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card.is-hovered { transform: translateY(-8px); }

        .btn.is-hovered,
        .service-btn.is-hovered,
        .quick-btn.is-hovered { transform: translateY(-3px); }

        .form-submit:disabled,
        .submit-button:disabled {
            opacity: 0.7;
            cursor: wait;
            pointer-events: none;
        }

        .toast-removing {
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 0.3s ease, transform 0.3s ease;
        }

        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
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
   20. APPLICATION INITIALIZATION
========================================================= */

let websiteManager = null;
let animationEffects = null;

function initializeWebsite() {

    if (websiteManager) return;

    try {
        injectAnimationStyles();

        websiteManager = new WebsiteManager();
        window.websiteManager = websiteManager;

        animationEffects = new AnimationEffects();
        window.animationEffects = animationEffects;

        document.body.classList.add("loaded");

        console.info("Abu Khalid Website initialized successfully.");

    } catch (error) {
        document.body.classList.add("loaded");
        console.error("Website initialization error:", error);
    }
}

Utils.ready(initializeWebsite);
