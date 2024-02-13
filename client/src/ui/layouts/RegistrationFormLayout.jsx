import { useState, useContext } from 'react';
import apiEndPoints from '../../config/apiEndPoints';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../provider/AuthProvider';

function RegistrationFormLayout() {
	const { refreshAuth } = useContext(AuthContext);
	const navigate = useNavigate();

	const [email, setEmail] = useState();
	const [password1, setPassword1] = useState();
	const [password2, setPassword2] = useState();

	const handleClick = async (e) => {
		e.preventDefault();

		const regex = new RegExp('.*@.*.*');

		const passwordsMatch = password1 === password2;
		const isEmail = regex.test(email);

		if (passwordsMatch & isEmail) {
			const response = await fetch(apiEndPoints.register, {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email: email, password: password1 }),
			});

			const json = await response.json();

			const token = await refreshAuth();

			navigate('/');
		} else {
			alert('passwords should match');
		}
	};

	return (
		<form>
			<div className="m-3">
				<label className="form-label">Email address</label>
				<input
					pattern=".*\@.*\.*"
					type="email"
					className="form-control"
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
					value={password1}
					onChange={(e) => {
						setPassword1(e.target.value);
					}}
				/>
			</div>

			<div className="m-3">
				<label className="form-label">Retype Password</label>
				<input
					type="password"
					className="form-control"
					value={password2}
					onChange={(e) => {
						setPassword2(e.target.value);
					}}
				/>
			</div>

			<div className="m-3">
				<button
					className="btn btn-primary"
					onClick={(e) => {
						handleClick(e);
					}}
				>
					Register
				</button>
			</div>
		</form>
	);
}

export default RegistrationFormLayout;
