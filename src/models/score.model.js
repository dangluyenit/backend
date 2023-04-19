'use strict';

class Score {
  constructor(id, submissionTime, score, idTest, studentCode) {
    this.id = id;
    this.submissionTime = submissionTime;
    this.score = score;
    this.idTest = idTest;
    this.studentCode = studentCode;
  }
}

module.exports = { Score };
