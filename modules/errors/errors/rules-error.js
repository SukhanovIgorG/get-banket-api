const { rulesErrorCode } = require('../constants');

module.exports = class RulesError extends Error {
  constructor(message) {
    super(message);
    this.errorMessage = message;
    this.statusCode = rulesErrorCode;
  }
};
