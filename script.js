document.addEventListener("DOMContentLoaded", () => {
    const giftBox = document.getElementById("gift-box");
    const letter = document.getElementById("letter");
    const message = document.getElementById("message");
  
    giftBox.addEventListener("click", () => {
      // Updated magic sound link
      const magicSound = new Audio('https://www.soundjay.com/button/beep-07.wav');
      magicSound.play();
  
      // Reveal the letter
      giftBox.classList.add("hidden");
      letter.classList.remove("hidden");
      message.textContent = "Your magical surprise has been revealed! 🪄";
    });
  
    // Optional: Show the message before clicking the gift box
    setTimeout(() => {
      message.classList.remove("hidden");
    }, 1000); // Show message after 1 second
  });
