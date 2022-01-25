// minute/second/centisecond count
var m = 0;
var s = 0;
var cs = 0;

var time;
//time display
var minute = document.getElementById('minutes');
var second = document.getElementById('seconds');
var centisecond = document.getElementById('centiseconds');

//start button
var startbutton = document.getElementById('start');
startbutton.addEventListener ("click", count);

//stop button
var stopbutton = document.getElementById('stop');
stopbutton.addEventListener("click",stoptimer);

// reset button
var stopbutton = document.getElementById('reset');
stopbutton.addEventListener("click",resettimer);


function starttimer () {
// increase centisecond;
  cs++;
// place zero when cs is a single digit
  if (cs <= 9) {
    centisecond.innerText = '0' + cs;
  }
  if (cs > 9 ) {
    centisecond.innerText = cs;
  }
// increase second whenever cs is 99
  if (cs === 99) {
    cs = -1;
    s++;
// place zero when s is a single digit
  if (s <= 9) {
    second.innerText = '0'+ s;
  }
  if (s > 9) {
    second.innerText = s;
  }
  }
// increase minute right before s becomes 60
  if (cs === 98 && s === 59) {
    s = -1;
    m++;
    if (m <= 9) {
      minute.innerText = '0'+ m;
    }
    if (m > 9) {
      minute.innerText = m;
    }
  }
}

// repeat every centisecond;
function count () {
  clearInterval(time);
  time = setInterval(starttimer, 10);
}

// stop the timer
function stoptimer () {
  clearInterval(time);
}

// reset the timer
function resettimer () {
  clearInterval(time);
  minute.innerText = '00';
  second.innerText = '00';
  centisecond.innerText = '00';
  s = 0;
  cs = 0;
  m = 0;
}
