let description = document.querySelectorAll(".description");
let icon = document.querySelectorAll(".icon");
let tools = document.querySelector(".design");
tools.addEventListener("click", (e) => {
  e.preventDefault();
  if (description[0].style.display == "none") {
    description[0].style.display = "block";
    icon[0].style.display = "none";
  } else {
    description[0].style.display = "none";
    icon[0].style.display = "block";
  }
});
document.querySelector(".development").addEventListener("click", (e) => {
    e.preventDefault()
  if (description[1].style.display == "none") {
    description[1].style.display = "block";
    icon[1].style.display = "none";
  } else {
    description[1].style.display = "none";
    icon[1].style.display = "block";
  }
});
document.querySelector(".product").addEventListener("click", (e) => {
    e.preventDefault()
  if (description[2].style.display == "none") {
    description[2].style.display = "block";
    icon[2].style.display = "none";
  } else {
    description[2].style.display = "none";
    icon[2].style.display = "block";
  }
});
