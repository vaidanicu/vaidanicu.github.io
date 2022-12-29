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

// switch page

function showHomePage() {
  document.getElementById("home").style.display = "block";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("language").style.display = "none";
}

function showskillsPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.direction = "block";
  document.getElementById("projects").style.display = "none";
  document.getElementById("language").style.display = "none";
}

function showProjectsPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "block";
  document.getElementById("language").style.display = "none";
}

function showLanguagePage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skillss").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("language").style.display = "block";
}

showHomePage();
