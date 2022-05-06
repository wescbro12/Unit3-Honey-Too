import { logout } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';

export default function UserLogOut({ user, setUser }) {
    const navigate = useNavigate()
    function handleLogOut() {
        logout();
        setUser(null);
        navigate('/')
    }

    return (
        <div >
            {/* <div>{user.name}</div> */}
            {/* <div>{user.email}</div> */}
            <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
        </div>
    );
}