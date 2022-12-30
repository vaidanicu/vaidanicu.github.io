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

function hidePage(id) {
  document.getElementById(id).style.display = "none";
}
function showPage(id) {
  document.getElementById(id).style.display = "block";
}

function showHomePage() {
  hidePage("skills");
  hidePage("projects");
  hidePage("language");
  showPage("home");
}

function showskillsPage() {
  showPage("skills");
  hidePage("projects");
  hidePage("language");
  hidePage("home");
}

function showProjectsPage() {
  hidePage("skills");
  showPage("projects");
  hidePage("language");
  hidePage("home");
}

function showLanguagePage() {
  hidePage("skills");
  hidePage("projects");
  showPage("language");
  hidePage("home");
}

showHomePage();
