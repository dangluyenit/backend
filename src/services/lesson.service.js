'use strict';

const { dataSource } = require('../config/mssql.config');
const { TABLE } = require('../constants/common.constant');
const { Lesson } = require('../models/lesson.model');

class LessonService {
  async create({ name, content, image, video, idCourse }) {
    const repo = dataSource.getRepository(TABLE.LESSON);
    const lesson = new Lesson();
    lesson.name = name;
    lesson.content = content;
    lesson.image = image;
    lesson.video = video;
    lesson.idCourse = idCourse;
    return await repo.save(lesson);
  }

  async findOne({ id }) {
    const repo = dataSource.getRepository(TABLE.LESSON);
    try {
      return await repo.findOneBy({ id });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    const repo = dataSource.getRepository(TABLE.LESSON);
    try {
      return await repo.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete({ id }) {
    const repo = dataSource.getRepository(TABLE.LESSON);
    try {
      const lesson = await this.findOne({ id });
      if (lesson) return await repo.remove(lesson);
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update({ id, name, content, image, video, idCourse }) {
    const repo = dataSource.getRepository(TABLE.LESSON);
    try {
      const lesson = await this.findOne({ id });
      if (lesson) {
        lesson.name = name;
        lesson.content = content;
        lesson.image = image;
        lesson.video = video;
        lesson.idCourse = idCourse;
        return await repo.save(lesson);
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new LessonService();
