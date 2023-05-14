const { EntitySchema } = require('typeorm');
const { TABLE } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: TABLE.COURSE,
  tableName: TABLE.COURSE,
  target: TABLE.COURSE,
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
    name: {
      type: 'nvarchar',
    },
  },
  relations: {
    teacherCode: {
      target: TABLE.TEACHER,
      type: 'many-to-one',
      joinColumn: {
        name: 'teacherCode',
      },
      joinTable: true,
      cascade: true,
    },
    lessons: {
      target: TABLE.LESSON,
      type: 'one-to-many',
      inverseSide: 'course',
    },
  },
});
