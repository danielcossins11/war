define(function(require){
  var $ = require("jquery");
  var Q = require("q");
  var promise = require("getAPI");

  var count = 0;
  var count1 = 0;
  var count2 = 0;
  var deck1_id, deck2_id, deck1_remaining, deck2_remaining;
  var card1 = {};
  var card2 = {};

  var deck1 = promise("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
  deck1.then(function(data){
    console.log(data);
    deck1_id = data.deck_id;
    deck1_remaining = data.remaining;
    console.log("ID1",deck1_id);
  });

  var deck2 = promise("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
  deck2.then(function(data2){
    console.log(data2);
    deck2_id = data2.deck_id;
    deck2_remaining = data2.remaining;
    console.log("ID2", deck2_id);
  });

  $("#draw").on("click", function(){
    if(count<52){
      var draw1 = promise("http://deckofcardsapi.com/api/deck/"+deck1_id+"/draw/?count=1");
      draw1.then(function(data){
        $("#player1").html("<img src='"+data.cards[0].image+"'>");






        console.log(data);
        card1 = {
          value: data.cards[0].value,
          suit: data.cards[0].suit
        };
        console.log("card2", card1);

        if(card1.value==="JACK"){
          card1.value = "11";
        } else if(card1.value==="QUEEN"){
          card1.value = "12";
        } else if(card1.value==="KING"){
          card1.value = "13";
        } else if(card1.value==="ACE"){
          card1.value = "14";
        }
      });

      var draw2 = promise("http://deckofcardsapi.com/api/deck/"+deck2_id+"/draw/?count=1");
      draw2.then(function(data){
        $("#player2").html("<img src='"+data.cards[0].image+"'>");









        console.log(data);
        card2 = {
          value: data.cards[0].value,
          suit: data.cards[0].suit
        };
        console.log("card2", card2);

        if(card2.value==="JACK"){
          card2.value = "11";
        } else if(card2.value==="QUEEN"){
          card2.value = "12";
        } else if(card2.value==="KING"){
          card2.value = "13";
        } else if(card2.value==="ACE"){
          card2.value = "14";
        }
      });

      ////////CHECK WHICH CARD IS HIGHER

      if(card1.value>card2.value){
        count1++;
        if(count>=51){
          if(count1>count2){
            console.log("player 1 wins");
          }
        }
      } else if(card2.value>card1.value){
        count2++;
        if(count>=51){
          if(count2>count1){
            console.log("player 2 wins");
          }
        }
      } else{
        console.log("It's a draw");
      }
      count++;
      console.log("turn count", count);
      console.log("count1", count1);
      console.log("count2", count2);
    }
    

  });
});