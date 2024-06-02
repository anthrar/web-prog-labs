function showDateCount() {
    let today = new Date();
    let dateInput = document.querySelector('input[type=date]');
    let birthday = new Date(dateInput.value);
    let count = Math.floor( ( today - birthday ) / (1000 * 60 * 60 * 24) ) + 1;
    let countOut = document.getElementById('count-days');
    countOut.innerText = count;
}

function clearAll() {
    let dateInput = document.querySelector('input[type=date]');
    dateInput.value = null;
    let countOut = document.getElementById('count-days');
    countOut.innerText = '';
}