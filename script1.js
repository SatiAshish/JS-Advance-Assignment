function startClock(){
    setInterval(myWatch,1000);
}
var clock = setInterval(myWatch,1000);

function myWatch(){
    let d = new Date().toLocaleTimeString();
    document.getElementById("showClock").innerHTML = d;
}

function stopClock(){
    clearInterval(clock);
}