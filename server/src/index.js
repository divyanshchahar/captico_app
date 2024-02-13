const express = require('express');
const mongoose = require('mongoose');
const registrationRouter = require('./routes/registrationRoute');
const loginRouter = require('./routes/loginRoute');
const logoutRouter = require('./routes/logoutRoute');
const refreshTokenAuthRouter = require('./routes/refreshTokenAuth');
const coursesRouter = require('./routes/corsesRoute');

const cors = require('cors');

const corsConfig = {
	origin: 'http://localhost:3000',
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	credentials: true,
};

require('dotenv').config();

const app = express();

app.use(cors(corsConfig));
app.use(express.json());

app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/refrshAuth', refreshTokenAuthRouter);
app.use('/courses', coursesRouter);

mongoose.connect(process.env.DATABASE).catch((error) => {
	console.log(error);
});

app.listen(process.env.PORT, () => {
	console.log(`app is listening on port ${process.env.PORT}`);
});
