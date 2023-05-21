'use strict';

const { dataSource } = require('../config/mssql.config');
const { TABLE } = require('../constants/common.constant');
const { TestQuestion } = require('../models/test-question.model');
const questionRepository = require('../repositories/question.repository');

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

  async addRandomQuestion({ quantity, idBankQuestion, idTest }) {
    const randomQuestion = await questionRepository.randomQuestion({
      quantity,
      idBankQuestion,
    });

    return await Promise.all(
      randomQuestion.map(async (question) => {
        return await this.create({ idQuestion: question.id, idTest });
      })
    );
  }
}

module.exports = new TestQuestionService();
