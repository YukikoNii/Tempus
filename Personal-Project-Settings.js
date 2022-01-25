/*
get the file name
*/

document.querySelector('.proUpload').addEventListener('change', function() {
  let fileValue = this.value;
  let fileName = fileValue.slice(12);
  let profilePic = document.querySelector('.profilePic');
  let profilePic2 = document.querySelector('#usericon');
  let profilePic3 = document.querySelector('.menuPic');
  profilePic.src = fileName;
  profilePic2.src = fileName;
  profilePic3.src = fileName;
});

/*
enable the inputs
*/

// text inputs
let accTexts = document.querySelectorAll('.accTexts');
// buttons
let accBtns = document.querySelectorAll('.accBtns');
let cancelBtns = document.querySelectorAll('.cancel');
let saveBtns = document.querySelectorAll('.save');
// username at header
// delete button
document.querySelector('.delete').addEventListener('click', deleteCon);



for (var i = 0; i < accBtns.length; i++) {
  accBtns[i].addEventListener('click', enable);
  cancelBtns[i].addEventListener('click', cancel);
  saveBtns[i].addEventListener('click', save);
}


function enable () {
  let aIndex = Array.prototype.indexOf.call(accBtns, this);
  accTexts[aIndex].disabled = false;
  cancelBtns[aIndex].style.display = 'block';
  saveBtns[aIndex].style.display = 'block';
  this.style.display = 'none';
}

function cancel () {
  let cIndex = Array.prototype.indexOf.call(cancelBtns, this);
  this.style.display = 'none';
  saveBtns[cIndex].style.display = 'none';
  accBtns[cIndex].style.display = 'block';
  accTexts[cIndex].disabled = true;
}

function save() {
  let sIndex = Array.prototype.indexOf.call(saveBtns, this);
  this.style.display = 'none';
  cancelBtns[sIndex].style.display = 'none';
  accBtns[sIndex].style.display = 'block';
  accTexts[sIndex].disabled = true;
  window.localStorage.setItem(accTexts[sIndex].name, accTexts[sIndex].value);
  userName.innerHTML = accTexts[0].value + '&nbsp;<span id="arrow">&#9660;</span>';
}

// delete account
function deleteAcc () {
  window.localStorage.clear();
  location.replace('Personal-Project-Landing-Page.html');
}

function deleteCon () {
  delModal.style.display = 'block';
}

let delModal = document.querySelector('.delModal');
document.querySelector('.delDelete').addEventListener('click', deleteAcc);

document.querySelector('.delCancel').addEventListener('click', function () {
    delModal.style.display = 'none';
  });


window.addEventListener('load', getInfo);
// setting the default values of the inputs
function getInfo () {
  let loginInfo = JSON.parse(window.localStorage.getItem('loginInfo'));
  accTexts[0].value = loginInfo[0].Username;
  accTexts[1].value = loginInfo[0].Email;
  accTexts[2].value = loginInfo[0].Password;
}
