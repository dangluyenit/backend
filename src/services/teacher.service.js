'use strict';

const { TABLE } = require('../constants/common.constant');
const { dataSource } = require('../config/mssql.config');

class TeacherService {
  async findOne({ teacherCode }) {
    const repo = dataSource.getRepository(TABLE.TEACHER);
    try {
      return await repo.findOneBy({ teacherCode });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    const repo = dataSource.getRepository(TABLE.TEACHER);
    try {
      return await repo.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete({ teacherCode }) {
    const repo = dataSource.getRepository(TABLE.TEACHER);
    try {
      const teacher = await this.findOne({ teacherCode });
      if (teacher) return await repo.remove(teacher);
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update({ teacherCode, name, sex, dob, address, phone, image }) {
    const repo = dataSource.getRepository(TABLE.TEACHER);
    try {
      const teacher = await this.findOne({ teacherCode });

      if (image) {
        teacher.image = image.path;
      }

      if (teacher) {
        teacher.name = name;
        teacher.sex = sex;
        teacher.dob = dob;
        teacher.address = address;
        teacher.phone = phone;
        return await repo.save(teacher);
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new TeacherService();
