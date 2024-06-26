import '../../css/UserList.css';
import Card from '../common/Card';

const UserList = (props) => {
    return (
        <Card className='users'>
            <ul>
                {props.users.map(user => (
                    <li key={user.id}>{user.name} ({user.age} years old)</li>
                ))}
            </ul>
        </Card>
    )
}

export default UserList;