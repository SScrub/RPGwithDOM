function player() {
  this.name = '';
  this.race = '';
  this.stats = {Muscles: 9, Brain: 9, Robustness: 9, Offence: 9, Defence: 9};
  this.maxHealth = Math.floor((this.stats.Robustness) * 2);
}

var activePlayer = new player();

if (activePlayer.name == '') {
  for (i = 0; i < mainPanels.length; i++) {
    mainPanels[i].style.display = 'none'}
    tempMain.style.display = 'block';
    newPlayer();
}

function Monster() {
}