
// modal
var modal = document.getElementById('todomodal');

// title
let titleinput = document.getElementById('titleinput');


// close button
var closebutton = document.getElementById('close');
closebutton.addEventListener('click', close);

function close () {
  modal.style.display = 'none';
}

// add button
var addbutton = document.getElementById('add');
addbutton.addEventListener('click', add);



function add () {
  modal.style.display = 'block';
  titleinput.style.border = null;
  // focus on the title
  titleinput.focus();
};

// close by clicking on the outside
window.addEventListener('click', closew);

function closew (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

// creating tags
var tag_container = document.querySelector('.tag-box');

// what you type
var input = document.querySelector('.tag-box input');

// array for saving the tags
let tags = [];
for (var i = 0; i < tags.length; i++) {
  $('body').append('<div id="' + tags[i] + '">' + tags[i] + '</div>');
}


function create_tag(label) {
  // create div
  let div = document.createElement('div');
  // class="tag"
  div.setAttribute('class', 'tag');
  // span inside the div
  let span = document.createElement('span');
  span.innerHTML = label;
  // close button
  let closebutton = document.createElement('span');
  closebutton.setAttribute('class', 'material-icons');
  closebutton.setAttribute('data-item', label);
  closebutton.innerHTML = 'close';

  div.appendChild(span);
  div.appendChild(closebutton);
  return div;

}

// reset the tags so they don't pile up
function reset () {
  document.querySelectorAll('.tag').forEach(function(tag) {
    tag.parentElement.removeChild(tag);
  })
}

// Create new tags
function add_tags() {

  reset();
  tags.slice().reverse().forEach(function(tag){
    let input = create_tag(tag);
    // use prepend instead of append so that it comes to the front
    tag_container.prepend(input);
  });
}

// add tag on enter
input.addEventListener('keyup', enter);


function enter(event) {
  // if Enter Key was pressed
  if (event.key === 'Enter') {
    if (input.value != '') {
    tags.push(input.value);
    // add the tag to an array 'tag';
    input.value = '';
    add_tags();
  }
  else {
    save();
  }
  }
}

document.addEventListener('click', remove);

function remove(event) {
  let element = event.target;
  // if span was clicked
  if (element.tagName === 'SPAN') {
    // get the value of the tag
    let value = element.getAttribute('data-item');
    // find the index of the tag from the tag array
    let index = tags.indexOf(value);
    // remove the tag from the array
    tags = [...tags.splice(0,index), ...tags.slice(index + 1)];
    // add new tags
    add_tags();
  }
}

// get tag-box input, event when on focus
document.querySelector('.tag-box input').addEventListener('focus', highlight);
// add event when out of focus
document.querySelector('.tag-box input').addEventListener('focusout', remhigh);
// box itself
let box = document.getElementById('tag-box');

// save button (add button at the bottom)
var savebutton = document.getElementById('save');
savebutton.addEventListener('click', save);

let lowIndex = 0;
let medIndex = 0;
let highIndex = 0;
let lowBtn = document.querySelector('#low');
let medBtn = document.querySelector('#medium');
let highBtn = document.querySelector('#high');
lowBtn.innerHTML = 'Low <span>' + lowIndex + '</span>';
medBtn.innerHTML = 'Medium <span>' + medIndex + '</span>';
highBtn.innerHTML = 'High <span>' + highIndex + '</span>';

let liMes = document.createElement('span');
liMes.innerHTML = 'There is no task at the moment.'
let list = document.querySelector('#list');



/*




SAVE FUNCTION BELOW





*/

function save () {
  let entryList = document.getElementsByClassName('entry');
  let idArray = [];
  let idIndex = 0;
  for (var i = 0; i < entryList.length; i++) {
    idArray.push(entryList[i].id);
  }
  for (var i = 0; i < idArray.length; i++) {
    if (idArray[i] === titleinput.value) {
      idIndex = 1;
    }
  }
  tags = [];
  if (idIndex === 0) {
  if (titleinput.value != '') {
  // create an entry
  let entry = document.createElement('div');
  // give it a class name
  entry.className = 'entry';
  entry.setAttribute('id', titleinput.value);


  // create label named container
  let container = document.createElement('label');
  container.className = 'container';
  entry.appendChild(container);

  //  create (default) checkbox, give a number to them
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';
  checkbox.addEventListener('change', complete);
  checkbox.setAttribute('data-items', titleinput.value);
  container.appendChild(checkbox);


  // create a custom checkbox
  let checkmark = document.createElement('span');
  checkmark.className = 'checkmark';
  container.insertBefore(checkmark,checkbox.nextSibling);

  // title
  let title = document.createElement('div');
  title.className = 'entrytitle';
  title.id = titleinput.value;
  title.innerText = titleinput.value;
  title.addEventListener('click', expand);
  entry.appendChild(title);

  // Description
  let desinput = document.getElementById('desinput').value;
  let description = document.createElement('div');
  description.className = 'entrydes';
  description.innerText = desinput;
  description.id = titleinput.value + '1';
  entry.insertBefore(description, titleinput.value.nextSibling);

  // date
  let dateinput = document.getElementById('date').value;
  let timeinput = document.getElementById('time').value;
  let date = document.createElement('div');
  date.className = 'entrydate due';
  date.id = titleinput.value + '2';
  date.innerText =  'Due by: ' + dateinput + ' ' + timeinput;
  if (dateinput !== '') {
    entry.append(date);
    date.style.display = 'none';
  }

  // priority

  var select = document.getElementById('prchoice');
  var selectvalue = select.options[select.selectedIndex].text;
  let priority = document.createElement('div');
  priority.id = titleinput.value + '3';
  entry.append(priority);
  if (selectvalue === 'Low') {
    entry.className += ' prLowE';
    priority.className = 'prlow';
    priority.innerHTML = '!';
  }
  if (selectvalue === 'Medium') {
    entry.className += ' prmedE';
    priority.className = 'prmed';
    priority.innerHTML = '!!';
  }
  if (selectvalue === 'High') {
    entry.className += ' prhighE';
    priority.className = 'prhigh';
    priority.innerHTML = '!!!';
  }

  if (entry.className === 'entry prLowE') {
    lowIndex += 1;
    lowBtn.innerHTML = 'Low <span>' + lowIndex + '</span>';
  }
  if (entry.className === 'entry prmedE') {
    medIndex += 1;
    medBtn.innerHTML = 'Medium <span>' + medIndex + '</span>';
  }
  if (entry.className === 'entry prhighE') {
    highIndex += 1;
    highBtn.innerHTML = 'High <span>' + highIndex + '</span>';
  }
  // add to DOM
  list.appendChild(entry);
  modal.style.display = 'none';

  // reset the input
  document.getElementById('titleinput').value = '';
  document.getElementById('desinput').value = '';


  window.localStorage.setItem('savedTodo' + entry.id, entry.outerHTML);

  // check if there is any to-do
  if ( list.contains(liMes) === true ) {
  list.removeChild(liMes);
}

} else {
  alert('Please enter a title.');
  titleinput.style = 'border:2px solid #C43D3D';
}

} else {
  alert('A task with the same name already exists');
  titleinput.style = 'border:2px solid #C43D3D';
}

}


/*



END OF SAVE FUNCTION



*/

titleinput.addEventListener('keyup', addenter);
prlabel.addEventListener('keyup', addenter);
time.addEventListener('keyup', addenter);
date.addEventListener('keyup', addenter);
var select = document.getElementById('prchoice');
select.addEventListener('keyup', addenter);


function addenter (event) {
  if (event.key === 'Enter') {
      save();
    }
  }

// remove on check
var checkbox = document.getElementsByClassName('checkbox');



function complete(event) {
  let chosenbox = event.target;
  let name = chosenbox.getAttribute('data-items');
  let todo = document.getElementById(name);
  if (todo.className === 'entry prLowE') {
    lowIndex -= 1;
    lowBtn.innerHTML = 'Low <span>' + lowIndex + '</span>';
  }
  if (todo.className === 'entry prmedE') {
    medIndex -= 1;
    medBtn.innerHTML = 'Medium <span>' + medIndex + '</span>';
  }
  if (todo.className === 'entry prhighE') {
    highIndex -= 1;
    highBtn.innerHTML = 'High <span>' + highIndex + '</span>';
  }
  if (chosenbox.checked = true) {
    if (list.childElementCount === 1) {
      setTimeout(function() {
        list.appendChild(liMes);
      }, 100);
        }
    window.localStorage.removeItem('savedTodo' + todo.id);
    todo.style.opacity = '0';
    setTimeout(function() {
      todo.remove();
    }, 50);
  }
  }

// click on title to expand
var expand2 = 0;
function expand(event) {
  let chosentitle = event.target;
  let taskname = chosentitle.getAttribute('id');
  let todo = document.getElementById(taskname);
  let description = document.getElementById(taskname + '1');
  let date = document.getElementById(taskname + '2');
  let dateinput = document.getElementById('date').value;
  if (expand2 === 0) {
  todo.style.height = '100px';
  todo.style.display = 'grid';
  todo.style.gridTemplateRows = '1fr 1fr 1fr';
  todo.style.marginTop = '0em';
  chosentitle.style.gridRows = '1';
  description.style.display = 'block';
  if (dateinput !== '' || arguments[1] === 0) {
  date.style.display = 'block';
}
expand2 = 1;
}
else {
  todo.style.height = '30px';
  todo.style.gridTemplateRows = 'none';
  description.style.display = 'none';
  if (dateinput !== '' || arguments[1] === 0) {
  date.style.display = 'none';
}
  expand2 = 0;
}
}




// change the border to green on focus
function highlight() {
  box.style = 'border:2px solid #026670';
}

// change the border to grey when out of focus
function remhigh () {
  box.style = 'border:1px solid #525252';
}


window.addEventListener('click', prExpand);
// priority list arrow

function prExpand (event) {
  let entries = document.querySelectorAll('.entry');
  let prArrow = document.getElementById('prArrow');
  let prOp = document.querySelectorAll('.pr');
  let high = document.getElementById('high');
  let prLi = document.getElementById('prioritylist');
  if (event.target === prLi || event.target === prArrow) {
    if (high.style.display === 'none') {
      for (var i = 0; i < prOp.length; i++) {
        prOp[i].style.display = 'block';
      }
        for (var i = 0; i < entries.length; i++) {
          entries[i].style.display = 'grid';
        }
        lowBtn.style.backgroundColor = '#D3FFE0';
        medBtn.style.backgroundColor = '#FFFDD3';
        highBtn.style.backgroundColor = '#FFD3D3';
        prArrow.innerHTML = '&#9650;';
  }  else  {
    for (var i = 0; i < prOp.length; i++) {
      prOp[i].style.display = 'none';

    }
      prArrow.innerHTML = '&#9660;';
  }
}
}

window.addEventListener('click', tagExpand);

let tagIndex = 0;
function tagExpand (event) {
  let tagArrow = document.getElementById('tagArrow');
  let tagHr = document.getElementById('tagHr');
  let tagSide = document.querySelectorAll('.tagElement');
  if (event.target === tagHr) {
  if (tagIndex === 0 && tagSide.length !== 0) {
    for (var i = 0; i < tagSide.length; i++) {
      tagSide[i].style.display = 'none';
      tagArrow.innerHTML = '&#9650;';
      tagIndex = 1;
    }
  }  else {
    for (var i = 0; i < tagSide.length; i++) {
    tagSide[i].style.display = 'block';
    tagArrow.innerHTML = '&#9660;';
    tagIndex = 0;
  }
}
}
}



window.addEventListener('click', prSelect);



function prSelect (event) {

let entries = document.querySelectorAll('.entry');

  if (event.target === lowBtn) {
    lowIndex = 0;
    lowBtn.style.backgroundColor = '#B0E8C0';
    medBtn.style.backgroundColor = '#FFFDD3';
    highBtn.style.backgroundColor = '#FFD3D3';

    for (var i = 0; i < entries.length; i++) {
      if (entries[i].className === 'entry prLowE') {
        entries[i].style.display = 'grid';
        lowIndex += 1;
        lowBtn.innerHTML = 'Low <span>' + lowIndex + '</span>';
      } else {
        entries[i].style.display = 'none';
        lowBtn.innerHTML = 'Low <span>' + lowIndex + '</span>';
      }
    }
  }

  if (event.target === medBtn) {
    medIndex = 0;
    lowBtn.style.backgroundColor = '#D3FFE0';
    medBtn.style.backgroundColor = '#EEEAA6';
    highBtn.style.backgroundColor = '#FFD3D3';

    for (var i = 0; i < entries.length; i++) {
      if (entries[i].className === 'entry prmedE') {
        entries[i].style.display = 'grid';
        medIndex += 1;
        medBtn.innerHTML = 'Medium <span>' + medIndex + '</span>';
      } else {
        entries[i].style.display = 'none';
        medBtn.innerHTML = 'Medium <span>' + medIndex + '</span>';
      }
    }
  }

  if (event.target === highBtn) {
    highIndex = 0;
    lowBtn.style.backgroundColor = '#D3FFE0';
    medBtn.style.backgroundColor = '#FFFDD3';
    highBtn.style.backgroundColor = '#E4A8A8';
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].className === 'entry prhighE') {
        entries[i].style.display = 'grid';
        highIndex += 1;
        highBtn.innerHTML = 'High <span>' + highIndex + '</span>';
      } else {
        entries[i].style.display = 'none';
        highBtn.innerHTML = 'High <span>' + highIndex + '</span>';
      }
    }
  }

}

// Change background
document.querySelector('.todofunction').style.backgroundImage = window.localStorage.getItem('bg');


// get entries from localStorage

window.addEventListener('load', getEntries);


  /*
  for (var i = 0; i < numArray.length; i++) {
    window.localStorage.getItem('savedTodo' + i);
    list.innerHTML += window.localStorage.getItem('savedTodo' + i);
  }
}

*/

function getEntries () {
  for (var i = 0; i < window.localStorage.length; i++) {
    let key = window.localStorage.key(i);
    if (key.slice(0,2) === 'sa') {
      let entry = window.localStorage.getItem(key);
      list.innerHTML += entry;
    }
    }
  // add event listener to checkbox for complete
  let checkbox = document.querySelectorAll('.checkbox');
  for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('change', complete);
   }

   let entry = document.querySelectorAll('#list > div');

// priority counting
for (var i = 0; i < entry.length; i++) {
  if (entry[i].className === 'entry prLowE') {
    lowIndex += 1;
    lowBtn.innerHTML = 'Low <span>' + lowIndex + '</span>';
  }
  if (entry[i].className === 'entry prmedE') {
    medIndex += 1;
    medBtn.innerHTML = 'Medium <span>' + medIndex + '</span>';
  }
  if (entry[i].className === 'entry prhighE') {
    highIndex += 1;
    highBtn.innerHTML = 'High <span>' + highIndex + '</span>';
  }
}
// expanding
let title = document.querySelectorAll('.entrytitle');
for (var i = 0; i < title.length; i++) {
  title[i].addEventListener('click', wrapperFunction);
}
function wrapperFunction (event) {
  expand(event, 0);
}

if (list.innerHTML === '') {
      list.appendChild(liMes);
    }
}

// get due dates
let getDate =  document.getElementsByClassName('entrydate');
let getDateArr = [];
let entryIdArr = [];

window.addEventListener('beforeunload', function () {
for (var i = 0; i < getDate.length; i++) {
  getDateArr.push(getDate[i].innerHTML.slice(8,18));
  let id = getDate[i].id;
  entryIdArr.push(getDate[i].id.substr(0, id.length - 1));
}

});
window.addEventListener('beforeunload', function () {
  window.localStorage.setItem('getDateArr', JSON.stringify(getDateArr));
  window.localStorage.setItem('entryIdArr', JSON.stringify(entryIdArr));
})

//reminders
let index = 0;
let interval2 = setInterval(deadline, 1000);

function deadline () {
  let right2 = document.querySelector('#right2');
  if (right2.innerHTML !== '') {
    right2.innerHTML = '';
  }

let due = document.querySelectorAll('.due');
for (var i = 0; i < due.length; i++) {
  let text = due[i].innerText;
  let remName = due[i].id;

let remDate = new Date(text.substr(8));
let nowDate = new Date();

if (nowDate >= remDate) {


  function showNotification () {
    const notification = new Notification('To-Do Reminder:', {
      body: remName.substr(0,remName.length - 1) + " is due today.",
      icon:'favicon.png'
    })

  }
  if (Notification.permission === 'granted') {
    showNotification();
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        showNotification();
      }
    });
  }

  Notification.onclose = function () {
    console.log('hello');
  }


  let alertM = document.createElement('span');
  alertM.className = 'alertM';
  let dateObj = new Date();
  let dateStr = dateObj.toLocaleTimeString();
  alertM.innerText = remName.substr(0,remName.length - 1) + ' was due on: ' + remDate.toString().slice(0,15);
  right2.appendChild(alertM);
  var alertBtn = document.createElement('span');
  alertBtn.className = 'alertClose';
  alertBtn.innerHTML = '&times';
  alertM.appendChild(alertBtn);
}
}
}


window.addEventListener('click', function (event) {
  let target = event.target;
  if (target.className === 'alertClose') {
    entryName = target.parentElement.innerHTML.split(' ')[0];
    let entry = document.getElementById(entryName);
    if (entry !== null) {
    let date = entry.childNodes[3];
    date.classList.remove('due');
    localStorage.setItem('savedTodo' + entry.id, entry.outerHTML);
  }
  }
})
