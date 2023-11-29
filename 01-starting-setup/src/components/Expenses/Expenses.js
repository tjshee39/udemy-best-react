import React, {useState} from 'react';
import ExpenseFilter from './ExpenseFilter';
import Card from '../common/Card';
import ExpenseItem from './ExpenseItem';
import '../../css/Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');

    let filterInfoText = '2019, 2020, 2021, 2022 & 2024'

    if (filteredYear === '2019') {
        filterInfoText ='2020, 2021, 2022, 2023 & 2024';
    } else if (filteredYear === '2020') {
        filterInfoText ='2019, 2021, 2022, 2023 & 2024';
    } else if (filteredYear === '2021') {
        filterInfoText ='2019, 2020, 2022, 2023 & 2024';
    } else if (filteredYear === '2022') {
        filterInfoText ='2019, 2020, 2021, 2023 & 2024';
    } else if (filteredYear === '2023') {
        filterInfoText ='2019, 2020, 2021, 2022 & 2024';
    } else {
        filterInfoText ='2019, 2020, 2021, 2022 & 2023';
    };

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter 
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <p className='hiden-years'>Data for years {filterInfoText} is hidden.</p>
                <ExpenseItem 
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                />
                <ExpenseItem 
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                />
                <ExpenseItem 
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />
            </Card>
        </div>
    );
}

export default Expenses;