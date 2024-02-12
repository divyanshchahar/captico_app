const express = require('express');
const cookieConfig = require('../config/cookieConfig');

const router = express.Router();

router.route('/').delete(async (req, res) => {
	try {
		res.clearCookie(cookieConfig.cookieName, cookieConfig.config).end();
	} catch (error) {
		res.status(500).send(error.message).end();
	}
});

module.exports = router;
