const timer = document.getElementById('stopwatch');
const lapBox = document.getElementById('lapBox');
let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;
let intervalId; // Added to store the interval ID

function timerCycle() {
    if (stoptime === false) { // Changed assignment to comparison
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        sec = sec + 1;
        if (sec === 60) { // Changed assignment to comparison
            min = min + 1;
            sec = 0;
        }
        if (min === 60) { // Changed assignment to comparison
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
        if (sec < 10 || sec === 0) { // Corrected comparison operator
            sec = '0' + sec;
        }
        if (min < 10 || min === 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr === 0) {
            hr = '0' + hr;
        }
        timer.innerHTML = hr + ':' + min + ':' + sec;
    }
}

function startTimer() {
    if (stoptime === true) { // Changed assignment to comparison
        stoptime = false;
        intervalId = setInterval(timerCycle, 1000); // Store interval ID
    }
}

function lapTimer() {
    let lapTime = document.createElement('h1');
    lapTime.innerHTML = hr + ':' + min + ':' + sec;
    lapBox.appendChild(lapTime);
}

function stopTimer() {
    if (stoptime === false) { // Changed assignment to comparison
        stoptime = true;
        clearInterval(intervalId); // Clear interval using stored ID
    }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
    stoptime = true;
    hr = 0;
    min = 0;
    sec = 0;
    lapBox.innerHTML = ''; // Clear lap times by resetting innerHTML
}
