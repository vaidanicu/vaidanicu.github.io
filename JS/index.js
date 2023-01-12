// switch page

var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "Drive"];

var skillsHTML = "";

for (var i = 0; i < skills.length; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHTML;

function hideAllPages() {
  var pages = document.querySelectorAll(".page");
  pages.forEach(function (page) {
    hide(page.id);
  });
}

function show(id) {
  document.getElementById(id).style.display = "block";
}
function hide(id) {
  document.getElementById(id).style.display = "none";
}

function displayPage(id) {
  hideAllPages();
  show(id);
}

displayPage("home");

// licht

var ButtonTurnOn = document.getElementById("TurnOn");
var TurnOnPhoto = document.getElementById("TurnOnPhoto");
var ButtonTurnOff = document.getElementById("TurnOf");
var TurnOfPhoto = document.getElementById("TurnOfPhoto");

ButtonTurnOff.addEventListener("click", function () {
  TurnOfPhoto.style.display = "inline";
  TurnOnPhoto.style.display = "none";
});

ButtonTurnOn.addEventListener("click", function () {
  TurnOnPhoto.style.display = "inline";
  TurnOfPhoto.style.display = "none";
});

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
setInterval(displayTime, 1000);

// Date
function Showdate() {
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
setInterval(Showdate, 3000);
