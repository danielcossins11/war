define(function(require){
  var $ = require("jquery");
  var Q = require("q");
  var promise = require("getAPI");
  var getCard = require("getCard");
  var checkWin = require("checkWin");

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
    if(count<=52){
////////////draw card1//////////
      var draw1 = promise("http://deckofcardsapi.com/api/deck/"+deck1_id+"/draw/?count=1");
      draw1.then(function(data){
        // $("#player1").html("<img src='"+data.cards[0].image+"'><br><h3>P1 count: "+count1+"</h3>");
        $("#player1").html("<img src='"+data.cards[0].image+"'>");
        card1 = getCard(data);

///////////draw card2///////////////
        var draw2 = promise("http://deckofcardsapi.com/api/deck/"+deck2_id+"/draw/?count=1");
        draw2.then(function(data2){
          // $("#player2").html("<img src='"+data2.cards[0].image+"'><br><h3>P2 count: "+count2+"</h3>");
          $("#player2").html("<img src='"+data2.cards[0].image+"'>");
          card2 = getCard(data2);

          ////////CHECK WHICH CARD IS HIGHER
          checkWin(card1, card2);
          
        });
      });
    }
  });
});