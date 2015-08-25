define(function(require){
  var $ = require("jquery");
  var count1 = 0;
  var count2 = 0;

  return function(card1, card2, count){
    if(parseInt(card1.value) > parseInt(card2.value)){
      console.log("card1 wins", card1.value, card2.value);
      count1++;
      if(count>=51){
        if(count1>count2){
          console.log("player 1 wins");
          $("#player1").html("<h1>Player 1 Wins!!!</h1>");
          $("#player2").html("<h1>Player 2 loses :(</h1>");
        }
      }
    } else if(parseInt(card2.value)>parseInt(card1.value)){
      console.log("card2 wins", card1.value, card2.value);
      count2++;
      if(count>=51){
        if(count2>count1){
          console.log("player 2 wins");
          $("#player2").html("<h1>Player 2 Wins!!!</h1>");
          $("#player1").html("<h1>Player 1 Loses :(</h1>");
        }
      }
    } else{
      console.log("It's a draw");
    }


    $("#player1").append("<br><h3>P1 count: "+count1+"</h3>");
    $("#player2").append("<br><h3>P2 count: "+count2+"</h3>");



    console.log("turn count", count);
    console.log("count1", count1);
    console.log("count2", count2);
  };
});