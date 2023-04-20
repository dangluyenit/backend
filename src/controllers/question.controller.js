'use strict';

const { STATUS_CODE } = require('../constants/common.constant');
const { ErrorResponse, SuccessResponse } = require('../helpers');
const questionService = require('../services/question.service');

class QuestionController {
  async create(req, res) {
    const { content, idBankQuestion } = req.body;

    try {
      return new SuccessResponse({
        message: 'Created question successfully',
        statusCode: STATUS_CODE.CREATED,
        metadata: await questionService.create({ content, idBankQuestion }),
      }).send(res);
    } catch (error) {
      return new ErrorResponse({
        message: error.message,
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }
}

module.exports = new QuestionController();
