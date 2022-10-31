// import ExpenseItems from "./Components/ExpenseItems";
// import ExpenseFilter from "./Components/Expenses-Data/ExpenseFilter";
import { useState } from "react";
import Expenses from "./Components/Expenses-Data/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expense, setexpense] = useState(DUMMY_EXPENSES);
  // const [newExpensestate, setNewExpensestate] = useState(expense);

  function DataHandler(data) {
    console.log(data);
    setexpense((prevState) => {
      return [data, ...prevState];
    });

    // setNewExpensestate(newExpensestate.push({ ...data }));
    // console.log(newExpensestate);
    //   ...prevState

    // });
  }

  return (
    <div>
      <NewExpense onSaving={DataHandler} />

      <Expenses expense={expense}></Expenses>
    </div>
  );
}

export default App;
