document.addEventListener("DOMContentLoaded",function(){
    
    var timer = document.querySelector(".timer");
    var timeLeft= 360;
    let countdown;

    function  startTimer() {
        clearInterval(countdown)
        countdown = setInterval(updateTimer,1000);
    }
    


    function updateTimer(){
        var min = Math.floor(timeLeft/60);
        var sec = timeLeft%60;
        timer.innerHTML = min + ":" + sec ;
        if(timeLeft<=0){
            alert("time is up!");
            return 0;
        }
        timeLeft=timeLeft-1
        startTimer()
    }

    startTimer();
})