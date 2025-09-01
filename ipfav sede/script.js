
  const carrossel = document.querySelector('.carrossel');
  const esquerda = document.querySelector('.seta.esquerda');
  const direita = document.querySelector('.seta.direita');

  let scrollAmount = 0;
  const scrollStep = 320; // Tamanho de cada item + gap

  esquerda.addEventListener('click', () => {
    scrollAmount -= scrollStep;
    carrossel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  });

  direita.addEventListener('click', () => {
    scrollAmount += scrollStep;
    carrossel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  });
