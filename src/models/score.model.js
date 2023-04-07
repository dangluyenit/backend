'use strict';

class Score {
  constructor(id, submissionTime, score, idTest, studentCode) {
    this._id = id;
    this._submissionTime = submissionTime;
    this._score = score;
    this._idTest = idTest;
    this._studentCode = studentCode;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    return this._id = id;
  }

  get submissionTime() {
    return this._submissionTime;
  }

  set submissionTime(submissionTime) {
    return this._submissionTime = submissionTime;
  }

  get score() {
    return this._score;
  }

  set score(score) {
    return this._score = score;
  }

  get idTest() {
    return this._idTest;
  }

  set idTest(idTest) {
    return this._idTest = idTest;
  }

  get studentCode() {
    return this._studentCode;
  }

  set studentCode(studentCode) {
    return this._studentCode = studentCode;
  }
}