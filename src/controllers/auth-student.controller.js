'use strict';

const {
  STATUS_CODE,
  REASON_STATUS_CODE,
  HEADER,
} = require('./../constants/common.constant');
const { ErrorResponse, SuccessResponse } = require('../helpers');
const AuthService = require('./../services/auth-student.service');

class AuthStudentController {
  async signUp(req, res) {
    const { email, password, studentCode } = req.body;

    try {
      const { accessToken, refreshToken } = await AuthService.signUp({
        email,
        password,
        studentCode,
      });

      return new SuccessResponse({
        message: 'Created account student successfully',
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
      const { accessToken, refreshToken } = await AuthService.signIn({
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
        await AuthService.handleRefreshToken({ _refreshToken, _accessToken });

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

module.exports = new AuthStudentController();
