const { StatusCodes } = require('http-status-codes');

class NotFoundError extends Error {
  constructor(message) {
    super(message);

    this.statusCode = StatusCodes.NOT_FOUND;
    this.status = 'fail';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = NotFoundError;
