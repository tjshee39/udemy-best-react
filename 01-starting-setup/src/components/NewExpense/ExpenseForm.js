import React, {useState} from 'react';
import '../../css/ExpenseForm.css';

// props: onSaveExpenseData
const ExpenseForm = (props) => {
    // react Hook
    // 이름이 use로 시작함
    // 반드시 컴포넌트 함수 안에서 직접 호출되어야함

    // useState
    // 값 할당, 새 값을 할당할 수 있는 함수 return
    // [현재 값, 업데이트함수]
    // 업데이트 함수를 호출할 뿐, 직접 재할당 하지 않기 때문에 const 사용
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    

    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // });

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     title: e.target.value
        // });

        // 이전 상태에 의존하며 업데이트
        // setUserInput((prevState) => {
        //     return { ...prevState, title: e.target.value};
        // });
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.Value);
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    };

    // 식별자를 이용해 같은 함수 사용하기
    // ientifier: 식별자, value: 입력값
    /*
    const inputChangeHandler = (identifier, value) => {
        if (identifier === 'title') {
            setTitle(value);
        } else if (identifier === 'amount') {
            setAmount(value);
        } else {
            setDate(value);
        }
    };
    */

    // form -> onSubmit: 페이지 리로드
    const submitHandler = (e) => {
        // 기본기능 비활성화 -> 리로드 되지 않음
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        // 새로운 데이터 NewExpense.js로 보내줌
        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    {/* 
                        onChange={(e) => inputChangeHandler('title', e.target.value)}
                        (): 이벤트 수동 실행(change 발생할 때마다)
                        param: identifier
                    */}
                    <input 
                        type='text' 
                        value={enteredTitle} 
                        onChange={titleChangeHandler}
                    />
                </div>

                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type='number' 
                        value={enteredAmount} 
                        min="0.01" 
                        step="0.01" 
                        onChange={amountChangeHandler}
                    />
                </div>

                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        type='date' 
                        value={enteredDate} 
                        min="2019-01-01" 
                        max="9999-12-31" 
                        onChange={dateChangeHandler}
                    />
                </div>

                <div className='new-expense__actions'>
                    <button type='button' onClick={props.onCancel}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;