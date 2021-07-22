import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const [newExpense, setNewExpense] = useState(false);

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.addExpense(expenseData);
        setNewExpense(false);
    }

    const displayNewExpenseHandler = () => {
        setNewExpense(true);
    }

    const closeNewExpenseHandler = () =>{
        setNewExpense(false);
    }

    return (
        <div className="new-expense">
            {
                newExpense ?
                    <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={closeNewExpenseHandler}/>
                    : <button type="button" onClick={displayNewExpenseHandler}>New Expense</button>
            }

        </div>
    );
}
export default NewExpense;