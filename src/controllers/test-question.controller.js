'use strict';

const { ErrorResponse, SuccessResponse } = require('../helpers');
const { STATUS_CODE } = require('../constants/common.constant');
const testQuestionService = require('../services/test-question.service');

class TestQuestionController {
  async create(req, res) {
    const { studentCode, idTest, idQuestion } = req.body;
    try {
      return new SuccessResponse({
        message: 'Created test question successfully',
        statusCode: STATUS_CODE.CREATED,
        metadata: await testQuestionService.create({
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

  async findOne(req, res) {
    const { id } = req.params;
    try {
      const testQuestion = await testQuestionService.findOne({
        id,
      });
      if (testQuestion) {
        return new SuccessResponse({
          message: `Find a test question with id ${id} successfully`,
          metadata: testQuestion,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a test question with id ${id}`,
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
        message: 'Find all test question successfully',
        metadata: await testQuestionService.findAll(),
      }).send(res);
    } catch (error) {
      return new ErrorResponse({
        message: error.message,
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }

  async findByIdTest(req, res) {
    const { id } = req.params;
    try {
      return new SuccessResponse({
        message: `Find test question by id test ${id} successfully`,
        metadata: await testQuestionService.findByIdTest({ id }),
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
