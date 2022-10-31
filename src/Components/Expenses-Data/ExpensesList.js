import "./ExpensesList.css";
import ExpenseItems from "./ExpenseItems";

function ExpensesList(props) {
  // let EnteredData = <p> There is no item currently available </p>;
  if (props.props.length === 0) {
    return <h2 className="expenses-list__fallback"> There is no item</h2>;
  } else {
    return (
      <ul className="expenses-list">
        {props.props.map((expense) => (
          <ExpenseItems
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    );
  }
}
export default ExpensesList;
