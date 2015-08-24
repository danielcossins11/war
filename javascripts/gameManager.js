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

  for(var i=0; i<cardArray.length; i++){
    if(cardArray.value==="JACK"){
      cardArray.value = "11";
    } else if(cardArray.value==="QUEEN"){
      cardArray.value = "12";
    } else if(cardArray.value==="KING"){
      cardArray.value = "13";
    } else if(cardArray.value==="ACE"){
      cardArray.value = "14";
    }  
  }
  

  $("#draw").on("click", function(){
    console.log(cardArray);
    for(var i=0; i<52; i++){
      var num;
      if(i%2===0){
      num = Math.floor(Math.random()*(cardArray.length));
      p1Array[i] = cardArray[num];
      cardArray.splice(num, 1);
      } else{
        num = Math.floor(Math.random()*(cardArray.length));
        p2Array[i] = cardArray[num];
        cardArray.splice(num, 1);
      }
    }
    console.log(cardArray, p1Array, p2Array);








    while(p1Array!==null && p2Array!==null){
      if(p1Array.length>p2Array.length){
        randNum = Math.floor(Math.random()*(p2Array.length));
      }
      else{
        randNum = Math.floor(Math.random()*(p1Array.length));
      }
      if(p1Array[randNum].value>p2Array[randNum].value){
        p1Array.push(p2Array[randNum]);
        p2Array.splice(randNum, 1);
      } else if(p1Array[randNum].value<p2Array[randNum].value){
        p2Array.push(p1Array[randNum]);
        p1Array.splice(randNum, 1);
      }
    }
    console.log("p1", p1Array);
    console.log("p2", p2Array);
  });
});