'use strict';

const { dataSource } = require('../config/mssql.config');
const { TABLE } = require('../constants/common.constant');
const { Course } = require('../models/course.model');

class CourseService {
  async create({ name, teacherCode }) {
    const repo = dataSource.getRepository(TABLE.COURSE);

    const course = new Course();
    course.name = name;
    course.teacherCode = teacherCode;

    return await repo.save(course);
  }
}

module.exports = new CourseService();
