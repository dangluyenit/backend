'use strict';

const { ErrorResponse, SuccessResponse } = require('../helpers');
const { STATUS_CODE } = require('../constants/common.constant');
const StudentQuestionAnswerService = require('../services/student-question-answer.service');

class StudentQuestionAnswerController {
  async create(req, res) {
    const { studentCode, idTestQuestion, idQuestionAnswer } = req.body;

    try {
      return new SuccessResponse({
        message: 'Created student question answer successfully',
        statusCode: STATUS_CODE.CREATED,
        metadata: await StudentQuestionAnswerService.create({
          studentCode,
          idTestQuestion,
          idQuestionAnswer,
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

module.exports = new StudentQuestionAnswerController();
