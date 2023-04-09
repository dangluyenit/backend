'use strict';

const bcrypt = require('bcrypt');
const { table, STATUS_CODE } = require('./../constants/common.constant');
const { dataSource } = require('./../config/mssql.config');
const { createToken } = require('./../utils/auth.util');
const { ErrorResponse } = require('./../helpers/error.response');

class AuthStudentService {
  static signUp = async ({ email, password, code }) => {
    const passwordHash = await bcrypt.hash(password, 10);

    const studentRepository = dataSource.getRepository(table.STUDENT);
    const student = await studentRepository.findBy({ email });
    // student is array
    if (student.length > 0) {
      throw new ErrorResponse({
        message: 'Email already exists',
        statusCode: STATUS_CODE.BAD_REQUEST,
      });
    }

    try {
      await studentRepository.insert({
        email,
        password: passwordHash,
        code,
      });

      const { accessToken, refreshToken } = await createToken({ email });

      return { accessToken, refreshToken };
    } catch (error) {
      if (error.message.includes('duplicate key')) {
        throw new ErrorResponse({
          message: 'Student code already exists',
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
      const { accessToken, refreshToken } = await createToken({ email });

      return { accessToken, refreshToken };
    } catch (error) {
      throw new Error(error);
    }
  };
}

module.exports = AuthStudentService;
