'use strict';

class Test {
  constructor(id, name, createdTime, quantityQuestion, teacherCode) {
    this._id = id;
    this._name = name;
    this._createdTime = createdTime;
    this._quantityQuestion = quantityQuestion;
    this._teacherCode = teacherCode;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    return this._id = id;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    return this._name = name;
  }

  get createdTime() {
    return this._createdTime;
  }

  set createdTime(createdTime) {
    return this._createdTime = createdTime;
  }

  get quantityQuestion() {
    return this._quantityQuestion;
  }

  set quantityQuestion(quantityQuestion) {
    return this._quantityQuestion = quantityQuestion;
  }

  get teacherCode() {
    return this._teacherCode;
  }

  set teacherCode(teacherCode) {
    return this._teacherCode = teacherCode;
  }
}