const cookieConfig = {
	config: {
		httpOnly: true,
		maxAge: 24 * 60 * 60 * 1000,
	},
	cookieName: 'refreshToken',
};

module.exports = cookieConfig;
