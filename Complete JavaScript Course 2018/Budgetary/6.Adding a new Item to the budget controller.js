// BUDGET CONTORLLER 
var budgetController = (function() {
// function constructors for expenses and incomes 
// BUDGET CONTROLLER keeps track of all the incomes and expenses and budget itself and percentages later
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  // var allExpenses = [];
  // var allIncomes = [];
  // var totalExpenses = 0;

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };

  // function that other modules add new item into our data structure 
  return {
    addItem: function(type, des, val) { //type: income or expense?, val: value of the income and expense 
      var newItem, ID;
     
      //[1 2 3 4 5], next ID = 6
      //[1 2 4 6 8], NEXT ID = 9
      //ID = last ID + 1

      // Creat new ID
      // ID is a unique number that we want to assign to each new item that we put either in the expense or in the income arrays for the allItems
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1; 
      } else {
        ID = 0;
      }
      

      // Create new item based on 'inc' or 'exp' type
      if(type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }
      
      // Push it into our data structure
      data.allItems[type].push(newItem); // either exp array or inc array in allItems object will be selected 
      
      // Return the new element 
      return newItem; // have direct access to items from public

    },

    testing: function() {
      console.log(data);
    }
  };

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
  var ctrlAddItem = function() { //DRY coding
    var input, newItem;
    
    // 1. Get the field input data
    input = UICtrl.getInput();
   
    //2. Add the item to the budget controller 
    newItem = budgetCtrl.addItem(input.type, input.description, input.value)

    //3. Add the item to the UI

    //4. Calculate the budget

    //5. Display the budget on the UI
  };
  
  return {
    init: function() {
      console.log('Application has strated.');
      setupEventListeners();
    }
  }
})(budgetController, UIController);


controller.init();

