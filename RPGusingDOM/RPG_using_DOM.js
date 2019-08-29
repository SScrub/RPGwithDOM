//current task race buttons for creation page
var navtoggle = document.getElementById('navToggle').getElementsByTagName('p')[0];
var navtoggle2 = document.getElementById('rightNavToggle').getElementsByTagName('P')[0];
var nav = document.getElementById('mainNav');
var nav2 = document.getElementById('rightNav');
var mainPanels = document.querySelectorAll('main');
var mainToggles = document.querySelectorAll('#midNav p');
var tempMain = document.getElementById('tempMain');
var nameInput = document.createElement('input');
var races = ['Human', 'Ogre', 'Troll', 'Goblin', 'Dwarf', 'Elf'];

navtoggle.addEventListener('click', hideNav);
navtoggle2.addEventListener('click', hideRightNav);

function hideNav() {
   nav.style.width = '0px';
   nav.style.borderRight = 'none';
   navtoggle.innerText = 'Show';
   navtoggle.removeEventListener('click', hideNav);
   navtoggle.addEventListener('click', showNav);
   tempMain.style.marginLeft = '25px';
   for (i = 0; i < mainPanels.length; i++) {
      mainPanels[i].style.marginLeft = '25px';
   }
}
function showNav() {
   nav.style.width = '135px';
   nav.style.borderRight = '2px solid gray';
   navtoggle.innerText = 'Hide';
   navtoggle.removeEventListener('click', showNav);
   navtoggle.addEventListener('click', hideNav);
   tempMain.style.marginLeft = '155px';
   for (i = 0; i < mainPanels.length; i++) {
      mainPanels[i].style.marginLeft = '155px';
   }
}
function hideRightNav() {
   nav2.style.width = '0px';
   nav2.style.borderLeft = 'none';
   navtoggle2.innerText = 'Show';
   navtoggle2.removeEventListener('click', hideRightNav);
   navtoggle2.addEventListener('click', showRightNav);
   tempMain.style.marginRight = '25px';
   for (i = 0; i < mainPanels.length; i++) {
      mainPanels[i].style.marginRight = '25px';
   }
}
function showRightNav() {
   nav2.style.width = '135px';
   nav2.style.borderLeft = '2px solid gray';
   navtoggle2.innerText = 'Hide';
   navtoggle2.removeEventListener('click', showRightNav);
   navtoggle2.addEventListener('click', hideRightNav);
   tempMain.style.marginRight = '155px';
   for (i = 0; i < mainPanels.length; i++) {
      mainPanels[i].style.marginRight = '155px';
   }
}
function newPlayer() {
   nameInput.placeholder = 'Choose a name';
   namePlug.appendChild(nameInput);
   for (i = 0; i < races.length; i++) {
      var raceInput = document.createElement('span');
      racePlug.appendChild(raceInput);
      var raceSelect = document.createElement('input');
      raceSelect.type = 'radio';
      raceSelect.name = 'Race';
      raceSelect.value = races[i];
      raceInput.className = 'raceButton';
      raceInput.appendChild(raceSelect);
      raceInput.innerHTML += races[i];
   }
}