import React, {useState} from 'react';
import '../../css/AddUser.css';
import ErrorModal from '../common/ErrorModal';
import Card from '../common/Card';
import Button from '../common/Button';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState('');

    const addUserHandler = (e) => {
        e.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty valid).'
            });

            return;
        }

        console.log(enteredAge)

        if (+enteredAge.trim() < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = e => {
        setEnteredUsername(e.target.value);
    };

    const ageChangeHandler = e => {
        setEnteredAge(e.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <div>
            {error && 
                <ErrorModal 
                    title={error.title} 
                    message={error.message}
                    onConfirm={errorHandler}
                />
            }
            <Card className='input'>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input 
                        id="username" 
                        type="text" 
                        value={enteredUsername}
                        onChange={usernameChangeHandler}
                    />

                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        id="age" 
                        type="number" 
                        value={enteredAge}
                        onChange={ageChangeHandler}
                    />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
};

export default AddUser;