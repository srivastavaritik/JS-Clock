var currenTime = new Date();
var hours = currenTime.getHours();
var minutes = currenTime.getMinutes();
var seconds = currenTime.getSeconds();

document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

var count = 0;
    window.setInterval(function(){
        document.getElementById("seconds").innerHTML++;
        if(document.getElementById("seconds").innerHTML==60){
            document.getElementById("seconds").innerHTML=00;
            document.getElementById("minutes").innerHTML++;
        }
            if(document.getElementById("minutes").innerHTML==60){
                document.getElementById("minutes").innerHTML=00;
                document.getElementById("hours").innerHTML++;
            }
        if(document.getElementById("hours").innerHTML==24){
            document.getElementById("hours").innerHTML=00;
        }

    }, 1000);