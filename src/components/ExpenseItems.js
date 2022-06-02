import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

const ExpenseItem = (props) => {
  const propname = props.expense_details;
  const [title, setTitle] = useState(propname.title);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log("clicked");
  };

  return (
    <li>
      
      <Card className="expense-item">
        
        <ExpenseDate date={propname.date} />
        <div className="expense-item__description">
          <h2>{propname.title}</h2>
          <div className="expense-item__price">${propname.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};
export default ExpenseItem;
