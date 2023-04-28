'use strict';

const {
  STATUS_CODE,
  REASON_STATUS_CODE,
  HEADER,
} = require('../constants/common.constant');
const { ErrorResponse, SuccessResponse } = require('../helpers');
const authAdminService = require('../services/auth-admin.service');

class AuthAdminController {
  async signUp(req, res) {
    const { username, password } = req.body;
    try {
      const { accessToken, refreshToken } = await authAdminService.signUp({
        username,
        password,
      });
      return new SuccessResponse({
        message: 'Created account admin successfully',
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
    const { username, password } = req.body;
    try {
      const { accessToken, refreshToken } = await authAdminService.signIn({
        username,
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
        await authAdminService.handleRefreshToken({
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

module.exports = new AuthAdminController();
