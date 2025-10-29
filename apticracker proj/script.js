
const addExpenseBtn = document.getElementById("addExpenseBtn");
const expenseList = document.getElementById("expenseList");
const totalCount = document.getElementById("totalCount");
const clearAllBtn = document.getElementById("clearAllBtn");

let expenses = [];

addExpenseBtn.addEventListener("click", () => {
  const name = document.getElementById("expenseName").value.trim();
  const amount = document.getElementById("amount").value.trim();
  const category = document.getElementById("category").value.trim();
  const date = document.getElementById("date").value;

  if (!name || !amount || !category || !date) {
    alert("Please fill out all fields!");
    return;
  }

  const expense = { name, amount, category, date };
  expenses.push(expense);
  displayExpenses();
  clearForm();
});


function displayExpenses() {
  expenseList.innerHTML = "";
  expenses.forEach((exp, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div>
        <strong>${exp.name}</strong> - $${exp.amount}<br>
        <small>${exp.category} | ${exp.date}</small>
      </div>
      <button onclick="deleteExpense(${index})">❌</button>
    `;
    expenseList.appendChild(li);
  });
  totalCount.textContent = expenses.length;
}


function deleteExpense(index) {
  expenses.splice(index, 1);
  displayExpenses();
}


function clearForm() {
  document.getElementById("expenseName").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("category").value = "";
  document.getElementById("date").value = "";
}


clearAllBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear all expenses?")) {
    expenses = [];
    displayExpenses();
  }
});
