import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Routing from './routes/Routing.jsx';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routing />
			</BrowserRouter>
		</>
	);
}

export default App;
