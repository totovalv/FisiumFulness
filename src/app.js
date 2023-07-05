const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoutes');
const blogRouter = require('./routes/blogRoutes');
const typeRouter = require('./routes/typeRoutes');
const commentRouter = require('./routes/commentRoutes');
const registerRouter = require('./routes/registerRoutes');

const app = express();
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/users', userRouter);
app.use('/blogs', blogRouter);
app.use('/types', typeRouter);
app.use('/comments', commentRouter);
app.use('/register', registerRouter);

require('./db');
module.exports = app;
