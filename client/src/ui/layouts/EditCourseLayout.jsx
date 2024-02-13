import { useState, useEffect } from 'react';
import useMakeAuthRequest from '../../hooks/useMakeAuthRequest';

function CourseFormLayout({ courses, editId, editFunc }) {
	const [course, setCourse] = useState({ name: null });

	const makeAuthRequest = useMakeAuthRequest();

	useEffect(() => {
		const filteredCourse = courses.filter((item) => editId === item._id);

		setCourse(filteredCourse[0]);
	}, []);

	return (
		<form>
			<div className="m-3">
				<label className="form-label">Course Name</label>
				<input
					type="text"
					className="form-control"
					value={course.name}
					onChange={(e) => setCourse({ ...course, name: e.target.value })}
				/>
			</div>

			<div className="m-3">
				<button
					className="btn btn-primary"
					onClick={(e) => {
						e.preventDefault();
						makeAuthRequest(editFunc, course);
					}}
				>
					Save
				</button>
			</div>
		</form>
	);
}

export default CourseFormLayout;
