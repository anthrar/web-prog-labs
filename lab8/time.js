function showTime(){
    let today = new Date();
    let time = document.getElementById('time');
    time.innerText = today.toLocaleTimeString('ru-RU');
    let bigtime = document.getElementById('bigtime');
    bigtime.innerText = today.toLocaleTimeString('ru-RU');

    let secondsDiv = document.getElementById('seconds');
    secondsDiv.style.transform = "rotate( " + today.getSeconds() * 6 + "deg) translate(0, -80px)";
}
setInterval(showTime, 1000);