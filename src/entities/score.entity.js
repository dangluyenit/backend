const { EntitySchema } = require('typeorm');
const { TABLE } = require('../constants/common.constant');

module.exports = new EntitySchema({
  name: TABLE.SCORE,
  tableName: TABLE.SCORE,
  target: TABLE.SCORE,
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
      target: TABLE.TEST,
      type: 'many-to-one',
      joinColumn: {
        name: 'idTest',
      },
      joinTable: true,
      cascade: true,
    },
    studentCode: {
      target: TABLE.STUDENT,
      type: 'many-to-one',
      joinColumn: {
        name: 'studentCode',
      },
      joinTable: true,
      cascade: true,
    },
  },
});
