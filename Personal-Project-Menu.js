
/*
Icon Bar
*/

let menu = document.getElementsByClassName('menu')[0];
menu.addEventListener('click', collapse);

let shrink = 0;

let menutexts = document.querySelectorAll('.icon');

let gridcolumn = document.querySelector('.grid');

// icon bar change the width
function collapse () {
  if (shrink === 0) {
  let iconbar = document.getElementById('iconbar');
  iconbar.style.width = '34%';
  iconbar.style.minWidth = '5em';
  for (let i=0; i < menutexts.length; i++) {
    menutexts[i].style.display = 'none';
    gridcolumn.style.gridTemplateColumns = '0.29fr 4fr 1fr';
  }
  shrink = 1;
} else {
  document.getElementById('iconbar').style.width = '100%';
  iconbar.style.minWidth = '15em';
  for (let i=0; i < menutexts.length; i++) {
    menutexts[i].style.display = 'block';
    gridcolumn.style.gridTemplateColumns = '1fr 4fr 1fr';
  }
  shrink = 0;
}
}

function mediaQuery (scSize) {
  if (scSize.matches) {
    shrink = 0;
    collapse ();
  } else {
    shrink = 1;
    collapse ();
  }
}

var scSize = window.matchMedia('(max-width: 1000px)');

mediaQuery(scSize);
scSize.addListener(mediaQuery);


/*
User info
*/

window.addEventListener('click', dropdown);
let userName = document.getElementById('username');
let userIcon = document.getElementById('usericon');
let dropMenu = document.querySelector('.dropdown');
// user menu drop down
function dropdown (event) {
  let arrow = document.getElementById('arrow');
  if ((event.target === userIcon || event.target === userName || event.target === arrow)) {
    if (dropMenu.style.display === 'block') {
        dropMenu.style.display = 'none';
        arrow.innerHTML = '&#9660;';
  }  else  {
      dropMenu.style.display = 'block';
      arrow.innerHTML = '&#9650;';
  }
}
}
// setting username
let newName = localStorage.getItem('Username');

window.addEventListener('load', function () {
  userName.innerHTML = newName + '&nbsp;<span id="arrow">&#9660;</span>';
})
// logout

document.querySelector('.logout').addEventListener('click', logout);

function logout() {
    location.replace('Personal-Project-Landing-Page.html');
}

document.querySelector('.settings').addEventListener('click', setting);

function setting() {
  location.replace('Personal-Project-Settings.html');
}


// logo link to homepage

document.querySelector('.logo').addEventListener('click', function () {
  location.href = 'Personal-Project-Landing-Page.html';
});
