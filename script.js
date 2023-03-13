let h = document.getElementById("hour");
let min = document.getElementById("minute");
let s = document.getElementById("sec");
let m = document.getElementById("month");
let day = document.getElementById("day");
let y = document.getElementById("year");

setInterval(function () {

let date = new Date();

let minute = date.getMinutes();

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let name = month[date.getMonth()];

let time = date.getHours();

let sec = date.getSeconds();

let year = date.getFullYear();

let date2 = date.getDate();

h.innerHTML = time;
min.innerHTML = minute;
s.innerHTML = sec;
day.innerHTML = date2;
m.innerHTML = name;
y.innerHTML = year;
}, 1000);