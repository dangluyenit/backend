const { EntitySchema } = require('typeorm');
const { table } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: table.BANK_QUESTION,
  tableName: table.BANK_QUESTION,
  target: table.BANK_QUESTION,
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
});
