var budgetController = (function() {

  var x = 23;
  var add = function(a) {  //cannot be used from outside 
    return x + a;
  }

  return { // method in return is the only way to access to public
    publicTest: function(b) {
      return add(b);
    }
  }

})();


var UIController = (function() {

  // Some Code

})();


var controller = (function(budgetCtrl, UICtrl) {

  var z = budgetCtrl.publicTest(5);

  return {
    anotherPublic: function() {
      console.log(z);
    }
  }
  
})(budgetController, UIController);


