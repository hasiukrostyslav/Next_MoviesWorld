require('dotenv').config();
require('express-async-errors');

const express = require('express');
const cors = require('cors');

const morgan = require('morgan');

const homeRoute = require('./routes/homeRoute');
const moviesRoute = require('./routes/moviesRoute');
const cartoonsRoute = require('./routes/cartoonsRoute');
const showsRoute = require('./routes/showsRoute');
const collectionsRoute = require('./routes/collectionsRoute');
const actorsRoute = require('./routes/actorsRoute');
const userRoute = require('./routes/userRoute');
const viewRoute = require('./routes/viewRoute');
const searchRouter = require('./routes/searchRouter');

const getGenresMiddleware = require('./middleware/getGenresMiddleware');
const notFoundMiddleware = require('./middleware/notFoundMiddleware');
const errorHandlerMiddleware = require('./middleware/errorHandlerMiddleware');

const app = express();

app.use(cors());

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(getGenresMiddleware);

app.use('/', homeRoute);
app.use('/movies', moviesRoute);
app.use('/cartoons', cartoonsRoute);
app.use('/tv', showsRoute);
app.use('/collections', collectionsRoute);
app.use('/actors', actorsRoute);
app.use('/view', viewRoute);
app.use('/search', searchRouter);
app.use('/user', userRoute);

app.all('*', notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;
