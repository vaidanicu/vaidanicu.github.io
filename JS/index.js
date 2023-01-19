// switch page

var skillsEl = document.getElementById("skills-list");

var skills = [
  { name: "HTML", endorcements: 5 },
  { name: "CSS", endorcements: 4 },
  { name: "JS", endorcements: 3 },
  { name: "Drive", endorcements: 2 },
];

var skillsHTML = "";

for (var i = 0; i < skills.length; i++) {
  skillsHTML +=
    "<li>" + skills[i].name + "-" + skills[i].endorcements + "</li>";
}

skillsEl.innerHTML = skillsHTML;

function show(id) {
  document.getElementById(id).style.display = "block";
}
function hide(id) {
  document.getElementById(id).style.display = "none";
}

function hideAllPages() {
  var pages = document.querySelectorAll(".page");
  pages.forEach(function (page) {
    hide(page.id);
  });
}

function displayPage(id) {
  hideAllPages();
  show(id);
}

function initMenu() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        // var id = e.target.getAttribute("data-page");
        var id = e.target.dataset.page;
        displayPage(id);
      }
    });
}
initMenu();

displayPage("skills");

// light
function displayLight() {
  document.querySelector("#TurnOn").addEventListener("click", function () {
    document.querySelector("#TurnOnPhoto").style.display = "inline";
    document.querySelector("#TurnOfPhoto").style.display = "none";
  });

  document.querySelector("#TurnOf").addEventListener("click", function () {
    document.querySelector("#TurnOnPhoto").style.display = "none";
    document.querySelector("#TurnOfPhoto").style.display = "inline";
  });
}
displayLight();
// Time
function displayTime() {
  let t = new Date();
  let hour = addZero(t.getHours());
  let minutes = addZero(t.getMinutes());
  let seconds = addZero(t.getSeconds());

  let current_time = `${hour}:${minutes}:${seconds}`;
  document.getElementById("clock").innerHTML = current_time;
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

displayTime();
setInterval(displayTime, 1000);

// Date
function DisplayDate() {
  let date = new Date();
  let day = addZeroDate(date.getDate());
  let month = addZeroDate(date.getMonth() + 1);
  let year = addZeroDate(date.getFullYear());
  let current_date = `${day}/${month}/${year}`;

  document.getElementById("date").innerHTML = current_date;

  function addZeroDate(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
}
DisplayDate();

setInterval(DisplayDate, 3000);
