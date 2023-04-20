'use strict';

const ScoreService = require('../services/score.service');
const { SuccessResponse, ErrorResponse } = require('../helpers');
const { STATUS_CODE } = require('../constants/common.constant');

class ScoreController {
  async create(req, res) {
    const { idTest, studentCode, score } = req.body;

    try {
      return new SuccessResponse({
        message: 'Created a score successfully',
        metadata: await ScoreService.create({ idTest, studentCode, score }),
        statusCode: STATUS_CODE.CREATED,
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
