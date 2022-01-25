const date = new Date();

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

  document.querySelector('.date h1').innerHTML = months[date.getMonth()] + ' ' + date.getFullYear();

  document.querySelector('.date p').innerHTML = new Date().toDateString();

  let days = '';

  for (let i = firstDayIndex; i > 0; i--) {
    days += `<div class="prev-date">${prevLastDay - i + 1}</div>`;
  }

   for (let i = 1; i <= lastDay; i++) {
     if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
       days += `<div class="today">${i}</div>`;
     } else {
       days += `<div>${i}</div>`;
     }
   }

   for (let i = 1; i <= nextDays; i++) {
     days += `<div class="next-date">${i}</div>`;
   }
   monthDays.innerHTML = days;
}



document.querySelector('.prev').addEventListener('click', prevMonth);
document.querySelector('.next').addEventListener('click', nextMonth);

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
let days = document.querySelectorAll('.days > div');

for (var i = 0; i < days.length; i++) {
  days[i].addEventListener('click', openEvent);
}


let eventMenu = document.querySelector('.events');
function openEvent () {
    eventMenu.style.display = 'grid';
  }
