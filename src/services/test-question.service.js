'use strict';

const { dataSource } = require('../config/mssql.config');
const { TABLE } = require('../constants/common.constant');
const { TestQuestion } = require('../models/test-question.model');

class TestQuestionService {
  async create({ studentCode, idTest, idQuestion }) {
    const repo = dataSource.getRepository(TABLE.TEST_QUESTION);
    const testQuestion = new TestQuestion();
    testQuestion.studentCode = studentCode;
    testQuestion.idQuestion = idQuestion;
    testQuestion.idTest = idTest;
    return await repo.save(testQuestion);
  }

  async findOne({ id }) {
    const repo = dataSource.getRepository(TABLE.TEST_QUESTION);
    try {
      return await repo.findOneBy({ id });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    const repo = dataSource.getRepository(TABLE.TEST_QUESTION);
    try {
      return await repo.find();
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new TestQuestionService();
