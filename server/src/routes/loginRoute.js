const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../schemas/userSchema');
const cookieConfig = require('../config/cookieConfig');
const tokenConfig = require('../config/tokenConfig');

const router = express.Router();

router.route('/').post(async (req, res) => {
	try {
		const [user] = await User.find({ email: req.body.email });

		if (!user) res.status(404).end();

		const isAuthenticatd = await bcrypt.compare(
			req.body.password,
			user.password
		);

		if (isAuthenticatd) {
			const acessToken = jwt.sign(
				{ id: user._id.toString() },
				process.env.ACESS_TOKEN_SECRET,
				tokenConfig.acessToken
			);

			const refreshToken = jwt.sign(
				{ id: user._id.toString() },
				process.env.REFRESH_TOKEN_SECRET,
				tokenConfig.refreshToken
			);

			res
				.cookie(cookieConfig.cookieName, refreshToken, cookieConfig.config)
				.send({
					user: { ...user._doc },
					acessToken: acessToken,
				})
				.status(200)
				.end();
		}

		res.status(401).end();
	} catch (error) {
		res.status(500).send(error.message).end();
	}
});

module.exports = router;
