'use strict';

const bcrypt = require('bcrypt');
const { table, STATUS_CODE } = require('./../constants/common.constant');
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
        role: 'STUDENT',
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
        role: 'STUDENT',
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
}

module.exports = AuthStudentService;
