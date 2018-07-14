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
  
    var calculateTotal = function(type) {
      var sum = 0;
      data.allItems[type].forEach(function(cur) {
        sum += cur.value; 
      });
      /*
      0
      [200, 400, 100]
      sum = 0 + 200
      sum = 200 + 400
      sum = 600 + 100 = 700
      */
    };
    // var allExpenses = [];
    // var allIncomes = [];
    // var totalExpenses = 0;
    data.totlas[type] = sum;
  
    var data = {
      allItems: {
        exp: [],
        inc: []
      },
      totals: {
        exp: 0,
        inc: 0
      },
      budget: 0,
      percentage: -1
    };
  
    // function that other modules add new item into our data structure 
    return {
      addItem: function(type, des, val) {
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
        data.allItems[type].push(newItem);
        
        // Return the new element 
        return newItem;
  
      },
  
      calculateBudget: function() {
  
        //Calculate total income and expenses
        calculateTotal('exp');
        calculateTotal('inc');
        //Calculate the budget: income - expenses
        data.budget = data.totals.inc - data.totals.exp;
        //Calculate the percentage of income that we spent 
        if(data.totals.inc > 0) {
          data.percentage  = Math.round((data.totals.exp / data.totals.inc) * 100);
        } else {
          data.percentage = -1;
        }
        
  
        //Expense = 100 and income 200, spent 33.333% = 100/300 = 0.3333 * 100
      },
  
      getBudget: function() {
          return {
            budget: data.budget,
            totalInc: data.totals.inc,
            totalExp: data.totals.exp,
            percentage: data.percentage
          }
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
      inputBtn: '.add__btn',
      incomeContainer: '.income__list',
      expensesContainer: '.expenses__list'
    };
    return {
      getInput: function() {
        return{ // in order to return three values at the same time, binding them as one object is better than seperate variables 
          type : document.querySelector(DOMstrings.inputType).value, // will be either inc or exp 
          description : document.querySelector(DOMstrings.inputDescription).value,
          value : parseFloat(document.querySelector(DOMstrings.inputValue).value)
        };
      },
  
      addListItem: function(obj, types) { //obj is the exact same object that we created using a function constructor and then passed to out app controller
        var html, newHtml, element;
        // Create HTML string with placeholder text
        if(types === 'inc'){ //replace to placeholder
          element = DOMstrings.incomeContainer;
          html ='<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
        } else if(types === 'exp'){
          element = DOMstrings.expensesContainer;
          html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
        }
             
        // Replace the placeholder text with some actual data
        newHtml = html.replace('%id%', obj.id); //id property is the one that holds the id in var Expense and Income 
        newHtml = newHtml.replace('%description%', obj.description);
        newHtml = newHtml.replace('%value%', obj.value);
        // Insert the HTML into the DOM
        document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
      },
  
      clearFields: function() {
        var fields, fieldsArr;
  
        fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
  
        fieldsArr = Array.prototype.slice.call(fields);//this will trick slice method makes think that var fields is an array
  
        fieldsArr.forEach(function(current, index, array) {
          current.value = "";
        });
  
        fieldsArr[0].focus();
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
    var updateBudget = function() {
       
      //1. Calculate the budget
      budgetCtrl.calculateBudget();
  
      //2. Return the budget
      var budget = budgetCtrl.getBudget();
  
      //3. Display the budget on the UI
      console.log(budget);
      
    };
    
    var ctrlAddItem = function() { //DRY coding
      var input, newItem;
      
      // 1. Get the field input data
      input = UICtrl.getInput();
     
      if(input.description !== "" && !isNaN(input.value) && input.value > 0) {
        //2. Add the item to the budget controller 
      newItem = budgetCtrl.addItem(input.type, input.description, input.value)
  
      //3. Add the item to the UI
      UICtrl.addListItem(newItem, input.type);
  
      //4. Clear the fields
      UICtrl.clearFields();
  
      //5. Calculate and update budget
      updateBudget();
    }
      
  };
    
    return {
      init: function() {
        console.log('Application has strated.');
        setupEventListeners();
      }
    }
  })(budgetController, UIController);
  
  
  controller.init();