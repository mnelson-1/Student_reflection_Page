document.addEventListener('DOMContentLoaded', function() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLanguage);
    
    // Set up event listeners for language buttons
    document.getElementById('en-btn').addEventListener('click', () => changeLanguage('en'));
    document.getElementById('fr-btn').addEventListener('click', () => changeLanguage('fr'));
    document.getElementById('es-btn').addEventListener('click', () => changeLanguage('es'));
});

function changeLanguage(language) {
    // Update active button styling
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`${language}-btn`).classList.add('active');
    
    // Update all translatable elements
    const elements = translations[language];
    for (const [key, value] of Object.entries(elements)) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = value;
        } else {
            console.warn(`Element with ID ${key} not found`);
        }
    }
    
    // Save preference
    localStorage.setItem('preferredLanguage', language);
}