const dayHTML = document.querySelector('#day');
const hourHTML = document.querySelector('#hour');
const minuteHTML = document.querySelector('#minute');
const secondHTML = document.querySelector('#second');


const countDown = new Date('Jan 1, 2022 00:00:00').getTime();
let remainTime;
let update = setInterval(function() {
    const currDate = new Date().getTime();
    remainTime = countDown - currDate;
    
    let days = Math.floor(remainTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remainTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remainTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainTime % (1000 * 60)) / 1000);

    dayHTML.innerHTML = days;
    hourHTML.innerHTML = hours;
    minuteHTML.innerHTML = minutes;
    secondHTML.innerHTML = seconds;
}, 1000)