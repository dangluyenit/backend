'use strict';

class Student {
  constructor(code, name, sex, dob, address, email, password, phone, image, otp) {
    this._code = code;
    this._name = name;
    this._sex = sex;
    this._dob = dob;
    this._address = address;
    this._email = email;
    this._password = password;
    this._phone = phone;
    this._image = image;
    this._otp = otp;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    return this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    return this._name = name;
  }

  get sex() {
    return this._sex;
  }

  set sex(sex) {
    return this._sex = sex;
  }

  get dob() {
    return this._dob;
  }

  set dob(dob) {
    return this._dob = dob;
  }

  get address() {
    return this._address;
  }

  set address(address) {
    return this._address = address;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    return this._email = email;
  }

  get password() {
    return this._password;
  }

  set password(password) {
    return this._password = password;
  }

  get phone() {
    return this._phone;
  }

  set phone(phone) {
    return this._phone = phone;
  }

  get image() {
    return this._image;
  }

  set image(image) {
    return this._image = image;
  }

  get otp() {
    return this._otp;
  }

  set otp(otp) {
    return this._otp = otp;
  }
}

module.exports = { Student };