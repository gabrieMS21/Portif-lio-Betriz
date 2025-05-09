const btn = document.querySelector('.menu-btn');
btn.addEventListener('click', () => {
  document.body.classList.toggle('menu-aberto');

});

const btnmenu = document.querySelector('.menu-mobile li a');
btnmenu.addEventListener('click', () =>     {
  document.body.classList.toggle('menu-aberto');
});
