function TopNavBar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<i
						className="bi bi-list-columns-reverse"
						style={{ fontSize: '2rem' }}
					></i>
					<button className="btn btn-outline-primary">Login</button>
				</div>
			</nav>
		</>
	);
}

export default TopNavBar;
