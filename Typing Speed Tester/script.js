const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");


var timer = [0,0,0,0];
var interval;
var timerRunning = false;


// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
  if(time <= 9) {
    time = '0' + time;
  }
  return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
  let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
  theTimer.innerHTML = currentTime;
  timer[3]++;
  /*
  1 second will run the runTimer() function 100 times which means when the time passes 1 second, timer[3] is equal to 100

    1s: timer[3] = 100 times
    2s: timer[3] = 200 times
    3s: timer[3] = 300 times
  */
  // console.log(timer[3]);
  timer[0] = Math.floor((timer[3]/100/60)); //Since every second needs to run the runTimer() funtions 100 times, we need to let timer[3] divided by 100 to get the normal second (start from 0 raher than start from 100)
  timer[1] = Math.floor((timer[3]/100)-(timer[0] * 60));
  timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000)); //When the time is 60s/1min, timer[3] is 6000 and meanwhile, timer[1] will reset to 0 again, so if we do timer[3] - (timer[1] * 100), the result will be >= 6000
}

// Match the text entered with the provided text on the page:

function spellCheck() {
  let textEntered = testArea.value;
  let originTextMatch = originText.substring(0,textEntered.length);

  if(textEntered == originText) {
    clearInterval(interval);
    testWrapper.style.borderColor = "#429890"; //If text matches exactly same above, the line will turn green
  }

  else {
    if(textEntered == originTextMatch) {
      testWrapper.style.borderColor = "#65CCf3"; //If the text is correct, we'll have a blue line around the test area
    }
    else{
      testWrapper.style.borderColor = "#E95D0F"; //If the mistake is made, the line turns orange
    }
  }
  // console.log(textEntered);
}

// Start the timer:
function start(){
  let textEnteredLength = testArea.value.length;
  if(textEnteredLength === 0 && !timerRunning){
    timerRunning = true;
    interval = setInterval(runTimer,10); //This variable now effictively is the setInterval() function. That means if I used a clearInterval() function on interval, I am in fact using it on setInterval() and we clear this interval.
    
    
    /*setInterval() is a function to be executed every (10) milliseconds. 
    
    Now it will literally run the function every 10 millisecond/hundredth of a second/0.01 second. 
    
    (1 millisecond = 0.001 second; 10 millisecond = 0.01 second)
    */

    
  }
  console.log(textEnteredLength); //The console shows 0 when I already entered one letter is because the keypress event happens before the content actually gets entered into that value.
}

// Reset everything:
function reset(){
  // console.log("reset button has been pressed!");
  clearInterval(interval);
  interval = null; //We do this so that when we reassign set interval the next time we start the app we're not setting up a new interval with a new index number because then again we'll be running multiple processes in the browser simultaneously and waste a lot of resources
  timer = [0,0,0,0];
  timerRunning = false;

  testArea.value = "";
  theTimer.innerHTML = "00:00:00";
  testWrapper.style.borderColor = "grey";
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);//The keypress event will trigger the start function, which starts the timer.
testArea.addEventListener("keyup",spellCheck,false);
resetButton.addEventListener("click",reset,false);