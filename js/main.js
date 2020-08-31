var time = new Date().getHours();
var messageText;
var image;
var noon = 12;
var night = 18;
var wakeupTime = 9;
var lunchTime = 12;
var nightTime = 19;
var partyTime = 15;

var timeEventJS = document.getElementById("timeEvent");
var lolcat = document.getElementById("lolcat");
var image = "../img/tea-tray.jpg";

if (time == partyTime) {
  messageText = "Tea party time.";
  image = "../img/thai-tea.jpg";
} else if (time == wakeupTime) {
  messageText = "Morning tea time.";
  image = "../img/chamomile-tea-1.jpg";
} else if (time == lunchTime) {
  messageText = "Lunch tea time.";
  image = "../img/chamomile-tea-1.jpg";
} else if (time == nightTime) {
  messageText = "Night tea time.";
  image = "../img/chamomile-tea-1.jpg";
} else if (time < noon) {
  messageText = "Good morning.";
  image = "../img/white-tea.jpg";
} else if (time > night) {
  messageText = "Good evening.";
  image = "../img/chamomile-tea.jpg";
} else {
  messageText = "Good afternoon.";
  image = "../img/black-tea.jpg";
}

timeEventJS.innerText = messageText;
lolcat.src = image;
