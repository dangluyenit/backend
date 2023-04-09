'use strict';

const jwt = require('jsonwebtoken');

const createToken = async (payload) => {
  try {
    const accessToken = jwt.sign({ payload }, process.env.JWT_SECRET_KEY, {
      // time expire of token is 10 minutes
      expiresIn: '10m',
    });

    const refreshToken = jwt.sign({ payload }, process.env.JWT_PRIVATE_KEY, {
      // time expire of token is 7 days
      expiresIn: '7 days',
    });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { createToken };
