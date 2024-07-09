let username = document.getElementById('username');
let password = document.getElementById('password');
let i=0;
function masuk(){  
  console.log(username)
    if (username.value.toLowerCase()=='admin' && password.value=='12345'){
        alert('Akun yang anda masukkan, benar!')
        return window.location.href="index.html"
    }
    else if(username.value.toLowerCase()!='admin' && password.value=='12345'){
            return alert('Username yang anda masukkan salah.')
    }
    else if(username.value.toLowerCase()!='admin' && password.value!='12345') {
        return alert('Username dan Password yang anda masukkan salah.')
    }    
    else{
        while(i<4){
            if(username.value.toLowerCase()=='admin' && password.value!='12345'){
                i++    
                return alert("Password yang anda masukkan salah.")
            }
        }
    alert("Maaf, anda mengalami kesalahan password 5 kali")
    return window.location.href="uts-lupa.html";
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

const popupButtons = document.querySelectorAll('.popupButton');
    const overlay = document.getElementById('overlay');

    popupButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const popupId = button.getAttribute('data-popup');
            const popup = document.getElementById(popupId);
            popup.classList.add('show');
            overlay.style.display = 'block';
        });
    });

    const closeButtons = document.querySelectorAll('.closePopup');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const popup = button.parentElement;
            popup.classList.remove('show');
            overlay.style.display = 'none';
        });
    });

    overlay.addEventListener('click', () => {
        document.querySelectorAll('.popup').forEach(popup => {
            popup.classList.remove('show');
        });
        overlay.style.display = 'none';
    });