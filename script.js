document.addEventListener('DOMContentLoaded', function() {
  
  // Načtení prvků z HTML
  const tlacitkoMenu = document.querySelector('.tlacitko-prihlasit');
  const modalOkno = document.getElementById('login-modal');
  const krizekProZavreni = document.querySelector('.zavrit-modal');

  tlacitkoMenu.addEventListener('click', function(udalost) {
    udalost.preventDefault();
    modalOkno.style.display = 'block';
  });

  krizekProZavreni.addEventListener('click', function() {
    modalOkno.style.display = 'none';
  });

  window.addEventListener('click', function(udalost) {
    if (udalost.target === modalOkno) {
      modalOkno.style.display = 'none';
    }
  });
  const tlacitkoOdeslat = document.querySelector('.btn-odeslat');

tlacitkoOdeslat.addEventListener('click', function(udalost) {
  udalost.preventDefault();
  alert('Formulář byl úspěšně odeslán! Kdybychom měli server, teď tě přihlásím.');
  modalOkno.style.display = 'none';
});
});
