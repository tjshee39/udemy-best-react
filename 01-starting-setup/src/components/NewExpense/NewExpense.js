import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import '../../css/NewExpense.css';

// props: onAddExpense
const NewExpense = (props) => {
    const [isEditing, setIsEditing] =  useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        // 새로운 데이터 App.js로 보내줌
        props.onAddExpense(expenseData); 
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {/* 데이터 저장을 위해 함수 포인터 보내줌 */}
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && 
                <ExpenseForm 
                    onSaveExpenseData={saveExpenseDataHandler} 
                    onCancel={stopEditingHandler}
                />
            }
        </div>
    )
}

export default NewExpense;