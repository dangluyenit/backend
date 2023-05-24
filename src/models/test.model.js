'use strict';

class Test {
  constructor(
    id,
    name,
    createdTime,
    quantityQuestion,
    teacherCode,
    examDuration
  ) {
    this.id = id;
    this.name = name;
    this.createdTime = createdTime;
    this.quantityQuestion = quantityQuestion;
    this.teacherCode = teacherCode;
    this.examDuration = examDuration;
  }
}

module.exports = { Test };
