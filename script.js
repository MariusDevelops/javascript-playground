////////////////////// TOGGLE ////////////////////
// toggle dark-mode
function darkMode() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}

// show/hide
function showHide() {
  let x = document.getElementById("showHide");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// toggle/swap text
function toggleSwap() {
  let x = document.getElementById("toggleSwap");
  if (x.innerHTML === "Hello!") {
    x.innerHTML = "Want some pancakes?";
  } else {
    x.innerHTML = "Hello!";
  }
}

// toggle class
function toggleClass() {
  let element = document.getElementById("changeTextStyle");
  element.classList.toggle("toggleClass");
}
