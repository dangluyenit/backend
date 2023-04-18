'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { table, STATUS_CODE, ROLE } = require('./../constants/common.constant');
const { dataSource } = require('./../config/mssql.config');
const { createToken } = require('./../utils/auth.util');
const { ErrorResponse } = require('./../helpers/error.response');

class AuthStudentService {
  static signUp = async ({ email, password, studentCode }) => {
    const passwordHash = await bcrypt.hash(password, 10);

    const studentRepository = dataSource.getRepository(table.STUDENT);
    try {
      await studentRepository.insert({
        email,
        password: passwordHash,
        studentCode,
      });

      const { accessToken, refreshToken } = await createToken({
        email,
        studentCode,
        role: ROLE.STUDENT,
      });

      const tokenRepository = dataSource.getRepository(table.TOKEN);
      await tokenRepository.insert({
        refreshToken,
        studentCode,
      });

      return { accessToken, refreshToken };
    } catch (error) {
      if (error.message.includes('PRIMARY KEY')) {
        throw new ErrorResponse({
          message: 'Student code already exists',
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
    const studentRepository = dataSource.getRepository(table.STUDENT);
    const student = await studentRepository.findOneBy({ email });

    if (!student) {
      throw new ErrorResponse({
        message: 'Email or password is incorrect',
        statusCode: STATUS_CODE.BAD_REQUEST,
      });
    }

    const match = await bcrypt.compare(password, student.password);

    if (!match) {
      throw new ErrorResponse({
        message: 'Email or password is incorrect',
        statusCode: STATUS_CODE.BAD_REQUEST,
      });
    }

    try {
      const { accessToken, refreshToken } = await createToken({
        email,
        studentCode: student.studentCode,
        role: ROLE.STUDENT,
      });

      const tokenRepository = dataSource.getRepository(table.TOKEN);
      await tokenRepository.insert({
        refreshToken,
        studentCode: student.studentCode,
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
    // get list refresh token by student code
    const listRefreshToken = await tokenRepository.find({
      where: {
        studentCode: decoded.payload.studentCode,
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
        studentCode: decoded.payload.studentCode,
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

module.exports = AuthStudentService;
