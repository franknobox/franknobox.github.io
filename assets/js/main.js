document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const currentTheme = localStorage.getItem('theme') || 'dark'; // Default to dark

    // Apply saved theme on load
    if (currentTheme) {
        htmlElement.setAttribute('data-theme', currentTheme);
        updateButtonText(currentTheme);
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            let theme = htmlElement.getAttribute('data-theme');
            let newTheme = theme === 'light' ? 'dark' : 'light';
            
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateButtonText(newTheme);
        });
    }

    function updateButtonText(theme) {
        if (toggleButton) {
            // Simple text icons: Sun for light mode, Moon for dark mode
            toggleButton.textContent = theme === 'light' ? '🌙' : '☀️';
            toggleButton.title = theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode';
        }
    }
});
