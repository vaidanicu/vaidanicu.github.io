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

// Menu TopBar var
var Home = document.getElementsByClassName("Home");
var skillLi = document.getElementById("skills-list");

//  Skills-List

var skills = ["HTML", "CSS", "JavaScript"];
var skillsHTML = "";
var i = 0;
for (var i = 0; i < skills.length; i++) {
  skillsHTML += "<li>" + skills[i] + "</li>";
}
skillLi.innerHTML = skillsHTML;

document.addEventListener("click", function () {
  Home.style.display = "none";
  skillLi.style.display = "inline";
});
