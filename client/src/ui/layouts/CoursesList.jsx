function CoursesList(courses) {
	return (
		<ul className="list-group list-group-flush">
			{courses.map((item) => {
				return (
					<li key={item._id} className="list-group-item">
						<h1>{item.name}</h1>
						<h6>{`From ${item.startDate} to ${item.endDate}`}</h6>
						<h6>Description</h6>
						<p>{item.description}</p>

						<div className="btn-group" role="group" aria-label="Basic example">
							<button type="button" className="btn btn-primary">
								<i className="bi bi-pen-fill"></i>
							</button>
							<button type="button" className="btn btn-primary">
								<i className="bi bi-trash-fill"></i>
							</button>
						</div>
					</li>
				);
			})}
		</ul>
	);
}

export default CoursesList;
