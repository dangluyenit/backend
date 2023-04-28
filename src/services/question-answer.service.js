'use strict';

const { dataSource } = require('../config/mssql.config');
const { TABLE } = require('../constants/common.constant');
const { QuestionAnswer } = require('../models/question-answer.model');

class QuestionAnswerService {
  async create({ answer, isCorrect, idQuestion }) {
    const questionAnswerRepository = dataSource.getRepository(
      TABLE.QUESTION_ANSWER
    );
    const questionAnswer = new QuestionAnswer();
    questionAnswer.answer = answer;
    questionAnswer.isCorrect = isCorrect;
    questionAnswer.idQuestion = idQuestion;
    return await questionAnswerRepository.save(questionAnswer);
  }

  async findOne({ id }) {
    const repo = dataSource.getRepository(TABLE.QUESTION_ANSWER);
    try {
      return await repo.findOneBy({ id });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    const repo = dataSource.getRepository(TABLE.QUESTION_ANSWER);
    try {
      return await repo.find();
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new QuestionAnswerService();
