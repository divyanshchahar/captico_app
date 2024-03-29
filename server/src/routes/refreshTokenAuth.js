const express = require('express');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cookieConfig = require('../config/cookieConfig');
const tokenConfig = require('../config/tokenConfig');

const router = express.Router();

router.use(cookieParser());

router.route('/').post(async (req, res) => {
	try {
		const refreshToken = req.cookies[cookieConfig.cookieName];

		if (!refreshToken) return res.status(401).end();

		jwt.verify(
			refreshToken,
			process.env.REFRESH_TOKEN_SECRET,
			(error, decoded) => {
				if (error) res.status(403).end();

				const acessToken = jwt.sign(
					{ id: decoded.id.toString() },
					process.env.ACESS_TOKEN_SECRET,
					tokenConfig.refreshToken
				);

				res.send({ acessToken: acessToken }).status(200).end();
			}
		);
	} catch (error) {
		res.status(500).send(error.message).end();
	}
});

module.exports = router;
