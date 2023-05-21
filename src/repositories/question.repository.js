'use strict';

const { dataSource } = require('../config/mssql.config');
const { TABLE } = require('../constants/common.constant');

class TestQuestionRepository {
  async randomQuestion({ quantity, idBankQuestion }) {
    const repo = dataSource.getRepository(TABLE.QUESTION);
    return await repo
      .createQueryBuilder()
      .where({
        idBankQuestion,
      })
      .select()
      .orderBy('NEWID()')
      .take(quantity)
      .getMany();
  }
}

module.exports = new TestQuestionRepository();
