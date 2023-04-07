'use strict';

class JoinCourse {
  constructor(id, idCourse, studentCode) {
    this._id = id;
    this._idCourse = idCourse;
    this._studentCode = studentCode;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    return this._id = id;
  }

  get idCourse() {
    return this._idCourse;
  }

  set idCourse(idCourse) {
    return this._idCourse = idCourse;
  }

  get studentCode() {
    return this._studentCode;
  }

  set studentCode(studentCode) {
    return this._studentCode = studentCode;
  }
}