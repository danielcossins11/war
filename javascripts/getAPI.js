define(function(require){
  var $ = require("jquery");
  var Q = require("q");
  
  return function(URL){
    var deferred = Q.defer();
    
    $.ajax({
      // url: "http://deckofcardsapi.com/api/deck/new/",
      // url: "http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
      url: URL,
      method: "GET"

      }).done(function(data) {
        console.log(data);
        deferred.resolve(data);
    });
    return deferred.promise;
    
    };
  });