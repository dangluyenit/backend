'use strict';

const studentService = require('../services/student.service');
const { SuccessResponse, ErrorResponse } = require('../helpers');
const { STATUS_CODE } = require('../constants/common.constant');

class StudentController {
  async findOne(req, res) {
    const { studentCode } = req.params;
    try {
      const student = await studentService.findOne({ studentCode });
      if (student) {
        return new SuccessResponse({
          message: `Find a student with studentCode ${studentCode} successfully`,
          metadata: student,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a student with studentCode ${studentCode}`,
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
        message: 'Find all student successfully',
        metadata: await studentService.findAll(),
      }).send(res);
    } catch (error) {
      return new ErrorResponse({
        message: error.message,
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }

  async delete(req, res) {
    const { studentCode } = req.params;
    try {
      const deleted = await studentService.delete({ studentCode });
      if (deleted) {
        return new SuccessResponse({
          message: `Delete a student with studentCode ${studentCode} successfully`,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a student with studentCode ${studentCode}`,
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
    const { name, sex, dob, address, phone } = req.body;
    const image = req.file;
    const { studentCode } = req.params;
    try {
      const student = await studentService.update({
        studentCode,
        name,
        sex,
        dob,
        address,
        phone,
        image,
      });
      if (student) {
        return new SuccessResponse({
          message: `Update a student with studentCode ${studentCode} successfully`,
          metadata: student,
        }).send(res);
      }
      return new ErrorResponse({
        message: `Not found a student with studentCode ${studentCode}`,
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

module.exports = new StudentController();
