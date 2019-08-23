
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

          // Geolocalization //

 var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}