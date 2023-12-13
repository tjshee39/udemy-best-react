import React, {useState} from 'react';

import AddUser from './components/users/AddUser';
import UserList from './components/users/UserList';

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (userName, userAge) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList, 
                {
                    id: Math.random().toString(), 
                    name: userName, 
                    age: userAge
                }
            ];
        });
    }

    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            {usersList.length > 0 && <UserList users={usersList}/>}
        </div>
    );
}

export default App;
