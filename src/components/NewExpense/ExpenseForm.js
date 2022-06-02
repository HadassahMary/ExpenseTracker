import "./NewExpense.css";
import React, { useState } from "react";
const ExpenseForm = (props) => {
  //   const [userInputs, setUserInput] = useState({ //using one state
  //       enteredTitle: '',
  //       enteredAmount: '',
  //       enteredDate: ''
  //   });
  const [enteredTitle, setEnteredTitle] = useState(""); //this is using multiple states
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //    setUserInput({
    //        ...userInputs,
    //        enteredTitle: event.targte.value
    //    });
    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitle: event.target.value};
    // }); //This is the better way to update states as it takes the prevoius values of the state.
    //So use the above menthod incase the updation depends on the previous values of the state.
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //   setUserInput({
    //     ...userInputs,
    //     enteredAmount: event.targte.value
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInputs,
    //     enteredDate: event.targte.value
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onNewExpense(expenseData);
    setEnteredDate("");
    setEnteredAmount("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
