'use strict';

class BankQuestion {
  constructor(id, name) {
    if (id == null) {
      this._name = name;
    } else {
      this._id = id;
      this._name = name;
    }
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
}

module.exports = { BankQuestion };