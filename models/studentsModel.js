const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String },
  parentsname: { type: String },
  studentmobile: { type: Number },
  parentmobile: { type: Number },
  email: { type: String },
  birthdate: { type: Date },
  gender: { type: String },
  whatsapp: { type: Number },
  fees: { type: Number },
  education: { type: String },
  address: { type: String },
  city: { type: String },
  inquirydate: { type: Date },
  takenby: { type: String },
  course: { type: String },
  leadsource: { type: String },
  marksheet: { type: String, require: true },
  adhar: { type: String, require: true },
  sphoto: { type: String, require: true },
});

const studentModel = mongoose.model("student", studentSchema);

exports.studentModel = studentModel;
