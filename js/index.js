// switch page

const r1 = fetch("data/skills.json");
r1.then((raspuns) => {
  const r2 = raspuns.json();

  r2.then((skills) => {
    displaySkills(skills);
  });
});

function displaySkills(skills) {
  const skillsHTML = skills.map((skill) => {
    return `<li>${skill.name} - <span>${skill.endorcements}</span></li>`;
  });
  const skillsEl = document.getElementById("skills-list");

  skillsEl.innerHTML = skillsHTML.join("");
}

function show(id) {
  document.getElementById(id).style.display = "block";
}
function hide(id) {
  document.getElementById(id).style.display = "none";
}

function hideAllPages() {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    hide(page.id);
  });
}

function displayPage(id) {
  hideAllPages();
  show(id);
}

function initMenu() {
  document.getElementById("top-menu-bar").addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      // var id = e.target.getAttribute("data-page");
      const id = e.target.dataset.page;
      displayPage(id);
    }
  });
}
initMenu();

displayPage("home");
