'use strict';

const {
  STATUS_CODE,
  REASON_STATUS_CODE,
} = require('./../constants/common.constant');

class SuccessResponse {
  constructor({
    message,
    statusCode = STATUS_CODE.OK,
    reasonStatusCode = REASON_STATUS_CODE.OK,
    metadata = {},
  }) {
    this.message = message || reasonStatusCode;
    this.statusCode = statusCode;
    this.metadata = metadata;
  }

  send(res) {
    return res.status(this.statusCode).json(this);
  }
}

module.exports = { SuccessResponse };
