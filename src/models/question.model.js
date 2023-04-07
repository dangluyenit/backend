'use strict';

class Question {
  constructor(id, content, idBankQuestion) {
    this._id = id;
    this._content = content;
    this._idBankQuestion = idBankQuestion;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    return this._id = id;
  }

  get content() {
    return this._content;
  }

  set content(content) {
    return this._content = content;
  }

  get idBankQuestion() {
    return this._idBankQuestion;
  }

  set idBankQuestion(idBankQuestion) {
    return this._idBankQuestion = idBankQuestion;
  }
}