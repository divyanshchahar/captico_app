function LoginFormLayout() {
	return (
		<form>
			<div className="m-3">
				<label className="form-label">Email address</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
				/>
			</div>

			<div className="m-3">
				<label className="form-label">Password</label>
				<input
					type="password"
					className="form-control"
					id="exampleInputPassword1"
				/>
			</div>

			<div className="m-3">
				<button className="btn btn-primary">Login</button>
			</div>
		</form>
	);
}

export default LoginFormLayout;
