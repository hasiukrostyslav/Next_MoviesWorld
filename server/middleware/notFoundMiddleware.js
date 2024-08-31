const { NotFoundError } = require('../errors');

const notFound = (req, res, next) => {
  next(new NotFoundError(`This page ${req.originalUrl} could not be found`));
};

module.exports = notFound;
