'use strict';

const { DataSource } = require('typeorm');

const dataSource = new DataSource({
  type: 'mssql',
  host: process.env.DB_HOST,
  port: 1433,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: [
    require('./../entities/admin.entity'),
    require('./../entities/bank-question.entity'),
    require('./../entities/course.entity'),
    require('./../entities/join-course.entity'),
    require('./../entities/lesson.entity'),
    require('./../entities/question-answer.entity'),
    require('./../entities/question.entity'),
    require('./../entities/score.entity'),
    require('./../entities/student-question-answer.entity'),
    require('./../entities/student.entity'),
    require('./../entities/teacher.entity'),
    require('./../entities/test-question.entity'),
    require('./../entities/test.entity'),
  ],
  extra: {
    options: {
      encrypt: false,
    },
  },
});

dataSource
  .initialize()
  .then(async () =>
    console.log('Connection has been established successfully.')
  )
  .catch((error) =>
    console.error('Unable to connect to the database: ', error)
  );

module.exports = { dataSource };
