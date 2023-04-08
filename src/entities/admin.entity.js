const { EntitySchema } = require('typeorm');
const { table } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: table.ADMIN,
  tableName: table.ADMIN,
  target: table.ADMIN,
  columns: {
    username: {
      primary: true,
      type: 'varchar',
      unique: true,
    },
    password: {
      type: 'varchar',
      nullable: false,
    },
  },
});
