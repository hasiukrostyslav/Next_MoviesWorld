const { StatusCodes } = require('http-status-codes');

const getCurrentUser = (req, res, next) => {
  res.status(StatusCodes.OK).send('Current user');
};

module.exports = { getCurrentUser };
