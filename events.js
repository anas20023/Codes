const themeToggle = document.getElementById('themeToggle');
const themeButton = document.getElementById('themeButton');

themeButton.addEventListener('click', () => {
    themeToggle.classList.toggle('dark');
});