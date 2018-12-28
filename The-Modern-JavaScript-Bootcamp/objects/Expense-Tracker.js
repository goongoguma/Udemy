let myAccount = {
  name: "Jae Hyun An",
  expenses: 0,
  income: 0
};

let addExpense = function(account, amount) {
  account.expenses = account.expenses + amount; // { name: 'Jae Hyun An', expenses: 1500, income: 10000 }
};

// Expense Tracker challenge

// addIncome

// resetAccount

// getAccountSummary

// return `Account for Jae Hyun has $900. $1000 in income. $100 in expenses.`

let addIncome = function(account, income) {
  account.income = account.income + income;
};

let resetAccount = function(account) {
  account.expenses = 0;
  account.income = 0;
};

let getAccountSummary = function(account) {
  return `Account for ${account.name} has $${account.income -
    account.expenses}. $${account.income} in income. $${
    account.expenses
  } in expenses.`;
};

addIncome(myAccount, 2000);
addExpense(myAccount, 2.5);
addExpense(myAccount, 160);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
