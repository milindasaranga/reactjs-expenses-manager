import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const expensesFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    }

    const filterExpenses = props.items.filter((expense) =>{
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onExpensesFilter={expensesFilterHandler} />
                <ExpensesChart expenses={filterExpenses}/>
                <ExpensesList items={filterExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;