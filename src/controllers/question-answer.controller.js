'use strict';

const { SuccessResponse } = require('../helpers/success.response');
const { ErrorResponse } = require('../helpers/error.response');
const { STATUS_CODE } = require('../constants/common.constant');
const questionAnswerService = require('../services/question-answer.service');

class QuestionAnswerController {
  async create(req, res) {
    const { answer, isCorrect, idQuestion } = req.body;

    try {
      return new SuccessResponse({
        message: 'Created question answer successfully',
        metadata: await questionAnswerService.create({
          answer,
          isCorrect,
          idQuestion,
        }),
        statusCode: STATUS_CODE.CREATED,
      }).send(res);
    } catch (error) {
      throw new ErrorResponse({
        message: error.message,
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }
}

module.exports = new QuestionAnswerController();
