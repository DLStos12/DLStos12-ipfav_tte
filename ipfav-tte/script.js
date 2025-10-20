let count = 1;
document.getElementById("radio1").checked = true;

let timer;
function startAuto() {
  clearInterval(timer);
  timer = setInterval(nextImage, 5000);
}

startAuto();

function nextImage() {
  count++;
  if (count > 4) count = 1;
  const el = document.getElementById("radio" + count);
  if (el) el.checked = true;
}

// Reinicia o timer quando o usuário muda o slide manualmente
const radios = document.querySelectorAll('input[type="radio"][id^="radio"]');
radios.forEach(radio => {
  radio.addEventListener('change', function () {
    if (this.checked) {
      const m = this.id.match(/\d+$/);
      if (m) count = parseInt(m[0], 10);
      startAuto();
    }
  });
});

// Adicionado: suporte a swipe (mobile) e função de slide anterior
function prevImage() {
  count--;
  if (count < 1) count = radios.length || 4;
  const el = document.getElementById("radio" + count);
  if (el) el.checked = true;
}

(function enableTouchSwipe() {
  // tenta encontrar o container do carrossel; se não houver, usa document
  const container =
    document.querySelector('.slides') ||
    document.querySelector('.slider') ||
    document.getElementById('carrossel') ||
    document.querySelector('.carousel-popup') ||
    document;

  let startX = 0;
  let startY = 0;

  container.addEventListener('touchstart', function (e) {
    const t = e.changedTouches[0];
    startX = t.clientX;
    startY = t.clientY;
  }, { passive: true });

  container.addEventListener('touchend', function (e) {
    const t = e.changedTouches[0];
    const dx = t.clientX - startX;
    const dy = t.clientY - startY;

    // considera swipe apenas horizontal com distância mínima
    const threshold = 50;
    if (Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) {
        nextImage(); // swipe para a esquerda = próximo
      } else {
        prevImage(); // swipe para a direita = anterior
      }
      startAuto(); // reinicia o timer após interação manual
    }
  }, { passive: true });
})();