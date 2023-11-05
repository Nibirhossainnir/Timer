var cClose = document.querySelector("#c-close");
var conteiner = document.querySelector(".conteiner");
var stt = document.querySelector("#stt");
var conteiner2 = document.querySelector(".conteiner2");
var min = document.querySelector("#min");
var sec = document.querySelector("#sec");
var alarmDiv = document.querySelector(".alarm");
var stopa = document.querySelector("#stop");
var audio = new Audio("alarm-clock-23772.mp3")
cMin = 0;
cSec = 0;
if(cMin == 0 && cSec == 0){
    start.disabled = true;
    reset.disabled = true;
    start.style.cursor = "not-allowed";
    reset.style.cursor = "not-allowed";
}
timer = null;
cClose.addEventListener("click", function(){
    conteiner.classList.remove("c-show");
    conteiner2.style.filter = "blur(0)";
})
stt.addEventListener("click", function(){
    conteiner.classList.add("c-show");
    conteiner2.style.filter = "blur(2px)";
})
set.addEventListener("click", function(){
    if(sec.value <60){
    s.innerHTML = parseInt(sec.value);
    cSec = parseInt(sec.value);
    m.innerHTML = parseInt(min.value);
    cMin = parseInt(min.value);
    conteiner.classList.remove("c-show");
    conteiner2.style.filter = "blur(0)";
    }
    else{
        alert("Cannot be greater than 59 seconds.");
    }
    if(min.value == ""){
        m.innerHTML = 0;
        cMin = 0;
    }
    else if(sec.value == ""){
        cSec = 0;
        s.innerHTML = 0;
    }
    if(cMin > 0 || cSec > 0){
        start.disabled = false;
        reset.disabled = false;
        start.style.cursor = "pointer";
        reset.style.cursor = "pointer";
    }
    else{
        start.disabled = true;
        reset.disabled = true;
        start.style.cursor = "not-allowed";
        reset.style.cursor = "not-allowed";
    }
  
})
reset.addEventListener("click", function(){
    s.innerHTML = 0;
    cSec = 0;
    m.innerHTML = 0;
    cMin = 0;
    clearInterval(timer);
})
start.addEventListener("click", function(){
    if(cSec == 0 && cMin>0){
        cMin--;
        cSec = 60;
       }
       if( timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(() => {
        if(cSec>0 || cMin > 0){
            cSec--;
           s.innerHTML = cSec;
           m.innerHTML = cMin;
           if(cMin == 0 && cSec==0){
            audio.play();
            audio.loop = true;
            clearInterval(timer);
            alarmDiv.classList.add("alarm-show");
            conteiner2.style.filter = "blur(2px)";
           }
           if(cSec == 0 && cMin>0){
            cMin--;
            cSec = 60;
           }
        }
        
    },1000);
    
})
stopa.addEventListener("click", function(){
    s.innerHTML = 0;
    cSec = 0;
    m.innerHTML = 0;
    cMin = 0;
    audio.pause();
    audio.currentTime = 0;
    alarmDiv.classList.remove   ("alarm-show");
            conteiner2.style.filter = "blur(0)";
            if(cMin == 0 && cSec == 0){
                start.disabled = true;
                reset.disabled = true;
                start.style.cursor = "not-allowed";
                reset.style.cursor = "not-allowed";
            }
})



