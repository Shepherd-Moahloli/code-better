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

const secondWays = document.getElementById("secondBall");
/*
var crayon = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
  "#D1F2EB",
  "#A3E4D7",
  "#7CEC9F",
  "#53E4A8",
  "#22DA6E",
  "#D1F2A5",
  "#A3E4B8",
  "#7CEC71",
  "#53E4C1",
  "#22DA9A",
];
*/
// how can I change the color of the second ball after a minute

setInterval(() => {
  const thislikeWow = (new Date().getMinutes() / 60) * 100;
  var randomColor = crayon[Math.floor(Math.random() * crayon.length)];
  elementRotate.style.transform = "scale(" + "1" + thislikeWow + "%) ";
  secondWays.style.backgroundColor = randomColor;

  if (elementRotate.style.transform === "scale(1)") {
    elementRotate.style.transform = "scale(0)";
  }
  if (secondWays.style.backgroundColor == randomColor) {
    secondWays = thislikeWow;
  }
}, 1000);

const rotateSecond = document.getElementById("ballMinute");
const randomBall = document.getElementById("ball");

setInterval(() => {
  const thisisCrazy = (new Date().getSeconds() / 60) * 100;
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  rotateSecond.style.transform = "scale(" + "1" + thisisCrazy + "%) ";
  randomBall.style.backgroundColor = randomColor;

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
