window.onload = setInterval(displayTime, 1000);

function displayTime() {
  // Date
  let d = new Date();

  let date = d.getDate();

  let month = d.getMonth();
  let monthArr = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec"
  ];
  month = monthArr[month];

  let day = d.getDay();
  let dayArr = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31
  ];
  day = dayArr[day];

  let year = d.getFullYear();

  //Time
  let hours = d.getHours();
  let mins = d.getMinutes();
  let secs = d.getSeconds();

  document.getElementById("time").innerHTML = hours + ":" + mins;
  document.getElementById("date").innerHTML = month + " " + day + " " + year;
}
