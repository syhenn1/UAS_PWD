// -------------------------------LOGIN------------------------------- //
let username = document.getElementById("username");
let password = document.getElementById("password");
let failedAttempts = 0;

function masuk() {
  if (username.value.toLowerCase() == "admin" && password.value == "12345") {
    alert("Akun yang anda masukkan, benar!");
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("username", "admin");
    return (window.location.href = "index.html");
  } else if (
    username.value.toLowerCase() != "admin" &&
    password.value == "12345"
  ) {
    alert("Username yang anda masukkan salah.");
  } else if (
    username.value.toLowerCase() != "admin" &&
    password.value != "12345"
  ) {
    alert("Username dan Password yang anda masukkan salah.");
  } else {
    if (
      (username.value.toLowerCase() == "admin" && password.value != "12345")
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

document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const loginButton = document.getElementById("loginButton");

  if (isLoggedIn === "true") {
      loginButton.innerHTML = '<img src="../ASSET-UAS/icons8-test-account-90.png" id="profileIcon" width="60px" alt="logologout">';
      
      loginButton.addEventListener('click', function(event) {
          toggleDropdown();
      });

      function toggleDropdown() {
          const dropdownContent = document.getElementById("dropdownContent");
          dropdownContent.classList.toggle('show');
      }

      const logoutLink = document.createElement('a');
      logoutLink.href = "logout";
      logoutLink.textContent = "Logout";
      logoutLink.addEventListener('click', function(event) {
          event.preventDefault();
          logout();
      });
      const dropdownContent = document.createElement('div');
      dropdownContent.classList.add('dropdown-content');
      dropdownContent.id = 'dropdownContent';
      dropdownContent.appendChild(logoutLink);
      loginButton.appendChild(dropdownContent);

  } else {
      loginButton.innerHTML = "<div class='loginbutton'>Login</div>";
      loginButton.onclick = function () {
      window.location.href = "login.html";
      };
  }
});

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
  alert("Anda telah logout.");
  window.location.href = "index.html";
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

// -------------------------OBJECT FILTER------------------------- //

filterObjects("all");

function filterObjects(c) {
  var x, i;
  x = document.getElementsByClassName("box");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
