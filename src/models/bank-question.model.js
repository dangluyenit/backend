'use strict';

class BankQuestion {
  constructor(id, name) {
    if (id == null) {
      this.name = name;
    } else {
      this.id = id;
      this.name = name;
    }
  }
}

module.exports = { BankQuestion };
