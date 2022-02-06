let username = document.querySelector('.username');
let password = document.querySelector('.password');
password.addEventListener('keyup', addenter);
let loginBtn = document.querySelector('.loginBtn');
loginBtn.addEventListener('click', login);
let userInfo = JSON.parse(window.localStorage.getItem('loginInfo'));
let savedUs = userInfo.Username;
let savedPa = userInfo.Password;

function login() {
  // is the form filled in?
  if (username.value !== '' && password.value !== '') {
    // Do they match the saved info?
    if (username.value === savedUs && password.value === savedPa) {
      // redirect
    location.href = 'Personal-Project-Home.html';
  } else {
    alert('Your login information is incorrect.');
}
}
else {
    alert('Please enter all the required information');
  }
}

// press enter to login
function addenter (event) {
  if (event.key === 'Enter') {
      login();
    }
  }
