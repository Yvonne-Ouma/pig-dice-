// BUSINESS LOGIC
var rolldice = function() {
  return Math.floor(6 * Math.random()) +1;
}
function Player(roll, temporaryScore, totalScore, playerName) {
  this.roll = 0;
  this.temporaryScore = 0;
  this.totalScore = 0;
  this.playerName = playerName;
}
var Player = new player1();
var player = new player2();

alert(player.rolldice());
alert()

USER LOGIC
$(document).ready(function(event){
  $("button#start").click(function(event){
    player1 = new Player(true);
    player2 = new Player(false);
  });

  $("button")
});
