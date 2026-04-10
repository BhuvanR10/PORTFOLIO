// TYPING ANIMATION
const text = ["Full Stack Developer", "Web Developer", "Tech Enthusiast"];
let i = 0, j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  const el = document.querySelector(".typing");

  if (!isDeleting && j <= text[i].length) {
    currentText = text[i].substring(0, j++);
  } else if (isDeleting && j >= 0) {
    currentText = text[i].substring(0, j--);
  }

  el.innerHTML = currentText;

  if (j === text[i].length) isDeleting = true;
  if (j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}
type();


// DYNAMIC SKILLS
const skills = ["Java", "Python", "JavaScript", "MySQL", "Git", "Figma"];

const skillsContainer = document.getElementById("skills-container");

skills.forEach(skill => {
  const span = document.createElement("span");
  span.textContent = skill;
  skillsContainer.appendChild(span);
});


// DYNAMIC PROJECTS
const projects = [
  {
    title: "Event Management System",
    desc: "Web-based platform to manage events efficiently.",
    link: "https://github.com/BhuvanR10"
  },
  {
    title: "Gym Management System",
    desc: "Full-stack app with biometric attendance.",
    link: "https://github.com/BhuvanR10"
  }
];

const container = document.getElementById("projects-container");

projects.forEach(p => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <a href="${p.link}" target="_blank">View Project →</a>
  `;

  container.appendChild(div);
});


// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));