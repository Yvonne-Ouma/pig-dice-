// BUSINESS LOGIC
function rollDice() {
  var roll1 = document.getElementById("roll1");
  var where = document.getElementById("where");
  var r1 = Math.floor(Math.random() * 6) + 1;
  var diceTotal = r1 ;
  roll1.innerHTML = r1;
  where.innerHTML ="You rolled "+ r1 +".";
  if(d1 == 6) {
    where.innerHTML += " DOUBLES! You get free turn! !";
  }
}


function throwDice() {
  var play2 = document.getElementById("play2");
  var state = document.getElementById("state");
  var p2 =Math.floor(Math.random() * 6) + 1;
  var diceTotal = p2;
  play2.innerHTML = p2;
  state.innerHTML ="You rolled "+ diceTotal +".";
  if(p2 == 3) {
    state.innerHTML += " Wow! You got it! !";
  }
}
// USER INTERFACE LOGIC
$(document).ready(function(){
  $("button#start").click(function(event){
   roll1 = new d1 ;
   play2 = new p2 ;
  })
})
