'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { TABLE, STATUS_CODE, ROLE } = require('../constants/common.constant');
const { dataSource } = require('../config/mssql.config');
const { createToken } = require('../utils/auth.util');
const { ErrorResponse } = require('../helpers/error.response');

class AuthAdminService {
  static signUp = async ({ username, password }) => {
    const passwordHash = await bcrypt.hash(password, 10);

    const adminRepository = dataSource.getRepository(TABLE.ADMIN);
    try {
      await adminRepository.insert({
        username,
        password: passwordHash,
      });

      const { accessToken, refreshToken } = await createToken({
        username,
        role: ROLE.ADMIN,
      });

      const tokenRepository = dataSource.getRepository(TABLE.TOKEN);
      await tokenRepository.insert({
        refreshToken,
        adminUsername: username,
      });

      return { accessToken, refreshToken };
    } catch (error) {
      if (error.message.includes('PRIMARY KEY')) {
        throw new ErrorResponse({
          message: 'Username already exists',
          statusCode: STATUS_CODE.BAD_REQUEST,
        });
      }
      throw new Error(error);
    }
  };

  static signIn = async ({ username, password }) => {
    const adminRepository = dataSource.getRepository(TABLE.ADMIN);
    const admin = await adminRepository.findOneBy({ username });

    if (!admin) {
      throw new ErrorResponse({
        message: 'Username or password is incorrect',
        statusCode: STATUS_CODE.BAD_REQUEST,
      });
    }

    const match = await bcrypt.compare(password, admin.password);

    if (!match) {
      throw new ErrorResponse({
        message: 'Username or password is incorrect',
        statusCode: STATUS_CODE.BAD_REQUEST,
      });
    }

    try {
      const { accessToken, refreshToken } = await createToken({
        username,
        role: ROLE.ADMIN,
      });

      const tokenRepository = dataSource.getRepository(TABLE.TOKEN);
      await tokenRepository.insert({
        refreshToken,
        adminUsername: username,
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

    const username = decoded.payload.username;

    const tokenRepository = dataSource.getRepository(TABLE.TOKEN);
    // get list refresh token by student code
    const listRefreshToken = await tokenRepository
      .createQueryBuilder()
      .where('adminUsername = :username', { username })
      .getMany()
      .catch((error) => console.log(error));

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
        adminUsername: username,
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

module.exports = AuthAdminService;
