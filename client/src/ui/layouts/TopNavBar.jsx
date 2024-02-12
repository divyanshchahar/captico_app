import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../provider/AuthProvider';

function TopNavBar() {
	const { isLoggedIn, logout } = useContext(AuthContext);

	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<i
						className="bi bi-list-columns-reverse"
						style={{ fontSize: '2rem' }}
					></i>
					{isLoggedIn ? (
						<button
							className="btn btn-outline-primary"
							onClick={() => logout()}
						>
							Logout
						</button>
					) : (
						<Link className="btn btn-outline-primary" to="login">
							Login
						</Link>
					)}
				</div>
			</nav>
		</>
	);
}

export default TopNavBar;
