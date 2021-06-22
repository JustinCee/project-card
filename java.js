let projects = [
  {
    imgURL: "./images/contact-form-7-form-tag-label.jpg",
    imgALT: "Contact form",
    title: "Contact Form",
    techStack: "HTML/CSS",
    description: "A simple contact form",
    githubURL: "https://github.com/JustinCee/contact-form",
    liveProjectURL: "https://upbeat-curran-ab2247.netlify.app",
  },
  {
    imgURL: "./images/Portfolio-Desk.jpg",
    imgALT: "Timeline",
    title: "TimeLine",
    techStack: "HTML/CSS",
    description: "A simple timeline",
    githubURL: "https://github.com/JustinCee/timeline",
    liveProjectURL: "https://nostalgic-kirch-f25659.netlify.app",
  },
  {
    imgURL: "./images/testimonial-example-da3e2204.png",
    imgALT: "Testiomonial",
    title: "Testimonial",
    techStack: "HTML/CSS",
    description: "A simple Testimonial page",
    githubURL: "https://github.com/JustinCee/testimonials",
    liveProjectURL: "https://vigorous-austin-391502.netlify.app",
  },
  {
    imgURL: "./images/testimonial-example-da3e2204.png",
    imgALT: "Testiomonial",
    title: "Testimonial",
    techStack: "HTML/CSS",
    description: "A simple Testimonial page",
    githubURL: "https://github.com/JustinCee/testimonials",
    liveProjectURL: "https://vigorous-austin-391502.netlify.app",
  },
];

function createCard(card) {
  let createdCard = `<div class="project-card" techStack=${card.techStack} >
        <img src="${card.imgURL}" alt="${card.imgALT}">
        <h4>${card.title}</h4>
        <h6>${card.techStack}</h6>
        <p>${card.description}</p>
        <a href="${card.githubURL}">Github</a>
        <a href="${card.liveProjectURL}">Live</a>
      </div>
    `;
  return createdCard;
}

function renderCards() {
  let projectContainer = document.querySelector(".container");
  for (project of projects) {
    let card = createCard(project);
    projectContainer.innerHTML += card;
  }
}

renderCards();

function filterCards(category) {
  let cards = document.getElementsByClassName("project-card");
  if (category == "All") {
    for (card of cards) {
      card.style.display = "block";
    }
    return;
  }
  for (card of cards) {
    console.log(card);
    card.style.display = "none";
  }

  let selectedCards = document.querySelectorAll(`[techStack='${category}']`);

  for (card of selectedCards) {
    card.style.display = "block";
  }
}
