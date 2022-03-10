const toggleMenu = document.getElementById('toggle-menu');

function show() {
  toggleMenu.style.display = 'block';
}

function hide() {
  toggleMenu.style.display = 'none';
}

function openNav() {
  toggleMenu.style.width = '100%';
}

function closeNav() {
  toggleMenu.style.width = '0%';
}

document.getElementById('openMenu').addEventListener('click', () => {
  openNav();
});

document.getElementById('close').addEventListener('click', () => {
  closeNav();
});
