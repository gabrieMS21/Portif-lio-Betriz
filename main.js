const btn = document.querySelector('.menu-btn');
const menuLinks = document.querySelectorAll('.menu-mobile li a');

// Abre/fecha o menu ao clicar no botão
btn.addEventListener('click', () => {
  document.body.classList.toggle('menu-aberto');
});

// Fecha o menu quando clicar em um link, mas só se estiver no mobile
menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    if (document.body.classList.contains('menu-aberto')) {
      e.preventDefault(); // impede pulo instantâneo
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      // Rola suavemente até a seção
      targetSection.scrollIntoView({ behavior: 'smooth' });

      // Fecha o menu depois de rolar (pode colocar um pequeno delay se quiser)
      document.body.classList.remove('menu-aberto');
    }
  });
});
