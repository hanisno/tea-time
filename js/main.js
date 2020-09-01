var time = new Date().getHours();
var image;
var noon = 12;
var night = 18;
var morningTime = 9;
var lunchTime = 12;
var nightTime = 18;
var partyTime = 15;
var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");
var morningTimeSelector = document.getElementById("morningTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var nightTimeSelector = document.getElementById("nightTimeSelector");

var partyEvent = function () {
  if (isPartyTime === false) {
    isPartyTime = true;
    time = partyTime;
    partyTimeButton.innerText = "Thirst quenched!";
    partyTimeButton.style.backgroundColor = "#6e6e6e";
  } else {
    isPartyTime = false;
    time = new Date().getHours();
    partyTimeButton.innerText = "Thirst-tea?";
    partyTimeButton.style.backgroundColor = "#333";
  }
};

partyTimeButton.addEventListener("click", partyEvent);

var morningEvent = function () {
  morningTime = morningTimeSelector.value;
};

var lunchEvent = function () {
  lunchTime = lunchTimeSelector.value;
};

var nightEvent = function () {
  nightTime = nightTimeSelector.value;
};

morningTimeSelector.addEventListener("change", morningEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
nightTimeSelector.addEventListener("change", nightEvent);

var updateClock = function () {
  var timeEventJS = document.getElementById("timeEvent");
  var messageText;
  var lolcat = document.getElementById("lolcat");
  var image = "../img/tea-main.jpg";

  if (time == partyTime) {
    messageText =
      "Try Thai tea! This decadant, sweet and creamy drink is a refreshing treat on hot days.";
    image = "../img/thai-tea.jpg";
  } else if (time == morningTime) {
    messageText =
      "It's time for white tea. The light and aromatic flavours are more pronounced with a fresh palette.";
    image = "../img/white-tea.jpg";
  } else if (time == lunchTime) {
    messageText =
      "Drink black tea. It's rich flavor can cut through the greasiness of lunch and gives a quick energy boost.";
    image = "../img/black-tea.jpg";
  } else if (time == nightTime) {
    messageText =
      "Sip chamomile tea. It will wind down and calm your senses after a long day.";
    image = "../img/chamomile-tea.jpg";
  } else if (time < noon) {
    messageText =
      "What tea should you drink this afternoon? Set your afteroon tea time to find out.";
  } else if (time > night) {
    messageText =
      "What tea should you drink this evening? Set your evening tea time to find out.";
  } else {
    messageText =
      "What tea should you drink this morning? Set your morning tea time to find out.";
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
  var clockTime =
    "It's" + " " + hours + ":" + minutes + ":" + seconds + " " + meridian;
  clock.innerText = clockTime;
};

updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);
