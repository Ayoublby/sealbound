// Translations Dictionary
const translations = {
    en: {
        pageTitle: "Sealbound - Epic Adventure Game",
        navHome: "HOME",
        navFeatures: "FEATURES",
        navStory: "STORY",
        navGallery: "GALLERY",
        navDownload: "DOWNLOAD",
        heroSubtitle: "BREAK THE SEALS. CONQUER THE WORLDS.",
        heroPlayNow: "PLAY NOW",
        heroDiscover: "DISCOVER MORE",
        featuresTitle: "GAME FEATURES",
        feat1Title: "EPIC COMBAT",
        feat1Desc: "Engage in fast-paced combat with dynamic combos, dodges, and special magic attacks.",
        feat2Title: "PUZZLES",
        feat2Desc: "Solve challenging puzzles using environment mechanics to unlock new areas.",
        feat3Title: "NAVIGATING STAGES",
        feat3Desc: "Seamlessly transition between uniquely designed stages, facing new challenges and discovering hidden secrets.",
        feat4Title: "METROIDVANIA",
        feat4Desc: "Gain new abilities and power-ups to reach previously inaccessible zones and secrets.",
        storyTitle: "THE STORY",
        storyComingSoon: "COMING SOON...",
        galleryTitle: "GALLERY",
        galScreenshot1: "[ SCREENSHOT 1 ]",
        galScreenshot2: "[ SCREENSHOT 2 ]",
        galScreenshot3: "[ SCREENSHOT 3 ]",
        galTrailer: "[ TRAILER VIDEO ]",
        dlTitle: "READY TO PLAY?",
        dlSubtitle: "DOWNLOAD SEALBOUND FOR FREE AND START YOUR EPIC JOURNEY.",
        dlWindows: "WINDOWS (PC)",
        dlWinSize: "COMING SOON",
        dlAndroid: "ANDROID (APK)",
        dlAndSize: "V1.0 | 85 MB",
        footerText: "CREATED BY YOU | POWERED BY GODOT ENGINE",
        socialDiscord: "[ DISCORD ]",
        socialTwitter: "[ TWITTER ]",
        socialYoutube: "[ YOUTUBE ]",
        copyright: "© 2026 SEALBOUND. ALL RIGHTS RESERVED."
    },
    ar: {
        pageTitle: "سيل باوند - مغامرة ملحمية",
        navHome: "الرئيسية",
        navFeatures: "المميزات",
        navStory: "القصة",
        navGallery: "الصور",
        navDownload: "التحميل",
        heroSubtitle: "اكسر الأختام. واغزُ العوالم.",
        heroPlayNow: "العب الآن",
        heroDiscover: "اكتشف المزيد",
        featuresTitle: "مميزات اللعبة",
        feat1Title: "قتال ملحمي",
        feat1Desc: "خُض معارك سريعة وحماسية باستخدام مهارات السحر وتفادي الضربات.",
        feat2Title: "ألغاز معقدة",
        feat2Desc: "حل ألغازاً ممتعة باستخدام بيئة اللعبة لفتح مسارات جديدة.",
        feat3Title: "التنقل بين المراحل",
        feat3Desc: "انتقل بسلاسة بين المراحل المصممة بعناية، وواجه تحديات جديدة واكتشف أسراراً مخفية في كل مرحلة.",
        feat4Title: "ميترويدفينيا",
        feat4Desc: "اكتسب قدرات جديدة للوصول إلى مناطق سرية لم تكن قادراً على بلوغها.",
        storyTitle: "القصة",
        storyComingSoon: "قريباً...",
        galleryTitle: "معرض الصور",
        galScreenshot1: "[ لقطة شاشة 1 ]",
        galScreenshot2: "[ لقطة شاشة 2 ]",
        galScreenshot3: "[ لقطة شاشة 3 ]",
        galTrailer: "[ العرض التشويقي ]",
        dlTitle: "هل أنت مستعد؟",
        dlSubtitle: "حمّل اللعبة مجاناً وابدأ رحلتك الأسطورية الآن.",
        dlWindows: "ويندوز (PC)",
        dlWinSize: "قريباً",
        dlAndroid: "أندرويد (APK)",
        dlAndSize: "الإصدار الأول | 85 ميجا",
        footerText: "برمجة وتصميم: أنت | بمحرك Godot",
        socialDiscord: "[ ديسكورد ]",
        socialTwitter: "[ تويتر ]",
        socialYoutube: "[ يوتيوب ]",
        copyright: "© 2026 سيل باوند. جميع الحقوق محفوظة."
    }
};

// Language Toggle
const langBtns = [document.getElementById('langToggle'), document.getElementById('langToggleDesktop')];
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    langBtns.forEach(btn => {
        if(btn) btn.innerText = lang === 'ar' ? 'EN' : 'ع';
    });
    currentLang = lang;
    localStorage.setItem('lang', lang);
}

langBtns.forEach(btn => {
    if(btn) {
        btn.addEventListener('click', () => {
            setLanguage(currentLang === 'en' ? 'ar' : 'en');
        });
    }
});
setLanguage(currentLang); // Init

// Theme Toggle
const themeBtns = [document.getElementById('themeToggle'), document.getElementById('themeToggleDesktop')];
let currentTheme = localStorage.getItem('theme') || 'light';

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = theme === 'dark' ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
    themeBtns.forEach(btn => {
        if(btn) btn.innerHTML = icon;
    });
    currentTheme = theme;
    localStorage.setItem('theme', theme);
}

themeBtns.forEach(btn => {
    if(btn) {
        btn.addEventListener('click', () => {
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    }
});
setTheme(currentTheme); // Init

// Burger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Glitch Effect for Hero Title
const glitchText = document.querySelector('.glitch');
setInterval(() => {
    glitchText.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
    setTimeout(() => {
        glitchText.style.transform = 'translate(0, 0)';
    }, 50);
}, 3000);

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}
window.addEventListener('scroll', reveal);
reveal(); // Trigger once on load
