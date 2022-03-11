const toggleMenu = document.getElementById('toggle-menu');

function show(){ 
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

// This holds the form data in an object 
const formObj = {};
// This listen input changes 
form.addEventListener('change', (e) => { 
// This add the data in the object 
formObj[e.target.name] = e.target.value; 
// This object → string 
const dataString = JSON.stringify(formObj); 
localStorage.setItem('formObj', dataString); });  