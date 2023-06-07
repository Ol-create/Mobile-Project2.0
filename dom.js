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

const projectOne = new ProjectDiv(
  "Developer Conferences",
  ["html", "css", "JavaScript"],
  "image/conferenceApp.JPG",
  "Learn the basics of OpenTelemetry from team members and the community, including traces, metrics, and production and pipeline best practices. Join a panelof experts to learn about Dockershim deprecation and more on Kubernetes.",
  "See Live",
  "https://ol-create.github.io/The-Conference/",
  "image/LiveIco.png",
  "See Source",
  "https://github.com/Ol-create/The-Conference",
  "image/SrcIco.png"
);

const projectTwo = new ProjectDiv(
  "Budget Tracker",
  ["html", "Bootstrap", "Ruby on rails"],
  "image/budgetAppDesktop.png",
  "This application enables users to generate a well-organized shopping list with categories, and also provides a secure user authentication feature for sign-in and sign-out purposes. In addition, the app offers a user-friendly interface that makes it easy to add, edit, and delete items from the shopping list.",
  "See Live",
  "https://silent-water-2124.fly.dev/",
  "image/LiveIco.png",
  "See Source",
  "https://github.com/Ol-create/MBudget_app",
  "image/SrcIco.png"
);

const projectThree = new ProjectDiv(
  "Awesome Books",
  ["html", "css", "JavaScript"],
  "image/awesomeBookDesktop.png",
  'The "Awesome Books" website showcases a list of books that users can add or remove. Using my expertise in JavaScript and wireframing, I developed an intuitive and user-friendly interface. The platform is optimized for a seamless experience, with straightforward controls and a minimalist design. The website emphasizes functionality.',
  "See Live",
  "https://awesomebooks9.netlify.app/",
  "image/LiveIco.png",
  "See Source",
  "https://github.com/Ol-create/Awesome-books",
  "image/SrcIco.png"
);

const projectFour = new ProjectDiv(
  "ToDo List App",
  ["html", "css", "JavaScript"],
  "image/todo_desktop.png",
  "A ToDo List web-app where you can do the following: Add new list with app, you can of course delete task from the list, mark task as completed, edit task and clear completed task(s).",
  "See Live",
  "https://ol-create.github.io/To-Do-List/",
  "image/LiveIco.png",
  "See Source",
  "https://github.com/Ol-create/To-Do-List",
  "image/SrcIco.png"
);

const projectFive = new ProjectDiv(
  "Leader Board App",
  ["html", "css", "JavaScript"],
  "image/budgetAppDesktop.png",
  "This JavaScript project is a leaderboard that ranks results in real-time, displaying users' exact positions based on their scores. The platform features a simple and intuitive interface, optimized for handling large volumes of data and providing a seamless user experience.",
  "See Live",
  "https://leadership-gcxo.onrender.com/",
  "image/LiveIco.png",
  "See Source",
  "https://github.com/Ol-create/Leaderboard-app",
  "image/SrcIco.png"
);

const projectSix = new ProjectDiv(
  "Portfolio App",
  ["html", "JavaScript", "css"],
  "image/portfolio_desktop.png",
  "This is my portfolio project that showcases my skills in HTML, CSS, and JS. I have designed and developed it to be fully responsive, ensuring that it works seamlessly on both mobile and desktop devices. Additionally, it has been optimized for optimal performance to provide a smooth user experience.",
  "See Live",
  "https://ol-create.github.io/Portfolio/",
  "image/LiveIco.png",
  "See Source",
  "https://github.com/Ol-create/Mobile-Project2.0",
  "image/SrcIco.png"
);

const projectSeven = new ProjectDiv(
  "Doctors Appointment App",
  ["React", "Redux", "Ruby on Rails"],
  "image/final_project_desktop.png",
  "The 'Doctors Appointment' frontend is the React framework for the Doctos Appointment application, where users can register and book appointments with doctors throughout the app. This client side application is the frontend repository of this project, built with React using Redux",
  "See Live",
  "https://panghealth.onrender.com/",
  "image/LiveIco.png",
  "See Source",
  "https://github.com/Ol-create/Doctors_Appointment_Front_End",
  "image/SrcIco.png"
);

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
  image.style.height = '70%';
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
