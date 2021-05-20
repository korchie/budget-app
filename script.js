  
// Create starter values
let expenses = []; // Array of expense objects
let monthlyIncome = 0; // Numberical value
let expenseTotal = 0; // Numebrical value
let balance = 0; // Numerical value

// Create references to monthly budget elements
let monthlyBudget = document.getElementById("monthly_budget");
let incomeInput = document.getElementById("income_input");
let updateBudgetButton = document.getElementById("update_budget_button");

//Build a function that displays the budget entered by the user
function updateBudget(event) {
    event.preventDefault(); // Prevent refresh
    // Store user data entry into monthlyIncome
    // Input values are strings; need to parse into an integer
    monthlyIncome = parseInt (incomeInput.value);
    // Display input in the app
    monthlyBudget.innerText = "$" + incomeInput.value;
    // Reset the form
    incomeInput.value = "";
    // Update the balance
    updateBalance();
}

// Add updateBudget function to onclick of form button
updateBudgetButton.onclick = updateBudget;

// Create reference to remaining balance
let remainingBalance = document.getElementById("remaining_balance");

//Build a helper function that calculated the remaining balance
function updateBalance() {
    // Determine new balance
    balance = monthlyIncome - expenseTotal; // Numbers
    // Show new value in the app
}   remainingBalance.innerText = "$" + balance; // String?
    // Update color of remaining balance
    if (balance < 0) {
        remainingBalance.classList.add("red");
        remainingBalance.classList.remove("green");
    } else {
        remainingBalance.classList.add("green");
        remainingBalance.classList.remove("red");
    }


// Create references to remaining elements
let nameInput = document.getElementById("name_input");
let amountInput = document.getElementById("amount_input");
let addExpenseButton = document.getElementById("add_expense_button");
let expenselist = document.getElementById("expense_list"); // DIV element
let totalExpenses = document.getElementById("total_expenses"); // Paragraph element

// Build a function that stores the expense information
// as an object into the expenses array
function addExpense(event) {
    event.preventDefault(); // Prevent default refresh
    // Build new object with input values
    let expense = {
        name: nameInput.value,
        amount: parseInt(amountInput.value) // Parse into a number 
    };
// Add the expense to the expense array
expenses.push(expense);
// Create a new element in the document
let newElement = document.createElement("p");
newElement.innerText = expense.name + ": $" + expense.amount;
expenselist.appendChild(newElement);
// Re-calculate expenses
calculateExpenses();
}

// Add addExpense as the handler for add expense button
addExpenseButton.onclick = addExpense;

// Build a function that will loop through the expenses in the expense array
// Determine a total, then display that display in the app

function calculateExpenses() {
    // Reset the expense total and recalculate
    expenseTotal = 0;
    for (let i = 0; i < expenses.length; i++) {
        let expense = expenses[i];
        expenseTotal = expenseTotal + expense.amount;
    }
    // Display the result in the app
    totalExpenses.innerText = "$" + expenseTotal;
    // Update the balance
    updateBalance();
}