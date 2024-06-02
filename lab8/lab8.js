function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerText = today.toLocaleString('ru-RU');
    let outE = document.getElementById('egypt-date');
    let egypttoday = new Date();
    outE.innerText = today.toLocaleString('ar-EG');
    let Catalanout = document.getElementById('Catalan-date');
    let Catalantoday = new Date(); 
    Catalanout.innerText = today.toLocaleString('ca');
    let Canadaout = document.getElementById('Canada-date');
    let Canadatoday = new Date(); 
    Canadaout.innerText = today.toLocaleString('en-CA');
    let Frenchout = document.getElementById('French-date');
    let Frenchtoday = new Date(); 
    Frenchout.innerText = today.toLocaleString('fr');
    let Japaneseout = document.getElementById('Japanese-date');
    let Japanesetoday = new Date();
    Japaneseout.innerText = today.toLocaleString('ja');
    let CurrentYear = document.getElementById('current-year');
    let YearNow = getFullYear();
}