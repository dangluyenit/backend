'use strict';

const { STATUS_CODE } = require('../constants/common.constant');
const { SuccessResponse, ErrorResponse } = require('../helpers');
const courseService = require('../services/course.service');
const lessonService = require('../services/lesson.service');

class CourseController {
  async create(req, res) {
    const { name, teacherCode } = req.body;
    try {
      return new SuccessResponse({
        message: 'Created a course successfully',
        metadata: await courseService.create({ name, teacherCode }),
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
      const course = await courseService.findOne({ id });
      if (course) {
        return new SuccessResponse({
          message: `Find a course with id ${id} successfully`,
          metadata: course,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a course with id ${id}`,
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
        message: 'Find all course successfully',
        metadata: await courseService.findAll(),
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
      const deleted = await courseService.delete({ id });
      if (deleted) {
        return new SuccessResponse({
          message: `Delete a course with id ${id} successfully`,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a course with id ${id}`,
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
    const { name, teacherCode } = req.body;
    const { id } = req.params;
    try {
      const course = await courseService.update({ id, name, teacherCode });
      if (course) {
        return new SuccessResponse({
          message: `Update a course with id ${id} successfully`,
          metadata: course,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a course with id ${id}`,
        statusCode: STATUS_CODE.NOT_FOUND,
      }).send(res);
    } catch (error) {
      return new ErrorResponse({
        message: error.message,
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }

  async getLessonByIdCourse(req, res) {
    const { id } = req.params;
    try {
      return new SuccessResponse({
        message: `Find lesson by id course ${id} successfully`,
        metadata: await lessonService.getLessonByIdCourse({ id }),
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
