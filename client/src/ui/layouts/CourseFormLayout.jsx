import { useState } from 'react';
import useMakeAuthRequest from '../../hooks/useMakeAuthRequest';

function CourseFormLayout({ addFunc = () => {} }) {
	const [name, setName] = useState();

	const makeAuthRequest = useMakeAuthRequest();

	return (
		<form>
			<div className="m-3">
				<label className="form-label">Course Name</label>
				<input
					type="text"
					className="form-control"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>

			<div className="m-3">
				<button
					className="btn btn-primary"
					onClick={(e) => {
						e.preventDefault();
						makeAuthRequest(addFunc, name);
					}}
				>
					Add
				</button>
			</div>
		</form>
	);
}

export default CourseFormLayout;
