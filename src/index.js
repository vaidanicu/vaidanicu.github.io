// switch page

const r1 = fetch("skills.json");
r1.then(raspuns => {
  const r2 = raspuns.json();

  r2.then(skills => {
    displaySkills(skills);
  });
});

function displaySkills(skills) {
  const skillsHTML = skills.map(skill => {
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
  pages.forEach(page => {
    hide(page.id);
  });
}

function displayPage(id) {
  hideAllPages();
  show(id);
}

function initMenu() {
  document.getElementById("top-menu-bar").addEventListener("click", e => {
    if (e.target.matches("a")) {
      // var id = e.target.getAttribute("data-page");
      const id = e.target.dataset.page;
      displayPage(id);
    }
  });
}
initMenu();

displayPage("home");

// Time
// function displayTime() {
//   let t = new Date();
//   let hour = addZero(t.getHours());
//   let minutes = addZero(t.getMinutes());
//   let seconds = addZero(t.getSeconds());

//   let current_time = `${hour}:${minutes}:${seconds}`;
//   document.getElementById("clock").innerHTML = current_time;
// }

// function addZero(i) {
//   if (i < 10) {
//     i = "0" + i;
//   }
//   return i;
// }

// displayTime();
// setInterval(displayTime, 1000);

// Date
// function DisplayDate() {
//   let date = new Date();
//   let day = addZeroDate(date.getDate());
//   let month = addZeroDate(date.getMonth() + 1);
//   let year = addZeroDate(date.getFullYear());
//   let current_date = `${day}/${month}/${year}`;

//   document.getElementById("date").innerHTML = current_date;

//   function addZeroDate(i) {
//     if (i < 10) {
//       i = "0" + i;
//     }
//     return i;
//   }
// }
// DisplayDate();

// setInterval(DisplayDate, 3000);
