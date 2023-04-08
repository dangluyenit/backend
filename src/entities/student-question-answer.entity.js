const { EntitySchema } = require('typeorm');
const { table } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: table.STUDENT_QUESTION_ANSWER,
  tableName: table.STUDENT_QUESTION_ANSWER,
  target: table.STUDENT_QUESTION_ANSWER,
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
  },
  relations: {
    studentCode: {
      target: table.STUDENT,
      type: 'many-to-one',
      joinColumn: {
        name: 'studentCode',
      },
      joinTable: true,
      cascade: true,
    },
    idTestQuestion: {
      target: table.TEST_QUESTION,
      type: 'many-to-one',
      joinColumn: {
        name: 'idTestQuestion',
      },
      joinTable: true,
      cascade: true,
    },
    idQuestionAnswer: {
      target: table.QUESTION_ANSWER,
      type: 'many-to-one',
      joinColumn: {
        name: 'idQuestionAnswer',
      },
      joinTable: true,
      cascade: true,
    },
  },
});
