const { EntitySchema } = require('typeorm');
const { TABLE } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: TABLE.TEST,
  tableName: TABLE.TEST,
  target: TABLE.TEST,
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
    examDuration: {
      type: 'int',
    },
    teacherCode: {
      type: 'varchar',
    },
  },
  relations: {
    teacher: {
      target: TABLE.TEACHER,
      type: 'many-to-one',
      joinColumn: {
        name: 'teacherCode',
      },
      joinTable: true,
      cascade: true,
    },
  },
});
