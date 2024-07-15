document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("header");

  window.addEventListener("scroll", function () {
    console.log("Scroll event triggered. ScrollY:", window.scrollY);
    if (window.scrollY < 100) {
      header.classList.add("transparent");
    } else {
      header.classList.remove("transparent");
    }
  });
});
