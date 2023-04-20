'use strict';

const { STATUS_CODE } = require('../constants/common.constant');
const { SuccessResponse, ErrorResponse } = require('../helpers');
const JoinCourseService = require('../services/join-course.service');

class JoinCourseController {
  async create(req, res) {
    const { idCourse, studentCode } = req.body;

    try {
      return new SuccessResponse({
        message: 'Created a join course successfully',
        metadata: await JoinCourseService.create({ idCourse, studentCode }),
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

module.exports = new JoinCourseController();
