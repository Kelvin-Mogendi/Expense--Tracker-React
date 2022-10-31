// import ExpenseItems from "./ExpenseItems";
import Card from "../UI-Data/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";
function Expenses(expense) {
  const [EnteredYear, setEnteredYear] = useState("2020");
  function ExpenseFilterPassHandler(data) {
    setEnteredYear(data);
  }
  const filteredData = expense.expense.filter(function (expense) {
    return +expense.date.getFullYear() === +EnteredYear;
  });

  return (
    <li>
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selected={EnteredYear}
            onDatapass={ExpenseFilterPassHandler}
          />
          <ExpenseChart expenses={filteredData} />
          <ExpensesList props={filteredData} />
        </Card>
      </div>
    </li>
  );
}

export default Expenses;
