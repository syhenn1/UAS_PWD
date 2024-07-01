
// -------------------------------TEXT-CHANGING------------------------------- //

document.addEventListener("DOMContentLoaded", function() {
    const messages = [
        "Home baked with Love! &lt;3",
        "Freshly baked daily!",
        "Taste the difference!",
        "Baked with passion!",
        "Enjoy our delicious treats!"
    ];

    let currentIndex = 0;

    function changeText() {
        const textElement = document.querySelector('.text-changing span');
        if (textElement) {
        
            const textContainer = document.querySelector('.text-changing');
            textContainer.classList.add('hidden');
            
            setTimeout(() => {
                
                textElement.innerHTML = messages[currentIndex];
                currentIndex = (currentIndex + 1) % messages.length;
                
                textContainer.classList.remove('hidden');
            }, 500); 
        } else {
            console.error('Element with class "text-changing" not found.');
        }
    }

    
    changeText();

    
    setInterval(changeText, 5000);
});
