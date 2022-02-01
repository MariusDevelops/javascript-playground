// toggle dark-mode
function darkMode() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}

// show/hide
function showHide() {
  var x = document.getElementById("showHide");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
//  if (x.style.display === "none") {
//    x.style.display = "block";
//  } else {
//    x.style.display = "none";
//  }
