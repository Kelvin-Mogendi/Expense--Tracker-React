import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props) {
  function passExpenseFormDataHandler(expense) {
    props.onSaving({ ...expense, id: Math.random() });
  }
  const [clicked, setClicked] = useState(false);
  function addNewExpenseClickHandler() {
    setClicked(true);
  }
  function cancelHandler() {
    setClicked(false);
  }
  return (
    <div className="new-expense">
      {!clicked && (
        <button onClick={addNewExpenseClickHandler}> Add New Expense</button>
      )}
      {clicked && (
        <ExpenseForm
          onSave={passExpenseFormDataHandler}
          onCancel={cancelHandler}
          onSubmit={setClicked}
        />
      )}
    </div>
  );
}

export default NewExpense;
