let myAccount = {
  name: "Jae Hyun An",
  expenses: 0,
  income: 0
};

let otherAccount = myAccount;
otherAccount.income = 1000; // it changes the property of myAccount
otherAccount = {}; // binding is broken.

// when the value of reference changes, the value of object also changes
let addExpense = function(account, amount) {
  // when we assign a new value to the argument, the binding between arguments and object is broken completely
  // which means it can only manipulate properties in the object
  account = {}; // {}
  // account.expenses = account.expenses + amount; // { name: 'Jae Hyun An', expenses: 1500, income: 10000 }
  console.log(account);
};
addExpense(myAccount, 2.5);
console.log(myAccount);
