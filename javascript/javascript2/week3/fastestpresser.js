"use strict"
const button_tag = document.getElementById("start_button");
const input_tag = document.getElementById("time_input")
const gameInfo = document.getElementById("game_info");

let countS = 0;
let countL = 0;
function countOfKeys(e) {
    console.log(e)
    const count1_tag = document.getElementById("count_S");
    const count2_tag = document.getElementById("count_L");
    if (e.code === "KeyS") {
        countS++;
        count1_tag.innerHTML = countS;
    } else if (e.code === "KeyL") {
        countL++
        count2_tag.innerHTML = countL;
    } else {
        gameInfo.innerHTML = "please enter right key"
    }
}

function gameend() {
    document.removeEventListener("keypress", countOfKeys)
    if (countS > countL) {
        gameInfo.innerHTML = "WINNER : S-key user";
        var confettiSettings = { target: 'S-canvas' };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

    } else if (countS < countL) {
        gameInfo.innerHTML = "WINNER: L-key user ";
        var confettiSettings = { target: 'L-canvas' };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

    } else if (countS === 0 && countL === 0) {
        gameInfo.innerHTML = "No key presses...!Try again";
    } else {
        gameInfo.innerHTML = "Its a Draw..!"
    }
}

function gameStart() {
    let time = input_tag.value;
    if (time === "") {
        gameInfo.innerHTML = "please enter time in seconds to play"
    } else {
        gameInfo.innerHTML = "Game started now and Time limit is set for " + time + " seconds";

        const timeLimit = time * 1000;

        let countdowntime = setInterval(countdown, 1000);
        function countdown() {

            document.getElementById("countdown").innerHTML = "Time Left : " + time + " seconds";
            time--;
            if (time < 0) {
                clearInterval(countdowntime)
                document.getElementById("countdown").innerHTML = "Game Over"
                gameend()
            }

        }



        // setTimeout(gameend, timeLimit)

        document.addEventListener('keypress', countOfKeys);


    }

}
function gamerestart() {
    document.location.href = ""
}


button_tag.addEventListener("click", gameStart);
restart_button.addEventListener("click", gamerestart);
