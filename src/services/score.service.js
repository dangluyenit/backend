'use strict';

const { dataSource } = require('../config/mssql.config');
const { TABLE } = require('../constants/common.constant');
const { Score } = require('../models/score.model');

class ScoreService {
  async create({ idTest, studentCode, score }) {
    const repo = dataSource.getRepository(TABLE.SCORE);
    const newScore = new Score();
    newScore.idTest = idTest;
    newScore.studentCode = studentCode;
    newScore.score = score;
    newScore.submissionTime = new Date().toString();
    return await repo.save(newScore);
  }

  async findOne({ id }) {
    const repo = dataSource.getRepository(TABLE.SCORE);
    try {
      return await repo.findOneBy({ id });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    const repo = dataSource.getRepository(TABLE.SCORE);
    try {
      return await repo.find();
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new ScoreService();
