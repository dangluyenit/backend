'use strict';

class ErrorResponse {
  constructor({ message, statusCode }) {
    this.message = message;
    this.statusCode = statusCode;
  }

  send(res) {
    return res.status(this.statusCode).json(this);
  }
}

module.exports = { ErrorResponse };
