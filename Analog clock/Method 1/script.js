const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock() {
  var date = new Date();
  console.log(date);
  
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);
  
  let hrPosition = 360 * (  (hr +  min/60 + sec/3600)   /12);
  let minPosition = 360*(min+sec/60)/60;
  let secPosition = 360*sec/60;
  
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" +  minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" +  secPosition + "deg)";
}

var interval = setInterval(runTheClock,1000);