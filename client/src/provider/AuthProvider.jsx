import { createContext, useState } from 'react';
import apiEndPoints from '../config/apiEndPoints';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	const [auth, setAuth] = useState();
	const [lastUpdated, setLastUpdated] = useState();
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const login = (email, password) => {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await fetch(apiEndPoints.login, {
					method: 'POST',
					credentials: 'include',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ email: email, password: password }),
				});

				if (response.ok) {
					const json = await response.json();

					setAuth(json.acessToken);
					setLastUpdated(Date.now());
					setIsLoggedIn(true);

					resolve(json.acessToken);
				} else {
					reject();
				}
			} catch (error) {
				reject(error);
			}
		});
	};

	return (
		<AuthContext.Provider value={{ login, auth, lastUpdated, isLoggedIn }}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthContext;