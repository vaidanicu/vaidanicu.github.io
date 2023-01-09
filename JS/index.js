// switch page

function hide(id) {
  document.getElementById(id).style.display = "none";
}
function show(id) {
  document.getElementById(id).style.display = "block";
}

function hideAllPages() {
  hide("home");
  hide("skills");
  hide("projects");
  hide("language");
}

function showPage(id) {
  hideAllPages();
  show(id);
}

showPage("home");

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
  let hour = t.getHours();
  let minutes = t.getMinutes();
  let seconds = t.getSeconds();

  let current_time = `${hour}:${minutes}  ${seconds}`;
  if (seconds > 60) {
    seconds = -60;
  }

  document.getElementById("clock").innerHTML = current_time;
}
setInterval(displayTime, 10);

// Date

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let current_date = `${day}/${month}/${year}`;

document.getElementById("date").innerHTML = current_date;
