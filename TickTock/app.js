


let [ seconds, minutes, hours]  =   [0,0,0];
let displayTime =   document.getElementById('displayTime');
let timer   =   null;


function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds =   0;
        minutes++;
        if(minutes  == 60){
            minutes =   0;
            hours++;
        }
    }

    // Display the time in double-digit format (e.g., 01:05:09)
    let h   = hours < 10 ? "0" + hours : hours;
    let m   = minutes < 10 ? "0" + minutes : minutes;
    let s   = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML   =   h +":"+ m +":"+ s;
}

function watchStart(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch,1000);
}


function watchStop(){
    clearInterval(timer);
    timer   =   null;
}


function watchReset(){
    clearInterval(timer);
    [hours, minutes, seconds]   = [0,0,0]; // "To fully reset, otherwise, when you start again, it will continue from where you left off.
    displayTime.innerHTML   =   "00:00:00";
    timer   =   null;
}


