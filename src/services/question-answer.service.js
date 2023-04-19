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
}

module.exports = new QuestionAnswerService();
