// validate email address

let email = document.getElementById('Email');
email.addEventListener('change', validEmail);

let emailAlert = document.getElementById('emailAlert');
let emailIndex = 0;

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

// send email

let submit = document.querySelector('.submit');
submit.addEventListener('click', send);



function send () {
  let subject = document.getElementById('name').value;
  let body = document.getElementById('Message').value;
  let phone = document.getElementById('phone').value;
  if (subject !== '' && body !== '' && email.value !== '') {
  let href = 'mailto:NIIY64308@scis-student.org?subject=' + subject + '&body=' + body + '%0D%0A%0D%0A From: '  + email.value + ',' + phone ;
  location.href=href;
}
else {
  alert('Please enter all the required information');
}
}

document.querySelector('.logo').addEventListener('click', function () {
  location.href = 'Personal-Project-Landing-Page.html';
});
