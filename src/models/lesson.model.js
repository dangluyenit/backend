'use strict';

class Lesson {
  constructor(id, name, content, image, video, idCourse) {
    this._id = id;
    this._name = name;
    this._content = content;
    this._image = image;
    this._video = video;
    this._idCourse = idCourse;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    return this._id = id;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    return this._name = name;
  }

  get content() {
    return this._content;
  }

  set content(content) {
    return this._content = content;
  }

  get image() {
    return this._image;
  }

  set image(image) {
    return this._image = image;
  }

  get video() {
    return this._video;
  }

  set video(video) {
    return this._video = video;
  }

  get idCourse() {
    return this._idCourse;
  }

  set idCourse(idCourse) {
    return this._idCourse = idCourse;
  }
}