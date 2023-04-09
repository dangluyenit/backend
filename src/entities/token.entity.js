const { EntitySchema } = require('typeorm');
const { table } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: table.TOKEN,
  tableName: table.TOKEN,
  target: table.TOKEN,
  columns: {
    refreshToken: {
      primary: true,
      type: 'varchar',
      unique: true,
    },
  },
  relations: {
    adminUsername: {
      target: table.ADMIN,
      type: 'many-to-one',
      joinColumn: {
        name: 'adminUsername',
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
