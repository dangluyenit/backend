const { EntitySchema } = require('typeorm');
const { table } = require('./../constants/common.constant');

module.exports = new EntitySchema({
  name: table.LESSON,
  tableName: table.LESSON,
  target: table.LESSON,
  columns: {
    id: {
      primary: true,
      type: 'uuid',
      generated: 'uuid',
    },
    name: {
      type: 'nvarchar',
    },
    content: {
      type: 'nvarchar',
    },
    image: {
      type: 'varchar',
    },
    video: {
      type: 'varchar',
    },
  },
  relations: {
    idCourse: {
      target: table.COURSE,
      type: 'many-to-one',
      joinColumn: {
        name: 'idCourse'
      },
      joinTable: true,
      cascade: true
    }
  }
});