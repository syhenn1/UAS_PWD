// -------------------------------TEXT-CHANGING------------------------------- //

document.addEventListener("DOMContentLoaded", function () {
  const messages = [
    "Welcome back! We missed you!",
    "Delighting you with fresh goodness!",
    "Indulge in our delectable delights!",
    "Crafted with care, just for you!",
    "Savor the flavors of our artisanal treats!",
  ];

  let currentIndex = 0;

  function changeText() {
    const textElement = document.querySelector(".text-changing span");
    if (textElement) {
      const textContainer = document.querySelector(".text-changing");
      textContainer.classList.add("hidden");
      setTimeout(() => {
        textElement.innerHTML = messages[currentIndex];
        currentIndex = (currentIndex + 1) % messages.length;
        textContainer.classList.remove("hidden");
      }, 500);
    } else {
      console.error('Element with class "text-changing" not found.');
    }
  }

  changeText();

  setInterval(changeText, 5000);
});

// -------------------------------POP-UP WINDOW MENU------------------------------- //

const popupButtons = document.querySelectorAll(".popupButton");
const overlay = document.getElementById("overlay");

popupButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const popupId = button.getAttribute("data-popup");
    const popup = document.getElementById(popupId);
    popup.classList.add("show");
    overlay.style.display = "block";
  });
});

const closeButtons = document.querySelectorAll(".closePopup");
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.parentElement;
    popup.classList.add("hide");
    setTimeout(() => {
      popup.classList.remove("show", "hide");
      overlay.style.display = "none";
    }, 500);
  });
});

overlay.addEventListener("click", () => {
  document.querySelectorAll(".popup").forEach((popup) => {
    popup.classList.add("hide");
    setTimeout(() => {
      popup.classList.remove("show", "hide");
      overlay.style.display = "none";
    }, 500);
  });
});

// darken popup window di index //
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item1, .item2, .item3");

  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      items.forEach((sibling) => {
        if (sibling !== item) {
          sibling.classList.add("darken");
        }
      });
    });

    item.addEventListener("mouseout", () => {
      items.forEach((sibling) => {
        sibling.classList.remove("darken");
      });
    });
  });
});

window.addEventListener("scroll", function () {
  var header = document.getElementById("header");

  if (window.scrollY < 100) {
    header.classList.add("transparent");
  } else {
    header.classList.remove("transparent");
  }
});
