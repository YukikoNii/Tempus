let username = document.querySelector('.username');
let password = document.querySelector('.password');
password.addEventListener('keyup', addenter);
let loginBtn = document.querySelector('.loginBtn');
loginBtn.addEventListener('click', login);
let userInfo = JSON.parse(window.localStorage.getItem('loginInfo'));
let savedUs = userInfo.Username;
let savedPa = userInfo.Password;

function login() {
  if (username.value !== '' && password.value !== '') {
    if (username.value === savedUs && password.value === savedPa) {
    location.href = 'Personal-Project-Home.html';
  } else {
    alert('Your login information is incorrect.');
}
}
else {
    alert('Please enter all the required information');
  }
}

function addenter (event) {
  if (event.key === 'Enter') {
      login();
    }
  }
