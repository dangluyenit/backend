'use strict';

const { ErrorResponse, SuccessResponse } = require('../helpers');
const { STATUS_CODE } = require('../constants/common.constant');
const studentQuestionAnswerService = require('../services/student-question-answer.service');

class StudentQuestionAnswerController {
  async create(req, res) {
    const { studentCode, idTestQuestion, idQuestionAnswer } = req.body;
    try {
      return new SuccessResponse({
        message: 'Created student question answer successfully',
        statusCode: STATUS_CODE.CREATED,
        metadata: await studentQuestionAnswerService.create({
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

  async findOne(req, res) {
    const { id } = req.params;
    try {
      const studentQuestionAnswer = await studentQuestionAnswerService.findOne({
        id,
      });
      if (studentQuestionAnswer) {
        return new SuccessResponse({
          message: `Find a student question answer with id ${id} successfully`,
          metadata: studentQuestionAnswer,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a student question answer with id ${id}`,
        statusCode: STATUS_CODE.NOT_FOUND,
      }).send(res);
    } catch (error) {
      return new ErrorResponse({
        message: error.message,
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }

  async findAll(req, res) {
    try {
      return new SuccessResponse({
        message: 'Find all student question answer successfully',
        metadata: await studentQuestionAnswerService.findAll(),
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
