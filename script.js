document.addEventListener("DOMContentLoaded", () => {
  const { DateTime } = luxon;

  // Get the current time in Egypt and the US (Eastern Time)
  const egyptTime = DateTime.now().setZone("Africa/Cairo");  // Egypt Time Zone
  const usTime = DateTime.now().setZone("America/New_York");  // US Eastern Time Zone
  
  // 12 AM of the specified time zones (midnight)
  const egyptMidnight = egyptTime.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });
  const usMidnight = usTime.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });

  // Get the current time in milliseconds for comparison
  const currentTime = DateTime.now();

  // Check if it's past midnight for Egypt and US, display chests accordingly
  if (currentTime >= egyptMidnight) {
    document.getElementById("chest1").style.display = "block";  // Show chest 1
  } else {
    document.getElementById("chest1").style.display = "none";  // Hide chest 1
  }

  if (currentTime >= usMidnight) {
    document.getElementById("chest2").style.display = "block";  // Show chest 2
  } else {
    document.getElementById("chest2").style.display = "none";  // Hide chest 2
  }
});
