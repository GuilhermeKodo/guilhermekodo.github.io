/* ===== TOGGLE THEME ===== */
function toggleTheme() {
  const body = document.body;
  const btn = document.querySelector('.theme-toggle');
  body.classList.toggle('light');
  btn.textContent = body.classList.contains('light') ? '🌙' : '☀️';
}

/* ===== CONTACT PANEL ===== */
function toggleContact() {
  document.getElementById('contactPanel').classList.toggle('open');
}

/* ===== COPY TEXT ===== */
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

/* ===== LIGHTBOX PARA IMAGENS ===== */
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
  <span class="close">&times;</span>
  <img class="modal-content" id="modalImg">
  <div id="caption"></div>
`;
document.body.appendChild(modal);

const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.card img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
    captionText.innerText = img.alt || '';
  });
});

closeBtn.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = event => {
  if(event.target === modal) {
    modal.style.display = 'none';
  }
};
