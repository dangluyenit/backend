'use strict';

const { STATUS_CODE } = require('../constants/common.constant');
const { SuccessResponse, ErrorResponse } = require('../helpers');
const lessonService = require('../services/lesson.service');

class LessonController {
  async create(req, res) {
    const { name, content, image, video, idCourse } = req.body;
    try {
      return new SuccessResponse({
        message: 'Created a lesson successfully',
        metadata: await lessonService.create({
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

  async findOne(req, res) {
    const { id } = req.params;
    try {
      const lesson = await lessonService.findOne({ id });
      if (lesson) {
        return new SuccessResponse({
          message: `Find a lesson with id ${id} successfully`,
          metadata: lesson,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a lesson with id ${id}`,
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
        message: 'Find all lesson successfully',
        metadata: await lessonService.findAll(),
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
