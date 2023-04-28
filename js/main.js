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
  const thislikeWow = (new Date().getMinutes() / 60) * 100;
  elementRotate.style.transform = "scale(" + "1" + thislikeWow + "%) ";

  if (elementRotate.style.transform === "scale(1)") {
    elementRotate.style.transform = "scale(0)";
  }
}, 1000);

const rotateSecond = document.getElementById("ballMinute");

setInterval(() => {
  const thisisCrazy = (new Date().getSeconds() / 60) * 100;
  rotateSecond.style.transform = "scale(" + "1" + thisisCrazy + "%) ";

  if (rotateSecond.style.transform === "scale(1)") {
    rotateSecond.style.transform = thisisCrazy;
  }

  console.log(
    rotateSecond.style.transform,
    elementRotate.style.transform,
    percent
  );
}, 1000);

const inside = document.getElementById("insideBall");

setInterval(() => {
  const goCrazy = (new Date().getHours() / 60) * 100;
  inside.style.transform = "scale(" + "1" + goCrazy + "%) ";

  if (inside.style.transform === "scale(1)") {
    inside.style.transform = "scale(0)";
  }
}, 1000);

console.log(inside);
