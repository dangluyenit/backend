const { EntitySchema } = require('typeorm');
const { table } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: table.QUESTION,
  tableName: table.QUESTION,
  target: table.QUESTION,
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
    content: {
      type: 'nvarchar',
    },
  },
  relations: {
    idBankQuestion: {
      target: table.BANK_QUESTION,
      type: 'many-to-one',
      joinColumn: {
        name: 'idBankQuestion',
      },
      joinTable: true,
      cascade: true,
    },
  },
});
