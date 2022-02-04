const date = new Date();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function renderCalendar () {
  date.setDate(1);


  const monthDays = document.querySelector('.days');

  const lastDay = new Date(date.getFullYear(),date.getMonth() + 1,0).getDate();

  const firstDayIndex = date.getDay();

  const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth()+1,
    0
  ).getDay();

  const nextDays = 6 - lastDayIndex;

  document.querySelector('.date h1').innerHTML = months[date.getMonth()] + ' ' + date.getFullYear();

  document.querySelector('.date p').innerHTML = new Date().toDateString();

  let days = '';

  for (let i = firstDayIndex; i > 0; i--) {
    days += `<div class="prev-date">${prevLastDay - i + 1}</div>`;
  }

   for (let i = 1; i <= lastDay; i++) {
     if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
       days += `<div class="today"><span>${i}</span></div>`;
     } else {
       days += `<div class="day"><span>${i}</span></div>`;
     }
   }



   for (let i = 1; i <= nextDays; i++) {
     days += `<div class="next-date">${i}</div>`;
   }
   monthDays.innerHTML = days;
}



let prev = document.querySelector('.prev');
prev.addEventListener('click', prevMonth);
prev.addEventListener('click', renderEvents);
let next = document.querySelector('.next');
next.addEventListener('click', nextMonth);
next.addEventListener('click', renderEvents);

function nextMonth () {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
}

function prevMonth () {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
}

renderCalendar();

// Add event
let day = document.querySelectorAll('.day');

for (var i = 0; i < day.length; i++) {
  day[i].addEventListener('click', openEvent);
}


let eventMenu = document.querySelector('.events');
function openEvent () {
    eventMenu.style.display = 'grid';
  }



// render events
window.addEventListener('load', renderEvents);

function renderEvents () {
  // get date divs
let day = document.getElementsByClassName('day');
// get the span that contains the date
let dayVal = document.querySelectorAll('.day > span');
// create an array
let dayValArr = [];
for (var i = 0; i < dayVal.length; i++) {
  let num = dayVal[i].innerHTML;
  if (num < 10) {
    dayValArr.push('0' + num);
  } else {
      dayValArr.push(num);
    }
}

// get month from the display
let month = document.querySelector('.date > h1').innerHTML.split(' ')[0];
// get year from the display
let year = document.querySelector('.date > h1').innerHTML.split(' ')[1];

for (var i = 0; i < months.length; i++) {
  // months is the array that contains the names of months
  if (months[i] === month) {
    if (i < 9) {
      let monthNum = i + 1;
      var correctMonth = '0' + monthNum;
    } else {
      correctMonth = i + 1;
    }
  }
}


let dateArr = [];

for (var i = 0; i < dayValArr.length; i++) {
  // format: year-month-day
  dateArr.push(year + '-' + correctMonth + '-' + dayValArr[i]);
}

// local storage, saved in todo.js
let getDateArr = JSON.parse(window.localStorage.getItem('getDateArr'));


let entryIdArr = JSON.parse(window.localStorage.getItem('entryIdArr'));
  for (let i = 0; i < getDateArr.length; i++) {
    for (let j = 0; j < dateArr.length; j++) {
      if (getDateArr[i] === dateArr[j] ) {
        // create div when they have the same date
        let eventCal = document.createElement('div');
        eventCal.className = 'eventCal';
        // display the title of the task
        eventCal.innerHTML = entryIdArr[i];
        day[j].appendChild(eventCal);
      }
    }
  }

  let todayDate = new Date();
  let nowMonth = todayDate.getMonth() + 1;
  let nowDate = todayDate.getDate();
  let realMonth;
  let realDate;

  if (nowMonth < 10) {
   realMonth = '0' + nowMonth;
  } else {
    realMonth = nowMonth;
  }
  if (nowDate < 10) {
    realDate = '0' + nowDate;
  } else {
    realDate = nowDate;
  }


  let dateStr = todayDate.getFullYear() + '-' + realMonth + '-' + realDate;
let today = document.querySelector('.today');
if (today !== null) {
  for (let i = 0; i < getDateArr.length; i++) {
    if (getDateArr[i] === dateStr) {
      let eventCal = document.createElement('div');
      eventCal.className = 'eventCal';
      // display the title of the task
      eventCal.innerHTML = entryIdArr[i];
      today.appendChild(eventCal);
    }
}
}
};
