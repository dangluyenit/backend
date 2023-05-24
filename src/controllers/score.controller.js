'use strict';

const scoreService = require('../services/score.service');
const { SuccessResponse, ErrorResponse } = require('../helpers');
const { STATUS_CODE } = require('../constants/common.constant');

class ScoreController {
  async create(req, res) {
    const { idTest, studentCode, score } = req.body;
    try {
      return new SuccessResponse({
        message: 'Created a score successfully',
        metadata: await scoreService.create({ idTest, studentCode, score }),
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
      const score = await scoreService.findOne({ id });
      if (score) {
        return new SuccessResponse({
          message: `Find a score with id ${id} successfully`,
          metadata: score,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a score with id ${id}`,
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
        message: 'Find all score successfully',
        metadata: await scoreService.findAll(),
      }).send(res);
    } catch (error) {
      return new ErrorResponse({
        message: error.message,
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }

  async findByStudentCode(req, res) {
    const { studentCode } = req.params;
    try {
      return new SuccessResponse({
        message: `Find score by studentCode ${studentCode} successfully`,
        metadata: await scoreService.findByStudentCode({ studentCode }),
      }).send(res);
    } catch (error) {
      return new ErrorResponse({
        message: error.message,
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }
}

module.exports = new ScoreController();
