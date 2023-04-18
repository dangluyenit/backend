const { EntitySchema } = require('typeorm');
const { TABLE } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: TABLE.ADMIN,
  tableName: TABLE.ADMIN,
  target: TABLE.ADMIN,
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
