// Get the HTML elements we need to update
const clockDisplay = document.getElementById('clock');
const countdownDisplay = document.getElementById('countdown');

// Function to format time with leading zeros (e.g., 5 becomes 05)
function formatTime(num) {
    return num < 10 ? '0' + num : num;
}

// DIGITAL CLOCK FUNCTION
function updateClock() {
    // Create a new Date object (gets current date and time)
    const now = new Date();
    
    // Get hours, minutes, and seconds
    const hours = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());
    
    // Display format: HH:MM:SS
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Update the clock display on the page
    clockDisplay.textContent = timeString;
}

// COUNTDOWN TIMER FUNCTION
function updateCountdown() {
    // Create a new Date object for now
    const now = new Date();
    
    // Set the target date to New Year 2027 (January 1, 2027 at 00:00:00)
    const targetDate = new Date(2027, 0, 1, 0, 0, 0).getTime();
    
    // Get current time in milliseconds
    const currentDate = now.getTime();
    
    // Calculate difference in milliseconds
    const timeDifference = targetDate - currentDate;
    
    // If the countdown is finished, show 0
    if (timeDifference <= 0) {
        countdownDisplay.textContent = '00:00:00:00';
        return;
    }
    
    // Convert milliseconds to days, hours, minutes, seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    // Format with leading zeros
    const countdownString = `${formatTime(days)}:${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    
    // Update the countdown display on the page
    countdownDisplay.textContent = countdownString;
}

// Call updateClock immediately when page loads (don't wait 1 second)
updateClock();

// Update clock every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);

// Call updateCountdown immediately when page loads
updateCountdown();

// Update countdown every 1000 milliseconds (1 second)
setInterval(updateCountdown, 1000);