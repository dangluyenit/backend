'use strict';

class Course {
  constructor(id, name, teacherCode) {
    if (id === null) {
      this._name = name;
      this._teacherCode = teacherCode;
    } else {
      this._id = id;
      this._name = name;
      this._teacherCode = teacherCode;
    }
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

  get teacherCode() {
    return this._teacherCode;
  }

  set teacherCode(teacherCode) {
    return (this._teacherCode = teacherCode);
  }
}

module.exports = { Course };
