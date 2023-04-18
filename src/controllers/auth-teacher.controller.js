'use strict';

const {
  STATUS_CODE,
  REASON_STATUS_CODE,
  HEADER,
} = require('../constants/common.constant');
const { SuccessResponse } = require('../helpers/success.response');
const { ErrorResponse } = require('../helpers/error.response');
const AuthTeacherService = require('../services/auth-teacher.service');

class AuthTeacherController {
  async signUp(req, res) {
    const { email, password, teacherCode } = req.body;

    try {
      const { accessToken, refreshToken } = await AuthTeacherService.signUp({
        email,
        password,
        teacherCode,
      });

      return new SuccessResponse({
        message: 'Created account teacher successfully',
        statusCode: STATUS_CODE.CREATED,
        reasonStatusCode: REASON_STATUS_CODE.CREATED,
        metadata: { accessToken, refreshToken },
      }).send(res);
    } catch (error) {
      return new ErrorResponse({
        message: error.message,
        statusCode: error.statusCode || STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }

  async signIn(req, res) {
    const { email, password } = req.body;

    try {
      const { accessToken, refreshToken } = await AuthTeacherService.signIn({
        email,
        password,
      });

      return new SuccessResponse({
        message: 'Sign in successfully',
        metadata: { accessToken, refreshToken },
      }).send(res);
    } catch (error) {
      return new ErrorResponse({
        message: error.message,
        statusCode: error.statusCode || STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }

  async refreshToken(req, res) {
    try {
      const _refreshToken = req.headers[HEADER.REFRESH_TOKEN];
      const _accessToken = req.headers[HEADER.AUTHORIZATION];

      const { accessToken, refreshToken } =
        await AuthTeacherService.handleRefreshToken({
          _refreshToken,
          _accessToken,
        });

      return new SuccessResponse({
        message: 'Refresh token successfully',
        metadata: { accessToken, refreshToken },
      }).send(res);
    } catch (error) {
      return new ErrorResponse({
        message: error.message,
        statusCode: error.statusCode || STATUS_CODE.INTERNAL_SERVER_ERROR,
      }).send(res);
    }
  }
}

module.exports = new AuthTeacherController();
