'use strict';

class Token {
  constructor(refreshToken, adminUsername, studentCode, teacherCode) {
    this._refreshToken = refreshToken;
    this._adminUsername = adminUsername;
    this._studentCode = studentCode;
    this._teacherCode = teacherCode;
  }

  get refreshToken() {
    return this._refreshToken;
  }

  set refreshToken(refreshToken) {
    return (this._refreshToken = refreshToken);
  }

  get adminUsername() {
    return this._adminUsername;
  }

  set adminUsername(adminUsername) {
    return (this._adminUsername = adminUsername);
  }

  get studentCode() {
    return this._studentCode;
  }

  set studentCode(studentCode) {
    return (this._studentCode = studentCode);
  }

  get teacherCode() {
    return this._teacherCode;
  }

  set teacherCode(teacherCode) {
    return (this._teacherCode = teacherCode);
  }
}
