'use strict';

const teacherService = require('../services/teacher.service');
const { SuccessResponse, ErrorResponse } = require('../helpers');
const { STATUS_CODE } = require('../constants/common.constant');

class TeacherController {
  async findOne(req, res) {
    const { teacherCode } = req.params;
    try {
      const teacher = await teacherService.findOne({ teacherCode });
      if (teacher) {
        return new SuccessResponse({
          message: `Find a teacher with teacherCode ${teacherCode} successfully`,
          metadata: teacher,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a teacher with teacherCode ${teacherCode}`,
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
        message: 'Find all teacher successfully',
        metadata: await teacherService.findAll(),
      }).send(res);
    } catch (error) {
      return new ErrorResponse({
        message: error.message,
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }

  async delete(req, res) {
    const { teacherCode } = req.params;
    try {
      const deleted = await teacherService.delete({ teacherCode });
      if (deleted) {
        return new SuccessResponse({
          message: `Delete a teacher with teacherCode ${teacherCode} successfully`,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a teacher with teacherCode ${teacherCode}`,
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
    const { name, sex, dob, address, phone, image } = req.body;
    const { teacherCode } = req.params;
    try {
      const teacher = await teacherService.update({
        teacherCode,
        name,
        sex,
        dob,
        address,
        phone,
        image,
      });
      if (teacher) {
        return new SuccessResponse({
          message: `Update a teacher with teacherCode ${teacherCode} successfully`,
          metadata: teacher,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a teacher with teacherCode ${teacherCode}`,
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

module.exports = new TeacherController();
