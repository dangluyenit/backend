'use strict';

const { dataSource } = require('../config/mssql.config');
const { TABLE } = require('../constants/common.constant');
const {
  StudentQuestionAnswer,
} = require('../models/student-question-answer.model');

class StudentQuestionAnswerService {
  async create({ studentCode, idTestQuestion, idQuestionAnswer }) {
    const repo = dataSource.getRepository(TABLE.STUDENT_QUESTION_ANSWER);

    const studentQuestionAnswer = new StudentQuestionAnswer();
    studentQuestionAnswer.studentCode = studentCode;
    studentQuestionAnswer.idTestQuestion = idTestQuestion;
    studentQuestionAnswer.idQuestionAnswer = idQuestionAnswer;

    return await repo.save(studentQuestionAnswer);
  }
}

module.exports = new StudentQuestionAnswerService();
