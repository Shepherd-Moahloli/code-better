/*
let timerInterval;
let milli = 0;
let seconds = 0;
let minutes = 0;

const hou = document.getElementById("hours");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");

console.log(milli, seconds, minutes);

timerInterval = setInterval(() => {
    milli = milli + 1;
    sec.innerText = milli;
    if (milli == 60) {
        milli = 0;

        minutes = minutes + 1;
        min.innerText = minutes;
    }
}, 1000)

*/

setInterval(function () {
  var currentTime = new Date();

  var hura = currentTime.getHours();
  var min = currentTime.getMinutes();
  var sec = currentTime.getSeconds();

  if (hura < 10) {
    hura = "0" + hura;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  document.getElementById("seconds").innerHTML = sec;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("hours").innerHTML = hura;
}, 1000);
/*
setInterval(function () {
  const percentage = (new Date().getSeconds() / 60) * 59;
  document.querySelector(".circle").style.left = `${percentage}%`;

  if (percentage >= 50) {
    document.querySelector(".circle").style.left = "0" + percentage;
  }

  let speed = (new Date().getSeconds() / 60) * 100;
  console.log(speed);

  // get a percentage based on seconds
}, 1000);

function setThemeByTime() {
  const currentTime = new Date();
  const hura = currentTime.getHours();

  if (hura >= 6 && hura <= 18) {
    document.body.classList.add("day");
    document.body.classList.remove("night");
  } else {
    document.body.classList.add("night");
    document.body.classList.remove("day");
  }
}
*/

setInterval(() => {
  const percent = (new Date().getSeconds() / 60) * 50;
  document.getElementById("diski").style.left = `${percent}%`;

  if (percent >= 50) {
    document.getElementById("diski").style.left = "0";
  }

  console.log(percent);
}, 1000);

const elementRotate = document.getElementById("smaller");

setInterval(() => {
  elementRotate.style.transform =
    "rotate(" + new Date().getSeconds() + "90deg)";

  if (elementRotate.style.transform === "rotate(90deg)") {
    elementRotate.style.transform = "rotate(0deg)";
  }

  console.log(elementRotate.style.transform);
}, 1000);

const rotateSecond = document.getElementById("ballMinute");

setInterval(() => {
  rotateSecond.style.transform =
    "rotate(" + new Date().getSeconds() + "900deg)";

  if (rotateSecond.style.transform === "rotate(900deg)") {
    rotateSecond.style.transform = "rotate(0deg)";
  }

  console.log(rotateSecond.style.transform);
}, 1000);
