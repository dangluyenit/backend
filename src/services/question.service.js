'use strict';

const { dataSource } = require('../config/mssql.config');
const { TABLE } = require('../constants/common.constant');
const { Question } = require('../models/question.model');

class QuestionService {
  async create({ content, idBankQuestion }) {
    const questionRepository = dataSource.getRepository(TABLE.QUESTION);
    try {
      const question = new Question();
      question.content = content;
      question.idBankQuestion = idBankQuestion;
      return await questionRepository.save(question);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne({ id }) {
    const repo = dataSource.getRepository(TABLE.QUESTION);
    try {
      return await repo.findOneBy({ id });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    const repo = dataSource.getRepository(TABLE.QUESTION);
    try {
      return await repo.find();
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete({ id }) {
    const repo = dataSource.getRepository(TABLE.QUESTION);
    try {
      const question = await this.findOne({ id });
      if (question) return await repo.remove(question);
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update({ id, content, idBankQuestion }) {
    const repo = dataSource.getRepository(TABLE.QUESTION);
    try {
      const question = await this.findOne({ id });
      if (question) {
        question.content = content;
        question.idBankQuestion = idBankQuestion;
        return await repo.save(question);
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findByIdBankQuestion({ id }) {
    const repo = dataSource.getRepository(TABLE.QUESTION);
    try {
      return await repo.find({
        where: {
          idBankQuestion: id,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAnswer({ id }) {
    const repo = dataSource.getRepository(TABLE.QUESTION);
    return await repo
      .createQueryBuilder('question')
      .innerJoinAndSelect('question.questionAnswers', 'questionAnswers')
      .where('question.id = :id', { id })
      .getOne();
  }
}

module.exports = new QuestionService();
