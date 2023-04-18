const { EntitySchema } = require('typeorm');
const { TABLE } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: TABLE.JOIN_COURSE,
  tableName: TABLE.JOIN_COURSE,
  target: TABLE.JOIN_COURSE,
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
  },
  relations: {
    idCourse: {
      target: TABLE.COURSE,
      type: 'many-to-one',
      joinColumn: {
        name: 'idCourse',
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
