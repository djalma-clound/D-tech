const btn-mobile = document.getElementById('btn-mobile');

function toggleMenu(event ) {
  if (event.type === 'touchstart') event.preventDefault();
  }
 }{
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  
}
btnMobile.addEventListener('click', toggleMenu);