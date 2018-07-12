// BUDGET CONTORLLER 
var budgetController = (function() {

  // Some Code

})();


// UI CONTROLLER
var UIController = (function() {

  var DOMstrings = { // repo to save css class names 
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };
  return {
    getInput: function() {
      return{ // in order to return three values at the same time, binding them as one object is better than seperate variables 
        type : document.querySelector(DOMstrings.inputType).value, // will be either inc or exp 
        description : document.querySelector(DOMstrings.inputDescription).value,
        value : document.querySelector(DOMstrings.inputValue).value
      };
    },

    getDOMstrings: function() { // this function connects GLOBAL APP CONTROLLER to store css classes in GLOBAL APP CONTROLLER module 
      return DOMstrings;
    }
  };

})();


// GLOBAL APP CONTROLLER -> the module where we tell the other modules what to do 
var controller = (function(budgetCtrl, UICtrl) {

  var DOM = UICtrl.getDOMstrings();
  // the form of ctrlAddItem() is very common : controller calling some method and the method does something and returns it 
  var ctrlAddItem = function() { //DRY coding
    // 1. Get the field input data
    var input = UICtrl.getInput();
    console.log(input);

    //2. Add the item to the budget controller 

    //3. Add the item to the UI

    //4. Calculate the budget

    //5. Display the budget on the UI

    
  }
  
  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
  

  document.addEventListener('keypress',function(event) {

    if (event.keyCode === 13 || event.which === 13) { //which is for older browsers
      ctrlAddItem();
    }


  });


})(budgetController, UIController);