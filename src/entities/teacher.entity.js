const { EntitySchema } = require('typeorm');
const { table } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: table.TEACHER,
  tableName: table.TEACHER,
  target: table.TEACHER,
  columns: {
    code: {
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
      type: 'date'
    },
    address: {
      type: 'nvarchar'
    },
    email: {
      type: 'varchar'
    },
    password: {
      type: 'varchar'
    },
    phone: {
      type: 'varchar'
    },
    image: {
      type: 'varchar'
    },
    otp: {
      type: 'varchar'
    }
  },
});