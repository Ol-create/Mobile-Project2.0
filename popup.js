/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const projects = [
  {
    name: "Budget Tracker",
    description: "This application enables users to generate a well-organized shopping list with categories, and also provides a secure user authentication feature for sign-in and sign-out purposes. In addition, the app offers a user-friendly interface that makes it easy to add, edit, and delete items from the shopping list.",
    featuredimage: "./imgs/image/budgetAppDesktop.png",
    tech1: "Ruby",
    tech2: "Rails",
    tech3: "Bootstrap",
    liveversion: "https://silent-water-2124.fly.dev/",
    linksource: "https://github.com/Ol-create/MBudget_app",
  },
  {
    name: "ToDo List App",
    description: "A ToDo List web-app where you can do the following: Add new list with app, you can of course delete task from the list, mark task as completed, edit task and clear completed task(s).",
    featuredimage: "./imgs/image/todo_desktop.png",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
    liveversion: "https://ol-create.github.io/To-Do-List/",
    linksource: "https://github.com/Ol-create/To-Do-List",
  },
  {
    name: "Bookstore CMS",
    description: "Bookstore CMS allows users to add and remove books. It sends information to APIs. The system helps manage inventory and tracks book details such as author, title, and category.",
    featuredimage: "./imgs/Bookstore.jpg",
    tech1: "React",
    tech2: "Redux",
    tech3: "Bootstrap",
    liveversion: "https://ol-create.github.io/book-store",
    linksource: "https://github.com/Ol-create/BookStore",
  },
  {
    name: "Leader Board App",
    description: "This JavaScript project is a leaderboard that ranks results in real-time, displaying users' exact positions based on their scores. The platform features a simple and intuitive interface, optimized for handling large volumes of data and providing a seamless user experience.",
    featuredimage: "./imgs/deckOfCards.jpg",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JavaScript",
    liveversion: "https://leadership-gcxo.onrender.com/",
    linksource: "https://github.com/Ol-create/Leaderboard-app",
  },
];

const deploypopup = (x) => {
  const buttonCard = document.getElementById('popupmobile');
  const titulo = document.getElementById('titulo');
  const parrafo = document.getElementById('parrafo');
  const imagen = document.getElementById('imagen');
  const live = document.getElementById('live');
  const source = document.getElementById('source');
  const tech1 = document.getElementById('tech1');
  const tech2 = document.getElementById('tech2');
  const tech3 = document.getElementById('tech3');
  buttonCard.style.display = 'block';
  titulo.innerHTML = projects[x].name;
  parrafo.innerHTML = projects[x].description;
  imagen.src = projects[x].featuredimage;
  live.href = projects[x].liveversion;
  source.href = projects[x].linksource;

  tech1.innerHTML = projects[x].tech1;
  tech2.innerHTML = projects[x].tech2;
  tech3.innerHTML = projects[x].tech3;
};
document.getElementById('closepopup').addEventListener('click', () => {
  const buttonCard = document.getElementById('popupmobile');
  buttonCard.style.display = 'none';
});

const cardworksection = () => {
  for (const project in projects) {
    const nameproject = projects[project].name;
    const { description } = projects[project];
    const { featuredimage } = projects[project];
    const { tech1 } = projects[project];
    const { tech2 } = projects[project];
    const { tech3 } = projects[project];
    const card = `<div class="grid2">
    <img src="${featuredimage}"  data-aos="flip-left" alt="" class="styleimg">
    <div class="lay-on-top" data-aos="flip-left">
        <h3 class="card-header">${nameproject}</h3>
        <p class="description">${description}</p>
        <ul class="technology">
            <li class="html1">${tech1}</li>
            <li class="boostrap">${tech2}</li>
            <li class="ruby">${tech3}</li>
        </ul>
        <button type="button" class="card-btn" id="card-btn-1" onclick='deploypopup(${project})'> See Project</button>
    </div>
    `;
    document.getElementById('grid4').insertAdjacentHTML('beforeend', card);
  }
};
cardworksection();
