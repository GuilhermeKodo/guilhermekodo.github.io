function toggleTheme() {
const body = document.body;
const btn = document.querySelector('.theme-toggle');
body.classList.toggle('light');
btn.textContent = body.classList.contains('light') ? '🌙' : '☀️';
}


function toggleContact() {
document.getElementById('contactPanel').classList.toggle('open');
}


function copyText(elementId, btn) {
const text = document.getElementById(elementId).innerText;
navigator.clipboard.writeText(text).then(() => {
btn.textContent = '✔️';
setTimeout(() => btn.textContent = '📋', 2000);
});
}