const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const bodyParser = require('body-parser');

const {
  blogRouter,
  commentRouter,
  productRouter,
  registerRouter,
  typeRouter,
  userRouter,
} = require('./routes/index.js');

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
app.use('/products', productRouter);

require('./db');
module.exports = app;
