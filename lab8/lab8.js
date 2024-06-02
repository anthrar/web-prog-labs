
const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const nameMonths = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

function showDate() {
    let today = new Date();
    let out = document.getElementById('current-date');
    out.innerText = today.toLocaleString('ru-RU');
    let outE = document.getElementById('egypt-date');
    outE.innerText = today.toLocaleString('ar-EG');
    let Catalanout = document.getElementById('Catalan-date');
    Catalanout.innerText = today.toLocaleString('ca');
    let Canadaout = document.getElementById('Canada-date');
    Canadaout.innerText = today.toLocaleString('en-CA');
    let Frenchout = document.getElementById('French-date');
    Frenchout.innerText = today.toLocaleString('fr');
    let Japaneseout = document.getElementById('Japanese-date');
    Japaneseout.innerText = today.toLocaleString('ja');

    let day = new Date(); 
    let YearNow = day.getFullYear();
    let CurrentYear = document.getElementById('current-year');
    CurrentYear.innerText = YearNow;
    let MonthNow = nameMonths[day.getMonth()];
    let CurrentMonth = document.getElementById('current-month');
    CurrentMonth.innerText = MonthNow;
    let DayNow = day.getDate();
    let CurrentDay = document.getElementById('current-day');
    CurrentDay.innerText = DayNow;
    let dayOfWeek = weekDays[day.getDay()]; 
    let dayOfWeekOut = document.getElementById('day-of-week');
    dayOfWeekOut.innerText = dayOfWeek;
    

}
function showDayOfWeek() {
    let year = document.getElementById('year').value;
    let month = document.getElementById('month').value;
    let day = document.getElementById('day').value;
    let date = new Date(year, month-1, day);
    let dayOfWeekName = weekDays[date.getDay()];
    let dayOfWeekNameOut = document.getElementById('day-of-week-name');
    dayOfWeekNameOut.innerText = dayOfWeekName;
}