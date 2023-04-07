const { EntitySchema } = require('typeorm');
const { table } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: table.TEST,
  tableName: table.TEST,
  target: table.TEST,
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
    name: {
      type: 'nvarchar',
    },
    createdTime: {
      type: 'datetime',
    },
    quantityQuestion: {
      type: 'int',
    },
  },
  relations: {
    teacherCode: {
      target: table.TEACHER,
      type: 'many-to-one',
      joinColumn: {
        name: 'teacherCode'
      },
      joinTable: true,
      cascade: true
    }
  }
});