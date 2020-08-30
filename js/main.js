var time = new Date().getHours();
var messageText;
var noon = 12;
var night = 18;
var wakeupTime = 9;
var lunchTime = 12;
var nightTime = 19;
var partyTime = 15;

var timeEventJS = document.getElementById("timeEvent");

if (time == partyTime) {
  messageText = "Tea party time.";
} else if (time == wakeupTime) {
  messageText = "Morning tea time.";
} else if (time == lunchTime) {
  messageText = "Lunch tea time.";
} else if (time == nightTime) {
  messageText = "Night tea time.";
} else if (time < noon) {
  messageText = "Good morning.";
} else if (time > night) {
  messageText = "Good evening.";
} else {
  messageText = "Good afternoon.";
}

timeEventJS.innerText = messageText;
