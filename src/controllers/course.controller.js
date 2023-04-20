'use strict';

const { STATUS_CODE } = require('../constants/common.constant');
const { SuccessResponse, ErrorResponse } = require('../helpers');
const CourseService = require('../services/course.service');

class CourseController {
  async create(req, res) {
    const { name, teacherCode } = req.body;

    try {
      return new SuccessResponse({
        message: 'Created a course successfully',
        metadata: await CourseService.create({ name, teacherCode }),
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

module.exports = new CourseController();
