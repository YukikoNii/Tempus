let buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', redirect);
}

function redirect () {
  setTimeout(function() {
    location.href = 'Personal-Project-Signup.html';
  })
}

document.querySelector('.logo').addEventListener('click', function () {
  location.href = 'Personal-Project-Landing-Page.html';
});
