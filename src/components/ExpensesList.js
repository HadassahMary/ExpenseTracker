import ExpenseItem from "./ExpenseItems";
import './ExpensesList.css'
const ExpensesList = props => {
        
    if(props.filtered.length === 0){
        return(
            <h2 className="expenses-list__fallback">No Expenses Found!</h2>
        );
    }

    return(
        <ul className="expenses-list">
            {props.filtered.map(item => <ExpenseItem key={item.id} expense_details={item}/>)}
        </ul>
    );
}
export default ExpensesList;