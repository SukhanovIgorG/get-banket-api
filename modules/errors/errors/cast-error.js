const { castErrorCode } = require('../constants');

module.exports = class CastError extends Error {
  constructor(message) {
    super(message);
    this.errorMessage = message;
    this.statusCode = castErrorCode;
  }
};
