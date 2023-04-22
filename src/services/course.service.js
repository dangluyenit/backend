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

  async findOne({ id }) {
    const repo = dataSource.getRepository(TABLE.COURSE);
    try {
      return await repo.findOneBy({ id });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    const repo = dataSource.getRepository(TABLE.COURSE);
    try {
      return await repo.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete({ id }) {
    const repo = dataSource.getRepository(TABLE.COURSE);
    try {
      const course = await this.findOne({ id });
      if (course) return await repo.remove(course);
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update({ id, name, teacherCode }) {
    const repo = dataSource.getRepository(TABLE.COURSE);
    try {
      const course = await this.findOne({ id });
      if (course) {
        course.name = name;
        course.teacherCode = teacherCode;
        return await repo.save(course);
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new CourseService();
