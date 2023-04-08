'use strict';

class StudentQuestionAnswer {
  constructor(id, answer, isCorrect, studentCode, idTestQuestion) {
    this._id = id;
    this._answer = answer;
    this._isCorrect = isCorrect;
    this._studentCode = studentCode;
    this._idTestQuestion = idTestQuestion;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    return (this._id = id);
  }

  get answer() {
    return this._answer;
  }

  set answer(answer) {
    return (this._answer = answer);
  }

  get isCorrect() {
    return this._isCorrect;
  }

  set isCorrect(isCorrect) {
    return (this._isCorrect = isCorrect);
  }

  get studentCode() {
    return this._studentCode;
  }

  set studentCode(studentCode) {
    return (this._studentCode = studentCode);
  }

  get idTestQuestion() {
    return this._idTestQuestion;
  }

  set idTestQuestion(idTestQuestion) {
    return (this._idTestQuestion = idTestQuestion);
  }
}
