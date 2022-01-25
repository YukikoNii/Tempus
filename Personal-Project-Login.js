let username = document.querySelector('.username');
let password = document.querySelector('.password');
let loginBtn = document.querySelector('.loginBtn');
loginBtn.addEventListener('click', login);
let userInfo = JSON.parse(window.localStorage.getItem('loginInfo'))[0];
let savedUs = userInfo.Username;
let savedPa = userInfo.Password;

function login() {
  if (username.value !== '' && password.value !== '') {
    if (username.value === savedUs && password.value === savedPa) {
    location.href = 'Personal-Project-Home.html';
  } else {
    alert('Your login information is wrong.');
}
}
else {
    alert('Please enter all the required information');
  }
}
