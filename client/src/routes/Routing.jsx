import { Route, Routes } from 'react-router-dom';
import RegistrationFormLayout from '../ui/layouts/RegistrationFormLayout';
import CoursesPage from '../ui/pages/CoursesPage';
import HomePage from '../ui/pages/HomePage';
import RootPage from '../ui/pages/RootPage';
import LoginFormLayout from '../ui/layouts/LoginFormLayout';
import RouteProtector from './RouteProtector';

function Routing() {
	return (
		<>
			<Routes>
				<Route path="/" element={<RootPage />}>
					<Route index element={<HomePage />} />
					<Route path="register" element={<RegistrationFormLayout />} />
					<Route
						path="courses"
						element={
							<RouteProtector>
								<CoursesPage />
							</RouteProtector>
						}
					/>
					<Route path="login" element={<LoginFormLayout />} />
				</Route>
			</Routes>
		</>
	);
}

export default Routing;
