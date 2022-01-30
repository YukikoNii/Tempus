// get due dates
var getDate =  document.getElementsByClassName('entrydate');
var getDateArr = [];

window.addEventListener('click', function () {
for (var i = 0; i < getDate.length; i++) {
  getDateArr.push(getDate[i].innerHTML.slice(8));
}});
