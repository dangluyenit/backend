const { EntitySchema } = require('typeorm');
const { table } = require('../constants/common.constant');

module.exports = new EntitySchema({
  name: table.SCORE,
  tableName: table.SCORE,
  target: table.SCORE,
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
    submissionTime: {
      type: 'datetime',
    },
    score: {
      type: 'float',
    },
  },
  relations: {
    idTest: {
      target: table.TEST,
      type: 'many-to-one',
      joinColumn: {
        name: 'idTest',
      },
      joinTable: true,
      cascade: true,
    },
    studentScore: {
      target: table.STUDENT,
      type: 'many-to-one',
      joinColumn: {
        name: 'studentScore',
      },
      joinTable: true,
      cascade: true,
    },
  },
});
