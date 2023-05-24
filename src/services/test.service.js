'use strict';

const { dataSource } = require('../config/mssql.config');
const { TABLE } = require('../constants/common.constant');
const { Test } = require('../models/test.model');

class TestService {
  async create({ name, teacherCode, quantityQuestion, examDuration }) {
    const repo = dataSource.getRepository(TABLE.TEST);
    const test = new Test();
    test.name = name;
    test.quantityQuestion = quantityQuestion;
    test.teacherCode = teacherCode;
    test.createdTime = new Date().toString();
    this.examDuration = examDuration;
    return await repo.save(test);
  }

  async findOne({ id }) {
    const repo = dataSource.getRepository(TABLE.TEST);
    try {
      return await repo.findOneBy({ id });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    const repo = dataSource.getRepository(TABLE.TEST);
    try {
      return await repo.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete({ id }) {
    const repo = dataSource.getRepository(TABLE.TEST);
    try {
      const test = await this.findOne({ id });
      if (test) return await repo.remove(test);
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update({ id, name, teacherCode, quantityQuestion, examDuration }) {
    const repo = dataSource.getRepository(TABLE.TEST);
    try {
      const test = await this.findOne({ id });
      if (test) {
        test.name = name;
        test.teacherCode = teacherCode;
        test.quantityQuestion = quantityQuestion;
        test.examDuration = examDuration;
        return await repo.save(test);
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new TestService();
