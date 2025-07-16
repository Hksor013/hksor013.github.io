/* === Project 2: TUTORIAL 9 – JavaScript Features === */

// Project 2: Display current day/time on load
window.addEventListener('load', function () {
  const now = new Date();
  alert(`Welcome to Boba Bliss! Current time is: ${now.toLocaleString()}`);
});

// Project 2: Use Math method (random number)
const suggestedDrink = Math.floor(Math.random() * 8) + 1;
console.log(`Project 2: Suggested drink ID: ${suggestedDrink}`);

// Project 2: Countdown function (e.g. to closing)
function startCountdown(seconds) {
  const timer = setInterval(() => {
    if (seconds <= 0) {
      clearInterval(timer);
      alert("We're closed for the day. Please visit us again tomorrow!");
    } else {
      seconds--;
    }
  }, 1000);
}

// Example: Countdown from 15 seconds (test/demo)
startCountdown(15);

// Project 2: Convert string to number
const quantityString = "3";
const quantityNumber = Number(quantityString);
console.log(`Project 2: Quantity as number = ${quantityNumber}`);

// Project 2: Delay a message (setTimeout)
setTimeout(() => {
  console.log("Project 2: Thanks for checking out our site!");
}, 4000);