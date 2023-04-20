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
}

module.exports = new LessonService();
