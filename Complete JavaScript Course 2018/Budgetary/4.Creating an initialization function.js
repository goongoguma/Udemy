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

  // this function sets up all our event listeners 
  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress',function(event) {
    if (event.keyCode === 13 || event.which === 13) { //which is for older browsers
      ctrlAddItem();
    }
  });
 }
  
  // the form of ctrlAddItem() is very common : controller calling some method and the method does something and returns it 
  // this functions gets called when we want to add a new item 
  var ctrlAddItem = function() { //DRY coding
    // 1. Get the field input data
    var input = UICtrl.getInput();
   

    //2. Add the item to the budget controller 

    //3. Add the item to the UI

    //4. Calculate the budget

    //5. Display the budget on the UI
  };
  
  return {
    // public initialization function has been created 
    init: function() {
      console.log('Application has strated.');
      setupEventListeners();
    }
  };
})(budgetController, UIController);


controller.init();




