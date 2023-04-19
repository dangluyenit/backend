'use strict';

const { dataSource } = require('../config/mssql.config');
const { TABLE } = require('../constants/common.constant');
const { Question } = require('../models/question.model');

class QuestionService {
  async create({ content, idBankQuestion }) {
    const questionRepository = dataSource.getRepository(TABLE.QUESTION);

    try {
      const question = new Question();
      question.content = content;
      question.idBankQuestion = idBankQuestion;

      return await questionRepository.save(question);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new QuestionService();
