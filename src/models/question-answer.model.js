'use strict';

class QuestionAnswer {
  constructor(id, name, isCorrect, idQuestion) {
    this._id = id;
    this._name = name;
    this._isCorrect = isCorrect;
    this._idQuestion = idQuestion;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    return (this._id = id);
  }

  get name() {
    return this._name;
  }

  set name(name) {
    return (this._name = name);
  }

  get isCorrect() {
    return this._isCorrect;
  }

  set isCorrect(isCorrect) {
    return (this._isCorrect = isCorrect);
  }

  get idQuestion() {
    return this._idQuestion;
  }

  set idQuestion(idQuestion) {
    return (this._idQuestion = idQuestion);
  }
}
