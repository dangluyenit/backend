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
}

module.exports = new ScoreService();
