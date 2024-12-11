document.addEventListener("DOMContentLoaded", () => {
  const giftBox = document.getElementById("gift-box");
  const letter = document.getElementById("letter");
  const message = document.getElementById("message");

  giftBox.addEventListener("click", () => {
    // Add a magical sound effect when the gift box is clicked
    const magicSound = new Audio('https://freesound.org/data/previews/539/539275_1405626-lq.mp3');
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
