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

// Time and Date

let btnShow = document.querySelector("button");
let output = document.querySelector("h4");

btnShow.addEventListener("click", () => {
  let today = new Date();

  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = today.getDate();

  let current_date = `${date}/${month}/${year}`;
  output.innerText = current_date;
});
