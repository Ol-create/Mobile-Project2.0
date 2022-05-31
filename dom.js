const toggleMenu = document.getElementById('toggle-menu');

function hide() {
  toggleMenu.style.display = 'none';
}

document.querySelectorAll('.mylinks').forEach((n) => n.addEventListener('click', () => {
  hide();
}));

function openNav() {
  toggleMenu.style.display = 'block';
}

function closeNav() {
  toggleMenu.style.display = 'none';
}

document.getElementById('openMenu').addEventListener('click', () => {
  openNav();
});

document.getElementById('close').addEventListener('click', () => {
  closeNav();
});
