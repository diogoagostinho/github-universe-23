//Hero Video
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

//
//Hero Image
//

const heroLogo = document.getElementById("heroLogo");
const contentAnalytics = document.getElementsByClassName("analytics-text");

window.addEventListener("scroll", function () {
  heroLogo.style.opacity = 1;
  heroLogo.style.transform = "scale(1)";
});

awakePage();

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

for (var i = 0, length = contentAnalytics.length; i < length; i++) {
  console.log(contentAnalytics);
  console.log("1 - " + length);
  console.log("2 - " + i);

  window.addEventListener("scroll", function () {
    contentAnalytics[i].style.opacity = 1;
    contentAnalytics[i].style.transform = "translateY(0)";

    console.log("3 - " + contentAnalytics[i]);
  });

  contentAnalytics[i].style.opacity = checkVisible(contentAnalytics) ? 1 : 0;
  contentAnalytics[i].style.transform = checkVisible(contentAnalytics)
    ? "translateY(0)"
    : "translateY(20px)";
}
