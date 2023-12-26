const heroPlayButton = document.getElementById("heroPlayButton");
const heroImage = document.getElementById("heroImage");
const heroContent = document.getElementById("heroContent");
const navbarLogo = document.getElementById("navbarLogo");
const navbarArrow = document.getElementById("navbarArrow");

navbarArrow.style.opacity = "0";

heroContent.addEventListener("mouseover", function () {
  heroPlayButton.style.background = "rgba(0, 0, 0, 0.6)";
  heroImage.style.transform = "scale(1.1)";
});

heroContent.addEventListener("mouseout", function () {
  heroPlayButton.style.background = "rgba(0, 0, 0, 0.3)";
  heroImage.style.transform = "scale(1.05)";
});

navbarLogo.addEventListener("mouseover", function () {
  navbarArrow.style.opacity = "100";
});

navbarLogo.addEventListener("mouseout", function () {
  navbarArrow.style.opacity = "0";
});
