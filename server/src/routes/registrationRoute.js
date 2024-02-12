const express = require('express');
const User = require('../schemas/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieConfig = require('../config/cookieConfig');
const tokenConfig = require('../config/tokenConfig');

const router = express.Router();

router.route('/').post(async (req, res) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10);
		const hashedUser = { ...req.body, password: hashedPassword };

		const user = await User.create(hashedUser);

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
			.send({ user: { ...user._doc }, acessToken: acessToken })
			.status(200)
			.end();
	} catch (error) {
		res.status(500).send(error.message).end();
	}
});

module.exports = router;
