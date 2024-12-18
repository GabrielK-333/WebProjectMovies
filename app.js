const arrow = document.querySelector(".arrow");
console.log(arrow);
const movieLists = document.querySelectorAll(".movielists");

// Logic for the toggle - light and dark theme
const toggleBall = document.querySelector(".toggle-ball");
const toggleIcons = document.querySelectorAll(".toggle-icon");
const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark-theme");
  toggleIcons[0].classList.add("active");
  toggleIcons[1].classList.remove("active");
} else {
  body.classList.remove("dark-theme");
  toggleIcons[0].classList.remove("active");
  toggleIcons[1].classList.add("active");
}

toggleBall.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    toggleIcons[0].classList.add("active");
    toggleIcons[1].classList.remove("active");
  } else {
    localStorage.setItem("theme", "light");
    toggleIcons[0].classList.remove("active");
    toggleIcons[1].classList.add("active");
  }
});
