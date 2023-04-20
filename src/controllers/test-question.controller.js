'use strict';

const { ErrorResponse, SuccessResponse } = require('../helpers');
const { STATUS_CODE } = require('../constants/common.constant');
const TestQuestionService = require('../services/test-question.service');

class TestQuestionController {
  async create(req, res) {
    const { studentCode, idTest, idQuestion } = req.body;

    try {
      return new SuccessResponse({
        message: 'Created test question successfully',
        statusCode: STATUS_CODE.CREATED,
        metadata: await TestQuestionService.create({
          studentCode,
          idTest,
          idQuestion,
        }),
      }).send(res);
    } catch (error) {
      return new ErrorResponse({
        message: error.message,
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }
}

module.exports = new TestQuestionController();
