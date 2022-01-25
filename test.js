var secondcount = document.getElementById('seconds').innerText;
secondcount = 0;
function secondincrease () {
  secondcount += 1;
  console.log(secondcount);
}

function test () {
  var myvar2 = setInterval(secondincrease, 1000);
}

test();
