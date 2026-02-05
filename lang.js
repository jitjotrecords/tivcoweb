const langBtns = document.querySelectorAll('.lang-btn');
const langBlocks = document.querySelectorAll('.lang');

function setLang(lang) {
  langBtns.forEach(btn =>
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang)
  );

  langBlocks.forEach(block => {
    if (block.classList.contains(lang)) {
      block.removeAttribute('hidden');
    } else {
      block.setAttribute('hidden', '');
    }
  });

  localStorage.setItem('lang', lang);
}

langBtns.forEach(btn =>
  btn.addEventListener('click', () => setLang(btn.dataset.lang))
);

setLang(localStorage.getItem('lang') || 'es');
