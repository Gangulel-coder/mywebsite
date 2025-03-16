// Countdown Timer Function
function countdownTimer() {
    const now = new Date();
    const targetDate = new Date();

    // Set the target time to tomorrow at 8:30 AM
    targetDate.setHours(8, 30, 0, 0);

    // If it's already past 8:30 AM today, set the target to the next day
    if (now.getHours() >= 8 && now.getMinutes() >= 30) {
        targetDate.setDate(targetDate.getDate() + 1);
    }

    const timeDiff = targetDate - now;

    if (timeDiff > 0) {
        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `Time left: ${hours} hours, ${minutes} minutes, and ${seconds} seconds!`;
    } else {
        document.getElementById('countdown').innerHTML = "It's 8:30 AM! The time has come! 💯";
    }
}

// Show "Good Luck" Popup with Animation
function showGoodLuckPopup() {
    const luckMessage = document.getElementById('luckMessage');
    luckMessage.style.display = 'block';
    luckMessage.classList.add('popup-animation');
    setTimeout(() => {
        luckMessage.classList.remove('popup-animation');
    }, 3000); // Remove animation after 3 seconds
}

// Update countdown every second
setInterval(countdownTimer, 1000);
countdownTimer();
