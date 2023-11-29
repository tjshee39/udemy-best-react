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
      date: new Date(2021, 3, 1)
    },
    {
      id: 'e3',
      title: 'Mac Book Air',
      amount: 5.2,
      date: new Date(2021, 9, 17)
    }
  ];
  
  return (
    <div className="expenses">
      <h2>시작</h2>
      <Expenses items={expenses}/>      
    </div>
  );
}

export default App;
