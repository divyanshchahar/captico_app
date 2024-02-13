import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../provider/AuthProvider';

function HomePage() {
	const { isLoggedIn } = useContext(AuthContext);

	return (
		<div className="d-grid gap-2">
			{isLoggedIn ? (
				<Link className="btn btn-outline-primary" to="courses">
					Courses
				</Link>
			) : (
				<Link className="btn btn-outline-primary" to="login">
					Login
				</Link>
			)}
		</div>
	);
}

export default HomePage;
