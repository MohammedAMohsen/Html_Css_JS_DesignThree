let btn = document.querySelector(".up");
let num = document.querySelectorAll("#num");
let section = document.getElementById("stats");
let progressSpans = document.querySelectorAll(".the-progress span");
let section2 = document.querySelector(".our-skills");
let started = false

window.onscroll = function () {
    // Skills Animate Width
    if (window.scrollY >= section2.offsetTop - 250) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
    // Stats Increase Number
    if (window.scrollY >= section.offsetTop-200){
        if(!started){
            num.forEach((num) => startCount(num));
        }
        started = true;
    }
    // Button Up
    if(window.scrollY > 600) {
        btn.style.display = 'block';
    }else {
        btn.style.display = 'none';
    }
    
};

function startCount(el) {
    let goal = el.dataset.goal;
    let counter = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(counter);
        }
    },3000 / goal);
}
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// The End Of The Year Date
// 1000 milliseconds = 1 Second

let countDownDate = new Date("Nov 31, 2023 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
    // Get Date Now
    let dateNow = new Date().getTime();

    // Find The Date Difference Between Now And Countdown Date
    let dateDiff = countDownDate - dateNow;

    // Get Time Units
    // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
    }
}, 1000);