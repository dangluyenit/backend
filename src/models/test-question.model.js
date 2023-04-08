'use strict';

class TestQuestion {
  constructor(id, studentCode, idTest, idQuestion) {
    this._id = id;
    this._studentCode = studentCode;
    this._idTest = idTest;
    this._idQuestion = idQuestion;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    return (this._id = id);
  }

  get studentCode() {
    return this._studentCode;
  }

  set studentCode(studentCode) {
    return (this._studentCode = studentCode);
  }

  get idTest() {
    return this._idTest;
  }

  set idTest(idTest) {
    return (this._idTest = idTest);
  }

  get idQuestion() {
    return this._idQuestion;
  }

  set idQuestion(idQuestion) {
    return (this._idQuestion = idQuestion);
  }
}
