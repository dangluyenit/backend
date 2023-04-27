'use strict';

const testService = require('../services/test.service');
const { ErrorResponse, SuccessResponse } = require('../helpers');
const { STATUS_CODE } = require('../constants/common.constant');

class TestController {
  async create(req, res) {
    const { name, teacherCode, quantityQuestion } = req.body;
    try {
      return new SuccessResponse({
        message: 'Created test successfully',
        metadata: await testService.create({
          name,
          teacherCode,
          quantityQuestion,
        }),
        statusCode: STATUS_CODE.CREATED,
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
      const test = await testService.findOne({
        id,
      });
      if (test) {
        return new SuccessResponse({
          message: `Find a test with id ${id} successfully`,
          metadata: test,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a test with id ${id}`,
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
        message: 'Find all test successfully',
        metadata: await testService.findAll(),
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
      const deleted = await testService.delete({ id });
      if (deleted) {
        return new SuccessResponse({
          message: `Delete a test with id ${id} successfully`,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a test with id ${id}`,
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
    const { name, teacherCode, quantityQuestion } = req.body;
    const { id } = req.params;
    try {
      const test = await testService.update({
        id,
        name,
        teacherCode,
        quantityQuestion,
      });
      if (test) {
        return new SuccessResponse({
          message: `Update a test with id ${id} successfully`,
          metadata: test,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a test with id ${id}`,
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

module.exports = new TestController();
