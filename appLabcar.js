
// Variables  buttons//
const buttonTravel = document.getElementById('button-nav-travel');
const buttonDrive = document.getElementById('button-nav-drive');
const buttonLogin = document.getElementById('button-nav-login');
const buttonSignup = document.getElementById('btn-signup');

// Variables to show sections //
const sectionHero = document.getElementById('section-hero');
const sectionInformation = document.getElementById('section-info');
const sectionDrive = document.getElementById('section-driver');
const sectionRate = document.getElementById('section-rate');

// Get the modal LOGIN //
const modalLogin = document.getElementById('my-modal-login');

// Get the button that opens the modal
//var buttonLogin = document.getElementById("button-nav-login");//

// Get the <span> element that closes the modal
const spanLogin = document.getElementsByClassName('close-login')[0];

// When the user clicks the button, open the modal 
buttonLogin.onclick = function() {
  modalLogin.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
spanLogin.onclick = function() {
  modalLogin.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalLogin) {
    modalLogin.style.display = 'none';
  }
}







//functions that go to sections//
buttonNavRate.addEventListener('click', () => {
  sectionRate.classList.remove('hide');
  sectionHero.classList.add('hide');
  sectionInformation.classList.add('hide');
  sectionDrive.classList.add('hide');

});

buttonNavDrive.addEventListener('click', () => {
   sectionDrive.classList.remove('hide');
   sectionHero.classList.add('hide');
   sectionInformation.classList.add('hide');
   sectionRate.classList.add('hide');

 });

