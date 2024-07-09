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