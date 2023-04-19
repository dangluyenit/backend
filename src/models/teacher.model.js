'use strict';

class Teacher {
  constructor(
    teacherCode,
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
    this.teacherCode = teacherCode;
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

module.exports = { Teacher };
