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


// Form Validation

//Create variable for form, email, error message. 
const form = document.querySelector('#form'); 
const idEmail = form.email; 
const errorMessage = document.getElementById('invalidText'); 

// Create error function
function errMsg() {
  errorMessage.innerText = 'email has to be in lower case';
}