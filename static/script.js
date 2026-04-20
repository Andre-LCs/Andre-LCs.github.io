// ===== SCROLL SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      const headerHeight = document.querySelector('#header').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===== BOTÃO VOLTAR AO TOPO =====
const btnTopo = document.querySelector('#btn-topo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTopo.classList.add('visivel');
  } else {
    btnTopo.classList.remove('visivel');
  }
});

btnTopo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(targetId);

    if (target) {
      const headerHeight = document.querySelector('#header').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});