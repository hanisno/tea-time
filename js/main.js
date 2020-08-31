var time = new Date().getHours();
var image;
var noon = 12;
var night = 18;
var wakeupTime = 9;
var lunchTime = 12;
var nightTime = 19;
var partyTime = 15;
var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");

var updateClock = function () {
  var timeEventJS = document.getElementById("timeEvent");
  var messageText;
  var lolcat = document.getElementById("lolcat");
  var image = "../img/tea-tray.png";

  if (time == partyTime) {
    messageText = "Tea party time.";
    image = "../img/thai-tea.jpg";
  } else if (time == wakeupTime) {
    messageText = "Morning tea time.";
    image = "../img/white-tea.jpg";
  } else if (time == lunchTime) {
    messageText = "Lunch tea time.";
    image = "../img/black-tea.jpg";
  } else if (time == nightTime) {
    messageText = "Night tea time.";
    image = "../img/chamomile-tea.jpg";
  } else if (time < noon) {
    messageText = "Good morning.";
  } else if (time > night) {
    messageText = "Good evening.";
  } else {
    messageText = "Good afternoon.";
  }

  timeEventJS.innerText = messageText;
  lolcat.src = image;

  showCurrentTime();
};

var showCurrentTime = function () {
  var clock = document.getElementById("clock");
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  if (hours >= noon) {
    meridian = "PM";
  }
  if (hours > noon) {
    hours = hours - 12;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
  clock.innerText = clockTime;
};

updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyEvent = function () {
  if (isPartyTime === false) {
    isPartyTime = true;
    time = partyTime;
    partyTimeButton.innerText = "Feeling tea-riffic!";
    partyTimeButton.style.backgroundColor = "#222";
  } else {
    isPartyTime = false;
    time = new Date().getHours();
    partyTimeButton.innerText = "Done!";
    partyTimeButton.style.backgroundColor = "#000";
  }
};

partyTimeButton.addEventListener("click", partyEvent);
