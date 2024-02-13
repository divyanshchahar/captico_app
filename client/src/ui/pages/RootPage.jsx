import { Outlet } from 'react-router-dom';
import TopNavBarLayout from '../layouts/TopNavBarLayout';

function RootPage() {
	return (
		<>
			<TopNavBarLayout />
			<Outlet />
		</>
	);
}

export default RootPage;
