const toggleMenu = document.getElementById('toggle-menu');

function show() {
  toggleMenu.style.display = 'block';
}

function hide() {
  toggleMenu.style.display = 'none';
}

document.getElementById('openMenu').addEventListener('click', () => {
  show();
});

document.getElementById('close').addEventListener('click', () => {
  hide();
});
