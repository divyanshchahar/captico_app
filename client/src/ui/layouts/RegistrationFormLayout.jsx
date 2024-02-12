function RegistrationFormLayout() {
	return (
		<form>
			<div className="m-3">
				<label className="form-label">User Name</label>
				<input type="text" className="form-control" />
			</div>

			<div className="m-3">
				<label className="form-label">Email address</label>
				<input type="email" className="form-control" />
			</div>

			<div className="m-3">
				<label className="form-label">Password</label>
				<input type="password" className="form-control" />
			</div>

			<div className="m-3">
				<label className="form-label">Retype Password</label>
				<input type="password" className="form-control" />
			</div>

			<div className="m-3">
				<button className="btn btn-primary">Register</button>
			</div>
		</form>
	);
}

export default RegistrationFormLayout;
