const { EntitySchema } = require('typeorm');
const { table } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: table.JOIN_COURSE,
  tableName: table.JOIN_COURSE,
  target: table.JOIN_COURSE,
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
  },
  relations: {
    idCourse: {
      target: table.COURSE,
      type: 'many-to-one',
      joinColumn: {
        name: 'idCourse',
      },
      joinTable: true,
      cascade: true,
    },
    studentCode: {
      target: table.STUDENT,
      type: 'many-to-one',
      joinColumn: {
        name: 'studentCode',
      },
      joinTable: true,
      cascade: true,
    },
  },
});
