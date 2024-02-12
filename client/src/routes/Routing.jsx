import { Route, Routes } from 'react-router-dom';
import LoginFormsLayout from '../ui/layouts/LoginFormLayout';
import RegistrationFormLayout from '../ui/layouts/RegistrationFormLayout';
import TopNavBar from '../ui/layouts/TopNavBar';

function Routing() {
	return (
		<>
			<Routes>
				<Route path="/" element={<TopNavBar />} />
				<Route path="login" element={<LoginFormsLayout />} />
				<Route path="register" element={<RegistrationFormLayout />} />
			</Routes>
		</>
	);
}

export default Routing;
