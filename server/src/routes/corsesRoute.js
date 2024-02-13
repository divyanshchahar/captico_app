const express = require('express');
const authorizationMiddleware = require('../middleware/authorizationMiddleWare');
const Courses = require('../schemas/courseSchema');

const router = express.Router();

router.route('/').post(authorizationMiddleware, async (req, res) => {
	try {
		const course = await Courses.create({
			userId: req.headers.id,
			...req.body,
		});

		if (course) {
			const updatedCourses = await Courses.find({ userId: req.headers.id });

			if (!updatedCourses) return res.status(404).end();

			return res.status(200).send(updatedCourses).end();
		}

		res.status(200).send(course).end();
	} catch (error) {
		res.status(500).send(error.message).end();
	}
});

router.route('/').get(authorizationMiddleware, async (req, res) => {
	try {
		const courses = await Courses.find({ userId: req.headers.id });

		if (!courses) return res.status(404).end();

		res.status(200).send(courses).end();
	} catch (error) {
		res.status(500).send(error.message).end();
	}
});

router.route('/').put(authorizationMiddleware, async (req, res) => {
	try {
		let course = await Courses.findById(req.body._id);

		if (course.userId == req.headers.id) {
			course.name = req.body.name;

			const updatedCourse = await course.save();

			if (updatedCourse) {
				const updatedCourses = await Courses.find({ userId: req.headers.id });

				if (!updatedCourses) return res.status(404).end();

				return res.status(400).send(updatedCourses).end();
			}

			return res.send(updatedCourse).status(200).end();
		}

		res.status(403).end();
	} catch (error) {
		res.status(500).send(error.message).end();
	}
});

router.route('/').delete(authorizationMiddleware, async (req, res) => {
	try {
		const course = await Courses.findById(req.body.id);

		if (course.userId == req.headers.id) {
			const isDeleted = await Courses.findByIdAndDelete(req.body.id);

			if (isDeleted) {
				const updatedCourses = await Courses.find({ userId: req.headers.id });

				if (!updatedCourses) return res.status(404).end();

				return res.status(400).send(updatedCourses).end();
			}
		}
	} catch (error) {
		res.status(500).send(error.message).end();
	}
});

module.exports = router;
