'use strict';

// name of table in database
const TABLE = {
  ADMIN: 'Admin',
  LESSON: 'Lesson',
  COURSE: 'Course',
  JOIN_COURSE: 'JoinCourse',
  STUDENT: 'Student',
  TEST: 'Test',
  TEACHER: 'Teacher',
  TEST_QUESTION: 'TestQuestion',
  QUESTION: 'Question',
  BANK_QUESTION: 'BankQuestion',
  STUDENT_QUESTION_ANSWER: 'StudentQuestionAnswer',
  QUESTION_ANSWER: 'QuestionAnswer',
  SCORE: 'Score',
  TOKEN: 'Token',
};

const API_PREFIX = '/api/v1';

const STATUS_CODE = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

const REASON_STATUS_CODE = {
  OK: 'OK',
  CREATED: 'Created',
  BAD_REQUEST: 'Bad Request',
  UNAUTHORIZED: 'Unauthorized',
  FORBIDDEN: 'Forbidden',
  NOT_FOUND: 'Not Found',
  INTERNAL_SERVER_ERROR: 'Internal Server Error',
};

const HEADER = {
  AUTHORIZATION: 'authorization',
  REFRESH_TOKEN: 'x-rtoken-id',
};

const ROLE = {
  ADMIN: 'ADMIN',
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT',
};

module.exports = {
  TABLE,
  API_PREFIX,
  STATUS_CODE,
  REASON_STATUS_CODE,
  HEADER,
  ROLE,
};
