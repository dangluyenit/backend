'use strict';

class Token {
  constructor(refreshToken, adminUsername, studentCode, teacherCode) {
    this.refreshToken = refreshToken;
    this.adminUsername = adminUsername;
    this.studentCode = studentCode;
    this.teacherCode = teacherCode;
  }
}
