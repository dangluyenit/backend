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
}

module.exports = new JoinCourseService();
