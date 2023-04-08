const { EntitySchema } = require('typeorm');
const { table } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: table.TEST_QUESTION,
  tableName: table.TEST_QUESTION,
  target: table.TEST_QUESTION,
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
    idTest: {
      target: table.TEST,
      type: 'many-to-one',
      joinColumn: {
        name: 'idTest',
      },
      joinTable: true,
      cascade: true,
    },
    idQuestion: {
      target: table.QUESTION,
      type: 'many-to-one',
      joinColumn: {
        name: 'idQuestion',
      },
      joinTable: true,
      cascade: true,
    },
  },
});
