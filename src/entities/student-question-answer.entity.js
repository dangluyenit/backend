const { EntitySchema } = require('typeorm');
const { TABLE } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: TABLE.STUDENT_QUESTION_ANSWER,
  tableName: TABLE.STUDENT_QUESTION_ANSWER,
  target: TABLE.STUDENT_QUESTION_ANSWER,
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
    studentCode: {
      type: 'varchar',
    },
    idTestQuestion: {
      type: 'varchar',
    },
    idQuestionAnswer: {
      type: 'varchar',
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
    testQuestion: {
      target: TABLE.TEST_QUESTION,
      type: 'many-to-one',
      joinColumn: {
        name: 'idTestQuestion',
      },
      joinTable: true,
      cascade: true,
    },
    questionAnswer: {
      target: TABLE.QUESTION_ANSWER,
      type: 'many-to-one',
      joinColumn: {
        name: 'idQuestionAnswer',
      },
      joinTable: true,
      cascade: true,
    },
  },
});
