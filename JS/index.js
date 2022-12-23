var ButtonTurnOn = document.getElementById("TurnOn");
var TurnOnPhoto = document.getElementById("TurnOnPhoto");
var ButtonTurnOff = document.getElementById("TurnOf");
var TurnOfPhoto = document.getElementById("TurnOfPhoto");

ButtonTurnOff.addEventListener("click", function () {
  TurnOfPhoto.style.display = "block";
  TurnOnPhoto.style.display = "none";
});

ButtonTurnOn.addEventListener("click", function () {
  TurnOnPhoto.style.display = "block";
  TurnOfPhoto.style.display = "none";
});

let activePage = "home";

var home = document.getElementById("Home");
var Skills = document.getElementById("Skills");
var projects = document.getElementById("Projects");
var Language = document.getElementById("Language");
