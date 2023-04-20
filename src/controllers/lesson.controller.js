'use strict';

const { STATUS_CODE } = require('../constants/common.constant');
const { SuccessResponse, ErrorResponse } = require('../helpers');
const LessonService = require('../services/lesson.service');

class LessonController {
  async create(req, res) {
    const { name, content, image, video, idCourse } = req.body;

    try {
      return new SuccessResponse({
        message: 'Created a lesson successfully',
        metadata: await LessonService.create({
          name,
          content,
          image,
          video,
          idCourse,
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
}

module.exports = new LessonController();
