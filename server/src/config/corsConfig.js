const corsConfig = {
	origin: process.env.ORIGIN,
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	credentials: true,
};

module.exports = corsConfig;
