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

// Create variable for form, email, error message.
const form = document.querySelector('#form');
const idEmail = form.email;
const errorMessage = document.getElementById('invalidText');

// Check for lowercase
function isLower(str) {
  return !/[A-Z]/.test(str) && /[a-z]/.test(str);
}

// Create error function
function errMsg() {
  errorMessage.innerText = 'email has to be in lower case';
}

// Check for validation
form.addEventListener('change', (e) => {
  const validEmail = isLower(idEmail.value);
  if (!validEmail) {
    errMsg(e.target.name);
  } else {
    errorMessage.innerText = '';
  }
});
// Prevent submit default
form.addEventListener('submit', (e) => {
  if (!isLower(idEmail.value)) { e.preventDefault(); }
});

/* ------- Preserve-Data-InLocalStorage ----------*/

// This holds the form data in an object
const formObj = {};
// This listen input changes
form.addEventListener('change', (e) => {
// This add the data in the object
  formObj[e.target.name] = e.target.value;
  // This object → string
  const dataString = JSON.stringify(formObj);
  localStorage.setItem('formObj', dataString);
});

// check for local Storage
if (localStorage) {
  const local = JSON.parse(localStorage.getItem('formObj'));
  Object.assign(formObj, local);

  // put values into form
  Object.keys(formObj).forEach((item) => {
    form[item].value = formObj[item];
  });
};
