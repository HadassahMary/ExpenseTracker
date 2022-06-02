import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{

    //coming from expense form
    const newExpenseHandler = (enteredData) => {
        const expenseData = {
            ...enteredData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData)
    }
    let [displayForm, setDisplayForm] = useState(false);
  
    const showNewExpenseForm = (event) => {
        //event.preventDefault();
        setDisplayForm(true);
        console.log('here'); 
    }
    const displayFormHandler = () => {
        setDisplayForm(false);
    }

    return(
        <div className="new-expense">
            {!displayForm && <button onClick={showNewExpenseForm}>Add New Expense</button>}
            {displayForm && <ExpenseForm onNewExpense={newExpenseHandler} onCancel={displayFormHandler}/>}
            
            
        </div>
    );
}
export default NewExpense;