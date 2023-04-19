'use strict';

class StudentQuestionAnswer {
  constructor(id, answer, isCorrect, studentCode, idTestQuestion) {
    this.id = id;
    this.answer = answer;
    this.isCorrect = isCorrect;
    this.studentCode = studentCode;
    this.idTestQuestion = idTestQuestion;
  }
}
