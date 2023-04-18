'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { table, STATUS_CODE, ROLE } = require('../constants/common.constant');
const { dataSource } = require('../config/mssql.config');
const { createToken } = require('../utils/auth.util');
const { ErrorResponse } = require('../helpers/error.response');

class AuthTeacherService {
  static signUp = async ({ email, password, teacherCode }) => {
    const passwordHash = await bcrypt.hash(password, 10);

    const teacherRepository = dataSource.getRepository(table.TEACHER);
    try {
      await teacherRepository.insert({
        email,
        password: passwordHash,
        teacherCode,
      });

      const { accessToken, refreshToken } = await createToken({
        email,
        teacherCode,
        role: ROLE.TEACHER,
      });

      const tokenRepository = dataSource.getRepository(table.TOKEN);
      await tokenRepository.insert({
        refreshToken,
        teacherCode,
      });

      return { accessToken, refreshToken };
    } catch (error) {
      if (error.message.includes('PRIMARY KEY')) {
        throw new ErrorResponse({
          message: 'Teacher code already exists',
          statusCode: STATUS_CODE.BAD_REQUEST,
        });
      } else if (error.message.includes('UNIQUE KEY')) {
        throw new ErrorResponse({
          message: 'Email already exists',
          statusCode: STATUS_CODE.BAD_REQUEST,
        });
      }
      throw new Error(error);
    }
  };

  static signIn = async ({ email, password }) => {
    const teacherRepository = dataSource.getRepository(table.TEACHER);
    const teacher = await teacherRepository.findOneBy({ email });

    if (!teacher) {
      throw new ErrorResponse({
        message: 'Email or password is incorrect',
        statusCode: STATUS_CODE.BAD_REQUEST,
      });
    }

    const match = await bcrypt.compare(password, teacher.password);

    if (!match) {
      throw new ErrorResponse({
        message: 'Email or password is incorrect',
        statusCode: STATUS_CODE.BAD_REQUEST,
      });
    }

    try {
      const { accessToken, refreshToken } = await createToken({
        email,
        teacherCode: teacher.teacherCode,
        role: ROLE.TEACHER,
      });

      const tokenRepository = dataSource.getRepository(table.TOKEN);
      await tokenRepository.insert({
        refreshToken,
        teacherCode: teacher.teacherCode,
      });

      return { accessToken, refreshToken };
    } catch (error) {
      throw new Error(error);
    }
  };

  static handleRefreshToken = async ({ _refreshToken, _accessToken }) => {
    jwt.verify(_accessToken, process.env.JWT_SECRET_KEY, (error, _) => {
      if (error && error.message !== 'jwt expired') {
        throw new ErrorResponse({
          message: 'unauthorized',
          statusCode: STATUS_CODE.UNAUTHORIZED,
        });
      }
    });

    if (!_refreshToken) {
      throw new ErrorResponse({
        message: 'unauthorized',
        statusCode: STATUS_CODE.UNAUTHORIZED,
      });
    }

    let decoded = null;

    try {
      decoded = jwt.verify(_refreshToken, process.env.JWT_PRIVATE_KEY);
    } catch (error) {
      throw new ErrorResponse({
        message: 'unauthorized',
        statusCode: STATUS_CODE.UNAUTHORIZED,
      });
    }

    const tokenRepository = dataSource.getRepository(table.TOKEN);
    // get list refresh token by teacher code
    const listRefreshToken = await tokenRepository.find({
      where: {
        teacherCode: decoded.payload.teacherCode,
      },
    });

    // check refresh token it is valid or not, it valid when refresh token is exist in database
    let refreshTokenExist = false;

    listRefreshToken.forEach((refreshToken) => {
      if (refreshToken.refreshToken === _refreshToken) {
        return (refreshTokenExist = true);
      }
    });

    if (refreshTokenExist) {
      // remove old refresh token
      await tokenRepository.delete({ refreshToken: _refreshToken });

      const { accessToken, refreshToken } = await createToken(decoded.payload);

      // insert new refresh token
      await tokenRepository.insert({
        refreshToken,
        teacherCode: decoded.payload.teacherCode,
      });

      return { accessToken, refreshToken };
    } else {
      throw new ErrorResponse({
        message: 'unauthorized',
        statusCode: STATUS_CODE.UNAUTHORIZED,
      });
    }
  };
}

module.exports = AuthTeacherService;
