import { useState, useEffect } from 'react';
import useMakeAuthRequest from '../../hooks/useMakeAuthRequest';
import apiEndPoints from '../../config/apiEndPoints';
import CoursesList from '../layouts/CoursesList';
import CourseFormLayout from '../layouts/CourseFormLayout';
import EditCourseLayout from '../layouts/EditCourseLayout';
import { Link } from 'react-router-dom';

function CoursesPage() {
	useEffect(() => {
		makeAuthRequest(getCourses);
	}, []);

	const [courses, setCourses] = useState([]);
	const [isEdit, setIsEdit] = useState(false);
	const [editCourseId, setEditCourseId] = useState();

	const makeAuthRequest = useMakeAuthRequest();

	const getCourses = async (acessToken) => {
		const response = await fetch(apiEndPoints.courses, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${acessToken}`,
			},
		});

		const data = await response.json();

		setCourses(data);
	};

	const deleteCourses = async (acessToken, courseId) => {
		const response = await fetch(apiEndPoints.courses, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${acessToken}`,
			},
			body: JSON.stringify({ id: courseId }),
		});

		const data = await response.json();

		setCourses(data);
	};

	const addCourses = async (acessToken, courseName) => {
		const response = await fetch(apiEndPoints.courses, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${acessToken}`,
			},
			body: JSON.stringify({ name: courseName }),
		});

		const data = await response.json();

		setCourses(data);
	};

	const editCourses = async (acessToken, course) => {
		const response = await fetch(apiEndPoints.courses, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${acessToken}`,
			},
			body: JSON.stringify(course),
		});

		const data = await response.json();

		setCourses(data);

		setIsEdit(false);
	};

	return (
		<>
			{isEdit ? (
				<EditCourseLayout
					courses={courses}
					editId={editCourseId}
					editFunc={editCourses}
				/>
			) : (
				<>
					<CoursesList
						courses={courses}
						delFunc={deleteCourses}
						toggleEditing={setIsEdit}
						setEditId={setEditCourseId}
					/>
					<CourseFormLayout
						addFunc={addCourses}
						edit={isEdit}
						editFunc={() => {}}
						toggleEditing={setIsEdit}
					/>
					<div className="d-grid gap-2">
						<Link className="btn btn-outline-primary" to="/">
							Home
						</Link>
					</div>
				</>
			)}
		</>
	);
}

export default CoursesPage;
