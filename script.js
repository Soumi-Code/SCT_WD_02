let seconds = 0;
let tens = 0;
let mins = 0;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMins = document.querySelector('.mins');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let btnLap = document.querySelector('.btn-lap');
let lapList = document.querySelector('.lap-list');
let interval;
let lapCount = 1;

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

btnStop.addEventListener('click', () => {
    clearInterval(interval);
});

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    resetTimer();
    lapList.innerHTML = ''; 
    lapCount = 1;
});

btnLap.addEventListener('click', () => {
    let lapTime = `${formatTime(mins)}:${formatTime(seconds)}:${formatTime(tens)}`;
    addLap(lapTime);
});


function startTimer() {
    tens++;
    if (tens > 99) {
        seconds++;
        tens = 0;
    }
    if (seconds > 59) {
        mins++;
        seconds = 0;
    }
    updateDisplay();
}

function updateDisplay() {
    getTens.innerHTML = formatTime(tens);
    getSeconds.innerHTML = formatTime(seconds);
    getMins.innerHTML = formatTime(mins);
}

function resetTimer() {
    mins = 0;
    seconds = 0;
    tens = 0;
    updateDisplay();
}

function addLap(time) {
    let li = document.createElement('li');
    li.innerHTML = `
        Lap ${lapCount}: <span>${time}</span>
        <img src="https://img.icons8.com/ios-filled/50/FF5E57/delete.png" alt="Delete Lap" class="delete-btn" title="Delete">
    `;
    lapList.appendChild(li);
    li.querySelector('.delete-btn').addEventListener('click', () => {
        li.remove(); 
    });
    lapCount++;
}

function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}
