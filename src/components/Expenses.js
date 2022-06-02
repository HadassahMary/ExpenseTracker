import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseItem from "./ExpenseItems";
import ExpenseChart from "./ExpensesChart";
import './ExpenseItem.css';
import FilterExpense from "./FilterExpense/FilterExpense";
import Card from "./Card";

const Expenses = (props) => {
  const expenses_arr = props.expense_info;
  const [filterYear, setFilterYear] = useState("2020");
  const getSelectedYear = (selectedYear) => {
    setFilterYear(selectedYear);
  }
  const filteredArray = expenses_arr.filter(expen => filterYear === expen.date.getFullYear().toString());
  
    
    return (
    <Card className='expenses'>
      <FilterExpense selected = {filterYear} onYearSelect={getSelectedYear} />
      {/* {filteredArray.length === 0 ? <label className="expense-item h2">No Expenses found</label> : (filteredArray.map(item => <ExpenseItem key={item.id} expense_details={item}/>))} */}
      <ExpenseChart expenses={filteredArray} />
      <ExpensesList filtered={filteredArray}/>
      
      
    </Card>
  );
}
export default Expenses;