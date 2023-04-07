const { EntitySchema } = require('typeorm');
const { table } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: table.QUESTION_ANSWER,
  tableName: table.QUESTION_ANSWER,
  target: table.QUESTION_ANSWER,
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
    answer: {
      type: 'nvarchar'
    },
    isCorrect: {
      type: 'bit'
    }
  }, relations: {
    idQuestion: {
      target: table.QUESTION,
      type: 'many-to-one',
      joinColumn: {
        name: 'idQuestion'
      },
      joinTable: true,
      cascade: true
    }
  }
});