const apiEndPoints = {
	login: `${import.meta.env.VITE_ORIGIN_URL}login`,
	logout: `${import.meta.env.VITE_ORIGIN_URL}logout`,
	register: `${import.meta.env.VITE_ORIGIN_URL}registration`,
	refreshAuth: `${import.meta.env.VITE_ORIGIN_URL}refrshAuth`,
	courses: `${import.meta.env.VITE_ORIGIN_URL}courses`,
};

export default apiEndPoints;
