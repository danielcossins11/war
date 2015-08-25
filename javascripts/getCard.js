define(function(){
  return function(data){
    var card = {};
    console.log(data);
    card = {
      value: data.cards[0].value,
      suit: data.cards[0].suit
    };

    if(card.value==="JACK"){
      card.value = "11";
    } else if(card.value==="QUEEN"){
      card.value = "12";
    } else if(card.value==="KING"){
      card.value = "13";
    } else if(card.value==="ACE"){
      card.value = "14";
    }

    return card;
  };
});