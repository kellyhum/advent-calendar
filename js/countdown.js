/*
 *countdown.js
 *Contains the code used for the Christmas countdown
 */
function calculate() {
    //Declaring variables for the current date and end date
    const current = new Date().getTime();
    const countdownDate = new Date('December 25, 2021, 00:00:00').getTime();

    const difference = countdownDate - current;

    //Converting milliseconds to seconds/minutes/hours/days
    
    const seconds = Math.floor((difference/1000) % 60); //1000 milliseconds in a second
    const minutes = Math.floor((difference/1000/60) % 60); //Divide by 1000 to get seconds, then divide by 60 to get minutes
    const hours = Math.floor(difference/(60*60*1000) % 24);
    const days = Math.floor(difference/(24*60*60*1000));

    //Link JS code to HTML document via id's
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('days').innerHTML = days;

    //After countdown finishes show message
    if (difference <= 0) {
        
    }
}

const timer = setInterval(() => {
    calculate();
}, 1000);


