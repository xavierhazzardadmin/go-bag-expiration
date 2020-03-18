//HTML elements
var title = document.getElementById("titleBar");
var timer = document.getElementById("timer");
var toggleStartApp = document.getElementById("openSearch");
var timeLeft = document.getElementById("timeLeft");
var expirationDate = document.getElementById("expirationDate");

//Global variables
var time;
var active = false;
var message = "This item runs out on: ";

//global functions
function printExpDate(index) {
  $("#expirationDate").css("visibility", "visible");
  var arrayToString = dates[index].toString();
  expirationDate.innerHTML = message + arrayToString;
}

//Arrays
var dates = ["Jan 5, 2021", "Jan 1, 2022", "Feb 1, 2023"];

function goBagApp(dateTime, index, item) {
  $("#list").css("display", "none");
  $("#timeLeft").css("visibility", "visible");
  //Change the time left text
  timeLeft.innerText = `The time remaining for ${item} is:`;
  // clearInterval(x);
  console.log("This function works");
  // Update the count down every 1 second
  time = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
    // Set the date we're counting down to
    var countDownDate = new Date(dateTime + " 15:37:25").getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    timer.innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(time);
      timer.innerHTML = "EXPIRED";
    }
    printExpDate(index);
  }, 1000);
}

const startApp = () => {
  active = true;
  var userInput = prompt("What item would you like to look up?");
  if (userInput.toLowerCase().includes("cous")) {
    goBagApp("Jan 10, 2024", 1, "Cous Cous");
  } else if (userInput.toLowerCase().includes("first aid")) {
    goBagApp("Jan 1 2021", 0, "The first aid kit");
  } else {
    console.log("The item you have search, doesn't exist!");
    $("#noItems").css("visibility", "visible");
  }
};

const stopTimer = () => {
  if (active == true) {
    clearInterval(time);
  }
};

function reload() {
  location.reload();
  return false;
}

title.addEventListener("click", reload);
toggleStartApp.addEventListener("click", stopTimer);
toggleStartApp.addEventListener("click", startApp);
