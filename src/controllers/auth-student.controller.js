'use strict';

const {
  STATUS_CODE,
  REASON_STATUS_CODE,
} = require('./../constants/common.constant');
const { SuccessResponse } = require('./../helpers/success.response');
const { ErrorResponse } = require('./../helpers/error.response');
const AuthService = require('./../services/auth-student.service');

class AuthStudentController {
  async signUp(req, res) {
    const { email, password, code } = req.body;

    try {
      const { student, accessToken, refreshToken } = await AuthService.signUp({
        email,
        password,
        code,
      });

      return new SuccessResponse({
        message: 'Created account student successfully',
        statusCode: STATUS_CODE.CREATED,
        reasonStatusCode: REASON_STATUS_CODE.CREATED,
        metadata: { student, accessToken, refreshToken },
      }).send(res);
    } catch (error) {
      return new ErrorResponse({
        message: error.message,
        statusCode: error.statusCode || STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }
}

module.exports = new AuthStudentController();
