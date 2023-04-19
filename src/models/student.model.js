'use strict';

class Student {
  constructor(
    studentCode,
    name,
    sex,
    dob,
    address,
    email,
    password,
    phone,
    image,
    otp
  ) {
    this.studentCode = studentCode;
    this.name = name;
    this.sex = sex;
    this.dob = dob;
    this.address = address;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.image = image;
    this.otp = otp;
  }
}

module.exports = { Student };
