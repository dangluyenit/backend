'use strict';

const { dataSource } = require('../config/mssql.config');
const { TABLE } = require('../constants/common.constant');
const { TestQuestion } = require('../models/test-question.model');

class TestQuestionService {
  async create({ idTest, idQuestion }) {
    const repo = dataSource.getRepository(TABLE.TEST_QUESTION);
    const testQuestion = new TestQuestion();
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

  async findByIdTest({ id }) {
    const repo = dataSource.getRepository(TABLE.TEST_QUESTION);
    try {
      return await repo.find({
        where: {
          idTest: id,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new TestQuestionService();
