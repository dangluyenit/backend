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

  async findOne(req, res) {
    const { id } = req.params;
    try {
      const question = await questionService.findOne({ id });
      if (question) {
        return new SuccessResponse({
          message: `Find a question with id ${id} successfully`,
          metadata: question,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a question with id ${id}`,
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
        message: 'Find all question successfully',
        metadata: await questionService.findAll(),
      }).send(res);
    } catch (error) {
      return new ErrorResponse({
        message: error.message,
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const deleted = await questionService.delete({ id });
      if (deleted) {
        return new SuccessResponse({
          message: `Delete a question with id ${id} successfully`,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a question with id ${id}`,
        statusCode: STATUS_CODE.NOT_FOUND,
      }).send(res);
    } catch (error) {
      return new ErrorResponse({
        message: error.message,
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }

  async update(req, res) {
    const { content, idBankQuestion } = req.body;
    const { id } = req.params;
    try {
      const question = await questionService.update({
        id,
        content,
        idBankQuestion,
      });
      if (question) {
        return new SuccessResponse({
          message: `Update a question with id ${id} successfully`,
          metadata: question,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a question with id ${id}`,
        statusCode: STATUS_CODE.NOT_FOUND,
      }).send(res);
    } catch (error) {
      return new ErrorResponse({
        message: error.message,
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }

  async findByIdBankQuestion(req, res) {
    const { id } = req.params;
    try {
      return new SuccessResponse({
        message: `Find question by id bank question ${id} successfully`,
        metadata: await questionService.findByIdBankQuestion({ id }),
      }).send(res);
    } catch (error) {
      return new ErrorResponse({
        message: error.message,
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }

  async findAnswer(req, res) {
    const { id } = req.params;
    try {
      return new SuccessResponse({
        message: `Find answer by id question ${id} successfully`,
        metadata: await questionService.findAnswer({ id }),
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
