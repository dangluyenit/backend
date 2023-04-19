'use strict';

const { dataSource } = require('../config/mssql.config');
const { TABLE } = require('../constants/common.constant');
const { BankQuestion } = require('../models/bank-question.model');

class BankQuestionService {
  async create({ name }) {
    const bankQuestionRepository = dataSource.getRepository(
      TABLE.BANK_QUESTION
    );

    try {
      const bankQuestion = new BankQuestion();
      bankQuestion.name = name;

      return await bankQuestionRepository.save(bankQuestion);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new BankQuestionService();
