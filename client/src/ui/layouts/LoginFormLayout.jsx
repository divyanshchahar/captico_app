import { useState, useContext } from 'react';
import AuthContext from '../../provider/AuthProvider';

function LoginFormLayout() {
	const { login } = useContext(AuthContext);

	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const handleClick = (e) => {
		e.preventDefault();
		login(email, password);
	};

	return (
		<form>
			<div className="m-3">
				<label className="form-label">Email address</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
			</div>

			<div className="m-3">
				<label className="form-label">Password</label>
				<input
					type="password"
					className="form-control"
					id="exampleInputPassword1"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			<div className="m-3">
				<button
					className="btn btn-primary"
					onClick={(e) => {
						handleClick(e);
					}}
				>
					Login
				</button>
			</div>
		</form>
	);
}

export default LoginFormLayout;
