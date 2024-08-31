const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../errors');

const handleAxiosError = (err) => {
  const { url } = err.config;
  return new NotFoundError(
    `This page ${url} could not be found. Please check the address and try again.`
  );
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.error('ERROR', err);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: 'error',
      message: 'Something went wrong',
    });
  }
};

const errorHandlerMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else {
    let error = { ...err };

    if (error.name === 'AxiosError') error = handleAxiosError(error);

    sendErrorProd(error, res);
  }
};

module.exports = errorHandlerMiddleware;
