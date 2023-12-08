let md_n = document.documentElement.getAttribute("class");

let light = document.querySelector("#light");
let dark = document.querySelector("#dark");

light.addEventListener("click", () => {
  document.documentElement.setAttribute("class", "dark");
  document.getElementById("heading").innerText = "Dark Mode";
  document.getElementById("light").style.display = "none";
  document.getElementById("dark").style.display = "block";
});

dark.addEventListener("click", () => {
  document.documentElement.setAttribute("class", "light");
  document.getElementById("heading").innerText = "Light Mode";
  document.getElementById("dark").style.display = "none";
  document.getElementById("light").style.display = "block";
});
