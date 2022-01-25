/*
display date and time

*/

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let week = date.getDay();
let year = date.getFullYear();


let monthAr = [
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
]

let weekAr = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]



function update () {
  let date = new Date();
  hour = date.getHours();
  if (hour < 10) {
    hour = '0' + date.getHours();
  }
  minute = date.getMinutes();
  if (minute < 10) {
    minute = '0' + date.getMinutes();
  }
  second = date.getSeconds();
  if (second < 10) {
    second = '0' + date.getSeconds();
  }

  document.querySelector('.timeDis').innerHTML = hour + ':' + minute + ':' + second;


}

var interval = setInterval(update, 1);




document.querySelector('.date').innerHTML = weekAr[week] + ', ' + monthAr[month] + ' ' + day +', ' +  year;


/*

display quote

*/

let factAr = [
  'Most people check their phones an average of 58 times per day. (RescueTime, 2018)',
  '10–12 minutes invested in planning your day will save at least 2 hours of wasted time and effort throughout the day.',
  'The average person uses 13 different methods to control and manage their time.',
  'Productivity drops as much as 40% when workers try to do two or more tasks at once.',
  'Only about 20% of the average working day is spent on activities that matter.',
  'The average UK employee spends 71 minutes procrastinating every day',
  'The average American watches 28 hours of television per week.',
  'The average employee spends 2 hours per day recovering from distractions. (Atlassian, 2019)',
  'Gaming accounts for about 1 hour per day on average for people aged 15 to 24. (BLS, 2019)',
  'On average, we spend 3 hours and 15 minutes a day (49.4 days per year) on our phones. (RescueTime, 2018)',
  'Worldwide, Internet users spend approximately 144 minutes a day on social media (Statista).',
  'Expenses linked to unnecessary emails equal $1,800 per employee a year (Atlassian).',
  'The annual cost of unnecessary meetings for US businesses amounts to $37 billion (Lucid Meetings).',
  'Higher procrastination rates are linked to lower employee income and shorter employment periods (Brenda Nguyen et al.)',
  'It takes approximately 30 days to establish a new physical or emotional habit.',
  'Tuesday is the most productive day of the week.',
  'Adults who regularly get been 7.5 and 9 hours sleep per night can be up to 20% more productive.',
  '9 out of 10 people daydream in meetings.',
  'You can increase productivity by 46 percent by standing up',
  'Smiling before work can increase productivity',
  'Around 45% of teens say they are stressed all the time.(Globe News Wire)',
  '61% of teens feel pressured to get good grades.',
  '40% of teens say they feel bored every day, while 29% say they are tense and nervous every day.',
  'According to high school students statistics, high school dropouts commit 75% of the crimes in the US.(Do Something)'
]

document.querySelector('.facts > div').innerHTML = '"' + factAr[Math.floor(Math.random() * 24)] + '"';



/* settings */

window.addEventListener('click', closeSetting);
// get modal
let bgmodal = document.querySelector('.bgmodal');


// add event listener to the setting icon
document.querySelector('.material-icons').addEventListener('click', openSetting);
// addevent listener to the close button
document.querySelector('.bgclose').addEventListener('click', function () {
  bgmodal.style.display = 'none';
});

function openSetting () {
  bgmodal.style.display = 'block';
}

function closeSetting (event) {
  if (event.target === bgmodal) {
    bgmodal.style.display = 'none';
  }
}

//Changing background
let bgOptions = document.querySelectorAll('.bgop');

for (var i = 0; i < bgOptions.length; i++) {
  bgOptions[i].addEventListener('click', changeBg);
}
let bgImage =document.querySelector('.clock');
let clockDivs = document.querySelectorAll('.clock > div');
let setBtn = document.querySelector('.material-icons');

function changeBg (event) {
  // mountain background
  if (event.target.classList[0] === 'mou') {
    bgImage.style.backgroundImage = 'url("david-marcu-78A265wPiO4-unsplash.jpg")';
    bgImage.style.backgroundSize = '75em 75em';
    setBtn.style.color = 'white';

    for (var i = 0; i < clockDivs.length; i++) {
      clockDivs[i].style.color = 'white';
      window.localStorage.setItem('bgcolor', clockDivs[i].style.color);
    }
  }

  // ice background
  if (event.target.classList[0] === 'fro') {
    bgImage.style.backgroundImage = 'url("the-background-gf27da31de_1920.jpg")';
    setBtn.style.color = 'white';

    for (var i = 0; i < clockDivs.length; i++) {
      clockDivs[i]. style.color = 'white';
      window.localStorage.setItem('bgcolor', clockDivs[i].style.color);
    }
  }

  // leaves background
  if (event.target.classList[0] === 'aut') {
    bgImage.style.backgroundImage = 'url("background-g5c2f369fe_1920.jpg")';
    setBtn.style.color = '#525252';

    for (var i = 0; i < clockDivs.length; i++) {
      clockDivs[i]. style.color = '#525252';
      window.localStorage.setItem('bgcolor', clockDivs[i].style.color);
    }
  }

  // star background
  if (event.target.classList[0] === 'sta') {
    bgImage.style.backgroundImage = 'url("eberhard-grossgasteiger-cs0sK0gzqCU-unsplash.jpg")';
    setBtn.style.color = 'white';
    for (var i = 0; i < clockDivs.length; i++) {
      clockDivs[i]. style.color = 'white';
      window.localStorage.setItem('bgcolor', clockDivs[i].style.color);
    }
  }

  // cat background
  if (event.target.classList[0] === 'cat') {
    bgImage.style.backgroundImage = 'url("pattern-g9a5dba383_1280.png")';
    setBtn.style.color = '#525252';
    for (var i = 0; i < clockDivs.length; i++) {
      clockDivs[i].style.color = '#525252';
      window.localStorage.setItem('bgcolor', clockDivs[i].style.color);
    }
  }
  window.localStorage.setItem('setBtn', setBtn.style.color);
  window.localStorage.setItem('bg', bgImage.style.backgroundImage);
  bgmodal.style.display = 'none';

}

window.addEventListener('load', getBg);

function getBg() {
  bgImage.style.backgroundImage =  window.localStorage.getItem('bg');
  setBtn.style.color = window.localStorage.getItem('setBtn');
  for (var i = 0; i < clockDivs.length; i++) {
    clockDivs[i].style.color = window.localStorage.getItem('bgcolor');
  }
}
