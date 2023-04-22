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

  async findOne(req, res) {
    const { id } = req.params;

    try {
      const bankQuestion = await bankQuestionService.findOne({ id });

      if (bankQuestion) {
        return new SuccessResponse({
          message: `Find a bank question with id ${id} successfully`,
          metadata: bankQuestion,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a bank question with id ${id}`,
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
        message: 'Find all bank question successfully',
        metadata: await bankQuestionService.findAll(),
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
      const deleted = await bankQuestionService.delete({ id });
      if (deleted) {
        return new SuccessResponse({
          message: `Delete a bank question with id ${id} successfully`,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a bank question with id ${id}`,
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
    const { name } = req.body;
    const { id } = req.params;

    console.log(id, name);

    try {
      const bankQuestion = await bankQuestionService.update({ id, name });
      if (bankQuestion) {
        return new SuccessResponse({
          message: `Update a bank question with id ${id} successfully`,
          metadata: bankQuestion,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a bank question with id ${id}`,
        statusCode: STATUS_CODE.NOT_FOUND,
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
