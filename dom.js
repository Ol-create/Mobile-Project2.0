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

// CREATE POPUP MODAL

// Create Data Object.
class ProjectDiv {
  constructor(name, language, image, desc, liveTxt, liveSrc, liveImage, srcTxt, src, srcImage) {
    this.name = name;
    this.language = language;
    this.image = image;
    this.description = desc;
    this.liveTxt = liveTxt;
    this.liveSrc = liveSrc;
    this.liveImage = liveImage;
    this.sourceTxt = srcTxt;
    this.source = src;
    this.sourceImage = srcImage;
  }
}

const projectOne = new ProjectDiv('Multi Post Stories', ['html', 'Bootstrap', 'Ruby on rails'], 'image/Snapshoot.png', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', 'See Live', 'https://ol-create.github.io/Portfolio/', 'image/LiveIco.png', 'See Source', 'https://github.com/Ol-create', 'image/SrcIco.png');

const projectTwo = new ProjectDiv('Multi Post Stories', ['html', 'Bootstrap', 'Ruby on rails'], 'image/Snapshoot.png', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', 'See Live', 'https://ol-create.github.io/Portfolio/', 'image/LiveIco.png', 'See Source', 'https://github.com/Ol-create', 'image/SrcIco.png');

const projectThree = new ProjectDiv('Multi Post Stories 2', ['html', 'Bootstrap', 'Ruby on rails'], 'image/Snapshoot.png', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', 'See Live', 'https://ol-create.github.io/Portfolio/', 'image/LiveIco.png', 'See Source', 'https://github.com/Ol-create', 'image/SrcIco.png');

const projectFour = new ProjectDiv('Multi Post Stories 3', ['html', 'Bootstrap', 'Ruby on rails'], 'image/Snapshoot.png', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', 'See Live', 'https://ol-create.github.io/Portfolio/', 'image/LiveIco.png', 'See Source', 'https://github.com/Ol-create', 'image/SrcIco.png');

const projectFive = new ProjectDiv('Multi Post Stories 4', ['html', 'Bootstrap', 'Ruby on rails'], 'image/Snapshoot.png', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', 'See Live', 'https://ol-create.github.io/Portfolio/', 'image/LiveIco.png', 'See Source', 'https://github.com/Ol-create', 'image/SrcIco.png');

const projectSix = new ProjectDiv('Multi Post Stories 5', ['html', 'Bootstrap', 'Ruby on rails'], 'image/Snapshoot.png', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', 'See Live', 'https://ol-create.github.io/Portfolio/', 'image/LiveIco.png', 'See Source', 'https://github.com/Ol-create', 'image/SrcIco.png');

const projectSeven = new ProjectDiv('Multi Post Stories 6', ['html', 'Bootstrap', 'Ruby on rails'], 'image/Snapshoot.png', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', 'See Live', 'https://ol-create.github.io/Portfolio/', 'image/LiveIco.png', 'See Source', 'https://github.com/Ol-create', 'image/SrcIco.png');

//  project array
const projectList = [projectOne, projectTwo, projectThree, projectFour,
  projectFive, projectSix, projectSeven];

// Dynamically Render Modal Box with Function
function project(project) {
  const blurContainer = document.createElement('div');
  blurContainer.classList.add('popBlur');

  const divBox = document.createElement('div');
  divBox.classList.add('popWindow');
  blurContainer.appendChild(divBox);
  // PROJECT TITLE
  const projectName = document.createElement('h3');
  projectName.classList.add('projectName');
  projectName.innerHTML = project.name;
  divBox.appendChild(projectName);
  // LANGUAGE LIST
  const languageList = document.createElement('ul');
  languageList.classList.add('project-link');
  divBox.appendChild(languageList);
  project.language.forEach((lang) => {
    const li = document.createElement('li');
    li.innerHTML = lang;
    li.classList.add('featLang');
    languageList.appendChild(li);
  });

  const divPrj = document.createElement('div');
  divPrj.classList.add('divInfo');
  divBox.appendChild(divPrj);
  // Page Image
  const divImg = document.createElement('div');
  divImg.classList.add('divImg');
  divPrj.appendChild(divImg);
  const image = document.createElement('img');
  image.src = project.image;
  image.style.width = '100%';
  divImg.appendChild(image);

  const divInfo = document.createElement('div');
  divInfo.classList.add('info');
  divPrj.appendChild(divInfo);
  // Page Description
  const divDesc = document.createElement('p');
  divDesc.classList.add('popUpText');
  divDesc.innerHTML = project.description;
  divInfo.appendChild(divDesc);

  const divButton = document.createElement('div');
  divButton.classList.add('divButton');
  divInfo.appendChild(divButton);
  const btnPreview = document.createElement('a');
  divButton.appendChild(btnPreview);
  btnPreview.href = project.liveSrc;
  btnPreview.classList.add('popBtn');
  btnPreview.classList.add('orangeBtn');
  btnPreview.innerHTML = project.liveTxt;
  const liveIco = document.createElement('img');
  liveIco.src = project.liveImage;
  btnPreview.appendChild(liveIco);
  // Address
  const btnSrc = document.createElement('a');
  btnSrc.href = project.source;
  btnSrc.classList.add('popBtn');
  btnSrc.classList.add('orangeBtn');
  btnSrc.innerHTML = project.sourceTxt;
  const srcIco = document.createElement('img');
  srcIco.src = project.sourceImage;
  btnSrc.appendChild(srcIco);
  divButton.appendChild(btnSrc);
  const close = document.createElement('img');
  close.src = 'image/Close.png';
  close.classList.add('closeIco');
  divBox.appendChild(close);

  // Close Modal
  close.addEventListener('click', () => {
    blurContainer.classList.remove('show');
  });

  // Append Modal to body element
  document.body.appendChild(blurContainer);
}

projectList.forEach((proj) => {
  project(proj);
});

// Show Popup Window

const blurContainer = document.querySelectorAll('.popBlur');

const work = document.querySelectorAll('.goto_project');

for (let i = 0; i < work.length; i += 1) {
  work[i].addEventListener('click', () => {
    blurContainer[i].classList.add('show');
  });
}

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
}
