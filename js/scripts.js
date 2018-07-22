
function rollDice() {
  var die1 = document.getElementById("die1");
  var status = document.getElementById("status");
  var d1 = Math.floor(Math.random() * 6) + 1;
  var diceTotal = d1 ;
  die1.innerHTML = d1;
  status.innerHTML ="You rolled "+ d1 +".";
  if(d1 == 6) {
    status.innerHTML += " DOUBLES! You get free turn! !";
  }
}


function throwDice() {
  var play2 = document.getElementById("play2");
  var state = document.getElementById("state");
  var p2 =Math.floor(Math.random() * 6) + 1;
  var diceTotal = p2;
  play2.innerHTML = p2;
  state.innerHTML ="You rolled "+ diceTotal +".";
  if(p1 == 3) {
    state.innerHTML += " You got it";
  }
}

$(document).ready(function(){
  $("button#start").click(function(event){
   die1 = new d1;
   play2 = new p2;
  })
})
