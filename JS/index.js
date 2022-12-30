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

function showHomePage() {
  hideAllPages();
  show("home");
}

function showskillsPage() {
  hideAllPages();
  show("skills");
}

function showProjectsPage() {
  hideAllPages();
  show("projects");
}

function showLanguagePage() {
  hideAllPages();
  show("language");
}

showHomePage();

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
