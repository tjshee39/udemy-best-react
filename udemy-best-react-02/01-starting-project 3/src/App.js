import React, { useState } from 'react';

import Header from './components/Header';
import UserInput from './components/UserInput';
import ResultTable from './components/ResultTable';

const App = () => {
  const [yearlyDatas, setYearlyDatas] = useState(null); // per-year results
  const [curSaving, setCurSaving] = useState(null);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though..

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    setCurSaving(currentSavings);

    let yearlyData = [];
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    setYearlyDatas(yearlyData);
  };

  return (
    <div>
      <Header />

      <UserInput calculator={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {!yearlyDatas && <p style={{textAlign: 'center'}}>No investment calculated yet.</p>}
      {yearlyDatas &&
        <ResultTable
          data={yearlyDatas}
          initialInvestment={curSaving}
        />
      }
    </div>
  );
}

export default App;
