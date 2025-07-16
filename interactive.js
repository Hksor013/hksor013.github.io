// Tutorial 9 - JavaScript

// Function to get and display the current day and time
function showCurrentDateTime() {
  const now = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[now.getDay()];
  const timeString = now.toLocaleTimeString();

  console.log(`Today is ${dayName}, current time is ${timeString}`);
  // Show alert with current day and time
  alert(`Hello! Today is ${dayName} and the current time is ${timeString}. Enjoy your bubble tea order!`);
}

// Call the function immediately on page load
showCurrentDateTime();

// Use a Math method - generate a random number for a discount percentage (0-20%)
const discountPercent = Math.floor(Math.random() * 21); // 0 to 20
console.log(`Your special discount is ${discountPercent}%!`);

// Delay a command: after 3 seconds, show the discount alert
setTimeout(() => {
  alert(`Special offer: You get ${discountPercent}% off your order today!`);
}, 3000);

// Convert between number and text
let numStr = discountPercent.toString();  // number to string
let strNum = Number(numStr);               // string back to number
console.log(`Converted discount from number to string: "${numStr}", and back to number: ${strNum}`);

// Countdown function: count down from 5 to 0 every second
let countdownValue = 5;
function countdown() {
  if (countdownValue >= 0) {
    console.log(`Order confirmation in: ${countdownValue} seconds`);
    countdownValue--;
  } else {
    clearInterval(countdownInterval);
    alert('Your order is confirmed! Thank you!');
  }
}

// Run the countdown every 1 second (1000 ms)
const countdownInterval = setInterval(countdown, 1000);