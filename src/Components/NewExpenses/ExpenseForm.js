import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");
  function TitlechangeHandler(event) {
    setenteredTitle(event.target.value);
  }
  function AmountchangeHandler(event) {
    setenteredAmount(event.target.value);
  }
  function DatechangeHandler(event) {
    setenteredDate(event.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    const expenses = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSave(expenses);
    setenteredAmount("");
    setenteredDate("");
    setenteredTitle("");
    props.onSubmit(false);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={TitlechangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            // value={enteredAmount}
            min={0.01}
            step={0.01}
            onChange={AmountchangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={DatechangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel} type="button">
          {" "}
          Cancel{" "}
        </button>
        <button type="submit">Add New Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
