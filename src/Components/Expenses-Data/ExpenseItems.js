import "./ExpenseItems.css";
import { useState } from "react";

import Card from "../UI-Data/Card";
import ExpenseDate from "./ExpenseDate";
function ExpenseItems(props) {
  const [title] = useState(props.title);
  // console.log(props);

  // function clickHandler() {
  //   setTitle("updated");
  // }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {title}</h2>
        <div className="expense-item__price"> ${props.amount}</div>
        {/* <button onClick={clickHandler}> Click!</button> */}
      </div>
    </Card>
  );
}
export default ExpenseItems;
