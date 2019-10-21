

//Global Variables
var countdown;
var httpRequest = false;
var xhttp = new XMLHttpRequest();



//Functions
function launchCountdown(nextLaunch) {

    var countDownDate = new Date(nextLaunch).getTime();

    var x = setInterval(function() {

        var now = new Date().getTime();
            
        var distance = countDownDate - now;
            
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
        document.getElementById("countdown").innerHTML = "The Next Launch is in: " + days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
            
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "All Rockets have launched.";
        }   
    
    }, 1000);
}

function aryCreator(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.launches.length; i++) {
        out += '<p">' + arr.launches[i].name + "; " + arr.launches[i].windowstart + '</p><br>';
    }
    document.getElementById("launches").innerHTML = out;
}


function getNextFive() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            aryCreator(myArr);
            launchCountdown(myArr.launches[0].windowstart);
          }
    };
    xhttp.open("GET", "https://launchlibrary.net/1.4/launch?next=5&fields=name,windowstart", true);
    xhttp.send();
  }



function getFalconLaunches() {
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        aryCreator(myArr);
        launchCountdown(myArr.launches[0].windowstart);
      }
    };
    xhttp.open("GET", "https://launchlibrary.net/1.4/launch?next=5&name=falcon&fields=name,windowstart", true);
    xhttp.send();
}



function getLauncheroneLaunches() {
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            aryCreator(myArr);
            launchCountdown(myArr.launches[0].windowstart);
          }
    };
    xhttp.open("GET", "https://launchlibrary.net/1.4/launch?next=5&name=launcherone&fields=name,windowstart", true);
    xhttp.send();
  }


  
  
  function getArianeLaunches() {
    xhttp.onreadystatechange = function() {
        

        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            aryCreator(myArr);
            launchCount = launchCountdown(myArr.launches[0].windowstart);
          }
    };
    xhttp.open("GET", "https://launchlibrary.net/1.4/launch?next=5&name=ariane&fields=name,windowstart", true);
    xhttp.send();
  }
   
