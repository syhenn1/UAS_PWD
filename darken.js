const popupButtons = document.querySelectorAll(
  ".popupButton, .button-purchase, .buy-now"
);
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
    const popup = button.closest(".popup");
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
