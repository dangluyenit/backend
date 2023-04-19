'use strict';

class Course {
  constructor(id, name, teacherCode) {
    if (id === null) {
      this.name = name;
      this.teacherCode = teacherCode;
    } else {
      this.id = id;
      this.name = name;
      this.teacherCode = teacherCode;
    }
  }
}

module.exports = { Course };
