const navLinks = document.querySelector(".nav-link");

function Hamburger(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  if (navLinks.style.top === "10%") {
    navLinks.style.top = "";
  } else {
    navLinks.style.top = "10%";
  }
}
