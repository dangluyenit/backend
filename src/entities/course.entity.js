const { EntitySchema } = require('typeorm');
const { table } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: table.COURSE,
  tableName: table.COURSE,
  target: table.COURSE,
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
      target: table.TEACHER,
      type: 'many-to-one',
      joinColumn: {
        name: 'teacherCode',
      },
      joinTable: true,
      cascade: true,
    },
  },
});
