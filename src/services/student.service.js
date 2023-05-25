'use strict';

const { TABLE } = require('../constants/common.constant');
const { dataSource } = require('../config/mssql.config');

class StudentService {
  async findOne({ studentCode }) {
    const repo = dataSource.getRepository(TABLE.STUDENT);
    try {
      return await repo.findOneBy({ studentCode });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    const repo = dataSource.getRepository(TABLE.STUDENT);
    try {
      return await repo.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete({ studentCode }) {
    const repo = dataSource.getRepository(TABLE.STUDENT);
    try {
      const student = await this.findOne({ studentCode });
      if (student) return await repo.remove(student);
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update({ studentCode, name, sex, dob, address, phone, image }) {
    const repo = dataSource.getRepository(TABLE.STUDENT);
    try {
      const student = await this.findOne({ studentCode });

      if (image) {
        student.image = image.path.slice(6);
      }

      if (student) {
        student.name = name;
        student.sex = sex;
        student.dob = dob;
        student.address = address;
        student.phone = phone;
        return await repo.save(student);
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new StudentService();
