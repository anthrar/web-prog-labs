function showTime(){
    let today = new Date();
    let time = document.getElementById('time');
    time.innerText = today.toLocaleTimeString('ru-RU');
    let bigtime = document.getElementById('bigtime');
    bigtime.innerText = today.toLocaleTimeString('ru-RU');
   // setTimeout(showTime, 1000);
}
setInterval(showTime, 1000);