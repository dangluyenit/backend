'use strict';

const TestService = require('../services/test.service');
const { SuccessResponse } = require('../helpers/success.response');
const { ErrorResponse } = require('../helpers/error.response');
const { STATUS_CODE } = require('../constants/common.constant');

class TestController {
  async create(req, res) {
    const { name, teacherCode, quantityQuestion } = req.body;
    try {
      return new SuccessResponse({
        message: 'Created test successfully',
        metadata: await TestService.create({
          name,
          teacherCode,
          quantityQuestion,
        }),
        statusCode: STATUS_CODE.CREATED,
      }).send(res);
    } catch (error) {
      return new ErrorResponse({
        message: error.message,
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }
}

module.exports = new TestController();
