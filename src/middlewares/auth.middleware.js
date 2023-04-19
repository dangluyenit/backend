'use strict';

const jwt = require('jsonwebtoken');
const { HEADER, STATUS_CODE } = require('./../constants/common.constant');
const { ErrorResponse } = require('./../helpers/error.response');

const authentication = (req, res, next) => {
  const token = req.headers[HEADER.AUTHORIZATION];
  // or can be use: req.header(HEADER.AUTHORIZATION)

  if (!token)
    throw new ErrorResponse({
      message: 'unauthorized',
      statusCode: STATUS_CODE.UNAUTHORIZED,
    }).send(res);

  jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
    if (error) {
      throw new ErrorResponse({
        message: 'unauthorized',
        statusCode: STATUS_CODE.UNAUTHORIZED,
      }).send(res);
    }

    req.user = decoded.payload;
  });

  next();
};

const checkPermission = (...role) => {
  return (req, res, next) => {
    const listRole = [...role];
    const user = req.user;

    if (listRole.includes(user.role)) {
      next();
    } else {
      throw new ErrorResponse({
        message: 'permission denied',
        statusCode: STATUS_CODE.FORBIDDEN,
      }).send(res);
    }
  };
};

module.exports = { authentication, checkPermission };
