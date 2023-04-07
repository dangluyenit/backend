'use strict';

class Admin {
  constructor(username, password) {
    this._username = username;
    this._password = password;
  }

  get username() {
    return this._username;
  }

  set username(username) {
    return this._username = username;
  }

  get password() {
    return this._password;
  }

  set password(password) {
    return this._password = password;
  }
}

module.exports = { Admin };