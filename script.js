// -------------------------------LOGIN------------------------------- //

let username = document.getElementById("username");
let password = document.getElementById("password");
let failedAttempts = 0;

function masuk() {
  console.log(username);
  if (username.value.toLowerCase() == "admin" && password.value == "12345") {
    alert("Akun yang anda masukkan, benar!");
    return (window.location.href = "admin.html");
  } 
  else if (username.value.toLowerCase() == "user" && password.value == "abcde") {
    alert("Akun yang anda masukkan, benar!");
    return (window.location.href = "user.html");
  } 
  else if (
    username.value.toLowerCase() != "admin" &&
    username.value.toLowerCase() != "user" &&
    password.value == "12345"
  ) {
    alert("Username yang anda masukkan salah.");
  } 
  else if (
    username.value.toLowerCase() != "admin" &&
    username.value.toLowerCase() != "user" &&
    password.value != "12345" &&
    password.value != "abcde"
  ) {
    alert("Username dan Password yang anda masukkan salah.");
  }
  else {
    if (
      (username.value.toLowerCase() == "admin" &&
        password.value != "12345") ||
      (username.value.toLowerCase() == "user" && password.value != "abcde")
    ) {
      failedAttempts++;
      if (failedAttempts >= 5) {
        alert("Maaf, anda mengalami kesalahan password 5 kali");
        return (window.location.href = "uts-lupa.html");
      } else {
        return alert("Password yang anda masukkan salah.");
      }
    }
  }
}


// -------------------------------TEXT-CHANGING------------------------------- //

document.addEventListener("DOMContentLoaded", function () {
  const messages = [
    "Home baked with Love! &lt;3",
    "Freshly baked daily!",
    "Taste the difference!",
    "Baked with passion!",
    "Enjoy our delicious treats!",
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
  const items = document.querySelectorAll('.item1, .item2, .item3');

  items.forEach(item => {
    item.addEventListener('mouseover', () => {
      items.forEach(sibling => {
        if (sibling !== item) {
          sibling.classList.add('darken');
        }
      });
    });

    item.addEventListener('mouseout', () => {
      items.forEach(sibling => {
        sibling.classList.remove('darken');
      });
    });
  });
});


window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  
  if (window.scrollY < 100) {
    header.classList.add('transparent');
  } else {
    header.classList.remove('transparent');
  }
});



