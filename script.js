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

/* ===== LIGHTBOX / MODAL PARA IMAGENS ===== */
const modal = document.getElementById('modal');          // modal do HTML
const modalImg = document.getElementById('modalImg');    // imagem grande
const captionText = document.getElementById('caption');  // caption
const closeBtn = modal.querySelector('.close');          // botão X

// adiciona evento para cada imagem do portfólio
document.querySelectorAll('.card-img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;          // pega src da imagem clicada
    captionText.innerText = img.alt; // pega alt da imagem
  });
});

// fecha ao clicar no X
closeBtn.onclick = () => {
  modal.style.display = 'none';
};

// fecha ao clicar fora da imagem
window.onclick = event => {
  if(event.target === modal) {
    modal.style.display = 'none';
  }
};
