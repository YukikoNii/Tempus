/*


stopwatch


*/


// minute/second/centisecond count
let hSw = 0;
let mSw = 0;
let sSw = 0;
let csSw = 0;
let msSw = 0;

let timeSw;
//time display
let houSw = document.getElementById('houSw');
let minSw = document.getElementById('minSw');
let secSw = document.getElementById('secSw');
let cenSw = document.getElementById('cenSw');

//start button
let startbutton = document.getElementById('start');
startbutton.addEventListener('click', countSw);

//stop button
let stopbutton = document.getElementById('stop');
stopbutton.addEventListener('click',stopSw);

// reset button
let resetbutton = document.getElementById('reset');
resetbutton.addEventListener('click',resetSw);

// checks whether the stopwatch is started/stopped
let swState = false;

// start the stopwatch
function startSw () {
  msSw += 10;
csSw = (msSw % 1000) / 10;
if (csSw <= 9) {
  cenSw.innerText = '0' + csSw;
}
if (csSw > 9) {
  cenSw.innerText = csSw;
}
sSw = Math.floor(msSw/1000) % 60;
if (sSw <= 9) {
  secSw.innerText = '0' + sSw;
}
if (sSw > 9){
  secSw.innerText = sSw;
}

mSw = Math.floor(msSw/60000) % 60;
if (mSw <= 9) {
  minSw.innerText = '0' + mSw;
}
if (mSw > 9) {
  minSw.innerText = mSw;
}
hSw = Math.floor(msSw/3600000);
if (hSw <= 9) {
  houSw.innerText = '0' + hSw;
}
if (hSw > 9) {
  houSw.innerText = hSw;
}

}

// repeat every 10 milliseconds;
function countSw () {
  startbutton.style.display = 'none';
  stopbutton.style.display = 'block';
  clearInterval(timeSw);
  timeSw = setInterval(startSw, 10);
  swState = true;
}

// stop the stopwatch
function stopSw () {
  startbutton.style.display = 'block';
  stopbutton.style.display = 'none';
  clearInterval(timeSw);
  swState = false;
}

// reset the stopwatch
function resetSw () {
  clearInterval(timeSw);
  startbutton.style.display = 'block';
  stopbutton.style.display = 'none';
  houSw.innerText = '00';
  minSw.innerText = '00';
  secSw.innerText = '00';
  cenSw.innerText = '00';
  sSw = 0;
  csSw = 0;
  mSw = 0;
  hSw = 0;
  msSw = 0;
  swState = false;
}

document.addEventListener('keyup', function(event) {
  if (selectIndex === 0) {
    if (event.code === 'Space') {
      if (swState === false) {
        countSw();
      } else {
        stopSw();
      }
    }
    if (event.code === 'Enter') {
      resetSw();
    }
  } else {
    if (event.code === 'Space') {
      if (tmrState === false) {
        countTmr();
      } else {
        stopTmr();
      }
    }
    if (event.code === 'Enter') {
      resetTmr();
    }
  }
});

/*

carousel

*/

let ca1 = document.getElementById('ca1')
ca1.addEventListener('click', stopwatch);

let ca2 = document.getElementById('ca2');
ca2.addEventListener('click', timer);

// stopwatch or timer
let selectIndex = 0;

let swdisplay = document.getElementsByClassName('swelement');
let tinput = document.getElementsByClassName('timer');
let tdisplay = document.getElementsByClassName('tdisplay');
let swbuttons = document.getElementsByClassName('swb');
let tbuttons = document.getElementsByClassName('tb');

function stopwatch () {
  //  display


  // adding jQuery
  $('.swelement').slideDown(200);
  $('.timer').hide();

  //  buttons
  for (let j=0; j < swbuttons.length; j++) {
    if (swState === false) {
    swbuttons[0].style.display = 'block';
    swbuttons[1].style.display = 'none';
    swbuttons[2].style.display = 'block';
  } else {
    swbuttons[0].style.display = 'none';
    swbuttons[1].style.display = 'block';
    swbuttons[2].style.display = 'block';
  }
  tbuttons[j].style.display = 'none';
  }


  // carousel buttons
  ca1.style.backgroundColor = '#FEF9C7';
  ca2.style.backgroundColor = '#fcfcfc';

  selectIndex = 0;
}

function timer () {

  $('.swelement').hide(0);
  $('.timer').slideDown(200);

  //  buttons
  for (let j=0; j < swbuttons.length; j++) {
    if (tmrState === false) {
    tbuttons[0].style.display = 'block';
    tbuttons[1].style.display = 'none';
    tbuttons[2].style.display = 'block';
  } else {
    tbuttons[0].style.display = 'none';
    tbuttons[1].style.display = 'block';
    tbuttons[2].style.display = 'block';
  }
  swbuttons[j].style.display = 'none';
  }



  ca2.style.backgroundColor = '#FEF9C7';
  ca1.style.backgroundColor = '#fcfcfc';

  selectIndex = 1;
}

/*
timer
*/

let houTime = 0;
let minTime = 0;
let secTime = 0;

// get form inputs
let secTimevalue = document.forms[0].elements['second'];
let minTimevalue = document.forms[0].elements['minute'];
let houTimevalue = document.forms[0].elements['hour'];
// get buttons
let timerstart = document.getElementById('startTmr');
timerstart.addEventListener('click', countTmr);
let timerstop = document.getElementById('stopTmr');
timerstop.addEventListener('click', stopTmr);
let timerreset = document.getElementById('resetTmr');
timerreset.addEventListener('click', resetTmr);
let timeTmr;

// index to show the state of timer
let tmrState = false;

// start timer
function startTmr () {
  starting -= 10;
  secTime = Math.floor(starting/1000) % 60;
  minTime = Math.floor(starting/60000) % 60;
  houTime = Math.floor(starting/3600000);
  if (secTime > 9) {
    secTimevalue.value = secTime;
  }
  if (secTime <= 9) {
    secTimevalue.value = '0' + secTime;
  }
  if (minTime > 9) {
    minTimevalue.value = minTime;
  }
  if (minTime <= 9) {
    minTimevalue.value = '0' + minTime;
  }
  if (houTime > 9) {
    houTimevalue.value = houTime;
  }
  if (houTime <= 9) {
    houTimevalue.value = '0' + houTime;
  }
  timerstart.style.display = 'none';
  if (selectIndex === 1) {
    timerstop.style.display = 'block';
  }

if (starting === 0) {
  // sound plays
  let alarmbeep = document.getElementById('alarmbeep');
  alarmbeep.load();
  alarmbeep.play();
  // alert shows up after 1 second
  let myTimeout = setTimeout(timeUp, 1000);
  function timeUp () {
    alert('Time is up!');
    tmrState = false;
  }
  clearInterval(timeTmr);
  timerstart.style.display = "block";
  timerstop.style.display = 'none';
}

}

function countTmr () {
  starting = Number(secTimevalue.value) * 1000 + Number(minTimevalue.value) * 60000 + Number(houTimevalue.value) * 3600000;
  clearInterval(timeTmr);
  if (starting > 0) {
  timeTmr = setInterval(startTmr, 10, starting);
  tmrState = true;
} else {
  alert('Please enter a valid time');
}
}

// stop timer
function stopTmr () {
  timerstart.style.display = 'block';
  timerstop.style.display = 'none';
  clearInterval(timeTmr);
  tmrState = false;
}

// reset timer
function resetTmr () {
  clearInterval(timeTmr);
  timerstart.style.display = 'block';
  timerstop.style.display = 'none';
  secTimevalue.value = '00';
  minTimevalue.value = '00';
  houTimevalue.value = '00';
  houTime = 0;
  minTime = 0;
  secTime = 0;
}

// get alarm Sound
let source = document.querySelector('#alarmbeep > source');
// when the window loads
window.addEventListener('load', function () {
  // get audio object from local storage
  let audioUrl = JSON.parse(localStorage.getItem('audioObj'));
  if (audioUrl !== null) {
    source.src = audioUrl[0];
    if (audioUrl[0] !== 'Alarm beep.mp3') {
      // if the audio type was wav
      source.type = 'audio/wav';
    } else {
      // if the audio was default
      source.type = 'audio/mpeg';
    }  }

})
