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
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = '📋';
      btn.classList.remove('copied');
    }, 2000);
  });
}

/* ===== REVEAL ON SCROLL ===== */
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));
