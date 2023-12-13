document.getElementById('iconeLua').addEventListener('click', function() {
    // Seleciona o ícone da lua
    const iconeLua = document.getElementById('lua');

    // Alterna entre os ícones da lua e do sol
    if (iconeLua.classList.contains('bi-moon-fill')) {
      iconeLua.classList.remove('bi-moon-fill');
      iconeLua.classList.add('bi-sun-fill');
    } else {
      iconeLua.classList.remove('bi-sun-fill');
      iconeLua.classList.add('bi-moon-fill');
    }
});