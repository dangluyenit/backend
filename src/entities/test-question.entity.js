const { EntitySchema } = require('typeorm');
const { TABLE } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: TABLE.TEST_QUESTION,
  tableName: TABLE.TEST_QUESTION,
  target: TABLE.TEST_QUESTION,
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
    studentCode: {
      type: 'varchar',
    },
    idTest: {
      type: 'uuid',
    },
    idQuestion: {
      type: 'uuid',
    },
  },
  relations: {
    student: {
      target: TABLE.STUDENT,
      type: 'many-to-one',
      joinColumn: {
        name: 'studentCode',
      },
      joinTable: true,
      cascade: true,
    },
    test: {
      target: TABLE.TEST,
      type: 'many-to-one',
      joinColumn: {
        name: 'idTest',
      },
      joinTable: true,
      cascade: true,
    },
    question: {
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
