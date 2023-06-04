'use strict';

const { STATUS_CODE } = require('../constants/common.constant');
const { SuccessResponse, ErrorResponse } = require('../helpers');
const joinCourseService = require('../services/join-course.service');

class JoinCourseController {
  async create(req, res) {
    const { idCourse, studentCode } = req.body;
    try {
      return new SuccessResponse({
        message: 'Created a join course successfully',
        metadata: await joinCourseService.create({ idCourse, studentCode }),
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
      const course = await joinCourseService.findOne({ id });
      if (course) {
        return new SuccessResponse({
          message: `Find a join course with id ${id} successfully`,
          metadata: course,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a join course with id ${id}`,
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
        message: 'Find all join course successfully',
        metadata: await joinCourseService.findAll(),
      }).send(res);
    } catch (error) {
      return new ErrorResponse({
        message: error.message,
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }

  async findByIdCourse(req, res) {
    const { id } = req.params;
    try {
      return new SuccessResponse({
        message: `Find join course by idCourse ${id} successfully`,
        metadata: await joinCourseService.findByIdCourse({ id }),
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
