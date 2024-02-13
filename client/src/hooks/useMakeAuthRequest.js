import { useContext } from 'react';
import AuthContext from '../provider/AuthProvider';

function useMakeAuthRequest() {
	const { auth, refreshAuth, lastUpdated } = useContext(AuthContext);

	return async (callBack, body = null) => {
		try {
			const tokenAge = (Date.now() - lastUpdated) / (1000 * 60);

			// if refresh token is not present or has expired
			if (!auth || tokenAge > 13 || !tokenAge || !lastUpdated) {
				const newAuth = await refreshAuth();
				if (body) {
					callBack(newAuth, body);
				} else {
					callBack(newAuth);
				}
			}
			// if refresh token is present
			else {
				if (body) {
					callBack(auth, body);
				} else {
					callBack(auth);
				}
			}
		} catch (error) {
			console.error(error);
		}
	};
}

export default useMakeAuthRequest;
