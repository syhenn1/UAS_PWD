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






document.addEventListener("DOMContentLoaded", function () {
  const AdminisLoggedIn = localStorage.getItem("AdminisLoggedIn");
  const UserisLoggedIn = localStorage.getItem("UserisLoggedIn");

  document.querySelectorAll(".price-input").forEach((input) => {
    const storedPrice = localStorage.getItem(input.id);
    if (storedPrice) {
      input.value = storedPrice;
    }
  });

  if (AdminisLoggedIn === "true") {
    document
      .querySelectorAll(".add-button")
      .forEach((button) => (button.style.display = "none"));
    document
      .querySelectorAll(".change-price-button")
      .forEach((button) => (button.style.display = "block"));
    document
      .querySelectorAll(".price-input")
      .forEach((input) => input.setAttribute("readonly", true));
    document
      .querySelectorAll(".quantity-input")
      .forEach((input) => input.setAttribute("readonly", true)); 
  } else if (UserisLoggedIn === "true") {
    document
      .querySelectorAll(".change-price-button")
      .forEach((button) => (button.style.display = "none"));
    document
      .querySelectorAll(".price-input")
      .forEach((input) => input.setAttribute("readonly", true));
  } else if (UserisLoggedIn != true || AdminisLoggedIn != true) {
    document
      .querySelectorAll(".change-price-button")
      .forEach((button) => (button.style.display = "none"));
  }
});

var totalPrice = 0.0;
var discount = 0.0;

var voucherCodes = {
  123123: 0.1,
  456456: 0.15,
  789789: 0.2,
};

function addToBasket(itemName, quantityInputId, priceInputId) {
  const AdminisLoggedIn = localStorage.getItem("AdminisLoggedIn");
  const UserisLoggedIn = localStorage.getItem("UserisLoggedIn");
  if (UserisLoggedIn === "true") {
    var quantity = parseInt(document.getElementById(quantityInputId).value);
    var price = parseFloat(
      document
        .getElementById(priceInputId)
        .value.replace(".", "")
        .replace(",", ".")
    );
    var itemTotalPrice = quantity * price;
    var basketList = document.getElementById("basket-list");
    var listItem = document.createElement("li");
    listItem.textContent = `${itemName} x ${quantity} (RP ${itemTotalPrice.toFixed(
      2
    )})`;
    basketList.appendChild(listItem);
    totalPrice += itemTotalPrice;
    updateTotalPrice();
  } else {
    alert("Tolong Login Terlebih Dahulu.");
  }
}

function changePrice(priceInputId) {
  const AdminisLoggedIn = localStorage.getItem("AdminisLoggedIn");
  if (AdminisLoggedIn === "true") {
    var newPrice = prompt("Masukkan harga baru:");
    if (newPrice !== null) {
      newPrice = newPrice.replace(",", ".");
      if (!isNaN(newPrice) && newPrice > 0) {
        newPrice = parseFloat(newPrice).toFixed(2).replace(".", ",");
        var confirmation = confirm(`Harga akan diubah menjadi RP ${newPrice}?`);
        if (confirmation) {
          document.getElementById(priceInputId).value = newPrice;
          localStorage.setItem(priceInputId, newPrice); 
        }
      } else {
        alert("Harga tidak valid. Silakan masukkan angka yang valid.");
      }
    }
  } else {
    alert("Anda tidak memiliki izin untuk mengubah harga.");
  }
}

function clearBasket() {
  var basketList = document.getElementById("basket-list");
  basketList.innerHTML = "";
  totalPrice = 0.0;
  discount = 0.0;
  updateTotalPrice();
}

function updateTotalPrice() {
  var discountedPrice = totalPrice - discount;
  document.getElementById(
    "totalPrice"
  ).textContent = `Total Harga: RP ${discountedPrice.toFixed(2)}`;
}

function applyVoucher() {
  var voucherCode = document.getElementById("voucherCode").value;
  if (voucherCodes.hasOwnProperty(voucherCode)) {
    discount = totalPrice * voucherCodes[voucherCode];
    alert(
      `Kode voucher diterapkan. Anda mendapat diskon RP ${discount.toFixed(2)}`
    );
  } else {
    discount = 0.0;
    alert("Kode voucher tidak valid.");
  }
  updateTotalPrice();
}

function confirmPurchase() {
  const UserisLoggedIn = localStorage.getItem("UserisLoggedIn");
  if (UserisLoggedIn === "true") {
    var basketList = document.getElementById("basket-list");
    var items = basketList.getElementsByTagName("li");
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
      alert(
        "Keranjang belanja Anda kosong. Silakan tambahkan barang untuk melakukan pembelian."
      );
    }
  } else {
    alert("Tolong Login Terlebih Dahulu.");
  }
}

