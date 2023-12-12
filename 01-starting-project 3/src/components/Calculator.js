import React, {useState} from 'react';
import '../css/Calculator.css';

const Calculator = (props) => {
    const [curSaving, setCurSaving] = useState('');
    const [yearly, setYearly] = useState('');
    const [expInterest, setExpInterst] = useState('');
    const [duration, setDuration] = useState('');

    const curSavingOnChangeHandler = (e) => {
        setCurSaving(e.target.value);
    };

    const yearlyOnChangeHandler = (e) => {
        setYearly(e.target.value);
    };

    const expInterestOnChangeHandler = (e) => {
        setExpInterst(e.target.value);
    };

    const durationOnChangeHandler = (e) => {
        setDuration(e.target.value);
    };

    const resetClickHandler = () => {
        setCurSaving('');
        setYearly('');
        setExpInterst('');
        setDuration('');
    };

    const checkValid = () => {
        if (curSaving.length === 0) {
            console.log("please enter current savings...");
            return false;
        }

        if (yearly.length === 0) {
            console.log("please enter yearly saving...");
            return false;
        }

        if (expInterest.length === 0) {
            console.log("please enter expected interest...");
            return false;
        }

        if (duration.length === 0) {
            console.log("please enter investment duration...");
            return false;
        }

        return true;
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (checkValid()) {
            const inputData = {
                'current-savings': curSaving,
                'yearly-contribution': yearly,
                'expected-return': expInterest,
                'duration': duration
            };

            console.log("props inputData", inputData)

            props.calculator(inputData);
        }

        // props.calculator(enteredValue);
    };

    return (
        <form className="form">
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" onChange={curSavingOnChangeHandler}/>
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" onChange={yearlyOnChangeHandler}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" onChange={expInterestOnChangeHandler}/>
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" onChange={durationOnChangeHandler}/>
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt" onClick={resetClickHandler}>
                    Reset
                </button>
                <button type="submit" className="button" onClick={submitHandler}>
                    Calculate
                </button>
            </p>
        </form>
    );
}

export default Calculator;