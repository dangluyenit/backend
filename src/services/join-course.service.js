const { dataSource } = require('../config/mssql.config');
const { TABLE } = require('../constants/common.constant');
const { JoinCourse } = require('../models/join-course.model');

class JoinCourseService {
  async create({ idCourse, studentCode }) {
    const repo = dataSource.getRepository(TABLE.JOIN_COURSE);
    const joinCourse = new JoinCourse();
    joinCourse.idCourse = idCourse;
    joinCourse.studentCode = studentCode;
    return await repo.save(joinCourse);
  }

  async findOne({ id }) {
    const repo = dataSource.getRepository(TABLE.JOIN_COURSE);
    try {
      return await repo.findOneBy({ id });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    const repo = dataSource.getRepository(TABLE.JOIN_COURSE);
    try {
      return await repo.find();
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new JoinCourseService();
