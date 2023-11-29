import React from 'react';
import ExpenseForm from './ExpenseForm';
import '../../css/NewExpense.css';

// props: onAddExpense
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        // 새로운 데이터 App.js로 보내줌
        props.onAddExpense(expenseData); 
    };

    return (
        <div className='new-expense'>
            {/* 데이터 저장을 위해 함수 포인터 보내줌 */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense;