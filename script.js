////////// TOGGLE START ////////////
// three ball slide
const themeSelectorBtn = document.getElementById("theme-selector-button");
const app = document.querySelector("html");

themeSelectorBtn.addEventListener("input", () => {
  let currentValue = themeSelectorBtn.value;
  if (currentValue == 0) {
    app.dataset.colormode = "theme-1";
  } else if (currentValue == 1) {
    app.dataset.colormode = "theme-2";
  } else {
    app.dataset.colormode = "theme-3";
  }
});
// toggle dark-mode slide
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  // change the theme of a website
  document.body.classList.toggle("dark");
});

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

// toggle icon
function toggleIcon(x) {
  x.classList.toggle("fa-thumbs-down");
}
////////// TOGGLE END ////////////

//////// MY FIRST ANIMATION ////////
function myMove() {
  let id = null;
  const elem = document.getElementById("animate");
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}
