import Expenses from "./components/Expenses";
import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses_1 =  [
  { title: "Car Insurance",
   amount: 297.09,
   date: new Date(2022, 2, 28),
   id: Math.random().toString()
  },
  { title: "House Insurance",
   amount: 150.09,
   date: new Date(2022, 4, 15),
   id: Math.random().toString()
  },
  { title: "Home Loan",
   amount: 243.09,
   date: new Date(2020, 2, 28),
   id: Math.random().toString()
  },
 ]
const App = () => {

  const [expenses, setExpenses] = useState(expenses_1);

  //coming from new expense
  const addNewExpense = (expenseData) => {
  //   const newExpenseData = {
  //     ...expenseData
  //   }
  //   console.log(newExpenseData);
    setExpenses(prevExpenses => {
      return [expenseData, ...prevExpenses];
    });

  }

  return (
    <div>
      <NewExpense onAddExpense={addNewExpense}/>
      
      <Expenses expense_info = {expenses} />
    </div>
  );
}

export default App;