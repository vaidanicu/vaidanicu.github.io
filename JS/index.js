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

function showHomePage() {
  document.getElementById("home").style.display = "block";
}

function showskillsPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.direction = "block";
}

function showProjectsPage() {
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "block";
}

function showLanguagePage() {
  document.getElementById("projects").style.display = "none";
  document.getElementById("language").style.display = "block";
}

showHomePage();
