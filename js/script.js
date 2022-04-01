// random number generator
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// get counter
const daysCounter = document.querySelector(".timer .days__item .timer__digit");
const hoursCounter = document.querySelector(
    ".timer .hours__item .timer__digit"
);
const munitesCounter = document.querySelector(
    ".timer .minutes__item .timer__digit"
);
const secCounter = document.querySelector(
    ".timer .seconds__item .timer__digit"
);

function DecorateNumber() {
    // add zero
    const AddZero = (num) => {
        return num.toString().length === 1 ? `0${num}` : num;
    };

    let days = randomNumber(1, 31),
        hours = randomNumber(1, 24),
        minutes = randomNumber(1, 60),
        secounds = randomNumber(1, 60);
    return [AddZero(days), AddZero(hours), AddZero(minutes), AddZero(secounds)];
}

setInterval(() => {
  let [days, hour, minutes, secounds] = DecorateNumber();
  daysCounter.innerHTML = days;
  hoursCounter.innerHTML = hour;
  munitesCounter.innerHTML = minutes;
  secCounter.innerHTML = secounds;

}, 1000);
