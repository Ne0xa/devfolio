// Dark Mode
const DarkMode = document.getElementById('DarkMode');
const body = document.body;

DarkMode.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        DarkMode.textContent = '☀️ Mode Clair';
    } else {
        DarkMode.textContent = '🌙 Mode Sombre';
    }
});

// Tabs
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        contents.forEach(c => c.classList.remove('active'));
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});