function calculate() {
    //Declaring variables for the current date and end date
    const current = new Date().getTime();
    const countdownDate = new Date('February 11, 2021, 00:00:00').getTime();

    const difference = countdownDate - current;

    //Converting milliseconds to seconds/minutes/hours/days
    
    const seconds = Math.floor((difference/1000) % 60); //1000 milliseconds in a second
    const minutes = Math.floor((difference/1000/60) % 60); //Divide by 1000 to get seconds, then divide by 60 to get minutes
    const hours = Math.floor(difference/(60*60*1000) % 24);
    const days = Math.floor(difference/(24*60*60*1000));

    console.log(days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds '); 
}
calculate();

//Link JS code to HTML document via "dates" class 


//After countdown finishes do...