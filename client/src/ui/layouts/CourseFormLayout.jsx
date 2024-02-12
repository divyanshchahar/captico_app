function CourseFormLayout() {
	return (
		<form>
			<div className="m-3">
				<label className="form-label">Course Name</label>
				<input type="text" className="form-control" />
			</div>

			<div className="m-3">
				<label className="form-label">Start Date</label>
				<input type="date" className="form-control" />
			</div>

			<div className="m-3">
				<label className="form-label">End Date</label>
				<input type="date" className="form-control" />
			</div>

			<div className="m-3">
				<label className="form-label">Desription</label>
				<textarea className="form-control" />
			</div>

			<div className="m-3">
				<button className="btn btn-primary">Login</button>
			</div>
		</form>
	);
}

export default CourseFormLayout;
