'use strict';

const { ErrorResponse, SuccessResponse } = require('../helpers');
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

  async findOne(req, res) {
    const { id } = req.params;
    try {
      const questionAnswer = await questionAnswerService.findOne({ id });
      if (questionAnswer) {
        return new SuccessResponse({
          message: `Find a question answer with id ${id} successfully`,
          metadata: questionAnswer,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a question answer with id ${id}`,
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
        message: 'Find all question answer successfully',
        metadata: await questionAnswerService.findAll(),
      }).send(res);
    } catch (error) {
      return new ErrorResponse({
        message: error.message,
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }

  async findByIdQuestion(req, res) {
    const { id } = req.params;
    try {
      return new SuccessResponse({
        message: `Find all question answer by id question ${id} successfully`,
        metadata: await questionAnswerService.findByIdQuestion({
          id,
        }),
      }).send(res);
    } catch (error) {
      return new ErrorResponse({
        message: error.message,
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }

  async checkAnswers(req, res) {
    const { idTest, answers, studentCode } = req.body;
    try {
      return new SuccessResponse({
        message: `Check answers and save score for studentCode ${studentCode} successfully`,
        metadata: await questionAnswerService.checkAnswers({
          idTest,
          answers,
          studentCode,
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

module.exports = new QuestionAnswerController();
