// Click to save in array
let submit = document.querySelector('.submit');
submit.addEventListener('click', save);



let email = document.getElementById('Email');
email.addEventListener('change', validEmail);
let conPassword = document.getElementById('conPassword');
conPassword.addEventListener('change', validPass);
conPassword.addEventListener('keyup', addenter);
let password = document.getElementById('Password');
let username = document.getElementById('Username');

function addenter (event) {
  if (event.key === 'Enter') {
      save();
    }
  }

let loginInfo;
window.addEventListener('load', function () {
   loginInfo = localStorage.getItem('loginInfo');
})

function save () {

  if (loginInfo === null) {
  if (password.value !== '' && conPassword.value !== '' && username.value !== '' && email.value !== '' && emailIndex === 1 && passIndex === 1 ) {
  // create an object that saves userinfo
  let userInfo = {
  'Username': username.value,
  'Email': email.value,
  'Password': password.value
  }

  // save on local storage
  localStorage.setItem('loginInfo', JSON.stringify(userInfo));
  localStorage.setItem('Username', username.value);
  // redirect
  setTimeout(function(){
    location.href = 'Personal-Project-Home.html';
  },100)

} else {
     alert('Invalid');
}
} else {
  alert('You already have an account');
}
}


let emailAlert = document.getElementById('emailAlert');
let emailIndex = 0;

// validate email address
function validEmail () {
  let expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(expression)) {
    emailAlert.style.display = 'none';
    emailIndex = 1;

  } else {
    emailAlert.style.display = 'block';
    emailIndex = 0;
}
}

let passAlert = document.getElementById('passAlert');
let passIndex = 0;

function validPass () {
  if (password.value === conPassword.value) {
    passAlert.style.display = 'none';
    passIndex = 1;

  } else {
    passAlert.style.display = 'block';
    passIndex = 0;
}
}

document.querySelector('.logo').addEventListener('click', function () {
  location.href = 'Personal-Project-Landing-Page.html';
});
