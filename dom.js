const toggleMenu = document.getElementById('toggle-menu');

function show(){ 
    toggleMenu.style.display = 'block'; 
}

function hide() {
    toggleMenu.style.display = 'none';
}

// Form Validation

//Create variable for form, email, error message. 
const form = document.querySelector('#form'); 
const idEmail = form.email; 
const errorMessage = document.getElementById('invalidText'); 
