import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e2',
      title: 'Toilet Paper',
      amount: 35.24,
      date: new Date(2022, 3, 1)
    },
    {
      id: 'e3',
      title: 'Mac Book Air',
      amount: 5.2,
      date: new Date(2023, 9, 17)
    }
  ];

  // 새로운 데이터 받아옴
  const addExpenseHandler = expense => {

  };
  
  return (
    <div className="expenses">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>      
    </div>
  );
}

export default App;
