"use strict"
//1 
setTimeout(() => console.log("Called after 2.5 seconds"), 2500);

//2

function logOutTextAfterDelay(delay, stringToLog) {
    const timeInMilliSec = delay * 1000;
    setTimeout(() => console.log(stringToLog), timeInMilliSec)
}
logOutTextAfterDelay(5, "This string logged after 5 seconds");
logOutTextAfterDelay(3, "This string logged after 3 seconds");

//3
const button_tag = document.getElementById("logout_button");
button_tag.addEventListener("click", () => logOutTextAfterDelay(5, "Called after 5 Seconds"));
//4
const earthLogger = function () {
    console.log("Earth");
}
const saturnlogger = function () {
    console.log("Saturn")
}
function planetLogFunction(callback) {
    callback();
}
planetLogFunction(earthLogger);
planetLogFunction(saturnlogger);

//7

const add = (x, y) => console.log(x + y);
function runAfterDelay(delay, callback) {
    delay = delay * 1000;
    setTimeout(() => callback(), delay);
}

runAfterDelay(4, () => console.log("Should be logged after 4 sec."));
runAfterDelay(2, () => add(5, 7));

//setTimeout(add,5000, 5, 10)

//8

document.addEventListener("dblclick", () => console.log("double click!"))
//9

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    logFunnyJoke = () => console.log("It's a Funny joke!");
    logBadJoke = () => console.log("It's a Bad joke")
    if (shouldTellFunnyJoke) {
        logFunnyJoke();
    } else {
        logBadJoke();
    }
}
jokeCreator(true);
jokeCreator(false);

