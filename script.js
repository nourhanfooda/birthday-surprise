document.addEventListener("DOMContentLoaded", () => {
  const { DateTime } = luxon;

  // Check the current time in Egypt and US Eastern Time
  const egyptTime = DateTime.now().setZone("Africa/Cairo");  // Egypt Time Zone
  const usTime = DateTime.now().setZone("America/New_York");  // US Eastern Time Zone
  
  // 12 AM of the specified time zones
  const egyptMidnight = egyptTime.set({ hour: 0, minute: 0, second: 0 });
  const usMidnight = usTime.set({ hour: 0, minute: 0, second: 0 });

  // Get the current time in milliseconds for comparison
  const currentTime = DateTime.now();

  // Check if it's past midnight for Egypt and US
  if (currentTime >= egyptMidnight) {
    // Allow opening chest 1
    document.getElementById("chest1").style.display = "block";  // Show chest 1
  } else {
    // Hide chest 1 if it's not yet time
    document.getElementById("chest1").style.display = "none";  // Hide chest 1
  }

  if (currentTime >= usMidnight) {
    // Allow opening chest 2
    document.getElementById("chest2").style.display = "block";  // Show chest 2
  } else {
    // Hide chest 2 if it's not yet time
    document.getElementById("chest2").style.display = "none";  // Hide chest 2
  }
});
