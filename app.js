//HTML elements
var timer = document.getElementById("timer");
var toggleStartApp = document.getElementById("openSearch");
var timeLeft = document.getElementById("timeLeft");
//Global variables
var time;
var active = false;

const startApp = () => {
  active = true;
  var userInput = prompt("What item would you like to look up?");
  switch (userInput) {
    case "cous cous":
      // clearInterval(x);

      console.log("This function works");
      // Update the count down every 1 second
      time = setInterval(function() {
        //Change the time left text
        timeLeft.innerText = `The time remaining for ${userInput} is:`;

        // Get today's date and time
        var now = new Date().getTime();
        // Set the date we're counting down to
        var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

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
      }, 1000);

      $("#timeLeft").css("visibility", "visible");
      break;
    case "cous":
      // clearInterval(x);

      console.log("This function works");
      // Update the count down every 1 second
      time = setInterval(function() {
        //Change the time left text
        timeLeft.innerText = `The time remaining for cous cous is:`;

        // Get today's date and time
        var now = new Date().getTime();
        // Set the date we're counting down to
        var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

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
      }, 1000);

      $("#timeLeft").css("visibility", "visible");
      break;
    case "first aid kit":
      //Change the time left text
      timeLeft.innerText = `The time remaining for ${userInput} is:`;
      // clearInterval(x);
      console.log("This function works");
      // Update the count down every 1 second
      time = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();
        // Set the date we're counting down to
        var countDownDate = new Date("Jan 1, 2022 15:37:25").getTime();

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
      }, 1000);

      $("#timeLeft").css("visibility", "visible");
      break;
    case "first aid":
      //Change the time left text
      timeLeft.innerText = `The time remaining for first aid kit is:`;
      // clearInterval(x);
      console.log("This function works");
      // Update the count down every 1 second
      time = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();
        // Set the date we're counting down to
        var countDownDate = new Date("Jan 1, 2022 15:37:25").getTime();

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
      }, 1000);

      $("#timeLeft").css("visibility", "visible");
      break;
    case "first aid box":
      //Change the time left text
      timeLeft.innerText = `The time remaining for first aid kit is:`;
      // clearInterval(x);
      console.log("This function works");
      // Update the count down every 1 second
      time = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();
        // Set the date we're counting down to
        var countDownDate = new Date("Jan 1, 2022 15:37:25").getTime();

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
      }, 1000);

      $("#timeLeft").css("visibility", "visible");
      break;
    default:
      console.log("The item you have search, doesn't exist!");
      $("#noItems").css("visibility", "visible");
      break;
  }
};

const stopTimer = () => {
  if (active == true) {
    clearInterval(time);
  }
};

toggleStartApp.addEventListener("click", stopTimer);
toggleStartApp.addEventListener("click", startApp);
