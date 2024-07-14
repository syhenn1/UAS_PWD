// -------------------------------LOGIN------------------------------- //
let username = document.getElementById("username");
let password = document.getElementById("password");
let failedAttempts = 0;

function masuk() {
  if (username.value.toLowerCase() == "admin" && password.value == "12345") {
    alert("Akun yang anda masukkan, benar!");
    localStorage.setItem("AdminisLoggedIn", "true");
    localStorage.setItem("username", "admin");
    return (window.location.href = "index.html");
  } else if (username.value.toLowerCase() == "user" && password.value == "abcde") {
    alert("Akun yang anda masukkan, benar!");
    localStorage.setItem("UserisLoggedIn", "true");
    localStorage.setItem("username", "user");
    return (window.location.href = "index.html");
  } else if (
    (username.value.toLowerCase() != "admin" && username.value.toLowerCase() != "user") &&
    (password.value == "12345" || password.value == "abcde")
  ) {
    alert("Username yang anda masukkan salah.");
  } else if (
    (username.value.toLowerCase() != "admin" && username.value.toLowerCase() != "user") &&
    (password.value != "12345" && password.value != "abcde")
  ) {
    alert("Username dan Password yang anda masukkan salah.");
  } else {
    if (
      (username.value.toLowerCase() == "admin" && password.value != "12345") ||
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

// -------------------------------ADMIN DAN USER------------------------------- //

document.addEventListener("DOMContentLoaded", function () {
  const AdminisLoggedIn = localStorage.getItem("AdminisLoggedIn");
  const UserisLoggedIn = localStorage.getItem("UserisLoggedIn");
  const loginButton = document.getElementById("loginButton");
  let messages = [];


  // -------------------------------ADMIN------------------------------- //
  if (AdminisLoggedIn === "true") {
    loginButton.innerHTML = '<img src="../ASSET-UAS/admintest.png" id="profileIcon" width="60px" alt="logologout">';
    messages = ["Welcome back, Admin!", "You have new notifications.", "Check the admin panel.", "New user registrations."];
    
    loginButton.addEventListener('click', function() {
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
  } 

  // -------------------------------USER------------------------------- //
  else if (UserisLoggedIn === "true") {
    loginButton.innerHTML = '<img src="../ASSET-UAS/icons8-test-account-90.png" id="profileIcon" width="60px" alt="logologout">';
    messages = ["Welcome back!", "We missed you!", "Enjoy our delicious treats!", "Hope you have a great day!"];
    
    loginButton.addEventListener('click', function() {
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
  } 
  
  // -------------------------------KALO LOGOUT------------------------------- //
  else {
    loginButton.innerHTML = "<div class='loginbutton'>Login</div>";
    loginButton.onclick = function () {
      window.location.href = "login.html";
    };
    messages = [
      "Home baked with Love! &lt;3",
      "Freshly baked daily!",
      "Taste the difference!",
      "Baked with passion!",
      "Enjoy our delicious treats!",
    ];
  }

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

function logout() {
  localStorage.removeItem("AdminisLoggedIn");
  localStorage.removeItem("UserisLoggedIn");
  localStorage.removeItem("username");
  alert("Anda telah logout.");
  window.location.href = "index.html";
}

// -------------------------------POP-UP WINDOW MENU------------------------------- //

const popupButtons = document.querySelectorAll(".popupButton, .button-purchase");
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


// -------------------------BASKET SYSTEM------------------------- //

var totalPrice = 0.00;
var discount = 0.00;
var voucherCodes = {
    "123123": 0.10,  // 10% diskon
    "456456": 0.15,  // 15% diskon
    "789789": 0.20   // 20% diskon
};

function addToBasket(itemName, quantityInputId, priceSpanId) {
    const AdminisLoggedIn = localStorage.getItem("AdminisLoggedIn");
    const UserisLoggedIn = localStorage.getItem("UserisLoggedIn");
    if (AdminisLoggedIn === "true" || UserisLoggedIn === "true") {
        var quantity = parseInt(document.getElementById(quantityInputId).value);
        var price = parseFloat(document.getElementById(priceSpanId).textContent.replace('(RP ', '').replace(')', '').replace('.', '').replace('.', ''));
        var itemTotalPrice = quantity * price;
        var basketList = document.getElementById('basket-list');
        var listItem = document.createElement('li');
        listItem.textContent = `${itemName} x ${quantity} (RP ${itemTotalPrice.toFixed(2)})`;
        basketList.appendChild(listItem);
        totalPrice += itemTotalPrice;
        updateTotalPrice();
    } else {
        alert("Tolong Login Terlebih Dahulu.");
        return (window.location.href = "login.html");
    }
}

function clearBasket() {
    var basketList = document.getElementById('basket-list');
    basketList.innerHTML = '';
    totalPrice = 0.00;
    discount = 0.00;
    updateTotalPrice();
}

function updateTotalPrice() {
    var discountedPrice = totalPrice - discount;
    document.getElementById('totalPrice').textContent = `Total Harga: RP ${discountedPrice.toFixed(2)}`;
}

function applyVoucher() {
    var voucherCode = document.getElementById('voucherCode').value;
    if (voucherCodes.hasOwnProperty(voucherCode)) {
        discount = totalPrice * voucherCodes[voucherCode];
        alert(`Kode voucher diterapkan. Anda mendapat diskon RP ${discount.toFixed(2)}`);
    } else {
        discount = 0.00;
        alert("Kode voucher tidak valid.");
    }
    updateTotalPrice();
}

function confirmPurchase() {
    var basketList = document.getElementById('basket-list');
    var items = basketList.getElementsByTagName('li');
    if (items.length > 0) {
        var confirmationMessage = "Anda telah membeli:\n";
        for (var i = 0; i < items.length; i++) {
            confirmationMessage += "- " + items[i].textContent + "\n";
        }
        var finalPrice = totalPrice - discount;
        confirmationMessage += "\nTotal Harga: RP " + finalPrice.toFixed(2);
        alert(confirmationMessage);
        clearBasket();
    } else {
        alert("Keranjang belanja Anda kosong. Silakan tambahkan barang untuk melakukan pembelian.");
    }
}