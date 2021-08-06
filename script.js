function timeLeft() {
    let time_left = release_date - new Date().getTime();
    let days_left = Math.floor(time_left / (24 * 60 * 60 * 1000));
    time_left -= 24 * 60 * 60 * 1000 * days_left;

    let hours_left = Math.floor(time_left / (60 * 60 * 1000));
    time_left -= 60 * 60 * 1000 * hours_left;

    let minutes_left = Math.floor(time_left / (60 * 1000));
    time_left -= 60 * 1000 * minutes_left;

    let seconds_left = Math.floor(time_left / 1000);
    // console.log("Days left: " + days_left);
    // console.log("Hours left: " + hours_left);
    // console.log("Minutes left: " + minutes_left);
    // console.log("Seconds left: " + seconds_left);

    // updation of text.
    let time = document.querySelectorAll(".number");
    time[3].innerText = seconds_left;
    time[2].innerText = minutes_left;
    time[1].innerText = hours_left;
    time[0].innerText = days_left;
}

let release_date = new Date("13 August 2021 09:09:00").getTime(); 
setInterval(timeLeft, 1000);