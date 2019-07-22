
//Variables de botones//
const buttonTravel = document.getElementById('button-nav-travel');
const buttonDrive = document.getElementById('button-nav-drive');
const buttonLogin = document.getElementById('button-nav-login');

// Variables para mostrar secciones //
const sectionHero = document.getElementById('section-hero');
const sectionInformation = document.getElementById('section-info');
const sectionDrive = document.getElementById('section-driver');
const sectionRate = document.getElementById('section-rate');

//Crear funciones que manipulen las secciones//
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

buttonNavLogin.addEventListener('click', () => {
  sectionDrive.classList.add('hide');
  sectionHero.classList.add('hide');
  sectionInformation.classList.add('hide');
  sectionRate.classList.add('hide');

});