import { useContext } from 'react';
import AuthContext from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import LoginFormLayout from '../ui/layouts/LoginFormLayout';

function RouteProtector({ children }) {
	const navigate = useNavigate();
	const { isLoggedIn } = useContext(AuthContext);

	return <>{isLoggedIn ? children : <LoginFormLayout />}</>;
}

export default RouteProtector;
