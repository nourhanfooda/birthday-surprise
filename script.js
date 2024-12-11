document.addEventListener("DOMContentLoaded", () => {
    const giftBoxEgypt = document.getElementById("gift-box-egypt");
    const giftBoxUS = document.getElementById("gift-box-us");
    const letterEgypt = document.getElementById("letter-egypt");
    const letterUS = document.getElementById("letter-us");
    const message = document.getElementById("message");

    // Function to check the current time zone
    function isAfterMidnight(timezone) {
        const currentDate = new Date();
        const utcTime = currentDate.getTime() + currentDate.getTimezoneOffset() * 60000; // Convert to UTC
        const localDate = new Date(utcTime + (timezone * 3600000)); // Adjust for the given timezone
        return localDate.getHours() >= 0; // Check if it's after 12 AM
    }

    // Check if it's after midnight in Egypt or US time
    const isEgyptTime = isAfterMidnight(2); // Egypt is UTC +2
    const isUSTime = isAfterMidnight(-5); // US Eastern Time is UTC -5

    // Display corresponding chests based on the time
    if (isEgyptTime) {
        giftBoxEgypt.querySelector("h2").textContent = "Click to Open! 🎉";
    }
    if (isUSTime) {
        giftBoxUS.querySelector("h2").textContent = "Click to Open! 🎉";
    }

    // Gift box click events
    giftBoxEgypt.addEventListener("click", () => {
        const magicSound = new Audio('https://www.soundjay.com/button/beep-07.wav');
        magicSound.play();
        giftBoxEgypt.classList.add("hidden");
        letterEgypt.classList.remove("hidden");
        message.textContent = "Your magical surprise for Egypt time has been revealed! 🪄";
    });

    giftBoxUS.addEventListener("click", () => {
        const magicSound = new Audio('https://www.soundjay.com/button/beep-07.wav');
        magicSound.play();
        giftBoxUS.classList.add("hidden");
        letterUS.classList.remove("hidden");
        message.textContent = "Your magical surprise for US time has been revealed! 🪄";
    });

    // Optional: Show the message before clicking the gift box
    setTimeout(() => {
        message.classList.remove("hidden");
    }, 1000); // Show message after 1 second
});
