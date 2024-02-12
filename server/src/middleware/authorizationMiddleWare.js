const jwt = require('jsonwebtoken');

function authorizationMiddleware(req, res, next) {
	try {
		const authHeader = req.headers['authorization'];
		const token = authHeader && authHeader.split(' ')[1];

		if (!token) {
			return res.status(401).end();
		}

		jwt.verify(token, process.env.ACESS_TOKEN_SECRET, (error, decoded) => {
			if (error || !decoded || typeof decoded === 'string') {
				return res.status(403).end();
			}

			req.headers.id = decoded.id;

			next();
		});
	} catch (error) {
		res.send(error.message).status(500);
	}
}

module.exports = authorizationMiddleware;
