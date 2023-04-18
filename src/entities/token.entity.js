const { EntitySchema } = require('typeorm');
const { TABLE } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: TABLE.TOKEN,
  tableName: TABLE.TOKEN,
  target: TABLE.TOKEN,
  columns: {
    refreshToken: {
      primary: true,
      type: 'varchar',
      unique: true,
    },
  },
  relations: {
    adminUsername: {
      target: TABLE.ADMIN,
      type: 'many-to-one',
      joinColumn: {
        name: 'adminUsername',
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
    teacherCode: {
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
