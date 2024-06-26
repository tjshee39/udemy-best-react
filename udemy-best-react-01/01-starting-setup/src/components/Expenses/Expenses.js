import React, {useState} from 'react';
import ExpenseFilter from './ExpenseFilter';
import Card from '../common/Card';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpensesChart';
import '../../css/Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    
    const filteredExpenses = props.items.filter(expense =>
        expense.date.getFullYear().toString() === filteredYear);

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter 
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpenseChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;