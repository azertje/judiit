// Get the modal
var modal = document.getElementById("myModal");
var hiddenP = document.getElementById("hiddenP");
// Get the button that opens the modal
var btn = document.getElementById("videoBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  hiddenP.style.display = "block"

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    hiddenP.style.display = "block"
  }
}

const targetDate = new Date("2024-03-29T08:00:00");
// Define a function to update the countdown timer
function updateCountdown() {
  // Get the current date and time
  const currentDate = new Date();
  // Calculate the time difference between the target date and the current date
  const timeDifference = targetDate.getTime() - currentDate.getTime();
  // Convert the time difference to seconds
  const totalSeconds = Math.floor(timeDifference / 1000);
  // Calculate the remaining hours, minutes, and seconds
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  // Display the countdown timer
  document.getElementById("demo-hours").innerHTML = `${hours} <br><span>HORES</span>`;
  document.getElementById("demo-minutes").innerHTML = `${minutes} <br><span>MINUTS</span`;
  document.getElementById("demo-seconds").innerHTML = `${seconds} <br><span>SEGONS</span>`;
  //document.getElementById("demo").innerHTML = `${hours} hores, ${minutes} minuts, ${seconds} segons`;
  // Check if the countdown has reached zero
  if (totalSeconds > 0) {
    // Call the updateCountdown function again after 1 second
    setTimeout(updateCountdown, 1000);
  } else {
    console.log("Countdown has ended");
  }
}
// Call the updateCountdown function initially
updateCountdown();