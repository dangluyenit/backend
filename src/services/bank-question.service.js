'use strict';

const { dataSource } = require('../config/mssql.config');
const { TABLE } = require('../constants/common.constant');
const { BankQuestion } = require('../models/bank-question.model');

class BankQuestionService {
  async create({ name }) {
    const repo = dataSource.getRepository(TABLE.BANK_QUESTION);
    try {
      const bankQuestion = new BankQuestion();
      bankQuestion.name = name;
      return await repo.save(bankQuestion);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne({ id }) {
    const repo = dataSource.getRepository(TABLE.BANK_QUESTION);
    try {
      return await repo.findOneBy({ id });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    const repo = dataSource.getRepository(TABLE.BANK_QUESTION);
    try {
      return await repo.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete({ id }) {
    const repo = dataSource.getRepository(TABLE.BANK_QUESTION);
    try {
      const bankQuestion = await this.findOne({ id });
      if (bankQuestion) {
        return await repo.remove(bankQuestion);
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update({ id, name }) {
    const repo = dataSource.getRepository(TABLE.BANK_QUESTION);
    try {
      const bankQuestion = await this.findOne({ id });
      if (bankQuestion) {
        bankQuestion.name = name;
        return await repo.save(bankQuestion);
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = new BankQuestionService();
