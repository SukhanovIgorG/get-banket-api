const { mongoErrorCode } = require('../constants');

module.exports = class MongoError extends Error {
  constructor(message) {
    super(message);
    this.errorMessage = message;
    this.statusCode = mongoErrorCode;
  }
};
