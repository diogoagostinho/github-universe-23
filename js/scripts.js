// Variables
const heroPlayButton = document.getElementById("heroPlayButton");
const heroImage = document.getElementById("heroImage");
const heroContent = document.getElementById("heroContent");
const heroLogo = document.getElementById("heroLogo");

const navbarLogo = document.getElementById("navbarLogo");
const navbarArrow = document.getElementById("navbarArrow");

const sessionLink = document.getElementsByClassName("sessions-block-link");

//
// Navbar scripts
//

navbarArrow.style.opacity = "0";
navbarArrow.style.transform = "translateX(0)";

navbarLogo.addEventListener("mouseover", function () {
  navbarArrow.style.opacity = "100";
  navbarArrow.style.transform = "translateX(-5px)";
});

navbarLogo.addEventListener("mouseout", function () {
  navbarArrow.style.opacity = "0";
  navbarArrow.style.transform = "translateX(0)";
});

//
// Hero Scripts
//

heroContent.addEventListener("mouseover", function () {
  heroPlayButton.style.background = "rgba(0, 0, 0, 0.6)";
  heroImage.style.transform = "scale(1.1)";
});

heroContent.addEventListener("mouseout", function () {
  heroPlayButton.style.background = "rgba(0, 0, 0, 0.3)";
  heroImage.style.transform = "scale(1.05)";
});

window.addEventListener("scroll", function () {
  heroLogo.style.opacity = 1;
  heroLogo.style.transform = "scale(1)";
});

function awakePage() {
  heroLogo.style.opacity = checkVisible(heroLogo) ? 1 : 0;
  heroLogo.style.transform = checkVisible(heroLogo)
    ? "scale(1)"
    : "scale(1.05)";
}

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

awakePage();

//
// Analytics Scripts
//

$(allInView);
$(window).scroll(allInView);

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

function allInView() {
  for (let i = 0; i < 3; i++) {
    if (isScrolledIntoView($(".analytics-text"))) {
      $(".analytics-text").css("transform", "translateY(1px)");
      $(".analytics-text").css("opacity", "1");
    } else {
      $(".analytics-text").css("transform", "translateY(20px)");
      $(".analytics-text").css("opacity", "0");
    }
  }
}
