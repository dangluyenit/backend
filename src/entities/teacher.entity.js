const { EntitySchema } = require('typeorm');
const { TABLE } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: TABLE.TEACHER,
  tableName: TABLE.TEACHER,
  target: TABLE.TEACHER,
  columns: {
    teacherCode: {
      primary: true,
      type: 'varchar',
    },
    name: {
      type: 'nvarchar',
    },
    sex: {
      type: 'nvarchar',
    },
    dob: {
      type: 'date',
    },
    address: {
      type: 'nvarchar',
    },
    email: {
      type: 'varchar',
    },
    password: {
      type: 'varchar',
    },
    phone: {
      type: 'varchar',
    },
    image: {
      type: 'varchar',
    },
    otp: {
      type: 'varchar',
    },
  },
});
