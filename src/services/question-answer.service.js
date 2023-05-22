'use strict';

const { dataSource } = require('../config/mssql.config');
const { TABLE } = require('../constants/common.constant');
const { QuestionAnswer } = require('../models/question-answer.model');
const testQuestionService = require('../services/test-question.service');
const scoreQuestionService = require('../services/score.service');
const scoreService = require('../services/score.service');

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

  async findByIdQuestion({ id }) {
    const repo = dataSource.getRepository(TABLE.QUESTION_ANSWER);
    try {
      return await repo.find({
        where: {
          idQuestion: id,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async scoreCalculation({ idTest, answers, studentCode }) {
    const listQuestion = await testQuestionService.findByIdTest({ id: idTest });

    const res = await Promise.all(
      listQuestion.map(async (question) => {
        return await this.findByIdQuestion({ id: question.idQuestion });
      })
    );

    // score of one correct answer
    const scoreOneCorrectAnswer = Number((10 / listQuestion.length).toFixed(1));
    console.log(scoreOneCorrectAnswer);
    let score = 0;
    res.map((questionAnswers) => {
      answers.map((answer) => {
        questionAnswers.map((questionAnswer) => {
          if (
            answer.id.toUpperCase() === questionAnswer.id &&
            questionAnswer.isCorrect
          ) {
            score += scoreOneCorrectAnswer;
          }
        });
      });
    });

    return await scoreService.create({ idTest, studentCode, score });
  }
}

module.exports = new QuestionAnswerService();
