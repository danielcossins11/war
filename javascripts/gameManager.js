define(function(require){
  var $ = require("jquery");
  var Q = require("q");
  var promise = require("getAPI");

  var cardArray = [];
  var p1Array = [];
  var p2Array = [];
  var randNum;

  var deck1 = promise("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
  deck1.then(function(data){
    var draw = promise("http://deckofcardsapi.com/api/deck/"+data.deck_id+"/draw/?count=52");
    draw.then(function(data){
      cardArray = data.cards;
    });
  });

  

  $("#draw").on("click", function(){
    console.log(cardArray);

    for(var j=0; j<cardArray.length; j++){
      if(cardArray[j].value==="JACK"){
        cardArray[j].value = "11";
      } else if(cardArray[j].value==="QUEEN"){
        cardArray[j].value = "12";
      } else if(cardArray[j].value==="KING"){
        cardArray[j].value = "13";
      } else if(cardArray[j].value==="ACE"){
        cardArray[j].value = "14";
      }
    }

    for(var i=0; i<52; i++){
      var num;
      if(i%2===0){
        num = Math.floor(Math.random()*(cardArray.length));
        p1Array[p1Array.length] = cardArray[num];
        cardArray.splice(num, 1);
      } else{
        num = Math.floor(Math.random()*(cardArray.length));
        p2Array[p2Array.length] = cardArray[num];
        cardArray.splice(num, 1);
      }
    }
    console.log(cardArray, p1Array, p2Array);
    console.log(p1Array[0].value);








    while(p1Array!==null && p2Array!==null){
      var length;
      if(p1Array.length>=p2Array.length){
        length = p2Array.length;
      }
      else{
        length = p1Array.length;
      }
      for(var k=0; k<length; k++){
        if(p1Array[k].value>p2Array[k].value){
          p1Array.push(p2Array[k]);
          p2Array.splice(k, 1);
        } else if(p2Array[k].value>p1Array[k].value){
          p2Array.push(p1Array[k]);
          p1Array.splice(k, 1);
        }
      }
    }
    console.log("p1", p1Array);
    console.log("p2", p2Array);
  });
});