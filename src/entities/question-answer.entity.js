const { EntitySchema } = require('typeorm');
const { TABLE } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: TABLE.QUESTION_ANSWER,
  tableName: TABLE.QUESTION_ANSWER,
  target: TABLE.QUESTION_ANSWER,
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
    answer: {
      type: 'nvarchar',
    },
    isCorrect: {
      type: 'bit',
    },
  },
  relations: {
    idQuestion: {
      target: TABLE.QUESTION,
      type: 'many-to-one',
      joinColumn: {
        name: 'idQuestion',
      },
      joinTable: true,
      cascade: true,
    },
  },
});
