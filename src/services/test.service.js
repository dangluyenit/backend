'use strict';

const { dataSource } = require('../config/mssql.config');
const { TABLE } = require('../constants/common.constant');
const { Test } = require('../models/test.model');

class TestService {
  async create({ name, teacherCode, quantityQuestion }) {
    const repo = dataSource.getRepository(TABLE.TEST);

    const test = new Test();
    test.name = name;
    test.quantityQuestion = quantityQuestion;
    test.teacherCode = teacherCode;
    test.createdTime = new Date().toString();

    return await repo.save(test);
  }
}

module.exports = new TestService();
