document.addEventListener('DOMContentLoaded', function () {
    // Get the current path without the language prefix
    const path = window.location.pathname;
    const defaultLang = 'en';
    const supportedLangs = ['fr', 'en'];

    // If we're already on a language-specific path, don't redirect
    if (supportedLangs.some(lang => path.startsWith('/' + lang + '/'))) {
        return;
    }

    // Get user's preferred language from browser
    const userLang = navigator.language || navigator.userLanguage;
    const shortLang = userLang.split('-')[0]; // Get primary language code (e.g., 'en' from 'en-US')

    // For root path or non-language paths, redirect to appropriate language version
    if (path === '/' || !supportedLangs.some(lang => path.startsWith('/' + lang + '/'))) {
        const targetLang = supportedLangs.includes(shortLang) ? shortLang : defaultLang;
        window.location.href = '/' + targetLang + path;
    }
}); 