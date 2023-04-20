'use strict';

const { STATUS_CODE } = require('../constants/common.constant');
const { ErrorResponse, SuccessResponse } = require('../helpers');
const bankQuestionService = require('../services/bank-question.service');

class BankQuestionController {
  async create(req, res) {
    const { name } = req.body;

    try {
      return new SuccessResponse({
        message: 'Created bank question successfully',
        statusCode: STATUS_CODE.CREATED,
        metadata: await bankQuestionService.create({ name }),
      }).send(res);
    } catch (error) {
      return new ErrorResponse({
        message: error.message,
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }
}

module.exports = new BankQuestionController();
